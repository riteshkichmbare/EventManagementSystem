import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { registerUser } from "../api/api";

function Signup({ onBack, onCreated }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function update(field, value) {
    setForm({ ...form, [field]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const response = await registerUser(form);
      setMessage(response.data.msg);
      setTimeout(onCreated, 800);
    } catch (err) {
      setError(err.response?.data?.msg || "Could not create account.");
    }
  }

  return (
    <div className="auth-page">
      <form className="login-box" onSubmit={handleSubmit}>
        <button type="button" className="back-button" onClick={onBack}>← Back</button>
        <h1>Create Account</h1>
        <Input label="Name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Enter your name" />
        <Input label="Email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="Enter email" />
        <Input label="Password" type="password" value={form.password} onChange={(e) => update("password", e.target.value)} placeholder="Create password" />
        {message && <div className="message">{message}</div>}
        {error && <div className="error">{error}</div>}
        <Button type="submit">Create Account</Button>
      </form>
    </div>
  );
}

export default Signup;
