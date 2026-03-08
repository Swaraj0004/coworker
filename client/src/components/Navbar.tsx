import { Link, useNavigate } from "react-router-dom";
import { getUserRole, isAuthenticated, logout } from "../utils/auth";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="topbar">
      <nav className="topbar-inner">
        <h2 className="brand">Space Now</h2>

        <div className="nav-links">
          <Link className="nav-link" to="/">
            Find Spaces
          </Link>
          <Link className="nav-link" to="/country/india">
            India Cities
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/how-it-works">
            How It Works
          </Link>
          <Link className="nav-link" to="/favorites">
            Favorites
          </Link>

          {isAuthenticated() && getUserRole() === "owner" && (
            <Link className="nav-link" to="/owner/dashboard">
              Owner Panel
            </Link>
          )}

          <ThemeToggle />

          {!isAuthenticated() ? (
            <>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </>
          ) : (
            <button className="btn btn-outline" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
