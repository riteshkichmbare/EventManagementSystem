import { useEffect, useState } from "react";
import Header from "../components/Header";
import EventCard from "../components/EventCard";
import { getEvents } from "../api/api";

function UserHome({ user, onOpenEvent, onBookings, onLogout }) {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getEvents().then((response) => setEvents(response.data)).catch(() => setError("Could not load events."));
  }, []);

  return (
    <div className="app-page">
      <Header title={`Hello, ${user.name}`} onLogout={onLogout} />
      <div className="page-content">
        <div className="page-heading">
          <div><h1>Upcoming Events</h1><p>Find an event and reserve your seat.</p></div>
          <button className="small-button" onClick={onBookings}>My Bookings</button>
        </div>
        {error && <div className="error">{error}</div>}
        <div className="event-grid">
          {events.map((event) => <EventCard key={event._id} event={event} onClick={() => onOpenEvent(event)} />)}
        </div>
      </div>
    </div>
  );
}

export default UserHome;
