import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { loginUser } from "../api/api";

function UserLogin({ onLogin, onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await loginUser({ email, password });
      localStorage.setItem("userRole", response.data.user.role);
      onLogin(response.data.user);
    } catch (err) {
      setError(err.response?.data?.msg || "Unable to login.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <form className="login-box" onSubmit={handleSubmit}>
        <button type="button" className="back-button" onClick={onBack}>← Back</button>
        <h1>User Login</h1>
        <p>Login to browse and register for events.</p>
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
        {error && <div className="error">{error}</div>}
        <Button type="submit">{loading ? "Logging in..." : "Login"}</Button>
      </form>
    </div>
  );
}

export default UserLogin;
