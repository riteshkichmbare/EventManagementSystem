function LoginScreen({ onUserLogin, onAdminLogin, onSignup }) {
  return (
    <div className="auth-page">
      <div className="login-box">
        <div className="login-icon">🎫</div>
        <h1>Welcome Back</h1>
        <p>Select how you want to continue</p>

        <button className="login-choice" onClick={onUserLogin}>
          <strong>👤 User Login</strong>
          <span>Browse events and book your seat</span>
        </button>

        <button className="login-choice admin-choice" onClick={onAdminLogin}>
          <strong>🔐 Admin Login</strong>
          <span>Manage events and registrations</span>
        </button>

        <button className="text-button" onClick={onSignup}>Create a new user account</button>
      </div>
    </div>
  );
}

export default LoginScreen;
