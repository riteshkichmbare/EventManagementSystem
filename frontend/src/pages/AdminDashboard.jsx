import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getEvents, getRegistrations } from "../api/api";

function AdminDashboard({ user, onManageEvents, onRegistrations, onLogout }) {
  const [eventCount, setEventCount] = useState(0);
  const [registrationCount, setRegistrationCount] = useState(0);

  useEffect(() => {
    getEvents().then((response) => setEventCount(response.data.length)).catch(() => setEventCount(0));
    getRegistrations().then((response) => setRegistrationCount(response.data.length)).catch(() => setRegistrationCount(0));
  }, []);

  return (
    <div className="app-page">
      <Header title="Event Desk / Admin" onLogout={onLogout} />
      <div className="page-content">
        <div className="page-heading">
          <div><span className="category">ADMIN SPACE</span><h1>Welcome, {user.name}</h1><p>A small control desk for your event calendar.</p></div>
        </div>
        <div className="admin-grid">
          <button className="admin-card" onClick={onManageEvents}><span>◫</span><h3>Manage Events</h3><p>{eventCount} event(s) in the calendar.</p></button>
          <button className="admin-card" onClick={onRegistrations}><span>◎</span><h3>Registrations</h3><p>{registrationCount} booking(s) received.</p></button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
