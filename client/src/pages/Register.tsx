import { useState } from "react";
import { registerUser } from "../services/auth";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user" as "user" | "owner"
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await registerUser(form);
    alert("Registered successfully");
  };

  return (
    <form onSubmit={submit}>
      <h2>Register</h2>

      <label>
        Name
        <input
          placeholder="Name"
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
      </label>

      <label>
        Email
        <input
          placeholder="Email"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
      </label>

      <label>
        Password
        <input
          type="password"
          placeholder="Password"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
      </label>

      {/* ✅ ACCESSIBLE SELECT */}
      <label htmlFor="role">Account Type</label>
      <select
        id="role"
        value={form.role}
        onChange={e =>
          setForm({ ...form, role: e.target.value as "user" | "owner" })
        }
      >
        <option value="user">User</option>
        <option value="owner">Coworking Owner</option>
      </select>

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
