import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MapView from "../components/MapView";
import { fetchNearbySpaces } from "../services/api";
import type { Space } from "../types/space";

interface Coordinates {
  lat: number;
  lng: number;
}

function Home() {
  const [searchParams] = useSearchParams();
  const [coords, setCoords] = useState<Coordinates | null>(null);
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [query, setQuery] = useState("");
  const [budget, setBudget] = useState("all");
  const [radiusKm, setRadiusKm] = useState(0);

  const selectedCity = searchParams.get("city") || "";

  const loadNearbySpaces = async (location: Coordinates, radius = radiusKm) => {
    try {
      setLoading(true);
      const data = await fetchNearbySpaces(location.lat, location.lng, radius);
      setSpaces(data);
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
      void loadNearbySpaces({ lat: latParam, lng: lngParam });
      return;
    }

    locateUser(false);
  }, [searchParams]);

  useEffect(() => {
    if (coords) {
      void loadNearbySpaces(coords, radiusKm);
    }
  }, [radiusKm]);

  const filteredSpaces = useMemo(() => {
    return spaces.filter((space) => {
      const byName = space.name.toLowerCase().includes(query.toLowerCase());

      if (budget === "all") {
        return byName;
      }

      if (budget === "low") {
        return byName && space.pricePerMonth <= 5000;
      }

      if (budget === "mid") {
        return byName && space.pricePerMonth > 5000 && space.pricePerMonth <= 9000;
      }

      return byName && space.pricePerMonth > 9000;
    });
  }, [spaces, query, budget]);

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
      <p className="page-subtitle">Search by name, choose pricing, and pin your exact location.</p>
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
        Showing {filteredSpaces.length} places.
      </p>

      <div className="map-wrap">
        <MapView lat={coords.lat} lng={coords.lng} spaces={filteredSpaces} />
      </div>
    </section>
  );
}

export default Home;
