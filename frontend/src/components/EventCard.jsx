function EventCard({ event, onClick }) {
  return (
    <div className="event-card" onClick={onClick}>
      <img src={event.cover_image} alt={event.title} />
      <div className="event-card-body">
        <span className="category">{event.category}</span>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <small>📅 {new Date(event.date).toLocaleDateString()}</small>
        <small>🕒 {event.time}</small>
        <small>📍 {event.venue}</small>
      </div>
    </div>
  );
}

export default EventCard;
