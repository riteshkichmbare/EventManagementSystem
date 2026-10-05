import axios from "axios";

const api = axios.create({
  baseURL: "https://t1xvr923-7000.inc1.devtunnels.ms/api",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const role = localStorage.getItem("userRole");
  if (role) config.headers["x-user-role"] = role;
  return config;
});

export const registerUser = (data) => api.post("/auth/register", data);
export const loginUser = (data) => api.post("/auth/login/user", data);
export const loginAdmin = (data) => api.post("/auth/login/admin", data);
export const getEvents = () => api.get("/events");
export const getEvent = (id) => api.get(`/events/${id}`);
export const createEvent = (data) => api.post("/events", data);
export const updateEvent = (id, data) => api.patch(`/events/${id}`, data);
export const deleteEvent = (id) => api.delete(`/events/${id}`);
export const createRegistration = (data) => api.post("/registrations", data);
export const getRegistrations = () => api.get("/registrations");
export const getMyRegistrations = (userId) => api.get(`/registrations/my/${userId}`);

export default api;
