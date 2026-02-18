import { Routes, Route } from 'react-router-dom'
import AdminLayout from '@pages/Admin/AdminLayout'
import Dashboard from '@pages/Admin/Dashboard'
import Vehicles from '@pages/Admin/Vehicles'
import AddEditVehicle from '@pages/Admin/vehicles/AddEditVehicle'
import VehicleCategories from '@pages/Admin/vehicles/VehicleCategories'
import Inquiries from '@pages/Admin/Inquiries'
import InquiryDetails from '@pages/Admin/inquiries/InquiryDetails'
import Content from '@pages/Admin/Content'
import ContentHomepage from '@pages/Admin/content/ContentHomepage'
import Testimonials from '@pages/Admin/content/Testimonials'
import ContactDetails from '@pages/Admin/content/ContactDetails'
import Analytics from '@pages/Admin/Analytics'
import Settings from '@pages/Admin/Settings'
import Profile from '@pages/Admin/Profile'

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        
        {/* Vehicle Management */}
        <Route path="vehicles">
          <Route index element={<Vehicles />} />
          <Route path="new" element={<AddEditVehicle />} />
          <Route path=":id" element={<AddEditVehicle />} />
          <Route path=":id/edit" element={<AddEditVehicle />} />
          <Route path="categories" element={<VehicleCategories />} />
        </Route>

        {/* Inquiry Management */}
        <Route path="inquiries">
          <Route index element={<Inquiries />} />
          <Route path=":id" element={<InquiryDetails />} />
        </Route>

        {/* Content Management */}
        <Route path="content">
          <Route index element={<Content />} />
          <Route path="homepage" element={<ContentHomepage />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<ContactDetails />} />
        </Route>

        {/* Other Routes */}
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default AdminRoutes