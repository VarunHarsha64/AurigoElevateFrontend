import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from './pages/dashboard.jsx'
import { createBrowserRouter, Router, RouterProvider} from 'react-router-dom'
import Login from './pages/login.jsx'
import Client from './pages/Client.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   

    <Dashboard />
   
  </StrictMode>,
)
