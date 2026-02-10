import { Navigate, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in via localStorage
    const checkAuth = () => {
      const loggedIn = localStorage.getItem('admin_logged_in') === 'true'
      setIsAuthenticated(loggedIn)
      setLoading(false)
    }

    checkAuth()
    
    // Listen for storage changes (in case login/logout happens in another tab)
    const handleStorageChange = () => {
      checkAuth()
    }

    window.addEventListener('storage', handleStorageChange)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" />
}

export default PrivateRoute