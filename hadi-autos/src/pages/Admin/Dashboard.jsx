import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Car, Users, MessageSquare, DollarSign, TrendingUp, Calendar, Activity } from 'lucide-react'

const Dashboard = () => {
  const [stats] = useState({
    totalVehicles: 42,
    totalInquiries: 156,
    pendingInquiries: 12,
    revenue: 1250000,
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to Hadi's Motors Admin Panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Vehicles</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">{stats.totalVehicles}</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Car className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <Link to="/admin/vehicles" className="text-sm text-blue-600 hover:text-blue-700 mt-4 inline-block">
            Manage vehicles →
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Inquiries</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">{stats.totalInquiries}</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <Link to="/admin/inquiries" className="text-sm text-green-600 hover:text-green-700 mt-4 inline-block">
            View inquiries →
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Inquiries</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">{stats.pendingInquiries}</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <Users className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <Link to="/admin/inquiries" className="text-sm text-yellow-600 hover:text-yellow-700 mt-4 inline-block">
            Respond now →
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Revenue (Est.)</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">
                ${(stats.revenue / 1000).toFixed(0)}K
              </h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-sm text-green-600">+12.5% from last month</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { user: 'Kwame Mensah', action: 'inquired about Toyota Camry', time: '2 hours ago' },
              { user: 'Ama Asante', action: 'scheduled vehicle inspection', time: '4 hours ago' },
              { user: 'Kofi Boateng', action: 'completed payment for Honda CR-V', time: '1 day ago' },
              { user: 'Yaw Appiah', action: 'submitted shipping documents', time: '2 days ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{activity.user}</p>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <Link
              to="/admin/vehicles/new"
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Car className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Add New Vehicle</p>
                  <p className="text-sm text-gray-600">List a new car for sale</p>
                </div>
              </div>
            </Link>

            <Link
              to="/admin/inquiries"
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Respond to Inquiries</p>
                  <p className="text-sm text-gray-600">{stats.pendingInquiries} pending</p>
                </div>
              </div>
            </Link>

            <Link
              to="/admin/content"
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                  <Activity className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">Update Website Content</p>
                  <p className="text-sm text-gray-600">Edit homepage, testimonials</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard