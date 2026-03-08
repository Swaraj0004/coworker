import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await loginUser({ email, password });

      // Save auth data
      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.user.role);

      // ✅ ROLE-BASED REDIRECT
      if (res.user.role === "owner") {
        navigate("/owner/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      alert("Invalid login credentials");
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>

      <label>
        Email
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
      </label>

      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
      </label>

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
