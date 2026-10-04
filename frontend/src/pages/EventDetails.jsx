import EventCard from "../components/EventCard";

function EventDetails({ event, onBack, onRegister }) {
  return (
    <div className="app-page">
      <div className="page-content narrow">
        <button className="back-button" onClick={onBack}>← Back</button>
        <div className="details-card">
          <img src={event.cover_image} alt={event.title} />
          <div className="details-body">
            <span className="category">{event.category}</span>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
            <div className="details-info"><span>📅 Date</span><strong>{new Date(event.date).toLocaleDateString()}</strong></div>
            <div className="details-info"><span>🕒 Time</span><strong>{event.time}</strong></div>
            <div className="details-info"><span>📍 Venue</span><strong>{event.venue}</strong></div>
            <button className="app-button" onClick={() => onRegister(event)}>Register for Event</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
