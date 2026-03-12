import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MapView from "../components/MapView";
import { fetchNearbySpaces } from "../services/api";
import type { Space } from "../types/space";

interface Coordinates {
  lat: number;
  lng: number;
}

const toRad = (value: number) => (value * Math.PI) / 180;
const distanceInKm = (aLat: number, aLng: number, bLat: number, bLng: number) => {
  const earthRadiusKm = 6371;
  const dLat = toRad(bLat - aLat);
  const dLng = toRad(bLng - aLng);
  const aa =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(aa), Math.sqrt(1 - aa));
  return earthRadiusKm * c;
};

function Home() {
  const [searchParams] = useSearchParams();
  const [coords, setCoords] = useState<Coordinates | null>(null);
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [query, setQuery] = useState("");
  const [budget, setBudget] = useState("all");
  const [radiusKm, setRadiusKm] = useState(0);
  const [minRating, setMinRating] = useState(0);
  const [minSeats, setMinSeats] = useState(0);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const selectedCity = searchParams.get("city") || "";

  const loadNearbySpaces = async (location: Coordinates, radius = radiusKm, nextPage = page) => {
    try {
      setLoading(true);
      const priceRange =
        budget === "low"
          ? { priceMax: 5000 }
          : budget === "mid"
            ? { priceMin: 5001, priceMax: 9000 }
            : budget === "high"
              ? { priceMin: 9001 }
              : {};
      const data = await fetchNearbySpaces(location.lat, location.lng, {
        radiusKm: radius,
        page: nextPage,
        limit: 80,
        minRating: minRating > 0 ? minRating : undefined,
        minAvailableSeats: minSeats > 0 ? minSeats : undefined,
        ...priceRange
      });
      setSpaces(data.items);
      setTotal(data.total);
      setTotalPages(data.totalPages);
      setPage(data.page);
      setCoords(location);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const locateUser = (highAccuracy = false) => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        await loadNearbySpaces({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
      },
      () => {
        alert("Location permission required");
        setLoading(false);
      },
      {
        enableHighAccuracy: highAccuracy,
        timeout: 15000,
        maximumAge: 0
      }
    );
  };

  useEffect(() => {
    const latParam = Number(searchParams.get("lat"));
    const lngParam = Number(searchParams.get("lng"));

    if (!Number.isNaN(latParam) && !Number.isNaN(lngParam) && latParam !== 0 && lngParam !== 0) {
      void loadNearbySpaces({ lat: latParam, lng: lngParam }, radiusKm, 1);
      return;
    }

    locateUser(false);
  }, [searchParams]);

  useEffect(() => {
    if (coords) {
      void loadNearbySpaces(coords, radiusKm, 1);
    }
  }, [radiusKm, budget, minRating, minSeats]);

  useEffect(() => {
    if (coords) {
      void loadNearbySpaces(coords, radiusKm, page);
    }
  }, [page]);

  const filteredSpaces = useMemo(() => {
    return spaces.filter((space) => {
      const byName = space.name.toLowerCase().includes(query.toLowerCase());
      const byBudget =
        budget === "low"
          ? space.pricePerMonth <= 5000
          : budget === "mid"
            ? space.pricePerMonth > 5000 && space.pricePerMonth <= 9000
            : budget === "high"
              ? space.pricePerMonth > 9000
              : true;
      const byRating = minRating > 0 ? (space.rating || 0) >= minRating : true;
      const bySeats = minSeats > 0 ? space.availableSeats >= minSeats : true;
      const byDistance =
        radiusKm > 0 && coords
          ? distanceInKm(
              coords.lat,
              coords.lng,
              space.location.coordinates[1],
              space.location.coordinates[0]
            ) <= radiusKm
          : true;

      return byName && byBudget && byRating && bySeats && byDistance;
    });
  }, [spaces, query, budget, minRating, minSeats, radiusKm, coords]);

  if (loading) {
    return (
      <section className="section surface-card">
        <h2 className="page-title">Finding spaces...</h2>
        <p className="page-subtitle">Please wait while we load the map.</p>
      </section>
    );
  }

  if (!coords) {
    return (
      <section className="section surface-card">
        <h2 className="page-title">Location unavailable</h2>
        <p className="page-subtitle">Enable location access to discover spaces around you.</p>
      </section>
    );
  }

  return (
    <section className="home-shell">
      <h1 className="page-title">Discover Workspaces Near You</h1>
      <p className="page-subtitle">Search by workspace name, filter by pricing, and pin your exact location.</p>
      {selectedCity && <p className="city-pill">Showing results around {selectedCity}</p>}

      <div className="surface-card home-controls">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search workspace"
          className="control-input"
        />

        <select value={budget} onChange={(e) => setBudget(e.target.value)} className="control-input">
          <option value="all">All Prices</option>
          <option value="low">Budget (up to 5000)</option>
          <option value="mid">Standard (5001 - 9000)</option>
          <option value="high">Premium (above 9000)</option>
        </select>

        <select
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="control-input"
        >
          <option value={0}>All Ratings</option>
          <option value={4.5}>4.5+ rating</option>
          <option value={4}>4.0+ rating</option>
          <option value={3.5}>3.5+ rating</option>
          <option value={3}>3.0+ rating</option>
        </select>

        <select
          value={minSeats}
          onChange={(e) => setMinSeats(Number(e.target.value))}
          className="control-input"
        >
          <option value={0}>All Seats</option>
          <option value={5}>5+ seats</option>
          <option value={10}>10+ seats</option>
          <option value={20}>20+ seats</option>
          <option value={30}>30+ seats</option>
        </select>

        <select
          value={radiusKm}
          onChange={(e) => setRadiusKm(Number(e.target.value))}
          className="control-input"
        >
          <option value={0}>All Places</option>
          <option value={10}>10 km radius</option>
          <option value={30}>30 km radius</option>
          <option value={60}>60 km radius</option>
          <option value={100}>100 km radius</option>
        </select>

        <button className="btn btn-primary" onClick={() => locateUser(true)}>
          Pin Current Location
        </button>
      </div>

      <p className="page-subtitle" style={{ marginTop: "0.7rem" }}>
        Showing {filteredSpaces.length} filtered places (page {page}/{totalPages}, loaded {spaces.length}, total {total}).
      </p>

      <div className="row" style={{ marginBottom: "0.7rem", gap: "0.6rem" }}>
        <button className="btn btn-outline" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
          Previous
        </button>
        <button className="btn btn-outline" disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>
          Next
        </button>
      </div>

      <div className="map-wrap">
        <MapView lat={coords.lat} lng={coords.lng} spaces={filteredSpaces} />
      </div>
    </section>
  );
}

export default Home;
