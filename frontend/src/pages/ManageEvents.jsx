import { useEffect, useState } from "react";
import { deleteEvent, getEvents } from "../api/api";

function ManageEvents({ onBack, onAdd, onEdit }) {
  const [events, setEvents] = useState([]);

  function loadEvents() {
    getEvents().then((response) => setEvents(response.data));
  }

  useEffect(loadEvents, []);

  async function removeEvent(id) {
    if (!window.confirm("Delete this event?")) return;
    await deleteEvent(id);
    loadEvents();
  }

  return (
    <div className="app-page">
      <div className="page-content">
        <div className="page-heading"><div><button className="back-button" onClick={onBack}>← Back</button><h1>Manage Events</h1></div><button className="app-button" onClick={onAdd}>Add Event</button></div>
        <div className="admin-table">
          {events.map((event) => <div className="admin-row" key={event._id}><div><strong>{event.title}</strong><span>{event.category} · {event.venue}</span></div><div><button className="small-button" onClick={() => onEdit(event)}>Edit</button><button className="delete-button" onClick={() => removeEvent(event._id)}>Delete</button></div></div>)}
        </div>
      </div>
    </div>
  );
}

export default ManageEvents;
