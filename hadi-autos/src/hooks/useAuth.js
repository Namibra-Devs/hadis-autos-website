import { useState, useEffect } from 'react'

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for admin authentication
    const isAuthenticated = localStorage.getItem('admin_logged_in') === 'true'
    if (isAuthenticated) {
      setUser({ role: 'admin' })
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    // For demo purposes
    if (email === 'admin@hadisautos.com' && password === 'password123') {
      localStorage.setItem('admin_logged_in', 'true')
      setUser({ role: 'admin' })
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem('admin_logged_in')
    setUser(null)
  }

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  }
}