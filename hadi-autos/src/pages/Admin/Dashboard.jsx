import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Car,
  MessageSquare,
  DollarSign,
  TrendingUp,
  Activity,
  Users,
  Star,
  Truck,
  CheckCircle,
  AlertCircle,
  Clock,
  Calendar,
  Eye,
  Download,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  FileText,
  Phone,
  Mail,
  MapPin,
  ShoppingCart,
  CreditCard,
  UserPlus,
  Settings,
  Bell,
  Shield,
  Award,
  BarChart3,
  PieChart,
  LineChart
} from 'lucide-react'

const Dashboard = () => {
  const navigate = useNavigate()
  const [timeframe, setTimeframe] = useState('week')
  const [stats, setStats] = useState({
    totalVehicles: 42,
    totalInquiries: 156,
    pendingInquiries: 12,
    revenue: 1250000,
    featuredVehicles: 8,
    soldVehicles: 15,
    canadaStock: 28,
    ghanaStock: 14,
    monthlyGrowth: 12.5,
    conversionRate: 24.8,
    avgResponseTime: 2.4,
    customerSatisfaction: 98
  })

  const recentActivities = [
    {
      id: 1,
      user: 'Kwame Mensah',
      action: 'inquired about Toyota Camry',
      time: '2 hours ago',
      type: 'inquiry',
      priority: 'high',
      avatar: 'KM'
    },
    {
      id: 2,
      user: 'Ama Asante',
      action: 'scheduled vehicle inspection',
      time: '4 hours ago',
      type: 'schedule',
      priority: 'medium',
      avatar: 'AA'
    },
    {
      id: 3,
      user: 'Kofi Boateng',
      action: 'completed payment for Honda CR-V',
      time: '1 day ago',
      type: 'payment',
      priority: 'low',
      avatar: 'KB'
    },
    {
      id: 4,
      user: 'Yaw Appiah',
      action: 'submitted shipping documents',
      time: '2 days ago',
      type: 'document',
      priority: 'medium',
      avatar: 'YA'
    },
    {
      id: 5,
      user: 'Esi Nyarko',
      action: 'requested vehicle quote',
      time: '3 days ago',
      type: 'inquiry',
      priority: 'high',
      avatar: 'EN'
    }
  ]

  const topVehicles = [
    {
      id: 1,
      name: 'Toyota Camry XLE 2022',
      views: 234,
      inquiries: 18,
      status: 'available',
      image: '1.avif'
    },
    {
      id: 2,
      name: 'Honda CR-V EX-L 2021',
      views: 189,
      inquiries: 12,
      status: 'available',
      image: '6.avif'
    },
    {
      id: 3,
      name: 'Mercedes-Benz C300 2020',
      views: 156,
      inquiries: 9,
      status: 'reserved',
      image: '11.webp'
    }
  ]

  const recentInquiries = [
    {
      id: 1,
      name: 'Kwame Mensah',
      vehicle: 'Toyota Camry XLE 2022',
      status: 'pending',
      time: '2 hours ago'
    },
    {
      id: 2,
      name: 'Ama Asante',
      vehicle: 'Honda CR-V EX-L 2021',
      status: 'in-progress',
      time: '4 hours ago'
    },
    {
      id: 3,
      name: 'Kofi Boateng',
      vehicle: 'Mercedes-Benz C300 2020',
      status: 'resolved',
      time: '1 day ago'
    }
  ]

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700'
      case 'in-progress': return 'bg-blue-100 text-blue-700'
      case 'resolved': return 'bg-green-100 text-green-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getActivityIcon = (type) => {
    switch(type) {
      case 'inquiry': return <MessageSquare className="w-4 h-4" />
      case 'schedule': return <Calendar className="w-4 h-4" />
      case 'payment': return <DollarSign className="w-4 h-4" />
      case 'document': return <FileText className="w-4 h-4" />
      default: return <Activity className="w-4 h-4" />
    }
  }

  const getActivityColor = (type) => {
    switch(type) {
      case 'inquiry': return 'bg-blue-100 text-blue-600'
      case 'schedule': return 'bg-purple-100 text-purple-600'
      case 'payment': return 'bg-green-100 text-green-600'
      case 'document': return 'bg-amber-100 text-amber-600'
      default: return 'bg-gray-100 text-gray-600'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, Admin! Here's what's happening with your business.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#3b2a1f] text-sm"
          >
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          
          <button className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50">
            <Download className="w-5 h-5 text-gray-600" />
          </button>
          
          <button className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50">
            <RefreshCw className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Revenue"
          value={`$${(stats.revenue / 1000).toFixed(1)}K`}
          change={+12.5}
          icon={DollarSign}
          color="emerald"
          subtitle="vs last month"
        />
        <KPICard
          title="Total Vehicles"
          value={stats.totalVehicles}
          change={+8.2}
          icon={Car}
          color="blue"
          subtitle="vs last month"
        />
        <KPICard
          title="Conversion Rate"
          value={`${stats.conversionRate}%`}
          change={-2.1}
          icon={TrendingUp}
          color="purple"
          subtitle="vs last month"
        />
        <KPICard
          title=" satisfaction"
          value={`${stats.customerSatisfaction}%`}
          change={+1.5}
          icon={Star}
          color="amber"
          subtitle="customer rating"
        />
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Stats */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <QuickStatCard
              title="Total Inquiries"
              value={stats.totalInquiries}
              icon={MessageSquare}
              color="blue"
              link="/admin/inquiries"
            />
            <QuickStatCard
              title="Pending"
              value={stats.pendingInquiries}
              icon={AlertCircle}
              color="yellow"
              link="/admin/inquiries?status=pending"
            />
            <QuickStatCard
              title="Avg Response"
              value={`${stats.avgResponseTime}h`}
              icon={Clock}
              color="purple"
              link="/admin/inquiries"
            />
          </div>

          {/* Vehicle Status Overview */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Vehicle Inventory Overview</h2>
              <Link to="/admin/vehicles" className="text-sm text-[#3b2a1f] hover:text-[#5c483a] font-medium">
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <ProgressBar
                  label="Available in Canada"
                  value={stats.canadaStock}
                  total={stats.totalVehicles}
                  color="blue"
                  icon={MapPin}
                />
                <ProgressBar
                  label="Available in Ghana"
                  value={stats.ghanaStock}
                  total={stats.totalVehicles}
                  color="green"
                  icon={MapPin}
                />
                <ProgressBar
                  label="Featured Vehicles"
                  value={stats.featuredVehicles}
                  total={stats.totalVehicles}
                  color="amber"
                  icon={Star}
                />
              </div>
              <div className="space-y-4">
                <ProgressBar
                  label="Sold Vehicles"
                  value={stats.soldVehicles}
                  total={stats.totalVehicles}
                  color="red"
                  icon={CheckCircle}
                />
                <ProgressBar
                  label="Reserved"
                  value={5}
                  total={stats.totalVehicles}
                  color="yellow"
                  icon={AlertCircle}
                />
                <ProgressBar
                  label="Available"
                  value={stats.canadaStock + stats.ghanaStock}
                  total={stats.totalVehicles}
                  color="green"
                  icon={Truck}
                />
              </div>
            </div>
          </div>

          {/* Top Performing Vehicles */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Top Performing Vehicles</h2>
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">Last 30 days</span>
              </div>
            </div>

            <div className="space-y-4">
              {topVehicles.map((vehicle) => (
                <div key={vehicle.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
                      <img src={`/images/${vehicle.image}`} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{vehicle.name}</h3>
                      <div className="flex items-center space-x-3 mt-1">
                        <span className="text-xs text-gray-500 flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {vehicle.views} views
                        </span>
                        <span className="text-xs text-gray-500 flex items-center">
                          <MessageSquare className="w-3 h-3 mr-1" />
                          {vehicle.inquiries} inquiries
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(vehicle.status)}`}>
                    {vehicle.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Recent Inquiries */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Recent Inquiries</h2>
              <Link to="/admin/inquiries" className="text-sm text-[#3b2a1f] hover:text-[#5c483a]">
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {recentInquiries.map((inquiry) => (
                <div key={inquiry.id} className="flex items-start justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-[#3b2a1f]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-[#3b2a1f]">
                        {inquiry.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{inquiry.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{inquiry.vehicle}</p>
                      <p className="text-xs text-gray-400 mt-1">{inquiry.time}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(inquiry.status)}`}>
                    {inquiry.status}
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-2 bg-[#3b2a1f]/5 text-[#3b2a1f] rounded-lg hover:bg-[#3b2a1f]/10 transition-colors text-sm font-medium">
              View All Inquiries
            </button>
          </div>

          {/* Activity Feed */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Activity Feed</h2>
              <Activity className="w-5 h-5 text-gray-400" />
            </div>

            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className={`w-8 h-8 rounded-full ${getActivityColor(activity.type)} flex items-center justify-center flex-shrink-0`}>
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{activity.action}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                  {activity.priority === 'high' && (
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-[#3b2a1f] to-[#5c483a] rounded-2xl shadow-lg p-6 text-white">
            <h3 className="text-lg font-bold mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-amber-200/80">Canada Stock</span>
                <span className="font-bold">{stats.canadaStock}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-amber-200/80">Ghana Stock</span>
                <span className="font-bold">{stats.ghanaStock}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-amber-200/80">Featured</span>
                <span className="font-bold">{stats.featuredVehicles}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-amber-200/80">Sold</span>
                <span className="font-bold">{stats.soldVehicles}</span>
              </div>
              <div className="pt-4 mt-2 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <span className="text-amber-200/80">Conversion Rate</span>
                  <span className="font-bold text-amber-400">{stats.conversionRate}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <QuickActionCard
          title="Add New Vehicle"
          description="List a new car in inventory"
          icon={Car}
          href="/admin/vehicles/new"
          color="blue"
        />
        <QuickActionCard
          title="Respond to Inquiries"
          description={`${stats.pendingInquiries} pending responses`}
          icon={MessageSquare}
          href="/admin/inquiries"
          color="green"
          badge={stats.pendingInquiries}
        />
        <QuickActionCard
          title="Update Homepage"
          description="Edit content and testimonials"
          icon={FileText}
          href="/admin/content/homepage"
          color="purple"
        />
        <QuickActionCard
          title="View Reports"
          description="Analytics and insights"
          icon={BarChart3}
          href="/admin/reports"
          color="amber"
        />
      </div>
    </div>
  )
}

const KPICard = ({ title, value, change, icon: Icon, color, subtitle }) => {
  const isPositive = change >= 0
  const colors = {
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-600' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-600' }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
    >
      <div className="flex items-center justify-between mb-3">
        <div className={`w-12 h-12 rounded-xl ${colors[color].bg} flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${colors[color].text}`} />
        </div>
        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full ${
          isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
        }`}>
          {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          <span className="text-xs font-medium">{Math.abs(change)}%</span>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-xs text-gray-400 mt-2">{subtitle}</p>
    </motion.div>
  )
}

const QuickStatCard = ({ title, value, icon: Icon, color, link }) => {
  const colors = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600' },
    yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600' }
  }

  return (
    <Link to={link} className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 hover:shadow-md transition-all group">
      <div className="flex items-center justify-between mb-2">
        <div className={`w-10 h-10 rounded-lg ${colors[color].bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <Icon className={`w-5 h-5 ${colors[color].text}`} />
        </div>
        <MoreVertical className="w-4 h-4 text-gray-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-900">{value}</h3>
      <p className="text-xs text-gray-600 mt-1">{title}</p>
    </Link>
  )
}

const ProgressBar = ({ label, value, total, color, icon: Icon }) => {
  const percentage = (value / total) * 100
  const colors = {
    blue: { text: 'text-blue-600', progress: 'bg-blue-500' },
    green: { text: 'text-green-600', progress: 'bg-green-500' },
    amber: { text: 'text-amber-600', progress: 'bg-amber-500' },
    red: { text: 'text-red-600', progress: 'bg-red-500' },
    yellow: { text: 'text-yellow-600', progress: 'bg-yellow-500' }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center space-x-2">
          <Icon className={`w-4 h-4 ${colors[color].text}`} />
          <span className="text-sm text-gray-600">{label}</span>
        </div>
        <span className={`text-sm font-medium ${colors[color].text}`}>{value}</span>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`h-full ${colors[color].progress} rounded-full`}
        />
      </div>
    </div>
  )
}

const QuickActionCard = ({ title, description, icon: Icon, href, color, badge }) => {
  const colors = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', hover: 'hover:border-blue-200' },
    green: { bg: 'bg-green-50', text: 'text-green-600', hover: 'hover:border-green-200' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', hover: 'hover:border-purple-200' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-600', hover: 'hover:border-amber-200' }
  }

  return (
    <Link
      to={href}
      className={`bg-white rounded-xl shadow-sm p-4 border border-gray-100 ${colors[color].hover} hover:shadow-md transition-all duration-300 group relative`}
    >
      {badge && (
        <span className="absolute -top-2 -right-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
          {badge}
        </span>
      )}
      <div className="flex items-center space-x-4">
        <div className={`w-12 h-12 rounded-xl ${colors[color].bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <Icon className={`w-6 h-6 ${colors[color].text}`} />
        </div>
        <div>
          <h3 className="font-medium text-gray-900 group-hover:text-[#3b2a1f] transition-colors">
            {title}
          </h3>
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default Dashboard