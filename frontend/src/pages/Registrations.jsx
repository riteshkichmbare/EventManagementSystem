import { useEffect, useState } from "react";
import { getRegistrations } from "../api/api";

function Registrations({ onBack }) {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    getRegistrations().then((response) => setRegistrations(response.data)).catch(() => setRegistrations([]));
  }, []);

  return (
    <div className="app-page"><div className="page-content">
      <button className="back-button" onClick={onBack}>← Back</button><h1>Registrations</h1>
      <div className="admin-table">
        {registrations.map((item) => <div className="admin-row" key={item._id}><div><strong>{item.name}</strong><span>{item.email} · {item.phone}</span></div><div><span>{item.event_id?.title || "Event"}</span><span>{item.seats} seat(s)</span></div></div>)}
      </div>
    </div></div>
  );
}

export default Registrations;
