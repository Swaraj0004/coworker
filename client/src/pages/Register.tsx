import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/auth";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user" as "user" | "owner"
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await registerUser(form);
      navigate("/login");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    }
  };

  return (
    <section className="form-card surface-card">
      <h2 className="page-title">Create Account</h2>
      <p className="page-subtitle">Join as a user or coworking owner in a few steps.</p>

      <form onSubmit={submit} className="form-grid">
        <label className="field">
          Name
          <input
            value={form.name}
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </label>

        <label className="field">
          Email
          <input
            type="email"
            value={form.email}
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </label>

        <label className="field">
          Password
          <input
            type="password"
            value={form.password}
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </label>

        <label className="field" htmlFor="role">
          Account Type
          <select
            id="role"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value as "user" | "owner" })}
          >
            <option value="user">User</option>
            <option value="owner">Coworking Owner</option>
          </select>
        </label>

        {error && <p className="error-text">{error}</p>}

        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </section>
  );
}

export default Register;
