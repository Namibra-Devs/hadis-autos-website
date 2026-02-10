import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@components/layout/Layout'
import Home from '@pages/Home'
import Cars from '@pages/Cars'
import CarDetails from '@pages/CarDetails'
import Contact from '@pages/Contact'
import Login from '@pages/Admin/Login'
import Dashboard from '@pages/Admin/Dashboard'
import Vehicles from '@pages/Admin/Vehicles'
import Inquiries from '@pages/Admin/Inquiries'
import Content from '@pages/Admin/Content'
import NotFound from '@pages/NotFound'
import PrivateRoute from '@components/shared/PrivateRoute'
import './index.css' // Changed from ./styles/globals.css

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

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="inquiries" element={<Inquiries />} />
          <Route path="content" element={<Content />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App