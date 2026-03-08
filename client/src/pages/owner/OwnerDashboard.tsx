import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchOwnerSpaces } from "../../services/api";
import type { Space } from "../../types/space";

function OwnerDashboard() {
  const [spaces, setSpaces] = useState<Space[]>([]);

  useEffect(() => {
    fetchOwnerSpaces().then(setSpaces).catch(() => setSpaces([]));
  }, []);

  const totalSpaces = spaces.length;
  const totalSeats = spaces.reduce((sum, space) => sum + space.availableSeats, 0);
  const avgPrice = totalSpaces
    ? Math.round(spaces.reduce((sum, space) => sum + space.pricePerMonth, 0) / totalSpaces)
    : 0;

  return (
    <section className="surface-card section" style={{ width: "100%", margin: 0 }}>
      <h1 className="page-title">Owner Dashboard</h1>
      <p className="page-subtitle">Track your listings and update your spaces quickly.</p>

      <div className="stat-grid">
        <article className="surface-card stat-card">
          <h3>Total Spaces</h3>
          <p>{totalSpaces}</p>
        </article>

        <article className="surface-card stat-card">
          <h3>Total Available Seats</h3>
          <p>{totalSeats}</p>
        </article>

        <article className="surface-card stat-card">
          <h3>Average Price/Month</h3>
          <p>{avgPrice}</p>
        </article>
      </div>

      <p style={{ marginTop: "1rem" }}>
        <Link to="/owner/my-spaces">Go to My Spaces</Link>
      </p>
    </section>
  );
}

export default OwnerDashboard;
