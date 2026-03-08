import { Outlet, Link } from "react-router-dom";

function OwnerLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          padding: "1rem",
          borderRight: "1px solid #ddd"
        }}
      >
        <h3>Owner Panel</h3>

        <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Link to="/owner/dashboard">Dashboard</Link>
          <Link to="/owner/add-space">Add Space</Link>
          <Link to="/owner/my-spaces">My Spaces</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "2rem" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default OwnerLayout;
