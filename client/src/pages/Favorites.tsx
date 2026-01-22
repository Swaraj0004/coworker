import { getFavorites } from "../utils/favorites";
import { Link } from "react-router-dom";

function Favorites() {
  const favorites = getFavorites();

  if (favorites.length === 0) {
    return <p>No favorites yet ❤️</p>;
  }

  return (
    <div>
      <h2>Your Favorite Coworking Spaces</h2>

      {favorites.map(space => (
        <div key={space._id} style={{ marginBottom: "1rem" }}>
          <h3>{space.name}</h3>
          <p>₹ {space.pricePerMonth} / month</p>
          <Link to={`/space/${space._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
