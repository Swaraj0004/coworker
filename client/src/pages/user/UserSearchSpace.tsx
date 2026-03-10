import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import MapView from "../../components/MapView";
import { fetchNearbySpaces } from "../../services/api";
import type { Space } from "../../types/space";
import { getFavorites, toggleFavorite } from "../../utils/favorites";
import { addUserMembership, formatMembershipPlan, type MembershipPlan } from "../../utils/memberships";

interface Coordinates {
  lat: number;
  lng: number;
}

function UserSearchSpace() {
  const [coords, setCoords] = useState<Coordinates | null>(null);
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [query, setQuery] = useState("");
  const [budget, setBudget] = useState("all");
  const [radiusKm, setRadiusKm] = useState(0);
  const [favoriteIds, setFavoriteIds] = useState<string[]>(getFavorites().map((item) => item._id));
  const [selectedPlans, setSelectedPlans] = useState<Record<string, MembershipPlan>>({});
  const [message, setMessage] = useState("");

  const loadNearbySpaces = async (location: Coordinates, radius = radiusKm) => {
    try {
      setLoading(true);
      const data = await fetchNearbySpaces(location.lat, location.lng, radius);
      setSpaces(data);
      setCoords(location);
    } catch {
      setSpaces([]);
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
    locateUser(false);
  }, []);

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

  const handleFavorite = (space: Space) => {
    const updated = toggleFavorite(space);
    setFavoriteIds(updated.map((item) => item._id));
  };

  const handleAddMembership = (space: Space) => {
    const plan = selectedPlans[space._id] || "coworking-space";
    addUserMembership(space, plan);
    setMessage(`${space.name} added to Your Spaces with ${formatMembershipPlan(plan)} plan.`);
  };

  if (loading) {
    return (
      <section className="surface-card section" style={{ width: "100%", margin: 0 }}>
        <h2 className="page-title">Finding spaces...</h2>
      </section>
    );
  }

  if (!coords) {
    return (
      <section className="surface-card section" style={{ width: "100%", margin: 0 }}>
        <h2 className="page-title">Location unavailable</h2>
      </section>
    );
  }

  return (
    <section style={{ width: "100%" }}>
      <section className="home-shell" style={{ width: "100%", margin: 0 }}>
        <h1 className="page-title">Search Space</h1>
        <p className="page-subtitle">Search by workspace name, filter by pricing, and pin your exact location.</p>

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

        {message && <p style={{ color: "#15803d", marginTop: 0 }}>{message}</p>}

        <div className="map-wrap" style={{ marginBottom: "1rem" }}>
          <MapView lat={coords.lat} lng={coords.lng} spaces={filteredSpaces} />
        </div>

        <div className="space-grid">
          {filteredSpaces.map((space) => (
            <article key={space._id} className="surface-card space-card">
              <h3>{space.name}</h3>
              <p className="page-subtitle" style={{ margin: 0 }}>
                Rs {space.pricePerMonth}/month
              </p>

              <div className="row">
                <Link to={`/space/${space._id}`} className="btn btn-outline">
                  View Place
                </Link>

                <button className="btn btn-outline" onClick={() => handleFavorite(space)}>
                  {favoriteIds.includes(space._id) ? "Remove Favorite" : "Add Favorite"}
                </button>

                <select
                  className="control-input"
                  style={{ maxWidth: "220px" }}
                  value={selectedPlans[space._id] || "coworking-space"}
                  onChange={(e) =>
                    setSelectedPlans((prev) => ({
                      ...prev,
                      [space._id]: e.target.value as MembershipPlan
                    }))
                  }
                >
                  <option value="coworking-space">Coworking Space</option>
                  <option value="private-office">Private Office</option>
                  <option value="virtual-office">Virtual Office</option>
                  <option value="serviced-office">Serviced Office</option>
                </select>

                <button className="btn btn-primary" onClick={() => handleAddMembership(space)}>
                  Add To Your Spaces
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

export default UserSearchSpace;

