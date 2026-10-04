import { useCallback, useState } from "react";
import SplashScreen from "./pages/SplashScreen";
import LoginScreen from "./pages/LoginScreen";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import Signup from "./pages/Signup";
import UserHome from "./pages/UserHome";
import EventDetails from "./pages/EventDetails";
import RegisterEvent from "./pages/RegisterEvent";
import MyBookings from "./pages/MyBookings";
import AdminDashboard from "./pages/AdminDashboard";
import ManageEvents from "./pages/ManageEvents";
import EventForm from "./pages/EventForm";
import Registrations from "./pages/Registrations";
import "./styles/eventStyles.css";

function EventManagementApp() {
  const [screen, setScreen] = useState("splash");
  const [user, setUser] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("userRole");
    setSelectedEvent(null);
    setScreen("login");
  }, []);

  if (screen === "splash") return <SplashScreen onFinish={() => setScreen("login")} />;
  if (screen === "login") return <LoginScreen onUserLogin={() => setScreen("userLogin")} onAdminLogin={() => setScreen("adminLogin")} onSignup={() => setScreen("signup")} />;
  if (screen === "userLogin") return <UserLogin onLogin={(data) => { setUser(data); setScreen("userHome"); }} onBack={() => setScreen("login")} />;
  if (screen === "adminLogin") return <AdminLogin onLogin={(data) => { setUser(data); setScreen("adminDashboard"); }} onBack={() => setScreen("login")} />;
  if (screen === "signup") return <Signup onBack={() => setScreen("login")} onCreated={() => setScreen("userLogin")} />;

  if (screen === "userHome") return <UserHome user={user} onOpenEvent={(event) => { setSelectedEvent(event); setScreen("eventDetails"); }} onBookings={() => setScreen("myBookings")} onLogout={logout} />;
  if (screen === "eventDetails") return <EventDetails event={selectedEvent} onBack={() => setScreen("userHome")} onRegister={(event) => { setSelectedEvent(event); setScreen("registerEvent"); }} />;
  if (screen === "registerEvent") return <RegisterEvent event={selectedEvent} user={user} onBack={() => setScreen("eventDetails")} onDone={() => setScreen("myBookings")} />;
  if (screen === "myBookings") return <MyBookings user={user} onBack={() => setScreen("userHome")} />;

  if (screen === "adminDashboard") return <AdminDashboard user={user} onManageEvents={() => setScreen("manageEvents")} onRegistrations={() => setScreen("registrations")} onLogout={logout} />;
  if (screen === "manageEvents") return <ManageEvents onBack={() => setScreen("adminDashboard")} onAdd={() => setScreen("addEvent")} onEdit={(event) => { setSelectedEvent(event); setScreen("editEvent"); }} />;
  if (screen === "addEvent") return <EventForm onBack={() => setScreen("manageEvents")} onSaved={() => setScreen("manageEvents")} />;
  if (screen === "editEvent") return <EventForm event={selectedEvent} onBack={() => setScreen("manageEvents")} onSaved={() => setScreen("manageEvents")} />;
  if (screen === "registrations") return <Registrations onBack={() => setScreen("adminDashboard")} />;

  return null;
}

export default EventManagementApp;
