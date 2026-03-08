import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { deleteOwnerSpace, fetchOwnerSpaces, updateOwnerSpace } from "../../services/api";
import type { Space } from "../../types/space";

function MySpaces() {
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    name: "",
    pricePerMonth: "",
    availableSeats: ""
  });

  const totalSeats = useMemo(
    () => spaces.reduce((sum, space) => sum + space.availableSeats, 0),
    [spaces]
  );

  const loadSpaces = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchOwnerSpaces();
      setSpaces(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch spaces");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadSpaces();
  }, []);

  const startEdit = (space: Space) => {
    setEditingId(space._id);
    setEditForm({
      name: space.name,
      pricePerMonth: String(space.pricePerMonth),
      availableSeats: String(space.availableSeats)
    });
  };

  const saveEdit = async (spaceId: string) => {
    try {
      const updated = await updateOwnerSpace(spaceId, {
        name: editForm.name,
        pricePerMonth: Number(editForm.pricePerMonth),
        availableSeats: Number(editForm.availableSeats)
      });

      setSpaces((prev) => prev.map((space) => (space._id === spaceId ? updated : space)));
      setEditingId(null);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to update space");
    }
  };

  const removeSpace = async (spaceId: string) => {
    const confirmed = confirm("Delete this space permanently?");
    if (!confirmed) {
      return;
    }

    try {
      await deleteOwnerSpace(spaceId);
      setSpaces((prev) => prev.filter((space) => space._id !== spaceId));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to delete space");
    }
  };

  if (loading) {
    return <p>Loading your spaces...</p>;
  }

  return (
    <section className="surface-card section" style={{ width: "100%", margin: 0 }}>
      <h1 className="page-title">My Coworking Spaces</h1>
      <p className="page-subtitle">
        {spaces.length} listing(s) • {totalSeats} available seat(s)
      </p>

      {error && <p className="error-text">{error}</p>}

      {spaces.length === 0 ? (
        <p>No spaces added yet.</p>
      ) : (
        <div className="space-grid">
          {spaces.map((space) => (
            <article key={space._id} className="surface-card space-card">
              {editingId === space._id ? (
                <div className="form-grid">
                  <label className="field">
                    Name
                    <input
                      value={editForm.name}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    />
                  </label>
                  <label className="field">
                    Price
                    <input
                      type="number"
                      value={editForm.pricePerMonth}
                      onChange={(e) => setEditForm({ ...editForm, pricePerMonth: e.target.value })}
                    />
                  </label>
                  <label className="field">
                    Seats
                    <input
                      type="number"
                      value={editForm.availableSeats}
                      onChange={(e) => setEditForm({ ...editForm, availableSeats: e.target.value })}
                    />
                  </label>
                  <div className="row">
                    <button className="btn btn-primary" onClick={() => void saveEdit(space._id)}>
                      Save
                    </button>
                    <button className="btn btn-outline" onClick={() => setEditingId(null)}>
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h3>{space.name}</h3>
                  <p>Price: {space.pricePerMonth}/month</p>
                  <p>Available Seats: {space.availableSeats}</p>
                  <p>
                    <Link to={`/space/${space._id}`}>View details</Link>
                  </p>
                  <div className="row">
                    <button className="btn btn-outline" onClick={() => startEdit(space)}>
                      Edit
                    </button>
                    <button className="btn btn-danger" onClick={() => void removeSpace(space._id)}>
                      Delete
                    </button>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default MySpaces;
