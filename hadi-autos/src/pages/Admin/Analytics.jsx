import { Link } from 'react-router-dom'
import { ArrowLeft, TrendingUp, Users, Eye, DollarSign } from 'lucide-react'

const Analytics = () => {
  const stats = [
    { label: 'Page Views', value: '45.2K', change: '+12.3%', icon: Eye },
    { label: 'Unique Visitors', value: '23.1K', change: '+8.7%', icon: Users },
    { label: 'Inquiries', value: '156', change: '+23.5%', icon: TrendingUp },
    { label: 'Revenue', value: '$1.25M', change: '+15.2%', icon: DollarSign },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/admin" className="p-2 hover:bg-gray-100 rounded-lg">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          )
        })}
      </div>

      <div className="bg-white rounded-lg shadow p-8 text-center">
        <TrendingUp className="w-12 h-12 text-gray-300 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-gray-800 mb-2">Detailed Analytics Coming Soon</h2>
        <p className="text-gray-600">We're working on bringing you detailed analytics and reports.</p>
      </div>
    </div>
  )
}

export default Analytics