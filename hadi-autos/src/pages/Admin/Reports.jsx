import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BarChart3,
  PieChart,
  LineChart,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Car,
  MessageSquare,
  Users,
  Calendar,
  Download,
  RefreshCw,
  Filter,
  ChevronDown,
  Eye,
  ShoppingCart,
  Clock,
  Award,
  Star,
  MapPin,
  Globe,
  Activity,
  FileText,
  Printer,
  Share2,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  DownloadCloud,
  Mail,
  Zap,
  Target,
  TrendingUp as TrendingUpIcon,
  Calendar as CalendarIcon,
  Settings,
  Maximize2,
  Minimize2
} from 'lucide-react'

// Chart components (simulated - in production you'd use recharts, victory, or chart.js)
const Reports = () => {
  const [timeframe, setTimeframe] = useState('month')
  const [chartType, setChartType] = useState('bar')
  const [isExporting, setIsExporting] = useState(false)
  const [selectedReport, setSelectedReport] = useState('overview')
  const [dateRange, setDateRange] = useState({
    start: '2024-01-01',
    end: '2024-12-31'
  })
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Sample data for charts
  const revenueData = {
    monthly: [
      { month: 'Jan', revenue: 125000, inquiries: 45, vehicles: 12 },
      { month: 'Feb', revenue: 145000, inquiries: 52, vehicles: 15 },
      { month: 'Mar', revenue: 168000, inquiries: 58, vehicles: 18 },
      { month: 'Apr', revenue: 189000, inquiries: 63, vehicles: 21 },
      { month: 'May', revenue: 215000, inquiries: 71, vehicles: 24 },
      { month: 'Jun', revenue: 242000, inquiries: 78, vehicles: 28 },
      { month: 'Jul', revenue: 278000, inquiries: 85, vehicles: 32 },
      { month: 'Aug', revenue: 295000, inquiries: 92, vehicles: 35 },
      { month: 'Sep', revenue: 312000, inquiries: 98, vehicles: 38 },
      { month: 'Oct', revenue: 335000, inquiries: 105, vehicles: 42 },
      { month: 'Nov', revenue: 358000, inquiries: 112, vehicles: 45 },
      { month: 'Dec', revenue: 425000, inquiries: 128, vehicles: 52 }
    ],
    quarterly: [
      { quarter: 'Q1', revenue: 438000, inquiries: 155, vehicles: 45 },
      { quarter: 'Q2', revenue: 646000, inquiries: 212, vehicles: 73 },
      { quarter: 'Q3', revenue: 885000, inquiries: 275, vehicles: 105 },
      { quarter: 'Q4', revenue: 1118000, inquiries: 345, vehicles: 139 }
    ],
    yearly: [
      { year: '2021', revenue: 1850000, inquiries: 520, vehicles: 185 },
      { year: '2022', revenue: 2450000, inquiries: 680, vehicles: 245 },
      { year: '2023', revenue: 2980000, inquiries: 820, vehicles: 298 },
      { year: '2024', revenue: 3420000, inquiries: 950, vehicles: 342 }
    ]
  }

  const vehicleDistribution = [
    { category: 'Sedan', count: 145, percentage: 35, color: 'blue' },
    { category: 'SUV', count: 187, percentage: 45, color: 'emerald' },
    { category: 'Truck', count: 42, percentage: 10, color: 'amber' },
    { category: 'Luxury', count: 28, percentage: 7, color: 'purple' },
    { category: 'Electric', count: 12, percentage: 3, color: 'green' }
  ]

  const geographicData = [
    { region: 'Greater Accra', sales: 245, growth: 18, share: 32 },
    { region: 'Ashanti', sales: 189, growth: 22, share: 24 },
    { region: 'Western', sales: 112, growth: 15, share: 14 },
    { region: 'Eastern', sales: 98, growth: 8, share: 12 },
    { region: 'Central', sales: 76, growth: 12, share: 10 },
    { region: 'Northern', sales: 45, growth: 5, share: 5 },
    { region: 'Volta', sales: 23, growth: -2, share: 3 }
  ]

  const performanceMetrics = {
    conversionRate: 24.8,
    avgResponseTime: 2.4,
    customerSatisfaction: 98,
    repeatCustomers: 42,
    avgDealSize: 45200,
    leadToClose: 12.5,
    websiteTraffic: 28450,
    bounceRate: 32.5,
    socialEngagement: 8450
  }

  const topPerformers = [
    { name: 'Toyota Camry', sales: 48, revenue: 2160000, growth: 15 },
    { name: 'Honda CR-V', sales: 42, revenue: 1890000, growth: 12 },
    { name: 'Mercedes C300', sales: 28, revenue: 1680000, growth: 8 },
    { name: 'Ford F-150', sales: 25, revenue: 1375000, growth: 5 },
    { name: 'Tesla Model 3', sales: 18, revenue: 1080000, growth: 25 }
  ]

  const recentReports = [
    { id: 1, name: 'Q4 2024 Performance Report', date: '2024-12-31', type: 'quarterly', size: '2.4 MB' },
    { id: 2, name: 'Vehicle Sales Analysis - Dec', date: '2024-12-01', type: 'monthly', size: '1.8 MB' },
    { id: 3, name: 'Customer Demographics 2024', date: '2024-11-15', type: 'annual', size: '3.2 MB' },
    { id: 4, name: 'Marketing ROI Analysis', date: '2024-11-01', type: 'custom', size: '1.5 MB' }
  ]

  const exportFormats = ['PDF', 'Excel', 'CSV', 'Image']

  const handleExport = (format) => {
    setIsExporting(true)
    // Simulate export
    setTimeout(() => {
      setIsExporting(false)
      alert(`Report exported as ${format}`)
    }, 1500)
  }

  const handlePrint = () => {
    window.print()
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Sales Report',
        text: 'Check out this sales report',
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  return (
    <div className="space-y-8 pb-12">
      {/* Header with Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-2">Comprehensive insights into your business performance</p>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Date Range Selector */}
          <div className="relative">
            <button
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center space-x-2"
            >
              <CalendarIcon className="w-4 h-4 text-gray-600" />
              <span className="text-sm">Jan 1 - Dec 31, 2024</span>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </button>
            
            <AnimatePresence>
              {showDatePicker && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 z-50 p-4"
                >
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-gray-500">Start Date</label>
                      <input
                        type="date"
                        value={dateRange.start}
                        onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                        className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500">End Date</label>
                      <input
                        type="date"
                        value={dateRange.end}
                        onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                        className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                      />
                    </div>
                    <button className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 cursor-pointer transition-colors">
                      Apply Range
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Export Button */}
          <div className="relative group">
            <button
              onClick={() => handleExport('PDF')}
              disabled={isExporting}
              className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 relative"
            >
              {isExporting ? (
                <RefreshCw className="w-5 h-5 text-gray-600 animate-spin" />
              ) : (
                <DownloadCloud className="w-5 h-5 text-gray-600" />
              )}
            </button>
            
            {/* Export Format Dropdown on Hover */}
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              {exportFormats.map((format) => (
                <button
                  key={format}
                  onClick={() => handleExport(format)}
                  className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg cursor-pointer"
                >
                  {format}
                </button>
              ))}
            </div>
          </div>

          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer"
          >
            <Printer className="w-5 h-5 text-gray-600" />
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer"
          >
            <Share2 className="w-5 h-5 text-gray-600" />
          </button>

          {/* Fullscreen Toggle */}
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

      {/* Report Navigation */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        {['overview', 'sales', 'vehicles', 'inquiries', 'geographic', 'performance'].map((report) => (
          <button
            key={report}
            onClick={() => setSelectedReport(report)}
            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap cursor-pointer
              ${selectedReport === report 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
          >
            {report.charAt(0).toUpperCase() + report.slice(1)} Report
          </button>
        ))}
      </div>

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-sm p-6 text-white shadow-md"
        >
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="w-8 h-8 opacity-80" />
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">+18.5%</span>
          </div>
          <h3 className="text-3xl font-bold">$3.42M</h3>
          <p className="text-blue-100 mt-1">Total Revenue</p>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+12.3% vs last period</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-sm p-6 text-white shadow-md"
        >
          <div className="flex items-center justify-between mb-4">
            <Car className="w-8 h-8 opacity-80" />
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">+8.2%</span>
          </div>
          <h3 className="text-3xl font-bold">342</h3>
          <p className="text-emerald-100 mt-1">Vehicles Sold</p>
          <div className="mt-4 flex items-center text-sm">
            <Target className="w-4 h-4 mr-1" />
            <span>92% of annual target</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-sm p-6 text-white shadow-md"
        >
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 opacity-80" />
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">+15.3%</span>
          </div>
          <h3 className="text-3xl font-bold">950</h3>
          <p className="text-purple-100 mt-1">Total Inquiries</p>
          <div className="mt-4 flex items-center text-sm">
            <Zap className="w-4 h-4 mr-1" />
            <span>24.8% conversion rate</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-sm p-6 text-white shadow-md"
        >
          <div className="flex items-center justify-between mb-4">
            <Award className="w-8 h-8 opacity-80" />
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">98%</span>
          </div>
          <h3 className="text-3xl font-bold">4.9/5.0</h3>
          <p className="text-amber-100 mt-1">Customer Rating</p>
          <div className="mt-4 flex items-center text-sm">
            <Star className="w-4 h-4 mr-1" />
            <span>Based on 342 reviews</span>
          </div>
        </motion.div>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart - Large */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-white rounded-md shadow-md p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                <LineChart className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Revenue Trend</h2>
                <p className="text-sm text-gray-500">Monthly performance analysis</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {['bar', 'line', 'area'].map((type) => (
                <button
                  key={type}
                  onClick={() => setChartType(type)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors
                    ${chartType === type 
                      ? 'bg-[#3b2a1f] text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Chart Visualization */}
          <div className="h-80 relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-gray-400">
              <span>$500K</span>
              <span>$400K</span>
              <span>$300K</span>
              <span>$200K</span>
              <span>$100K</span>
              <span>$0</span>
            </div>

            {/* Chart bars */}
            <div className="absolute left-12 right-0 top-0 bottom-0 flex items-end justify-between">
              {revenueData.monthly.slice(0, 12).map((item, index) => (
                <div key={index} className="flex flex-col items-center w-1/12 group">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(item.revenue / 500000) * 280}px` }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    className={`w-8 ${chartType === 'bar' ? 'bg-emerald-500' : 'bg-emerald-300'} rounded-t-lg relative cursor-pointer group-hover:bg-emerald-600 transition-colors`}
                  >
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                      ${item.revenue.toLocaleString()}
                    </div>
                  </motion.div>
                  <span className="text-xs text-gray-600 mt-2 rotate-45 origin-left">{item.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chart Legend */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-xs text-gray-600">Revenue</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-xs text-gray-600">Target</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-xs text-[#3b2a1f] hover:text-[#5c483a]">Zoom</button>
              <button className="text-xs text-[#3b2a1f] hover:text-[#5c483a]">Reset</button>
            </div>
          </div>
        </motion.div>

        {/* Vehicle Distribution - Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-md shadow-md p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <PieChart className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Vehicle Distribution</h2>
                <p className="text-sm text-gray-500">By category</p>
              </div>
            </div>
            <button className="text-sm text-[#3b2a1f] hover:text-[#5c483a]">Details</button>
          </div>

          {/* Pie Chart Visualization */}
          <div className="relative h-48 mb-6">
            <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
              {vehicleDistribution.reduce((acc, item, index) => {
                const startAngle = acc.total;
                const angle = (item.percentage / 100) * 360;
                const endAngle = startAngle + angle;
                
                const startRad = (startAngle * Math.PI) / 180;
                const endRad = (endAngle * Math.PI) / 180;
                
                const x1 = 50 + 40 * Math.cos(startRad);
                const y1 = 50 + 40 * Math.sin(startRad);
                const x2 = 50 + 40 * Math.cos(endRad);
                const y2 = 50 + 40 * Math.sin(endRad);
                
                const largeArc = angle > 180 ? 1 : 0;
                
                const pathData = [
                  `M 50 50`,
                  `L ${x1} ${y1}`,
                  `A 40 40 0 ${largeArc} 1 ${x2} ${y2}`,
                  `Z`
                ].join(' ');
                
                const colors = {
                  blue: '#3B82F6',
                  emerald: '#10B981',
                  amber: '#F59E0B',
                  purple: '#8B5CF6',
                  green: '#22C55E'
                };
                
                acc.total = endAngle;
                acc.paths.push(
                  <path
                    key={index}
                    d={pathData}
                    fill={colors[item.color]}
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <title>{item.category}: {item.count} ({item.percentage}%)</title>
                  </path>
                );
                
                return acc;
              }, { total: 0, paths: [] }).paths}
            </svg>
          </div>

          {/* Legend */}
          <div className="space-y-2">
            {vehicleDistribution.map((item) => (
              <div key={item.category} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full bg-${item.color}-500`}></div>
                  <span className="text-gray-600">{item.category}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-medium text-gray-900">{item.count}</span>
                  <span className="text-xs text-gray-500">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Geographic Distribution & Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Geographic Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-white rounded-md shadow-md p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                <Globe className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Geographic Distribution</h2>
                <p className="text-sm text-gray-500">Sales by region</p>
              </div>
            </div>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5">
              <option>All Regions</option>
              <option>Greater Accra</option>
              <option>Ashanti</option>
              <option>Western</option>
            </select>
          </div>

          <div className="space-y-4">
            {geographicData.map((region, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">{region.region}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-medium text-gray-900">{region.sales}</span>
                    <span className={`text-xs ${region.growth >= 0 ? 'text-green-600' : 'text-red-600'} w-12`}>
                      {region.growth >= 0 ? '+' : ''}{region.growth}%
                    </span>
                    <span className="text-xs text-gray-500 w-12">{region.share}%</span>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${region.share}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-green-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Total Sales</span>
              <span className="font-bold text-gray-900">788 vehicles</span>
            </div>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-md shadow-md p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                <Activity className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Key Metrics</h2>
                <p className="text-sm text-gray-500">Performance indicators</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <span className="text-sm text-gray-600">Conversion Rate</span>
              <span className="font-bold text-lg text-gray-900">{performanceMetrics.conversionRate}%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <span className="text-sm text-gray-600">Avg Response Time</span>
              <span className="font-bold text-lg text-gray-900">{performanceMetrics.avgResponseTime}h</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <span className="text-sm text-gray-600">Customer Satisfaction</span>
              <span className="font-bold text-lg text-gray-900">{performanceMetrics.customerSatisfaction}%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <span className="text-sm text-gray-600">Repeat Customers</span>
              <span className="font-bold text-lg text-gray-900">{performanceMetrics.repeatCustomers}%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <span className="text-sm text-gray-600">Avg Deal Size</span>
              <span className="font-bold text-lg text-gray-900">${(performanceMetrics.avgDealSize / 1000).toFixed(1)}K</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <span className="text-sm text-gray-600">Lead to Close</span>
              <span className="font-bold text-lg text-gray-900">{performanceMetrics.leadToClose} days</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <button className="w-full py-2 bg-red-600 text-white rounded-md cursor-pointer hover:bg-red-700 transition-colors text-sm">
              View Detailed Metrics
            </button>
          </div>
        </motion.div>
      </div>

      {/* Top Performers & Recent Reports */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Vehicles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-md shadow-md p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Top Performers</h2>
                <p className="text-sm text-gray-500">Best selling vehicles</p>
              </div>
            </div>
            <button className="text-sm text-[#3b2a1f] hover:text-[#5c483a]">View All</button>
          </div>

          <div className="space-y-4">
            {topPerformers.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                    #{index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item.sales} units sold</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">${(item.revenue / 1000000).toFixed(1)}M</p>
                  <p className={`text-xs ${item.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {item.growth >= 0 ? '+' : ''}{item.growth}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Reports */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-md shadow-md p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Recent Reports</h2>
                <p className="text-sm text-gray-500">Download or view</p>
              </div>
            </div>
            
          </div>

          <div className="space-y-3">
            {recentReports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors group">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{report.name}</h3>
                    <p className="text-xs text-gray-500">{report.date} • {report.size}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1 hover:bg-gray-200 rounded" title="View">
                    <Eye className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-200 rounded" title="Download">
                    <Download className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-200 rounded" title="Share">
                    <Share2 className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          
        </motion.div>
      </div>

      {/* Export Options Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-sm shadow-sm p-4 border border-gray-100 flex flex-wrap items-center justify-between gap-4"
      >
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-700">Export Options:</span>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 cursor-pointer transition-colors text-sm flex items-center space-x-2">
            <FileText className="w-4 h-4" />
            <span>PDF Report</span>
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 cursor-pointer transition-colors text-sm flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Excel Data</span>
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 cursor-pointer transition-colors text-sm flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>Email Report</span>
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default Reports