import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Car,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  Star,
  MapPin,
  Truck,
  CheckCircle,
  XCircle,
  AlertCircle,
  ChevronDown,
  MoreVertical,
  Image as ImageIcon,
  DollarSign,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  Download,
  Upload,
  Copy,
  Archive,
  Grid3x3,
  List,
  SlidersHorizontal,
  X,
  Check,
  Clock,
  TrendingUp,
  Users,
  Camera,
  Video,
  FileText,
  Shield,
  Zap,
  Award,
  Sparkles,
  RotateCcw,
  Save,
  Printer,
  Mail,
  Share2,
  BarChart3,
  PieChart,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Plus as PlusIcon,
  SortAsc,
  SortDesc,
  FilterX,
  RefreshCw,
  Maximize2,
  Minimize2
} from 'lucide-react'

const VehicleManagement = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      title: '2022 Toyota Camry XLE',
      make: 'Toyota',
      model: 'Camry',
      year: 2022,
      price: 18500,
      mileage: 25000,
      location: 'canada',
      status: 'available',
      isFeatured: true,
      isHot: true,
      shipmentIncluded: true,
      fuelType: 'Hybrid',
      transmission: 'Automatic',
      color: 'White',
      images: ['1.avif', '2.webp', '3.webp'],
      category: 'sedan',
      views: 1245,
      inquiries: 23,
      listedDate: '2024-01-15',
      condition: 'excellent',
      engine: '2.5L 4-Cylinder',
      drive: 'FWD',
      interior: 'Leather',
      exterior: 'Pearl White',
      features: ['Sunroof', 'Navigation', 'Bluetooth', 'Backup Camera'],
      description: 'Excellent condition Toyota Camry XLE with hybrid technology. One owner, clean title.'
    },
    {
      id: 2,
      title: '2021 Honda CR-V EX-L',
      make: 'Honda',
      model: 'CR-V',
      year: 2021,
      price: 22000,
      mileage: 32000,
      location: 'canada',
      status: 'available',
      isFeatured: true,
      isHot: false,
      shipmentIncluded: false,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      color: 'Black',
      images: ['6.avif', '7.avif', '8.avif'],
      category: 'suv',
      views: 987,
      inquiries: 18,
      listedDate: '2024-02-01',
      condition: 'good',
      engine: '1.5L Turbo',
      drive: 'AWD',
      interior: 'Black Leather',
      exterior: 'Crystal Black',
      features: ['AWD', 'Apple CarPlay', 'Honda Sensing', 'Power Tailgate'],
      description: 'Well-maintained Honda CR-V with AWD. Perfect for family use.'
    },
    {
      id: 3,
      title: '2020 Mercedes-Benz C300',
      make: 'Mercedes-Benz',
      model: 'C300',
      year: 2020,
      price: 35000,
      mileage: 45000,
      location: 'ghana',
      status: 'reserved',
      isFeatured: false,
      isHot: false,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      color: 'Silver',
      images: ['11.webp', '12.jpg', '13.webp'],
      category: 'luxury',
      views: 756,
      inquiries: 12,
      listedDate: '2024-01-20',
      condition: 'excellent',
      engine: '2.0L Turbo',
      drive: 'RWD',
      interior: 'AMG Line',
      exterior: 'Iridium Silver',
      features: ['AMG Package', 'Panoramic Roof', 'Burmester Sound', 'Ambient Lighting'],
      description: 'Luxury Mercedes-Benz C300 with AMG package. Low mileage for year.'
    },
    {
      id: 4,
      title: '2019 Ford F-150 XLT',
      make: 'Ford',
      model: 'F-150',
      year: 2019,
      price: 28000,
      mileage: 52000,
      location: 'canada',
      status: 'available',
      isFeatured: false,
      isHot: true,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      color: 'Blue',
      images: ['8.avif', '10.webp', '9.avif'],
      category: 'truck',
      views: 567,
      inquiries: 9,
      listedDate: '2024-02-10',
      condition: 'good',
      engine: '3.5L V6',
      drive: '4WD',
      interior: 'Cloth',
      exterior: 'Velocity Blue',
      features: ['Tow Package', 'Bed Liner', 'Sync 3', 'Remote Start'],
      description: 'Powerful Ford F-150 with tow package. Great work truck.'
    },
    {
      id: 5,
      title: '2023 Tesla Model 3',
      make: 'Tesla',
      model: 'Model 3',
      year: 2023,
      price: 42000,
      mileage: 8500,
      location: 'canada',
      status: 'available',
      isFeatured: true,
      isHot: true,
      fuelType: 'Electric',
      transmission: 'Automatic',
      color: 'Red',
      images: ['3.webp', '2.webp'],
      category: 'electric',
      views: 2100,
      inquiries: 45,
      listedDate: '2024-02-15',
      condition: 'like-new',
      engine: 'Dual Motor',
      drive: 'AWD',
      interior: 'White',
      exterior: 'Red Multi-Coat',
      features: ['Autopilot', 'Glass Roof', 'Premium Sound', 'Heated Seats'],
      description: 'Like new Tesla Model 3 with low miles. Full self-driving capability.'
    }
  ])

  const [selectedVehicles, setSelectedVehicles] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchField, setSearchField] = useState('all')
  const [filters, setFilters] = useState({
    status: 'all',
    location: 'all',
    featured: 'all',
    category: 'all',
    minPrice: '',
    maxPrice: '',
    minYear: '',
    maxYear: '',
    condition: 'all'
  })
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState('grid') // grid, list, compact
  const [sortBy, setSortBy] = useState('newest')
  const [sortDirection, setSortDirection] = useState('desc')
  const [selectedVehicle, setSelectedVehicle] = useState(null)
  const [showQuickView, setShowQuickView] = useState(false)
  const [showBulkEdit, setShowBulkEdit] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [stats, setStats] = useState({
    totalViews: 0,
    totalInquiries: 0,
    avgPrice: 0,
    inventoryValue: 0
  })

  // Calculate stats
  useEffect(() => {
    const totalViews = vehicles.reduce((sum, v) => sum + v.views, 0)
    const totalInquiries = vehicles.reduce((sum, v) => sum + v.inquiries, 0)
    const avgPrice = vehicles.reduce((sum, v) => sum + v.price, 0) / vehicles.length
    const inventoryValue = vehicles.reduce((sum, v) => sum + v.price, 0)
    
    setStats({ totalViews, totalInquiries, avgPrice, inventoryValue })
  }, [vehicles])

  // Filter and sort vehicles
  const filteredVehicles = useMemo(() => {
    let filtered = vehicles.filter(vehicle => {
      // Search
      if (searchTerm) {
        const term = searchTerm.toLowerCase()
        if (searchField === 'all') {
          return (
            vehicle.title.toLowerCase().includes(term) ||
            vehicle.make.toLowerCase().includes(term) ||
            vehicle.model.toLowerCase().includes(term) ||
            vehicle.description?.toLowerCase().includes(term)
          )
        } else if (searchField === 'title') {
          return vehicle.title.toLowerCase().includes(term)
        } else if (searchField === 'make') {
          return vehicle.make.toLowerCase().includes(term)
        } else if (searchField === 'model') {
          return vehicle.model.toLowerCase().includes(term)
        }
      }
      
      // Status filter
      if (filters.status !== 'all' && vehicle.status !== filters.status) return false
      
      // Location filter
      if (filters.location !== 'all' && vehicle.location !== filters.location) return false
      
      // Featured filter
      if (filters.featured !== 'all') {
        if (filters.featured === 'featured' && !vehicle.isFeatured) return false
        if (filters.featured === 'not-featured' && vehicle.isFeatured) return false
      }
      
      // Category filter
      if (filters.category !== 'all' && vehicle.category !== filters.category) return false
      
      // Condition filter
      if (filters.condition !== 'all' && vehicle.condition !== filters.condition) return false
      
      // Price range
      if (filters.minPrice && vehicle.price < parseInt(filters.minPrice)) return false
      if (filters.maxPrice && vehicle.price > parseInt(filters.maxPrice)) return false
      
      // Year range
      if (filters.minYear && vehicle.year < parseInt(filters.minYear)) return false
      if (filters.maxYear && vehicle.year > parseInt(filters.maxYear)) return false
      
      return true
    })

    // Sort
    filtered.sort((a, b) => {
      let comparison = 0
      switch (sortBy) {
        case 'newest':
          comparison = new Date(b.listedDate) - new Date(a.listedDate)
          break
        case 'oldest':
          comparison = new Date(a.listedDate) - new Date(b.listedDate)
          break
        case 'price':
          comparison = a.price - b.price
          break
        case 'price-desc':
          comparison = b.price - a.price
          break
        case 'year':
          comparison = b.year - a.year
          break
        case 'year-asc':
          comparison = a.year - b.year
          break
        case 'mileage':
          comparison = a.mileage - b.mileage
          break
        case 'mileage-desc':
          comparison = b.mileage - a.mileage
          break
        case 'views':
          comparison = b.views - a.views
          break
        case 'inquiries':
          comparison = b.inquiries - a.inquiries
          break
        default:
          comparison = 0
      }
      return sortDirection === 'desc' ? comparison : -comparison
    })

    return filtered
  }, [vehicles, searchTerm, searchField, filters, sortBy, sortDirection])

  const getStatusBadge = (status) => {
    switch(status) {
      case 'available':
        return <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg text-xs font-medium flex items-center shadow-lg shadow-green-500/20">
          <CheckCircle className="w-3 h-3 mr-1" /> Available
        </span>
      case 'reserved':
        return <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-lg text-xs font-medium flex items-center shadow-lg shadow-yellow-500/20">
          <AlertCircle className="w-3 h-3 mr-1" /> Reserved
        </span>
      case 'sold':
        return <span className="px-2 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg text-xs font-medium flex items-center shadow-lg shadow-red-500/20">
          <XCircle className="w-3 h-3 mr-1" /> Sold
        </span>
      default:
        return null
    }
  }

  const getConditionColor = (condition) => {
    switch(condition) {
      case 'excellent': return 'text-green-600 bg-green-50'
      case 'good': return 'text-blue-600 bg-blue-50'
      case 'fair': return 'text-yellow-600 bg-yellow-50'
      case 'like-new': return 'text-purple-600 bg-purple-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const handleBulkAction = (action) => {
    if (selectedVehicles.length === 0) return
    
    switch(action) {
      case 'delete':
        if (window.confirm(`Are you sure you want to delete ${selectedVehicles.length} vehicles?`)) {
          setVehicles(vehicles.filter(v => !selectedVehicles.includes(v.id)))
          setSelectedVehicles([])
        }
        break
      case 'feature':
        setVehicles(vehicles.map(v => 
          selectedVehicles.includes(v.id) ? { ...v, isFeatured: true } : v
        ))
        break
      case 'unfeature':
        setVehicles(vehicles.map(v => 
          selectedVehicles.includes(v.id) ? { ...v, isFeatured: false } : v
        ))
        break
      case 'available':
        setVehicles(vehicles.map(v => 
          selectedVehicles.includes(v.id) ? { ...v, status: 'available' } : v
        ))
        break
      case 'reserved':
        setVehicles(vehicles.map(v => 
          selectedVehicles.includes(v.id) ? { ...v, status: 'reserved' } : v
        ))
        break
      case 'sold':
        setVehicles(vehicles.map(v => 
          selectedVehicles.includes(v.id) ? { ...v, status: 'sold' } : v
        ))
        break
      default:
        break
    }
  }

  const clearFilters = () => {
    setFilters({
      status: 'all',
      location: 'all',
      featured: 'all',
      category: 'all',
      minPrice: '',
      maxPrice: '',
      minYear: '',
      maxYear: '',
      condition: 'all'
    })
    setSearchTerm('')
  }

  return (
    <div className="space-y-8 pb-12">
      {/* Header with Premium Gradient */}
      <div className="relative overflow-hidden rounded-md bg-gradient-to-r from-red-600 via-red-900 to-red-900 p-8">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white flex items-center">
              <Car className="w-8 h-8 mr-3" />
              Vehicle Management
            </h1>
            <p className="text-gray-300 mt-2 flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Manage your premium inventory with advanced controls
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/admin/vehicles/new"
              className="flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-medium group"
            >
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              <span>Add New Vehicle</span>
            </Link>
            <button className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all text-white cursor-pointer">
              <Download className="w-5 h-5" />
            </button>
            <button className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all text-white cursor-pointer">
              <Upload className="w-5 h-5" />
            </button>
               {/* Fullscreen toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2.5 bg-white/10 backdrop-blur-sm rounded-md hover:bg-white/20 transition-all text-white cursor-pointer"
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5 text-white" />
            ) : (
              <Maximize2 className="w-5 h-5 text-white" />
            )}
          </button>
          </div>
        </div>
      </div>

      {/* Premium Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <StatCard 
          label="Total Vehicles" 
          value={vehicles.length} 
          icon={Car} 
          color="blue"
          trend="+12.5%"
          trendUp={true}
        />
        <StatCard 
          label="Available" 
          value={vehicles.filter(v => v.status === 'available').length} 
          icon={CheckCircle} 
          color="green"
          subtitle={`${Math.round(vehicles.filter(v => v.status === 'available').length / vehicles.length * 100)}% of total`}
        />
        <StatCard 
          label="Reserved" 
          value={vehicles.filter(v => v.status === 'reserved').length} 
          icon={AlertCircle} 
          color="yellow" 
        />
        <StatCard 
          label="Sold" 
          value={vehicles.filter(v => v.status === 'sold').length} 
          icon={XCircle} 
          color="red" 
        />
        <StatCard 
          label="Featured" 
          value={vehicles.filter(v => v.isFeatured).length} 
          icon={Star} 
          color="amber"
          subtitle={`${vehicles.filter(v => v.isFeatured).length} premium listings`}
        />
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <QuickStatCard 
          icon={Eye} 
          label="Total Views" 
          value={stats.totalViews.toLocaleString()} 
          change="+23.5%" 
          positive={true}
        />
        <QuickStatCard 
          icon={Save} 
          label="Total Inquiries" 
          value={stats.totalInquiries.toLocaleString()} 
          change="+15.2%" 
          positive={true}
        />
        <QuickStatCard 
          icon={DollarSign} 
          label="Avg. Price" 
          value={`$${Math.round(stats.avgPrice / 1000)}K`} 
          change="+5.8%" 
          positive={true}
        />
        <QuickStatCard 
          icon={Truck} 
          label="Inventory Value" 
          value={`$${Math.round(stats.inventoryValue / 1000000)}M`} 
          change="-2.3%" 
          positive={false}
        />
      </div>

      {/* Advanced Search and Filters */}
      <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#3b2a1f] transition-colors" />
              <input
                type="text"
                placeholder="Search vehicles by title, make, model, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-[#3b2a1f] focus:ring-4 focus:ring-[#3b2a1f]/10 transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            <div className="flex items-center gap-3">
              {/* Search Field Selector */}
              <select
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)}
                className="px-4 py-4 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-[#3b2a1f] bg-white cursor-pointer" 
              >
                <option value="all">All Fields</option>
                <option value="title">Title</option>
                <option value="make">Make</option>
                <option value="model">Model</option>
              </select>

              {/* Filter Toggle Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center space-x-2 px-6 py-4 border-2 rounded-xl transition-all cursor-pointer ${
                  showFilters 
                    ? 'bg-red-700 border-white/70 text-white' 
                    : 'border-gray-100 hover:border-gray-200 text-gray-700'
                }`}
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span className="font-medium">Filters</span>
                {Object.values(filters).some(v => v !== 'all' && v !== '') && (
                  <span className="ml-2 px-2 py-0.5 bg-white text-[#3b2a1f] rounded-full text-xs font-bold">
                    {Object.values(filters).filter(v => v !== 'all' && v !== '').length}
                  </span>
                )}
              </button>

              {/* Sort Dropdown */}
              <div className="relative group">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-4 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-[#3b2a1f] bg-white appearance-none pr-12 cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="price">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="year">Year: New to Old</option>
                  <option value="year-asc">Year: Old to New</option>
                  <option value="mileage">Mileage: Low to High</option>
                  <option value="mileage-desc">Mileage: High to Low</option>
                  <option value="views">Most Viewed</option>
                  <option value="inquiries">Most Inquiries</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Sort Direction Toggle */}
              <button
                onClick={() => setSortDirection(sortDirection === 'desc' ? 'asc' : 'desc')}
                className="p-4 border-2 border-gray-100 rounded-xl hover:border-gray-200 transition-all cursor-pointer"
              >
                {sortDirection === 'desc' ? (
                  <SortDesc className="w-5 h-5" />
                ) : (
                  <SortAsc className="w-5 h-5" />
                )}
              </button>

              {/* View Mode Toggle */}
              <div className="flex items-center border-2 border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-4 transition-all cursor-pointer ${
                    viewMode === 'grid' 
                      ? 'bg-red-600 text-white' 
                      : 'hover:bg-gray-50 text-gray-600'
                  }`}
                >
                  <Grid3x3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-4 transition-all cursor-pointer ${
                    viewMode === 'list' 
                      ? 'bg-red-700 text-white' 
                      : 'hover:bg-gray-50 text-gray-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('compact')}
                  className={`p-4 transition-all cursor-pointer ${
                    viewMode === 'compact' 
                      ? 'bg-red-800 text-white' 
                      : 'hover:bg-gray-50 text-gray-600'
                  }`}
                >
                  <Minus className="w-5 h-5" />
                </button>
              </div>

              {/* Clear Filters Button */}
              {(searchTerm || Object.values(filters).some(v => v !== 'all' && v !== '')) && (
                <button
                  onClick={clearFilters}
                  className="p-4 border-2 border-gray-100 rounded-xl hover:border-red-200 hover:bg-red-50 text-red-600 transition-all group"
                  title="Clear all filters"
                >
                  <FilterX className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                </button>
              )}
            </div>
          </div>

          {/* Advanced Filters Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 pt-6 border-t-2 border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <Filter className="w-4 h-4 mr-2" />
                      Status
                    </label>
                    <select
                      value={filters.status}
                      onChange={(e) => setFilters({...filters, status: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-[#3b2a1f]"
                    >
                      <option value="all">All Status</option>
                      <option value="available">Available</option>
                      <option value="reserved">Reserved</option>
                      <option value="sold">Sold</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Location
                    </label>
                    <select
                      value={filters.location}
                      onChange={(e) => setFilters({...filters, location: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-[#3b2a1f]"
                    >
                      <option value="all">All Locations</option>
                      <option value="canada">Canada</option>
                      <option value="ghana">Ghana</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Featured
                    </label>
                    <select
                      value={filters.featured}
                      onChange={(e) => setFilters({...filters, featured: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-[#3b2a1f]"
                    >
                      <option value="all">All</option>
                      <option value="featured">Featured Only</option>
                      <option value="not-featured">Not Featured</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <Car className="w-4 h-4 mr-2" />
                      Category
                    </label>
                    <select
                      value={filters.category}
                      onChange={(e) => setFilters({...filters, category: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-[#3b2a1f]"
                    >
                      <option value="all">All Categories</option>
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="truck">Truck</option>
                      <option value="luxury">Luxury</option>
                      <option value="electric">Electric</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Condition
                    </label>
                    <select
                      value={filters.condition}
                      onChange={(e) => setFilters({...filters, condition: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-[#3b2a1f]"
                    >
                      <option value="all">All Conditions</option>
                      <option value="like-new">Like New</option>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="fair">Fair</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Price Range ($)
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        placeholder="Min"
                        value={filters.minPrice}
                        onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-[#3b2a1f]"
                      />
                      <span className="text-gray-400">-</span>
                      <input
                        type="number"
                        placeholder="Max"
                        value={filters.maxPrice}
                        onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-[#3b2a1f]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Year Range
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        placeholder="Min"
                        value={filters.minYear}
                        onChange={(e) => setFilters({...filters, minYear: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-[#3b2a1f]"
                      />
                      <span className="text-gray-400">-</span>
                      <input
                        type="number"
                        placeholder="Max"
                        value={filters.maxYear}
                        onChange={(e) => setFilters({...filters, maxYear: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-[#3b2a1f]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <Fuel className="w-4 h-4 mr-2" />
                      Fuel Type
                    </label>
                    <select
                      value={filters.fuelType}
                      onChange={(e) => setFilters({...filters, fuelType: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-[#3b2a1f]"
                    >
                      <option value="all">All Types</option>
                      <option value="Gasoline">Gasoline</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="Electric">Electric</option>
                      <option value="Diesel">Diesel</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setShowFilters(false)}
                    className="px-6 py-3 bg-red-800 text-white rounded-md hover:bg-red-700 transition-all font-medium cursor-pointer"
                  >
                    Apply Filters
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Bar */}
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredVehicles.length}</span> of{' '}
              <span className="font-semibold text-gray-900">{vehicles.length}</span> vehicles
            </span>
            {filteredVehicles.length !== vehicles.length && (
              <button
                onClick={clearFilters}
                className="text-sm text-[#3b2a1f] hover:text-[#5c483a] font-medium flex items-center"
              >
                <RefreshCw className="w-3 h-3 mr-1" />
                Reset filters
              </button>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center">
              <Printer className="w-4 h-4 mr-1" />
              Print
            </button>
            <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center">
              <Share2 className="w-4 h-4 mr-1" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Bulk Actions Bar */}
      <AnimatePresence>
        {selectedVehicles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gradient-to-r from-red-600 via-red-900 to-red-900 rounded-sm p-4 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-white font-medium">
                  {selectedVehicles.length} vehicle{selectedVehicles.length > 1 ? 's' : ''} selected
                </span>
                <button
                  onClick={() => setSelectedVehicles([])}
                  className="text-white/80 hover:text-white text-sm"
                >
                  Clear selection
                </button>
              </div>
              
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative group">
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm transition-all flex items-center">
                    <Copy className="w-4 h-4 mr-2" />
                    Duplicate
                  </button>
                </div>

                <div className="relative group">
                  <button
                    onClick={() => setShowBulkEdit(!showBulkEdit)}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm transition-all flex items-center"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Bulk Edit
                    <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showBulkEdit ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {showBulkEdit && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full mt-2 right-0 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50"
                      >
                        <button
                          onClick={() => handleBulkAction('feature')}
                          className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center"
                        >
                          <Star className="w-4 h-4 mr-3 text-amber-500" />
                          Mark as Featured
                        </button>
                        <button
                          onClick={() => handleBulkAction('unfeature')}
                          className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center"
                        >
                          <Star className="w-4 h-4 mr-3 text-gray-400" />
                          Remove Featured
                        </button>
                        <div className="border-t border-gray-100"></div>
                        <button
                          onClick={() => handleBulkAction('available')}
                          className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center"
                        >
                          <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                          Set Available
                        </button>
                        <button
                          onClick={() => handleBulkAction('reserved')}
                          className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center"
                        >
                          <AlertCircle className="w-4 h-4 mr-3 text-yellow-500" />
                          Set Reserved
                        </button>
                        <button
                          onClick={() => handleBulkAction('sold')}
                          className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center"
                        >
                          <XCircle className="w-4 h-4 mr-3 text-red-500" />
                          Set Sold
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm transition-all flex items-center">
                  <Archive className="w-4 h-4 mr-2" />
                  Archive
                </button>

                <button
                  onClick={() => handleBulkAction('delete')}
                  className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-xl text-white text-sm transition-all flex items-center"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </button>

                <div className="h-8 w-px bg-white/20 mx-2"></div>

                <button className="px-4 py-2 bg-white text-[#3b2a1f] rounded-xl hover:bg-gray-100 text-sm font-medium transition-all flex items-center">
                  <Save className="w-4 h-4 mr-2" />
                  Save as Group
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vehicle Grid/List Views */}
      <AnimatePresence mode="wait">
        {viewMode === 'grid' && (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                getStatusBadge={getStatusBadge}
                getConditionColor={getConditionColor}
                selected={selectedVehicles.includes(vehicle.id)}
                onSelect={() => {
                  if (selectedVehicles.includes(vehicle.id)) {
                    setSelectedVehicles(selectedVehicles.filter(id => id !== vehicle.id))
                  } else {
                    setSelectedVehicles([...selectedVehicles, vehicle.id])
                  }
                }}
                onQuickView={() => {
                  setSelectedVehicle(vehicle)
                  setShowQuickView(true)
                }}
              />
            ))}
          </motion.div>
        )}

        {viewMode === 'list' && (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectedVehicles.length === filteredVehicles.length}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedVehicles(filteredVehicles.map(v => v.id))
                        } else {
                          setSelectedVehicles([])
                        }
                      }}
                      className="w-5 h-5 rounded border-gray-300 text-[#3b2a1f] focus:ring-[#3b2a1f]"
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Vehicle</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Details</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Performance</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredVehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="hover:bg-gray-50 transition-colors group">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedVehicles.includes(vehicle.id)}
                        onChange={() => {
                          if (selectedVehicles.includes(vehicle.id)) {
                            setSelectedVehicles(selectedVehicles.filter(id => id !== vehicle.id))
                          } else {
                            setSelectedVehicles([...selectedVehicles, vehicle.id])
                          }
                        }}
                        className="w-5 h-5 rounded border-gray-300 text-[#3b2a1f] focus:ring-[#3b2a1f]"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-16 h-16 bg-gray-200 rounded-xl overflow-hidden">
                          <img 
                            src={`/images/${vehicle.images[0]}`} 
                            alt={vehicle.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{vehicle.title}</p>
                          <p className="text-sm text-gray-500">{vehicle.make} • {vehicle.model} • {vehicle.year}</p>
                          {vehicle.isFeatured && (
                            <span className="inline-flex items-center mt-1 text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                              <Star className="w-3 h-3 mr-1 fill-amber-600" />
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center text-xs text-gray-600">
                          <Gauge className="w-3 h-3 mr-1" />
                          {vehicle.mileage.toLocaleString()} km
                        </div>
                        <div className="flex items-center text-xs text-gray-600">
                          <Fuel className="w-3 h-3 mr-1" />
                          {vehicle.fuelType}
                        </div>
                        <div className="flex items-center text-xs text-gray-600">
                          <Calendar className="w-3 h-3 mr-1" />
                          Listed: {new Date(vehicle.listedDate).toLocaleDateString()}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{getStatusBadge(vehicle.status)}</td>
                    <td className="px-6 py-4">
                      <span className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        {vehicle.location === 'canada' ? 'Canada' : 'Ghana'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-900">${vehicle.price.toLocaleString()}</p>
                      {vehicle.shipmentIncluded && (
                        <p className="text-xs text-green-600 flex items-center mt-1">
                          <Truck className="w-3 h-3 mr-1" />
                          Ship incl.
                        </p>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-center">
                          <p className="text-sm font-semibold text-gray-900">{vehicle.views}</p>
                          <p className="text-xs text-gray-500">Views</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-semibold text-gray-900">{vehicle.inquiries}</p>
                          <p className="text-xs text-gray-500">Inq.</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => {
                            setSelectedVehicle(vehicle)
                            setShowQuickView(true)
                          }}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Quick view"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <Link
                          to={`/admin/vehicles/${vehicle.id}/edit`}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button 
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-red-600"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredVehicles.length === 0 && (
              <div className="text-center py-16">
                <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No vehicles found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </motion.div>
        )}

        {viewMode === 'compact' && (
          <motion.div
            key="compact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          >
            {filteredVehicles.map((vehicle) => (
              <CompactVehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                getStatusBadge={getStatusBadge}
                selected={selectedVehicles.includes(vehicle.id)}
                onSelect={() => {
                  if (selectedVehicles.includes(vehicle.id)) {
                    setSelectedVehicles(selectedVehicles.filter(id => id !== vehicle.id))
                  } else {
                    setSelectedVehicles([...selectedVehicles, vehicle.id])
                  }
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick View Modal */}
      <AnimatePresence>
        {showQuickView && selectedVehicle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowQuickView(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedVehicle.title}</h2>
                  <button
                    onClick={() => setShowQuickView(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Image Gallery */}
                  <div>
                    <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden mb-4">
                      <img
                        src={`/images/${selectedVehicle.images[0]}`}
                        alt={selectedVehicle.title}
                        className="w-full h-full object-fill"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {selectedVehicle.images.slice(1).map((img, index) => (
                        <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                          <img src={`/images/${img}`} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      {getStatusBadge(selectedVehicle.status)}
                      {selectedVehicle.isFeatured && (
                        <span className="px-2 py-1 bg-amber-500 text-white rounded-lg text-xs font-medium flex items-center">
                          <Star className="w-3 h-3 mr-1 fill-white" /> Featured
                        </span>
                      )}
                      {selectedVehicle.isHot && (
                        <span className="px-2 py-1 bg-red-500 text-white rounded-lg text-xs font-medium flex items-center">
                          <Zap className="w-3 h-3 mr-1" /> Hot
                        </span>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-3xl font-bold text-[#3b2a1f]">${selectedVehicle.price.toLocaleString()}</p>
                        {selectedVehicle.shipmentIncluded && (
                          <p className="text-sm text-green-600 flex items-center mt-1">
                            <Truck className="w-4 h-4 mr-1" />
                            Free shipping included
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 p-3 rounded-xl">
                          <Calendar className="w-4 h-4 text-gray-500 mb-1" />
                          <p className="text-xs text-gray-500">Year</p>
                          <p className="font-semibold">{selectedVehicle.year}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl">
                          <Gauge className="w-4 h-4 text-gray-500 mb-1" />
                          <p className="text-xs text-gray-500">Mileage</p>
                          <p className="font-semibold">{selectedVehicle.mileage.toLocaleString()} km</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl">
                          <Fuel className="w-4 h-4 text-gray-500 mb-1" />
                          <p className="text-xs text-gray-500">Fuel</p>
                          <p className="font-semibold">{selectedVehicle.fuelType}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl">
                          <Settings className="w-4 h-4 text-gray-500 mb-1" />
                          <p className="text-xs text-gray-500">Transmission</p>
                          <p className="font-semibold">{selectedVehicle.transmission}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                        <p className="text-gray-600">{selectedVehicle.description}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Features</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedVehicle.features.map((feature, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs text-gray-500">Condition</p>
                          <p className={`text-sm font-medium px-2 py-1 rounded inline-block mt-1 ${getConditionColor(selectedVehicle.condition)}`}>
                            {selectedVehicle.condition.charAt(0).toUpperCase() + selectedVehicle.condition.slice(1)}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Color</p>
                          <p className="font-medium">{selectedVehicle.color}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Engine</p>
                          <p className="font-medium">{selectedVehicle.engine}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Drive</p>
                          <p className="font-medium">{selectedVehicle.drive}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <p className="text-lg font-bold text-gray-900">{selectedVehicle.views}</p>
                            <p className="text-xs text-gray-500">Views</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-gray-900">{selectedVehicle.inquiries}</p>
                            <p className="text-xs text-gray-500">Inquiries</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Link
                            to={`/admin/vehicles/${selectedVehicle.id}/edit`}
                            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                          >
                            Edit Vehicle
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Enhanced Stat Card
const StatCard = ({ label, value, icon: Icon, color, trend, trendUp, subtitle }) => {
  const colors = {
    blue: 'bg-gradient-to-br from-blue-500 to-blue-600 text-white',
    green: 'bg-gradient-to-br from-green-500 to-green-600 text-white',
    yellow: 'bg-gradient-to-br from-yellow-500 to-amber-500 text-white',
    red: 'bg-gradient-to-br from-red-500 to-red-600 text-white',
    amber: 'bg-gradient-to-br from-amber-500 to-orange-500 text-white'
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`rounded-md shadow-md p-6 ${colors[color]} relative overflow-hidden group`}
    >
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <Icon className="w-8 h-8 opacity-80" />
          {trend && (
            <div className={`flex items-center space-x-1 px-2 py-1 rounded-full ${
              trendUp ? 'bg-green-400/20' : 'bg-red-400/20'
            }`}>
              {trendUp ? (
                <ArrowUpRight className="w-3 h-3" />
              ) : (
                <ArrowDownRight className="w-3 h-3" />
              )}
              <span className="text-xs font-medium">{trend}</span>
            </div>
          )}
        </div>
        <p className="text-3xl font-bold mb-1">{value}</p>
        <p className="text-sm opacity-80">{label}</p>
        {subtitle && (
          <p className="text-xs opacity-60 mt-2">{subtitle}</p>
        )}
      </div>
    </motion.div>
  )
}

// Quick Stat Card
const QuickStatCard = ({ icon: Icon, label, value, change, positive }) => (
  <div className="bg-white rounded-sm shadow-sm p-4 border border-gray-100">
    <div className="flex items-center justify-between mb-2">
      <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
        <Icon className="w-5 h-5 text-gray-600" />
      </div>
      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
        positive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
      }`}>
        {change}
      </span>
    </div>
    <p className="text-lg font-bold text-gray-900">{value}</p>
    <p className="text-xs text-gray-500">{label}</p>
  </div>
)

// Enhanced Vehicle Card
const VehicleCard = ({ vehicle, getStatusBadge, getConditionColor, selected, onSelect, onQuickView }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ y: -8 }}
      className={`bg-white rounded-2xl shadow-xl border overflow-hidden group cursor-pointer transition-all duration-300 ${
        selected ? 'border-red-600 ring-4 ring-red-800/20' : 'border-gray-100 hover:border-[#3b2a1f]/30'
      }`}
      onClick={onQuickView}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={`/images/${vehicle.images[0]}`}
          alt={vehicle.title}
          className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Image count badge */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs flex items-center">
          <Camera className="w-3 h-3 mr-1" />
          {vehicle.images.length}
        </div>

        {/* Featured/Hot badges */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          {vehicle.isFeatured && (
            <span className="bg-amber-500 text-white px-2 py-1 rounded-lg text-xs font-medium flex items-center shadow-lg">
              <Star className="w-3 h-3 mr-1 fill-white" /> Featured
            </span>
          )}
          {vehicle.isHot && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-medium flex items-center shadow-lg">
              <Zap className="w-3 h-3 mr-1" /> Hot
            </span>
          )}
        </div>

        {/* Status badge */}
        <div className="absolute bottom-4 left-4">
          {getStatusBadge(vehicle.status)}
        </div>

        {/* Checkbox */}
        <div className="absolute top-4 right-4">
          <input
            type="checkbox"
            checked={selected}
            onChange={(e) => {
              e.stopPropagation()
              onSelect()
            }}
            onClick={(e) => e.stopPropagation()}
            className="w-5 h-5 rounded border-gray-300 text-[#3b2a1f] focus:ring-[#3b2a1f]"
          />
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-gray-900 mb-2 line-clamp-1">{vehicle.title}</h3>
        
        {/* Quick Specs */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center p-2 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors">
            <Calendar className="w-4 h-4 text-gray-500 mx-auto mb-1" />
            <span className="text-xs font-medium">{vehicle.year}</span>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors">
            <Gauge className="w-4 h-4 text-gray-500 mx-auto mb-1" />
            <span className="text-xs font-medium">{vehicle.mileage.toLocaleString()}km</span>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors">
            <Fuel className="w-4 h-4 text-gray-500 mx-auto mb-1" />
            <span className="text-xs font-medium">{vehicle.fuelType}</span>
          </div>
        </div>

        {/* Condition */}
        <div className="mb-3">
          <span className={`text-xs px-2 py-1 rounded-full ${getConditionColor(vehicle.condition)}`}>
            {vehicle.condition.charAt(0).toUpperCase() + vehicle.condition.slice(1)} Condition
          </span>
        </div>

        {/* Price and Location */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#3b2a1f]">${vehicle.price.toLocaleString()}</p>
            <div className="flex items-center mt-1 text-xs text-gray-500">
              <MapPin className="w-3 h-3 mr-1" />
              {vehicle.location === 'canada' ? 'Canada' : 'Ghana'}
              {vehicle.shipmentIncluded && vehicle.location === 'canada' && (
                <>
                  <span className="mx-2">•</span>
                  <Truck className="w-3 h-3 mr-1 text-green-600" />
                  <span className="text-green-600">Ship incl.</span>
                </>
              )}
            </div>
          </div>
          
          {/* Performance stats */}
          <div className="flex items-center space-x-3">
            <div className="text-center">
              <p className="text-sm font-bold text-gray-900">{vehicle.views}</p>
              <p className="text-xs text-gray-500">views</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-gray-900">{vehicle.inquiries}</p>
              <p className="text-xs text-gray-500">inq</p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
          <button 
            onClick={(e) => {
              e.stopPropagation()
              onQuickView()
            }}
            className="text-sm text-[#3b2a1f] hover:text-[#5c483a] font-medium flex items-center group"
          >
            <Eye className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
            Quick View
          </button>
          <Link
            to={`/admin/vehicles/${vehicle.id}/edit`}
            onClick={(e) => e.stopPropagation()}
            className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
          >
            <Edit className="w-4 h-4 mr-1" />
            Edit
          </Link>
          <button 
            onClick={(e) => {
              e.stopPropagation()
              // Handle delete
            }}
            className="text-sm text-red-500 hover:text-red-700 flex items-center"
          >
            <Trash2 className="w-4 h-4 mr-1" />
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// Compact Vehicle Card
const CompactVehicleCard = ({ vehicle, getStatusBadge, selected, onSelect }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ y: -4 }}
      className={`bg-white rounded-xl shadow-lg border overflow-hidden ${
        selected ? 'border-[#3b2a1f] ring-2 ring-[#3b2a1f]/20' : 'border-gray-100'
      }`}
    >
      <div className="relative h-32 overflow-hidden">
        <img
          src={`/images/${vehicle.images[0]}`}
          alt={vehicle.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2">
          {getStatusBadge(vehicle.status)}
        </div>
        <div className="absolute top-2 right-2">
          <input
            type="checkbox"
            checked={selected}
            onChange={onSelect}
            onClick={(e) => e.stopPropagation()}
            className="w-4 h-4 rounded border-gray-300 text-[#3b2a1f]"
          />
        </div>
        {vehicle.isFeatured && (
          <div className="absolute bottom-2 right-2">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          </div>
        )}
      </div>
      <div className="p-3">
        <h4 className="font-medium text-sm text-gray-900 line-clamp-1 mb-1">{vehicle.title}</h4>
        <div className="flex items-center justify-between">
          <p className="font-bold text-[#3b2a1f] text-sm">${vehicle.price.toLocaleString()}</p>
          <div className="flex items-center text-xs text-gray-500">
            <MapPin className="w-3 h-3 mr-1" />
            {vehicle.location === 'canada' ? 'CA' : 'GH'}
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
          <span>{vehicle.year}</span>
          <span>{vehicle.mileage.toLocaleString()}km</span>
          <span>{vehicle.views} views</span>
        </div>
      </div>
    </motion.div>
  )
}

export default VehicleManagement