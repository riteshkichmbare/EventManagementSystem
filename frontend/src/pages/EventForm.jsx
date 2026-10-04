import { useEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { createEvent, updateEvent } from "../api/api";

function EventForm({ event, onBack, onSaved }) {
  const [form, setForm] = useState({ title: "", description: "", date: "", time: "", venue: "", category: "", cover_image: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (event) {
      setForm({ ...event, date: event.date ? event.date.substring(0, 10) : "" });
    }
  }, [event]);

  function update(field, value) {
    setForm({ ...form, [field]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      if (event) await updateEvent(event._id, form);
      else await createEvent(form);
      onSaved();
    } catch (err) {
      setError(err.response?.data?.msg || "Could not save event.");
    }
  }

  return (
    <div className="app-page"><div className="page-content narrow"><form className="form-card" onSubmit={handleSubmit}>
      <button type="button" className="back-button" onClick={onBack}>← Back</button>
      <h1>{event ? "Edit Event" : "Add Event"}</h1>
      <Input label="Title" value={form.title} onChange={(e) => update("title", e.target.value)} />
      <label className="form-group"><span>Description</span><textarea value={form.description} onChange={(e) => update("description", e.target.value)} /></label>
      <Input label="Date" type="date" value={form.date} onChange={(e) => update("date", e.target.value)} />
      <Input label="Time" value={form.time} onChange={(e) => update("time", e.target.value)} />
      <Input label="Venue" value={form.venue} onChange={(e) => update("venue", e.target.value)} />
      <Input label="Category" value={form.category} onChange={(e) => update("category", e.target.value)} />
      <Input label="Cover Image URL" value={form.cover_image} onChange={(e) => update("cover_image", e.target.value)} />
      {error && <div className="error">{error}</div>}
      <Button type="submit">{event ? "Update Event" : "Create Event"}</Button>
    </form></div></div>
  );
}

export default EventForm;
