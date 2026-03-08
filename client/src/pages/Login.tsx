import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await loginUser({ email, password });
      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.user.role);

      if (res.user.role === "owner") {
        navigate("/owner/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid login credentials");
    }
  };

  return (
    <section className="form-card surface-card">
      <h2 className="page-title">Login</h2>
      <p className="page-subtitle">Welcome back. Access your dashboard and saved spaces.</p>

      <form onSubmit={submit} className="form-grid">
        <label className="field">
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />
        </label>

        <label className="field">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </label>

        {error && <p className="error-text">{error}</p>}

        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
