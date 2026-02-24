import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  TrendingUp,
  Users,
  Eye,
  DollarSign,
  Calendar,
  Filter,
  Download,
  RefreshCw,
  Clock,
  Globe,
  Smartphone,
  Laptop,
  Tablet,
  Chrome,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Search,
  MapPin,
  Activity,
  Award,
  Target,
  Zap,
  AlertCircle,
  ChevronDown,
  ChevronRight,
  BarChart3,
  PieChart,
  LineChart,
  MousePointer,
  ShoppingCart,
  MessageSquare,
  Phone,
  Mail as MailIcon,
  ThumbsUp,
  ThumbsDown,
  Minus,
  Plus,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  Info,
  HelpCircle,
  
  Code,
} from 'lucide-react'

// Custom hooks for real-time data simulation
const useRealtimeData = (initialData, interval = 5000) => {
  const [data, setData] = useState(initialData)
  const [isLive, setIsLive] = useState(true)
  const [lastUpdated, setLastUpdated] = useState(new Date())

  useEffect(() => {
    if (!isLive) return

    const intervalId = setInterval(() => {
      setData(prev => ({
        ...prev,
        pageViews: prev.pageViews + Math.floor(Math.random() * 50),
        uniqueVisitors: prev.uniqueVisitors + Math.floor(Math.random() * 20),
        activeUsers: Math.floor(150 + Math.random() * 100),
        inquiries: prev.inquiries + (Math.random() > 0.7 ? 1 : 0),
        conversions: prev.conversions + (Math.random() > 0.8 ? 1 : 0),
        revenue: prev.revenue + (Math.random() * 1000)
      }))
      setLastUpdated(new Date())
    }, interval)

    return () => clearInterval(intervalId)
  }, [isLive, interval])

  return { data, setData, isLive, setIsLive, lastUpdated }
}

const Analytics = () => {
  const [timeframe, setTimeframe] = useState('today')
  const [selectedMetric, setSelectedMetric] = useState('overview')
  const [showFilters, setShowFilters] = useState(false)
  const [dateRange, setDateRange] = useState({
    start: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split('T')[0],
    end: new Date().toISOString().split('T')[0]
  })
  const [selectedDevice, setSelectedDevice] = useState('all')
  const [selectedSource, setSelectedSource] = useState('all')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [activeTab, setActiveTab] = useState('realtime')
  const [autoRefresh, setAutoRefresh] = useState(true)
  const [refreshInterval, setRefreshInterval] = useState(30)

  // Real-time data
  const realtime = useRealtimeData({
    pageViews: 45234,
    uniqueVisitors: 23156,
    activeUsers: 187,
    inquiries: 156,
    conversions: 42,
    revenue: 1250000,
    bounceRate: 32.5,
    avgSessionDuration: 184, // seconds
    pagesPerSession: 3.2
  })

  // Historical data
  const historicalData = {
    hourly: Array.from({ length: 24 }, (_, i) => ({
      hour: i,
      visitors: Math.floor(500 + Math.random() * 1000),
      pageViews: Math.floor(1000 + Math.random() * 2000),
      conversions: Math.floor(10 + Math.random() * 30)
    })),
    daily: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString(),
      visitors: Math.floor(800 + Math.random() * 1500),
      revenue: Math.floor(30000 + Math.random() * 50000)
    })),
    weekly: [
      { week: 'Week 1', visitors: 5234, revenue: 285000 },
      { week: 'Week 2', visitors: 5890, revenue: 312000 },
      { week: 'Week 3', visitors: 6345, revenue: 348000 },
      { week: 'Week 4', visitors: 6789, revenue: 375000 }
    ],
    monthly: [
      { month: 'Jan', visitors: 18450, revenue: 825000 },
      { month: 'Feb', visitors: 19230, revenue: 892000 },
      { month: 'Mar', visitors: 21450, revenue: 968000 },
      { month: 'Apr', visitors: 23560, revenue: 1050000 },
      { month: 'May', visitors: 25670, revenue: 1150000 },
      { month: 'Jun', visitors: 27890, revenue: 1250000 }
    ]
  }

  // Device breakdown
  const deviceData = [
    { device: 'Desktop', visitors: 12450, percentage: 45, icon: Laptop, color: 'blue' },
    { device: 'Mobile', visitors: 11230, percentage: 41, icon: Smartphone, color: 'green' },
    { device: 'Tablet', visitors: 3870, percentage: 14, icon: Tablet, color: 'purple' }
  ]

  // Traffic sources
  const trafficSources = [
    { source: 'Organic Search', visitors: 8920, percentage: 32, icon: Search, color: 'blue' },
    { source: 'Direct', visitors: 7450, percentage: 27, icon: Globe, color: 'green' },
    { source: 'Social Media', visitors: 5340, percentage: 19, icon: Users, color: 'purple' },
    { source: 'Email', visitors: 3890, percentage: 14, icon: Mail, color: 'amber' },
    { source: 'Referral', visitors: 2230, percentage: 8, icon: Link, color: 'red' }
  ]

  // Geographic data
  const geographicData = [
    { region: 'Greater Accra', visitors: 8450, percentage: 31, growth: 18 },
    { region: 'Ashanti', visitors: 6230, percentage: 23, growth: 22 },
    { region: 'Western', visitors: 4120, percentage: 15, growth: 15 },
    { region: 'Eastern', visitors: 3560, percentage: 13, growth: 8 },
    { region: 'Central', visitors: 2890, percentage: 10, growth: 12 },
    { region: 'Other', visitors: 2180, percentage: 8, growth: 5 }
  ]

  // Browser data (using available icons)
  const browserData = [
    { browser: 'Chrome', visitors: 15890, percentage: 58, icon: Chrome },
    { browser: 'Safari', visitors: 6780, percentage: 25, icon: Globe },
    { browser: 'Firefox', visitors: 2340, percentage: 8, icon: Globe },
    { browser: 'Edge', visitors: 1560, percentage: 6, icon: Globe },
    { browser: 'Other', visitors: 820, percentage: 3, icon: Code }
  ]

  // Social media performance
  const socialData = [
    { platform: 'Facebook', engagement: 3450, clicks: 1230, conversions: 89, icon: Facebook, color: 'blue' },
    { platform: 'Instagram', engagement: 2890, clicks: 980, conversions: 67, icon: Instagram, color: 'purple' },
    { platform: 'Twitter', engagement: 1230, clicks: 450, conversions: 34, icon: Twitter, color: 'sky' },
    { platform: 'LinkedIn', engagement: 890, clicks: 320, conversions: 28, icon: Linkedin, color: 'blue' }
  ]

  // Campaign performance
  const campaigns = [
    { name: 'Summer Sale', impressions: 45200, clicks: 2340, conversions: 156, roi: 320 },
    { name: 'New Arrivals', impressions: 38900, clicks: 1980, conversions: 123, roi: 280 },
    { name: 'Holiday Special', impressions: 52300, clicks: 2670, conversions: 189, roi: 350 },
    { name: 'Email Newsletter', impressions: 12300, clicks: 890, conversions: 67, roi: 180 }
  ]

  // Conversion goals
  const conversionGoals = [
    { name: 'Vehicle Inquiries', completions: 156, rate: 3.2, trend: '+12%' },
    { name: 'Test Drive Bookings', completions: 89, rate: 1.8, trend: '+8%' },
    { name: 'Newsletter Signups', completions: 234, rate: 4.8, trend: '+23%' },
    { name: 'Contact Form', completions: 98, rate: 2.0, trend: '+5%' }
  ]

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}m ${secs}s`
  }

  const handleExport = (format) => {
    alert(`Exporting analytics as ${format}...`)
  }

  const handleRefresh = () => {
    realtime.setData(prev => ({
      ...prev,
      pageViews: prev.pageViews + Math.floor(Math.random() * 100),
      uniqueVisitors: prev.uniqueVisitors + Math.floor(Math.random() * 50),
      activeUsers: Math.floor(150 + Math.random() * 150)
    }))
  }

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <Link to="/admin" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Analytics</h1>
            <p className="text-gray-600 mt-1">Real-time insights and performance metrics</p>
          </div>
          <div className="flex items-center space-x-2 ml-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500">Live</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Time range selector */}
          <div className="relative">
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-red-600 text-sm appearance-none pr-10 cursor-pointer"
            >
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="last7days">Last 7 Days</option>
              <option value="last30days">Last 30 Days</option>
              <option value="thisMonth">This Month</option>
              <option value="lastMonth">Last Month</option>
              <option value="custom">Custom Range</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>

          {/* Filter button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`p-2.5 border rounded-xl transition-all cursor-pointer ${
              showFilters 
                ? 'bg-red-600 border-red-600 text-white cursor-pointer' 
                : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Filter className="w-5 h-5" />
          </button>

          {/* Export button */}
          <div className="relative group">
            <button className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer">
              <Download className="w-5 h-5 text-gray-600" />
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <button onClick={() => handleExport('PDF')} className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50 cursor-pointer">PDF</button>
              <button onClick={() => handleExport('Excel')} className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50 cursor-pointer">Excel</button>
              <button onClick={() => handleExport('CSV')} className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50 cursor-pointer">CSV</button>
            </div>
          </div>

          {/* Refresh button */}
          <button
            onClick={handleRefresh}
            className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer"
          >
            <RefreshCw className="w-5 h-5 text-gray-600" />
          </button>

          {/* Fullscreen toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer"
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5 text-gray-600" />
            ) : (
              <Maximize2 className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-sm shadow-lg p-6 border border-gray-100 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-900">Advanced Filters</h3>
              <button onClick={() => setShowFilters(false)} className="text-sm text-red-600 hover:text-red-800 cursor-pointer">
                Apply Filters
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Date Range</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="date"
                    value={dateRange.start}
                    onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                  />
                  <span className="text-gray-400">to</span>
                  <input
                    type="date"
                    value={dateRange.end}
                    onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 mb-1 block">Device</label>
                <select
                  value={selectedDevice}
                  onChange={(e) => setSelectedDevice(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                >
                  <option value="all">All Devices</option>
                  <option value="desktop">Desktop</option>
                  <option value="mobile">Mobile</option>
                  <option value="tablet">Tablet</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-500 mb-1 block">Traffic Source</label>
                <select
                  value={selectedSource}
                  onChange={(e) => setSelectedSource(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                >
                  <option value="all">All Sources</option>
                  <option value="organic">Organic Search</option>
                  <option value="direct">Direct</option>
                  <option value="social">Social Media</option>
                  <option value="email">Email</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-500 mb-1 block">Region</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                >
                  <option value="all">All Regions</option>
                  <option value="greater-accra">Greater Accra</option>
                  <option value="ashanti">Ashanti</option>
                  <option value="western">Western</option>
                  <option value="eastern">Eastern</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Real-time Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-red-600 via-red-900 to-red-900 rounded-sm p-4 text-white"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span className="text-sm">Active Users:</span>
              <span className="font-bold text-lg">{realtime.data.activeUsers}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span className="text-sm">Page Views:</span>
              <span className="font-bold text-lg">{realtime.data.pageViews.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span className="text-sm">Conversions:</span>
              <span className="font-bold text-lg">{realtime.data.conversions}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="text-xs opacity-80">
                Last updated: {realtime.lastUpdated.toLocaleTimeString()}
              </span>
            </div>
            <button
              onClick={() => realtime.setIsLive(!realtime.isLive)}
              className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs cursor-pointer ${
                realtime.isLive 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {realtime.isLive ? (
                <>
                  <Play className="w-3 h-3" />
                  <span>Live</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3" />
                  <span>Paused</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Tabs Navigation */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        {[
          { id: 'realtime', label: 'Real-time', icon: Activity },
          { id: 'audience', label: 'Audience', icon: Users },
          { id: 'acquisition', label: 'Acquisition', icon: TrendingUp },
          { id: 'behavior', label: 'Behavior', icon: MousePointer },
          { id: 'conversions', label: 'Conversions', icon: Target },
          { id: 'social', label: 'Social', icon: Users },
          { id: 'campaigns', label: 'Campaigns', icon: Zap }
        ].map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap cursor-pointer
                ${activeTab === tab.id 
                  ? 'bg-red-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-sm shadow-md p-6 border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">+12.3%</span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">{realtime.data.pageViews.toLocaleString()}</h3>
          <p className="text-sm text-gray-600 mt-1">Page Views</p>
          <div className="mt-4 flex items-center text-xs text-gray-500">
            <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
            <span>8.2% increase from yesterday</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-sm shadow-md p-6 border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">+8.7%</span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">{realtime.data.uniqueVisitors.toLocaleString()}</h3>
          <p className="text-sm text-gray-600 mt-1">Unique Visitors</p>
          <div className="mt-4 flex items-center text-xs text-gray-500">
            <Users className="w-3 h-3 mr-1 text-blue-500" />
            <span>New vs Returning: 45% / 55%</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-sm shadow-md p-6 border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">+23.5%</span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">{realtime.data.inquiries}</h3>
          <p className="text-sm text-gray-600 mt-1">Inquiries</p>
          <div className="mt-4 flex items-center text-xs text-gray-500">
            <Clock className="w-3 h-3 mr-1 text-amber-500" />
            <span>Avg response: 2.4 hours</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-sm shadow-md p-6 border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-amber-600" />
            </div>
            <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">+15.2%</span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">${(realtime.data.revenue / 1000).toFixed(1)}K</h3>
          <p className="text-sm text-gray-600 mt-1">Revenue</p>
          <div className="mt-4 flex items-center text-xs text-gray-500">
            <ShoppingCart className="w-3 h-3 mr-1 text-green-500" />
            <span>Avg order value: $45.2K</span>
          </div>
        </motion.div>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Traffic Overview Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-white rounded-sm shadow-md p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <LineChart className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Traffic Overview</h2>
                <p className="text-sm text-gray-500">Hourly visitors and page views</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-xs text-gray-500 hover:text-gray-700">Hourly</button>
              <button className="text-xs text-gray-500 hover:text-gray-700">Daily</button>
              <button className="text-xs text-gray-500 hover:text-gray-700">Weekly</button>
            </div>
          </div>

          <div className="h-80 relative">
            {/* Y-axis */}
            <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-gray-400">
              <span>2.5K</span>
              <span>2.0K</span>
              <span>1.5K</span>
              <span>1.0K</span>
              <span>500</span>
              <span>0</span>
            </div>

            {/* Chart area */}
            <div className="absolute left-12 right-0 top-0 bottom-0">
              <div className="relative h-full">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="border-b border-gray-100 w-full h-0"></div>
                  ))}
                </div>

                {/* Bars */}
                <div className="absolute inset-0 flex items-end justify-between">
                  {historicalData.hourly.slice(0, 12).map((item, index) => (
                    <div key={index} className="flex flex-col items-center w-1/12 group">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${(item.visitors / 2000) * 240}px` }}
                        transition={{ duration: 1, delay: index * 0.02 }}
                        className="w-8 bg-blue-500 rounded-t-lg relative cursor-pointer group-hover:bg-blue-600 transition-colors"
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {item.visitors} visitors
                        </div>
                      </motion.div>
                      <span className="text-xs text-gray-500 mt-2">{item.hour}:00</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-600">Visitors</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-600">Page Views</span>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              Peak: 2,345 visitors at 14:00
            </div>
          </div>
        </motion.div>

        {/* Device Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-sm shadow-md p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Device Breakdown</h2>
                <p className="text-sm text-gray-500">Visitors by device</p>
              </div>
            </div>
          </div>

          {/* Donut chart */}
          <div className="relative h-40 mb-6">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {deviceData.reduce((acc, item, index) => {
                const startAngle = acc.total;
                const angle = (item.percentage / 100) * 360;
                const endAngle = startAngle + angle;
                
                const startRad = (startAngle * Math.PI) / 180;
                const endRad = (endAngle * Math.PI) / 180;
                
                const x1 = 50 + 35 * Math.cos(startRad);
                const y1 = 50 + 35 * Math.sin(startRad);
                const x2 = 50 + 35 * Math.cos(endRad);
                const y2 = 50 + 35 * Math.sin(endRad);
                
                const largeArc = angle > 180 ? 1 : 0;
                
                const pathData = [
                  `M 50 50`,
                  `L ${x1} ${y1}`,
                  `A 35 35 0 ${largeArc} 1 ${x2} ${y2}`,
                  `Z`
                ].join(' ');
                
                const colors = {
                  blue: '#3B82F6',
                  green: '#10B981',
                  purple: '#8B5CF6'
                };
                
                acc.total = endAngle;
                acc.paths.push(
                  <path
                    key={index}
                    d={pathData}
                    fill={colors[item.color]}
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                  />
                );
                
                return acc;
              }, { total: 0, paths: [] }).paths}
            </svg>
          </div>

          {/* Legend */}
          <div className="space-y-3">
            {deviceData.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.device} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon className={`w-4 h-4 text-${item.color}-600`} />
                    <span className="text-sm text-gray-600">{item.device}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="font-medium text-gray-900">{item.visitors.toLocaleString()}</span>
                    <span className="text-xs text-gray-500 w-12">{item.percentage}%</span>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Audience & Behavior Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Geographic Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-sm shadow-md p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Geographic Distribution</h2>
                <p className="text-sm text-gray-500">Visitors by region</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {geographicData.map((region, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{region.region}</span>
                  <div className="flex items-center space-x-3">
                    <span className="font-medium text-gray-900">{region.visitors.toLocaleString()}</span>
                    <span className="text-xs text-gray-500 w-12">{region.percentage}%</span>
                    <span className={`text-xs ${region.growth >= 0 ? 'text-green-600' : 'text-red-600'} w-12`}>
                      {region.growth >= 0 ? '+' : ''}{region.growth}%
                    </span>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${region.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-green-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Top Region</span>
              <span className="font-medium text-gray-900">Greater Accra (8,450 visitors)</span>
            </div>
          </div>
        </motion.div>

        {/* Browser & Traffic Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-sm shadow-md p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                <Globe className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Browser Usage</h2>
                <p className="text-sm text-gray-500">Top browsers</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {browserData.map((browser, index) => {
              const Icon = browser.icon
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-600">{browser.browser}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="font-medium text-gray-900">{browser.visitors.toLocaleString()}</span>
                      <span className="text-xs text-gray-500 w-12">{browser.percentage}%</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${browser.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-amber-500 rounded-full"
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Traffic Sources</h3>
            <div className="grid grid-cols-2 gap-3">
              {trafficSources.slice(0, 4).map((source, index) => {
                const Icon = source.icon
                return (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Icon className={`w-4 h-4 text-${source.color}-600`} />
                      <span className="text-xs text-gray-600">{source.source}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{source.visitors.toLocaleString()}</span>
                      <span className="text-xs text-gray-500">{source.percentage}%</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Social Media & Campaign Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Social Media Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-sm shadow-md p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Social Media Performance</h2>
                <p className="text-sm text-gray-500">Engagement metrics</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {socialData.map((platform, index) => {
              const Icon = platform.icon
              return (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg bg-${platform.color}-100 flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 text-${platform.color}-600`} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{platform.platform}</h3>
                      <p className="text-xs text-gray-500">{platform.engagement.toLocaleString()} engagements</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{platform.clicks.toLocaleString()} clicks</p>
                    <p className="text-xs text-green-600">{platform.conversions} conversions</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Total Engagement</span>
              <span className="font-medium text-gray-900">8,460</span>
            </div>
          </div>
        </motion.div>

        {/* Campaign Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-sm shadow-md p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                <Zap className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Campaign Performance</h2>
                <p className="text-sm text-gray-500">Marketing ROI</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {campaigns.map((campaign, index) => (
              <div key={index} className="p-3 hover:bg-gray-50 rounded-xl transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{campaign.name}</h3>
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    ROI {campaign.roi}%
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-xs text-gray-500">Impressions</p>
                    <p className="text-sm font-medium text-gray-900">{campaign.impressions.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Clicks</p>
                    <p className="text-sm font-medium text-gray-900">{campaign.clicks.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Conversions</p>
                    <p className="text-sm font-medium text-gray-900">{campaign.conversions}</p>
                  </div>
                </div>
                <div className="mt-2 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(campaign.clicks / campaign.impressions) * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-purple-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Conversion Goals & User Behavior */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversion Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-white rounded-sm shadow-md p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                <Target className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Conversion Goals</h2>
                <p className="text-sm text-gray-500">Goal completions and rates</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {conversionGoals.map((goal, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{goal.name}</h3>
                  <span className="text-xs text-green-600">{goal.trend}</span>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-bold text-gray-900">{goal.completions}</span>
                  <span className="text-sm text-gray-500">({goal.rate}%)</span>
                </div>
                <div className="mt-3 w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${goal.rate * 10}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-green-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* User Behavior Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-sm shadow-md p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                <Activity className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">User Behavior</h2>
                <p className="text-sm text-gray-500">Engagement metrics</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Bounce Rate</span>
              <div className="text-right">
                <span className="font-bold text-gray-900">{realtime.data.bounceRate}%</span>
                <span className="text-xs text-red-500 ml-2">+2.3%</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Avg. Session Duration</span>
              <div className="text-right">
                <span className="font-bold text-gray-900">{formatDuration(realtime.data.avgSessionDuration)}</span>
                <span className="text-xs text-green-500 ml-2">+12s</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Pages / Session</span>
              <div className="text-right">
                <span className="font-bold text-gray-900">{realtime.data.pagesPerSession}</span>
                <span className="text-xs text-green-500 ml-2">+0.3</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">New Sessions</span>
              <div className="text-right">
                <span className="font-bold text-gray-900">45%</span>
                <span className="text-xs text-gray-500 ml-2">vs 55% returning</span>
              </div>
            </div>
          </div>

          
        </motion.div>
      </div>

      {/* Real-time Events */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-sm shadow-md p-6 border border-gray-100"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
              <Zap className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Real-time Events</h2>
              <p className="text-sm text-gray-500">Live user actions</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500">Streaming live</span>
          </div>
        </div>

        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">User {Math.floor(Math.random() * 1000)}</span> viewed{' '}
                  <span className="font-medium text-[#3b2a1f]">
                    {['Toyota Camry', 'Honda CR-V', 'Mercedes C300'][Math.floor(Math.random() * 3)]}
                  </span>
                </p>
                <p className="text-xs text-gray-500">{Math.floor(Math.random() * 60)} seconds ago</p>
              </div>
              <span className="text-xs text-gray-400">from {['Accra', 'Kumasi', 'Takoradi'][Math.floor(Math.random() * 3)]}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <button className="text-sm text-[#3b2a1f] hover:text-[#5c483a] font-medium">
            View All Events →
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default Analytics