// src/components/shared/PrivateRoute.jsx
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const isLoggedIn = localStorage.getItem('admin_logged_in') === 'true'
  
  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />
  }
  
  // Use Outlet to render child routes
  return <Outlet />
}

export default PrivateRoute