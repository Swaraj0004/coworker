import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout, getUserRole } from "../utils/auth";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
      <h2>Coworker</h2>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Find Spaces</Link>
        <Link to="/about">About</Link>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/favorites">Favorites ❤️</Link>

        {isAuthenticated() && getUserRole() === "owner" && (
          <Link to="/owner/dashboard">Owner Panel</Link>
        )}

        {!isAuthenticated() ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
