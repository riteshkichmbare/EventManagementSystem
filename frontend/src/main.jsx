import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EventManagementApp from './EventManagementApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventManagementApp />
  </StrictMode>,
)
