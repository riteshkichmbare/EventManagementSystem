# Event Management System - added files

The existing names and functions were kept. The project already uses React + Vite on the frontend, so the new screens were added in that structure instead of creating a second frontend.

Flow: Splash -> Login Type -> User Login / Admin Login.

User: browse events, event details, register, my bookings.
Admin: dashboard, manage events, add/edit/delete, registrations.

Backend additions: auth routes, registration routes, auth user model, registration model.

Backend dependencies are isolated in `backend/package.json` because the original root package is a Vite project.
