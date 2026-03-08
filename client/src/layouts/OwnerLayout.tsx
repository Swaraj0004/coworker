import { Link, Outlet } from "react-router-dom";

function OwnerLayout() {
  return (
    <div className="owner-shell">
      <aside className="owner-sidebar">
        <div className="row" style={{ justifyContent: "space-between", marginBottom: "0.8rem" }}>
          <h3 style={{ margin: 0 }}>Owner Panel</h3>
          <Link className="btn btn-outline" to="/">
            Back
          </Link>
        </div>

        <nav className="owner-nav">
          <Link className="nav-link" to="/owner/dashboard">
            Dashboard
          </Link>
          <Link className="nav-link" to="/owner/add-space">
            Add Space
          </Link>
          <Link className="nav-link" to="/owner/my-spaces">
            My Spaces
          </Link>
        </nav>
      </aside>

      <main className="owner-main">
        <Outlet />
      </main>
    </div>
  );
}

export default OwnerLayout;
