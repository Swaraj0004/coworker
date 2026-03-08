import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSpace } from "../../services/api";

function AddSpace() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    pricePerMonth: "",
    availableSeats: "",
    latitude: "",
    longitude: "",
    amenities: {
      wifi: true,
      ac: false,
      parking: false
    }
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      await createSpace({
        name: form.name,
        pricePerMonth: Number(form.pricePerMonth),
        availableSeats: Number(form.availableSeats),
        latitude: Number(form.latitude),
        longitude: Number(form.longitude),
        amenities: form.amenities
      });

      navigate("/owner/my-spaces");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create space");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="surface-card section" style={{ width: "100%", margin: 0 }}>
      <h1 className="page-title">Add Coworking Space</h1>
      <p className="page-subtitle">Publish a new listing with coordinates and amenities.</p>

      <form onSubmit={submit} className="form-grid" style={{ maxWidth: 620 }}>
        <label className="field">
          Space Name
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Enter space name"
            required
          />
        </label>

        <label className="field">
          Price per Month
          <input
            type="number"
            value={form.pricePerMonth}
            onChange={(e) => setForm({ ...form, pricePerMonth: e.target.value })}
            placeholder="Price"
            required
          />
        </label>

        <label className="field">
          Available Seats
          <input
            type="number"
            value={form.availableSeats}
            onChange={(e) => setForm({ ...form, availableSeats: e.target.value })}
            placeholder="Seats available"
            required
          />
        </label>

        <label className="field">
          Latitude
          <input
            type="number"
            step="any"
            value={form.latitude}
            onChange={(e) => setForm({ ...form, latitude: e.target.value })}
            placeholder="Latitude"
            required
          />
        </label>

        <label className="field">
          Longitude
          <input
            type="number"
            step="any"
            value={form.longitude}
            onChange={(e) => setForm({ ...form, longitude: e.target.value })}
            placeholder="Longitude"
            required
          />
        </label>

        <div className="row">
          <label>
            <input
              type="checkbox"
              checked={form.amenities.wifi}
              onChange={(e) =>
                setForm({ ...form, amenities: { ...form.amenities, wifi: e.target.checked } })
              }
            />{" "}
            Wifi
          </label>

          <label>
            <input
              type="checkbox"
              checked={form.amenities.ac}
              onChange={(e) =>
                setForm({ ...form, amenities: { ...form.amenities, ac: e.target.checked } })
              }
            />{" "}
            AC
          </label>

          <label>
            <input
              type="checkbox"
              checked={form.amenities.parking}
              onChange={(e) =>
                setForm({ ...form, amenities: { ...form.amenities, parking: e.target.checked } })
              }
            />{" "}
            Parking
          </label>
        </div>

        {error && <p className="error-text">{error}</p>}

        <div className="row">
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Saving..." : "Add Space"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddSpace;
