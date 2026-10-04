import { useEffect, useState } from "react";
import { getMyRegistrations } from "../api/api";

function MyBookings({ user, onBack }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getMyRegistrations(user.id).then((response) => setBookings(response.data)).catch(() => setBookings([]));
  }, [user.id]);

  return (
    <div className="app-page">
      <div className="page-content narrow">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>My Bookings</h1>
        {bookings.length === 0 ? <div className="empty-card">No bookings found.</div> : bookings.map((booking) => (
          <div className="booking-card" key={booking._id}>
            <h3>{booking.event_id?.title || "Event"}</h3>
            <p>{booking.event_id?.venue}</p>
            <p>Seats: {booking.seats}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBookings;
