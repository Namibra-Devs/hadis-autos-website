import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@components/layout/Layout'
import Home from '@pages/Home'
import Cars from '@pages/Cars'
import CarDetails from '@pages/CarDetails'
import Contact from '@pages/Contact'
import Login from '@pages/Admin/Login'
import NotFound from '@pages/NotFound'
import AdminRoutes from './routes/AdminRoutes'
import './index.css' 

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cars" element={<Cars />} />
          <Route path="cars/:id" element={<CarDetails />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Admin Login */}
        <Route path="/admin/login" element={<Login />} />

        {/* All other admin routes handled by AdminRoutes */}
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App