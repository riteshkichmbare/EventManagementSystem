function Header({ title, onLogout }) {
  return (
    <header className="topbar">
      <div>
        <h2>{title}</h2>
        <p>Event Management System</p>
      </div>
      {onLogout && <button onClick={onLogout} className="logout-button">Logout</button>}
    </header>
  );
}

export default Header;
