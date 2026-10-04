import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { createRegistration } from "../api/api";

function RegisterEvent({ event, user, onBack, onDone }) {
  const [form, setForm] = useState({ name: user.name, email: user.email, phone: "", seats: 1 });
  const [error, setError] = useState("");

  function update(field, value) {
    setForm({ ...form, [field]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createRegistration({ ...form, user_id: user.id, event_id: event._id, seats: Number(form.seats) });
      onDone();
    } catch (err) {
      setError(err.response?.data?.msg || "Registration failed.");
    }
  }

  return (
    <div className="app-page">
      <div className="page-content narrow">
        <form className="form-card" onSubmit={handleSubmit}>
          <button type="button" className="back-button" onClick={onBack}>← Back</button>
          <h1>Register for {event.title}</h1>
          <Input label="Name" value={form.name} onChange={(e) => update("name", e.target.value)} />
          <Input label="Email" value={form.email} onChange={(e) => update("email", e.target.value)} />
          <Input label="Phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Enter phone number" />
          <Input label="Seats" type="number" value={form.seats} onChange={(e) => update("seats", e.target.value)} />
          {error && <div className="error">{error}</div>}
          <Button type="submit">Confirm Registration</Button>
        </form>
      </div>
    </div>
  );
}

export default RegisterEvent;
