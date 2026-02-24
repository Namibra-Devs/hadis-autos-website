import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Plus,
  Edit,
  Trash2,
  Car,
  Grid,
  Layers,
  Tag,
  Settings,
  Eye,
  TrendingUp,
  Package,
  AlertCircle,
  CheckCircle,
  XCircle,
  ChevronDown,
  MoreVertical,
  Search,
  Filter,
  Download,
  Upload,
  Copy,
  Archive,
  RefreshCw,
  Save,
  X,
  Star,
  Zap,
  Award,
  Sparkles,
  BarChart3,
  PieChart,
  FolderTree,
  Hash,
  Calendar,
  Clock,
  Users,
  ShoppingCart,
  DollarSign,
  GripVertical,
  Image as ImageIcon,
  FileText,
  Palette,
  Cpu,
  Battery,
  Wind,
  Thermometer,
  Shield,
  Wrench,
  SortAsc,
  SortDesc,
  MessageSquare,
  Maximize2,  
  Minimize2 
} from 'lucide-react'

const VehicleCategories = () => {
     const [isFullscreen, setIsFullscreen] = useState(false);
  const [categories, setCategories] = useState([
    { 
      id: 1, 
      name: 'SUVs', 
      slug: 'suvs',
      count: 12,
      description: 'Sport Utility Vehicles - Perfect for families and off-road adventures',
      icon: 'Car',
      color: '#3B82F6',
      featured: true,
      popular: true,
      parent: null,
      children: [5, 6],
      createdAt: '2024-01-15',
      updatedAt: '2024-02-20',
      metaTitle: 'SUVs for Sale | Premium SUVs',
      metaDesc: 'Find the best SUVs from top brands',
      image: 'suv-category.jpg',
      totalViews: 3450,
      totalInquiries: 156,
      avgPrice: 28500,
      status: 'active'
    },
    { 
      id: 2, 
      name: 'Sedans', 
      slug: 'sedans',
      count: 8,
      description: 'Classic sedans - Comfortable and fuel-efficient for daily commute',
      icon: 'Car',
      color: '#10B981',
      featured: true,
      popular: false,
      parent: null,
      children: [],
      createdAt: '2024-01-10',
      updatedAt: '2024-02-18',
      metaTitle: 'Sedans for Sale | Affordable Sedans',
      metaDesc: 'Browse our collection of quality sedans',
      image: 'sedan-category.jpg',
      totalViews: 2340,
      totalInquiries: 98,
      avgPrice: 22500,
      status: 'active'
    },
    { 
      id: 3, 
      name: 'Trucks', 
      slug: 'trucks',
      count: 5,
      description: 'Powerful trucks for work and recreation',
      icon: 'Truck',
      color: '#F59E0B',
      featured: true,
      popular: true,
      parent: null,
      children: [],
      createdAt: '2024-01-05',
      updatedAt: '2024-02-15',
      metaTitle: 'Trucks for Sale | Work Trucks',
      metaDesc: 'Find the perfect truck for your needs',
      image: 'truck-category.jpg',
      totalViews: 1890,
      totalInquiries: 67,
      avgPrice: 32000,
      status: 'active'
    },
    { 
      id: 4, 
      name: 'Electric', 
      slug: 'electric',
      count: 3,
      description: 'Electric vehicles - Zero emissions, high performance',
      icon: 'Battery',
      color: '#8B5CF6',
      featured: true,
      popular: false,
      parent: null,
      children: [],
      createdAt: '2024-01-20',
      updatedAt: '2024-02-22',
      metaTitle: 'Electric Cars for Sale | EVs',
      metaDesc: 'Browse our collection of electric vehicles',
      image: 'electric-category.jpg',
      totalViews: 4120,
      totalInquiries: 189,
      avgPrice: 42000,
      status: 'active'
    },
    { 
      id: 5, 
      name: 'Luxury', 
      slug: 'luxury',
      count: 7,
      description: 'Premium luxury vehicles from top brands',
      icon: 'Award',
      color: '#EC4899',
      featured: true,
      popular: true,
      parent: null,
      children: [7, 8],
      createdAt: '2024-01-18',
      updatedAt: '2024-02-21',
      metaTitle: 'Luxury Cars for Sale | Premium Vehicles',
      metaDesc: 'Experience luxury with our premium collection',
      image: 'luxury-category.jpg',
      totalViews: 5670,
      totalInquiries: 234,
      avgPrice: 65000,
      status: 'active'
    },
    { 
      id: 6, 
      name: 'Compact SUVs', 
      slug: 'compact-suvs',
      count: 4,
      description: 'Compact SUVs - City-friendly with SUV versatility',
      icon: 'Car',
      color: '#6366F1',
      featured: false,
      popular: true,
      parent: 1,
      children: [],
      createdAt: '2024-02-01',
      updatedAt: '2024-02-19',
      metaTitle: 'Compact SUVs for Sale',
      metaDesc: 'Find compact SUVs perfect for city driving',
      image: 'compact-suv.jpg',
      totalViews: 890,
      totalInquiries: 34,
      avgPrice: 24500,
      status: 'active'
    },
    { 
      id: 7, 
      name: 'Luxury Sedans', 
      slug: 'luxury-sedans',
      count: 3,
      description: 'Premium sedans with luxury features',
      icon: 'Car',
      color: '#EC4899',
      featured: false,
      popular: true,
      parent: 5,
      children: [],
      createdAt: '2024-02-05',
      updatedAt: '2024-02-17',
      metaTitle: 'Luxury Sedans for Sale',
      metaDesc: 'Elegant and sophisticated luxury sedans',
      image: 'luxury-sedan.jpg',
      totalViews: 670,
      totalInquiries: 28,
      avgPrice: 55000,
      status: 'active'
    },
    { 
      id: 8, 
      name: 'Luxury SUVs', 
      slug: 'luxury-suvs',
      count: 4,
      description: 'Premium SUVs with luxury amenities',
      icon: 'Car',
      color: '#EC4899',
      featured: true,
      popular: true,
      parent: 5,
      children: [],
      createdAt: '2024-02-08',
      updatedAt: '2024-02-16',
      metaTitle: 'Luxury SUVs for Sale',
      metaDesc: 'Spacious and luxurious SUVs',
      image: 'luxury-suv.jpg',
      totalViews: 890,
      totalInquiries: 42,
      avgPrice: 72000,
      status: 'inactive'
    }
  ])

  const [selectedCategories, setSelectedCategories] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState('grid') // grid, list, hierarchy
  const [sortBy, setSortBy] = useState('name')
  const [sortDirection, setSortDirection] = useState('asc')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingCategory, setEditingCategory] = useState(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null)
  const [expandedNodes, setExpandedNodes] = useState([1, 5]) // Expanded parent categories
  const [stats, setStats] = useState({
    totalCategories: 0,
    activeCategories: 0,
    totalVehicles: 0,
    avgVehiclesPerCategory: 0,
    totalViews: 0,
    totalInquiries: 0
  })

  const [filters, setFilters] = useState({
    status: 'all',
    featured: 'all',
    popular: 'all',
    hasChildren: 'all',
    minVehicles: '',
    maxVehicles: ''
  })

  // Calculate stats
  useEffect(() => {
    const active = categories.filter(c => c.status === 'active').length
    const totalVehicles = categories.reduce((sum, c) => sum + c.count, 0)
    const totalViews = categories.reduce((sum, c) => sum + (c.totalViews || 0), 0)
    const totalInquiries = categories.reduce((sum, c) => sum + (c.totalInquiries || 0), 0)
    
    setStats({
      totalCategories: categories.length,
      activeCategories: active,
      totalVehicles,
      avgVehiclesPerCategory: Math.round(totalVehicles / categories.length),
      totalViews,
      totalInquiries
    })
  }, [categories])

  // Filter and sort categories
  const filteredCategories = useMemo(() => {
    let filtered = categories.filter(category => {
      // Search
      if (searchTerm) {
        const term = searchTerm.toLowerCase()
        return (
          category.name.toLowerCase().includes(term) ||
          category.slug.toLowerCase().includes(term) ||
          category.description?.toLowerCase().includes(term)
        )
      }
      
      // Status filter
      if (filters.status !== 'all' && category.status !== filters.status) return false
      
      // Featured filter
      if (filters.featured !== 'all') {
        if (filters.featured === 'featured' && !category.featured) return false
        if (filters.featured === 'not-featured' && category.featured) return false
      }
      
      // Popular filter
      if (filters.popular !== 'all') {
        if (filters.popular === 'popular' && !category.popular) return false
        if (filters.popular === 'not-popular' && category.popular) return false
      }
      
      // Has children filter
      if (filters.hasChildren !== 'all') {
        const hasChildren = category.children && category.children.length > 0
        if (filters.hasChildren === 'yes' && !hasChildren) return false
        if (filters.hasChildren === 'no' && hasChildren) return false
      }
      
      // Vehicle count range
      if (filters.minVehicles && category.count < parseInt(filters.minVehicles)) return false
      if (filters.maxVehicles && category.count > parseInt(filters.maxVehicles)) return false
      
      return true
    })

    // Sort
    filtered.sort((a, b) => {
      let comparison = 0
      switch (sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name)
          break
        case 'count':
          comparison = a.count - b.count
          break
        case 'views':
          comparison = (a.totalViews || 0) - (b.totalViews || 0)
          break
        case 'inquiries':
          comparison = (a.totalInquiries || 0) - (b.totalInquiries || 0)
          break
        case 'created':
          comparison = new Date(a.createdAt) - new Date(b.createdAt)
          break
        case 'updated':
          comparison = new Date(a.updatedAt) - new Date(b.updatedAt)
          break
        default:
          comparison = 0
      }
      return sortDirection === 'asc' ? comparison : -comparison
    })

    return filtered
  }, [categories, searchTerm, filters, sortBy, sortDirection])

  // Build category hierarchy
  const buildHierarchy = (parentId = null) => {
    return filteredCategories
      .filter(c => c.parent === parentId)
      .map(c => ({
        ...c,
        children: buildHierarchy(c.id)
      }))
  }

  const categoryHierarchy = buildHierarchy()

  const toggleNode = (id) => {
    setExpandedNodes(prev =>
      prev.includes(id) ? prev.filter(n => n !== id) : [...prev, id]
    )
  }

  const handleBulkAction = (action) => {
    if (selectedCategories.length === 0) return

    switch(action) {
      case 'delete':
        if (window.confirm(`Delete ${selectedCategories.length} categories?`)) {
          setCategories(categories.filter(c => !selectedCategories.includes(c.id)))
          setSelectedCategories([])
        }
        break
      case 'activate':
        setCategories(categories.map(c =>
          selectedCategories.includes(c.id) ? { ...c, status: 'active' } : c
        ))
        setSelectedCategories([])
        break
      case 'deactivate':
        setCategories(categories.map(c =>
          selectedCategories.includes(c.id) ? { ...c, status: 'inactive' } : c
        ))
        setSelectedCategories([])
        break
      case 'feature':
        setCategories(categories.map(c =>
          selectedCategories.includes(c.id) ? { ...c, featured: true } : c
        ))
        setSelectedCategories([])
        break
      case 'unfeature':
        setCategories(categories.map(c =>
          selectedCategories.includes(c.id) ? { ...c, featured: false } : c
        ))
        setSelectedCategories([])
        break
      default:
        break
    }
  }

  const clearFilters = () => {
    setFilters({
      status: 'all',
      featured: 'all',
      popular: 'all',
      hasChildren: 'all',
      minVehicles: '',
      maxVehicles: ''
    })
    setSearchTerm('')
  }

  const getIconComponent = (iconName) => {
    const icons = {
      Car: Car,
      Truck: Car,
      Battery: Battery,
      Award: Award,
      default: Tag
    }
    return icons[iconName] || Tag
  }

  const getStatusBadge = (status) => {
    switch(status) {
      case 'active':
        return <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-medium flex items-center">
          <CheckCircle className="w-3 h-3 mr-1" /> Active
        </span>
      case 'inactive':
        return <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium flex items-center">
          <XCircle className="w-3 h-3 mr-1" /> Inactive
        </span>
      default:
        return null
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

  return (
    <div className="space-y-8 pb-12">
      {/* Premium Header */}
      <div className="relative overflow-hidden rounded-md bg-gradient-to-r from-red-600 via-red-900 to-red-900 p-8">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Link 
              to="/admin/vehicles" 
              className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all text-white"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white flex items-center">
                <FolderTree className="w-8 h-8 mr-3" />
                Vehicle Categories
              </h1>
              <p className="text-white/80 mt-2 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Organize and manage your vehicle categories with advanced controls
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-md hover:shadow-2xl hover:scale-105 transition-all duration-300 font-medium group cursor-pointer"
            >
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              <span>Add Category</span>
            </button>
            <button className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all text-white cursor-pointer">
              <Download className="w-5 h-5" />
            </button>
            <button className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all text-white cursor-pointer">
              <Upload className="w-5 h-5" />
            </button>
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

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard
          icon={Layers}
          label="Total Categories"
          value={stats.totalCategories}
          color="from-blue-500 to-blue-600"
        />
        <StatCard
          icon={CheckCircle}
          label="Active"
          value={stats.activeCategories}
          color="from-green-500 to-green-600"
          subtitle={`${Math.round(stats.activeCategories / stats.totalCategories * 100)}% active`}
        />
        <StatCard
          icon={Car}
          label="Total Vehicles"
          value={stats.totalVehicles}
          color="from-purple-500 to-purple-600"
        />
        <StatCard
          icon={Eye}
          label="Total Views"
          value={stats.totalViews.toLocaleString()}
          color="from-amber-500 to-amber-600"
        />
        <StatCard
          icon={MessageSquare}
          label="Inquiries"
          value={stats.totalInquiries.toLocaleString()}
          color="from-pink-500 to-pink-600"
        />
        <StatCard
          icon={BarChart3}
          label="Avg/Category"
          value={stats.avgVehiclesPerCategory}
          color="from-indigo-500 to-indigo-600"
        />
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-sm shadow-md border border-gray-100 overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-600 transition-colors" />
              <input
                type="text"
                placeholder="Search categories by name, slug, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-600/10 transition-all"
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
              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center space-x-2 px-6 py-4 border-2 rounded-xl transition-all cursor-pointer ${
                  showFilters 
                    ? 'bg-red-600 border-red-600 text-white' 
                    : 'border-gray-100 hover:border-gray-200 text-gray-700'
                }`}
              >
                <Filter className="w-5 h-5" />
                <span className="font-medium">Filters</span>
                {Object.values(filters).some(v => v !== 'all' && v !== '') && (
                  <span className="ml-2 px-2 py-0.5 bg-white text-purple-600 rounded-full text-xs font-bold">
                    {Object.values(filters).filter(v => v !== 'all' && v !== '').length}
                  </span>
                )}
              </button>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-4 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-red-600 bg-white appearance-none pr-12 cursor-pointer"
              >
                <option value="name">Sort by Name</option>
                <option value="count">Sort by Vehicle Count</option>
                <option value="views">Sort by Views</option>
                <option value="inquiries">Sort by Inquiries</option>
                <option value="created">Sort by Created Date</option>
                <option value="updated">Sort by Updated Date</option>
              </select>

              {/* Sort Direction */}
              <button
                onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
                className="p-4 border-2 border-gray-100 rounded-xl hover:border-gray-200 transition-all cursor-pointer"
              >
                {sortDirection === 'asc' ? (
                  <SortAsc className="w-5 h-5" />
                ) : (
                  <SortDesc className="w-5 h-5" />
                )}
              </button>

              {/* View Mode Toggle */}
              <div className="flex items-center border-2 border-gray-100 rounded-xl overflow-hidden ">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-4 transition-all cursor-pointer ${
                    viewMode === 'grid' 
                      ? 'bg-red-600 text-white' 
                      : 'hover:bg-gray-50 text-gray-600'
                  }`}
                  title="Grid View"
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-4 transition-all cursor-pointer ${
                    viewMode === 'list' 
                      ? 'bg-red-600 text-white' 
                      : 'hover:bg-gray-50 text-gray-600'
                  }`}
                  title="List View"
                >
                  <Layers className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('hierarchy')}
                  className={`p-4 transition-all cursor-pointer ${
                    viewMode === 'hierarchy' 
                      ? 'bg-red-600 text-white' 
                      : 'hover:bg-gray-50 text-gray-600'
                  }`}
                  title="Hierarchy View"
                >
                  <FolderTree className="w-5 h-5" />
                </button>
              </div>

              {/* Clear Filters */}
              {(searchTerm || Object.values(filters).some(v => v !== 'all' && v !== '')) && (
                <button
                  onClick={clearFilters}
                  className="p-4 border-2 border-gray-100 rounded-xl hover:border-red-200 hover:bg-red-50 text-red-600 transition-all group"
                  title="Clear all filters"
                >
                  <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform" />
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
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select
                      value={filters.status}
                      onChange={(e) => setFilters({...filters, status: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-red-600"
                    >
                      <option value="all">All Status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Featured</label>
                    <select
                      value={filters.featured}
                      onChange={(e) => setFilters({...filters, featured: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-red-600"
                    >
                      <option value="all">All</option>
                      <option value="featured">Featured</option>
                      <option value="not-featured">Not Featured</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Popular</label>
                    <select
                      value={filters.popular}
                      onChange={(e) => setFilters({...filters, popular: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-red-600"
                    >
                      <option value="all">All</option>
                      <option value="popular">Popular</option>
                      <option value="not-popular">Not Popular</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Has Subcategories</label>
                    <select
                      value={filters.hasChildren}
                      onChange={(e) => setFilters({...filters, hasChildren: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-red-600"
                    >
                      <option value="all">All</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Count</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        placeholder="Min"
                        value={filters.minVehicles}
                        onChange={(e) => setFilters({...filters, minVehicles: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-red-600"
                      />
                      <span className="text-gray-400">-</span>
                      <input
                        type="number"
                        placeholder="Max"
                        value={filters.maxVehicles}
                        onChange={(e) => setFilters({...filters, maxVehicles: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-red-600"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Bar */}
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredCategories.length}</span> of{' '}
              <span className="font-semibold text-gray-900">{categories.length}</span> categories
            </span>
          </div>
        </div>
      </div>

      {/* Bulk Actions */}
      <AnimatePresence>
        {selectedCategories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gradient-to-r from-red-600 via-red-900 to-red-900 rounded-2xl p-4 shadow-2xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-white font-medium">
                  {selectedCategories.length} categor{selectedCategories.length > 1 ? 'ies' : 'y'} selected
                </span>
                <button
                  onClick={() => setSelectedCategories([])}
                  className="text-white/80 hover:text-white text-sm cursor-pointer"
                >
                  Clear selection
                </button>
              </div>
              
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => handleBulkAction('activate')}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm transition-all flex items-center cursor-pointer"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Activate
                </button>
                <button
                  onClick={() => handleBulkAction('deactivate')}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm transition-all flex items-center cursor-pointer"
                >
                  <XCircle className="w-4 h-4 mr-2" />
                  Deactivate
                </button>
                <button
                  onClick={() => handleBulkAction('feature')}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm transition-all flex items-center cursor-pointer"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Feature
                </button>
                <button
                  onClick={() => handleBulkAction('unfeature')}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm transition-all flex items-center cursor-pointer"
                >
                  <Star className="w-4 h-4 mr-2 fill-white/20" />
                  Unfeature
                </button>
                <button
                  onClick={() => handleBulkAction('delete')}
                  className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-xl text-white text-sm transition-all flex items-center cursor-pointer"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - Different Views */}
      <AnimatePresence mode="wait">
        {viewMode === 'grid' && (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredCategories.map((category) => {
              const IconComponent = getIconComponent(category.icon)
              return (
                <CategoryCard
                  key={category.id}
                  category={category}
                  IconComponent={IconComponent}
                  getStatusBadge={getStatusBadge}
                  selected={selectedCategories.includes(category.id)}
                  onSelect={() => {
                    if (selectedCategories.includes(category.id)) {
                      setSelectedCategories(selectedCategories.filter(id => id !== category.id))
                    } else {
                      setSelectedCategories([...selectedCategories, category.id])
                    }
                  }}
                  onEdit={() => {
                    setEditingCategory(category)
                    setShowEditModal(true)
                  }}
                  onDelete={() => setShowDeleteConfirm(category.id)}
                />
              )
            })}
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
                      checked={selectedCategories.length === filteredCategories.length}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedCategories(filteredCategories.map(c => c.id))
                        } else {
                          setSelectedCategories([])
                        }
                      }}
                      className="w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Details</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Vehicles</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Performance</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredCategories.map((category) => {
                  const IconComponent = getIconComponent(category.icon)
                  return (
                    <tr key={category.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category.id)}
                          onChange={() => {
                            if (selectedCategories.includes(category.id)) {
                              setSelectedCategories(selectedCategories.filter(id => id !== category.id))
                            } else {
                              setSelectedCategories([...selectedCategories, category.id])
                            }
                          }}
                          className="w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: category.color + '20' }}
                          >
                            <IconComponent 
                              className="w-5 h-5" 
                              style={{ color: category.color }}
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{category.name}</p>
                            <p className="text-xs text-gray-500">Slug: {category.slug}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <p className="text-sm text-gray-600 line-clamp-1">{category.description}</p>
                          <div className="flex items-center text-xs text-gray-500">
                            <Calendar className="w-3 h-3 mr-1" />
                            Updated: {new Date(category.updatedAt).toLocaleDateString()}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">{getStatusBadge(category.status)}</td>
                      <td className="px-6 py-4">
                        <div className="text-center">
                          <p className="text-lg font-bold text-gray-900">{category.count}</p>
                          <p className="text-xs text-gray-500">vehicles</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <p className="text-sm font-semibold text-gray-900">{category.totalViews}</p>
                            <p className="text-xs text-gray-500">Views</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-semibold text-gray-900">{category.totalInquiries}</p>
                            <p className="text-xs text-gray-500">Inquiries</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => {
                              setEditingCategory(category)
                              setShowEditModal(true)
                            }}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => setShowDeleteConfirm(category.id)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-red-600"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

            {filteredCategories.length === 0 && (
              <div className="text-center py-16">
                <FolderTree className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No categories found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </motion.div>
        )}

        {viewMode === 'hierarchy' && (
          <motion.div
            key="hierarchy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-6"
          >
            <div className="space-y-2">
              {categoryHierarchy.map(category => (
                <HierarchyNode
                  key={category.id}
                  category={category}
                  level={0}
                  expandedNodes={expandedNodes}
                  onToggle={toggleNode}
                  selectedCategories={selectedCategories}
                  onSelect={(id) => {
                    if (selectedCategories.includes(id)) {
                      setSelectedCategories(selectedCategories.filter(c => c !== id))
                    } else {
                      setSelectedCategories([...selectedCategories, id])
                    }
                  }}
                  onEdit={() => {
                    setEditingCategory(category)
                    setShowEditModal(true)
                  }}
                  getStatusBadge={getStatusBadge}
                  getIconComponent={getIconComponent}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add/Edit Category Modal */}
      <AnimatePresence>
        {(showAddModal || showEditModal) && (
          <CategoryModal
            category={editingCategory}
            onClose={() => {
              setShowAddModal(false)
              setShowEditModal(false)
              setEditingCategory(null)
            }}
            onSave={(categoryData) => {
              if (editingCategory) {
                // Edit existing
                setCategories(categories.map(c =>
                  c.id === editingCategory.id ? { ...c, ...categoryData, updatedAt: new Date().toISOString().split('T')[0] } : c
                ))
              } else {
                // Add new
                const newCategory = {
                  id: categories.length + 1,
                  ...categoryData,
                  count: 0,
                  createdAt: new Date().toISOString().split('T')[0],
                  updatedAt: new Date().toISOString().split('T')[0],
                  totalViews: 0,
                  totalInquiries: 0,
                  children: []
                }
                setCategories([...categories, newCategory])
              }
              setShowAddModal(false)
              setShowEditModal(false)
              setEditingCategory(null)
            }}
            parentCategories={categories.filter(c => !c.parent)}
          />
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <DeleteConfirmModal
            onClose={() => setShowDeleteConfirm(null)}
            onConfirm={() => {
              setCategories(categories.filter(c => c.id !== showDeleteConfirm))
              setShowDeleteConfirm(null)
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

// Stat Card Component
const StatCard = ({ icon: Icon, label, value, color, subtitle }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className={`bg-gradient-to-br ${color} rounded-sm shadow-sm p-6 text-white relative overflow-hidden`}
  >
    <div className="absolute inset-0 bg-grid-white/10" />
    <div className="relative z-10">
      <Icon className="w-8 h-8 opacity-80 mb-3" />
      <p className="text-2xl font-bold mb-1">{value}</p>
      <p className="text-sm opacity-80">{label}</p>
      {subtitle && <p className="text-xs opacity-60 mt-2">{subtitle}</p>}
    </div>
  </motion.div>
)

// Category Card Component
const CategoryCard = ({ category, IconComponent, getStatusBadge, selected, onSelect, onEdit, onDelete }) => (
  <motion.div
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    whileHover={{ y: -8 }}
    className={`bg-white rounded-2xl shadow-xl border overflow-hidden transition-all duration-300 ${
      selected ? 'border-red-600 ring-4 ring-red-600/20' : 'border-gray-100 hover:border-red-600/30'
    }`}
  >
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: category.color + '20' }}
        >
          <IconComponent className="w-7 h-7" style={{ color: category.color }} />
        </div>
        <input
          type="checkbox"
          checked={selected}
          onChange={onSelect}
          onClick={(e) => e.stopPropagation()}
          className="w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-red-600"
        />
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-1">{category.name}</h3>
      <p className="text-sm text-gray-500 mb-3 line-clamp-2">{category.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {category.featured && (
          <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-lg text-xs font-medium flex items-center">
            <Star className="w-3 h-3 mr-1 fill-amber-700" /> Featured
          </span>
        )}
        {category.popular && (
          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-medium flex items-center">
            <Zap className="w-3 h-3 mr-1" /> Popular
          </span>
        )}
        {category.children?.length > 0 && (
          <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium flex items-center">
            <FolderTree className="w-3 h-3 mr-1" /> {category.children.length} sub
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <Car className="w-4 h-4 text-gray-500 mx-auto mb-1" />
          <p className="text-lg font-bold text-gray-900">{category.count}</p>
          <p className="text-xs text-gray-500">Vehicles</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <Eye className="w-4 h-4 text-gray-500 mx-auto mb-1" />
          <p className="text-lg font-bold text-gray-900">{category.totalViews}</p>
          <p className="text-xs text-gray-500">Views</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        {getStatusBadge(category.status)}
        <div className="flex space-x-2">
          <button 
            onClick={onEdit}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button 
            onClick={onDelete}
            className="p-2 hover:bg-red-100 rounded-lg transition-colors text-red-600 cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </motion.div>
)

// Hierarchy Node Component
const HierarchyNode = ({ category, level, expandedNodes, onToggle, selectedCategories, onSelect, onEdit, getStatusBadge, getIconComponent }) => {
  const IconComponent = getIconComponent(category.icon)
  const hasChildren = category.children && category.children.length > 0
  const isExpanded = expandedNodes.includes(category.id)

  return (
    <div className="select-none">
      <div 
        className={`flex items-center py-2 px-4 rounded-xl hover:bg-gray-50 transition-colors ${
          selectedCategories.includes(category.id) ? 'bg-purple-50' : ''
        }`}
        style={{ marginLeft: `${level * 24}px` }}
      >
        {hasChildren ? (
          <button
            onClick={() => onToggle(category.id)}
            className="p-1 hover:bg-gray-200 rounded mr-2"
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? '' : '-rotate-90'}`} />
          </button>
        ) : (
          <div className="w-6 mr-2" />
        )}
        
        <div 
          className="w-8 h-8 rounded-lg flex items-center justify-center mr-3"
          style={{ backgroundColor: category.color + '20' }}
        >
          <IconComponent className="w-4 h-4" style={{ color: category.color }} />
        </div>

        <div className="flex-1 flex items-center justify-between">
          <div>
            <span className="font-medium text-gray-900">{category.name}</span>
            <span className="text-sm text-gray-500 ml-2">({category.count})</span>
          </div>
          
          <div className="flex items-center space-x-4">
            {getStatusBadge(category.status)}
            
            <input
              type="checkbox"
              checked={selectedCategories.includes(category.id)}
              onChange={() => onSelect(category.id)}
              onClick={(e) => e.stopPropagation()}
              className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-red-600"
            />
            
            <button
              onClick={onEdit}
              className="p-1 hover:bg-gray-100 rounded "
            >
              <Edit className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {hasChildren && isExpanded && (
        <div className="mt-1">
          {category.children.map(child => (
            <HierarchyNode
              key={child.id}
              category={child}
              level={level + 1}
              expandedNodes={expandedNodes}
              onToggle={onToggle}
              selectedCategories={selectedCategories}
              onSelect={onSelect}
              onEdit={onEdit}
              getStatusBadge={getStatusBadge}
              getIconComponent={getIconComponent}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// Category Modal Component
const CategoryModal = ({ category, onClose, onSave, parentCategories }) => {
  const [formData, setFormData] = useState({
    name: category?.name || '',
    slug: category?.slug || '',
    description: category?.description || '',
    parent: category?.parent || '',
    color: category?.color || '#3B82F6',
    icon: category?.icon || 'Car',
    featured: category?.featured || false,
    popular: category?.popular || false,
    status: category?.status || 'active',
    metaTitle: category?.metaTitle || '',
    metaDesc: category?.metaDesc || ''
  })

  const generateSlug = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  }

  const handleNameChange = (e) => {
    const name = e.target.value
    setFormData({
      ...formData,
      name,
      slug: generateSlug(name)
    })
  }

  const icons = ['Car', 'Truck', 'Battery', 'Award', 'Settings', 'Wrench', 'Wind', 'Thermometer', 'Shield']

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {category ? 'Edit Category' : 'Add New Category'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault()
            onSave(formData)
          }}>
            <div className="space-y-6">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleNameChange}
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-purple-600"
                      placeholder="e.g., SUVs"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Slug *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.slug}
                      onChange={(e) => setFormData({...formData, slug: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-purple-600"
                      placeholder="e.g., suvs"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-purple-600"
                    placeholder="Enter category description..."
                  />
                </div>
              </div>

              {/* Parent Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Parent Category
                </label>
                <select
                  value={formData.parent}
                  onChange={(e) => setFormData({...formData, parent: e.target.value === '' ? null : parseInt(e.target.value)})}
                  className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-purple-600"
                >
                  <option value="">None (Top Level)</option>
                  {parentCategories.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              {/* Appearance */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Appearance</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Color
                    </label>
                    <input
                      type="color"
                      value={formData.color}
                      onChange={(e) => setFormData({...formData, color: e.target.value})}
                      className="w-full h-12 px-1 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-purple-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Icon
                    </label>
                    <select
                      value={formData.icon}
                      onChange={(e) => setFormData({...formData, icon: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-purple-600"
                    >
                      {icons.map(icon => (
                        <option key={icon} value={icon}>{icon}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Status & Features */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Status & Features</h3>
                <div className="grid grid-cols-3 gap-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                      className="w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                    />
                    <span className="text-sm text-gray-700">Featured</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.popular}
                      onChange={(e) => setFormData({...formData, popular: e.target.checked})}
                      className="w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                    />
                    <span className="text-sm text-gray-700">Popular</span>
                  </label>
                  <div>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({...formData, status: e.target.value})}
                      className="w-full px-4 py-2 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-purple-600"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* SEO */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meta Title
                    </label>
                    <input
                      type="text"
                      value={formData.metaTitle}
                      onChange={(e) => setFormData({...formData, metaTitle: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-purple-600"
                      placeholder="SEO title..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meta Description
                    </label>
                    <textarea
                      value={formData.metaDesc}
                      onChange={(e) => setFormData({...formData, metaDesc: e.target.value})}
                      rows="2"
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-purple-600"
                      placeholder="SEO description..."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-100">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl hover:shadow-lg transition-all font-medium cursor-pointer"
              >
                {category ? 'Save Changes' : 'Create Category'}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Delete Confirmation Modal
const DeleteConfirmModal = ({ onClose, onConfirm }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-white rounded-2xl max-w-md w-full p-6"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Trash2 className="w-8 h-8 text-red-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Category</h3>
        <p className="text-gray-500 mb-6">
          Are you sure you want to delete this category? This action cannot be undone.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm()
              onClose()
            }}
            className="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-medium cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
)

export default VehicleCategories