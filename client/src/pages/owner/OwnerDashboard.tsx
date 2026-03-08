function OwnerDashboard() {
  return (
    <div>
      <h1>Owner Dashboard</h1>

      <p>Welcome! Manage your coworking spaces here.</p>

      <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
        <div>
          <h3>Total Spaces</h3>
          <p>3</p>
        </div>

        <div>
          <h3>Total Bookings</h3>
          <p>—</p>
        </div>

        <div>
          <h3>Active Listings</h3>
          <p>—</p>
        </div>
      </div>
    </div>
  );
}

export default OwnerDashboard;
