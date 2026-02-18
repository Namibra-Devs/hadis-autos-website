import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Car,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Star,
  MapPin,
  Truck,
  CheckCircle,
  XCircle,
  AlertCircle,
  MoreVertical,
  ChevronDown,
  Download,
  Upload,
  Grid,
  List
} from 'lucide-react'

const VehicleList = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedVehicles, setSelectedVehicles] = useState([])
  const [filters, setFilters] = useState({
    status: 'all',
    location: 'all',
    featured: 'all',
    make: 'all'
  })

  // Mock vehicle data
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      title: 'Toyota Camry XLE 2022',
      make: 'Toyota',
      model: 'Camry',
      year: 2022,
      price: 18500,
      mileage: 25000,
      location: 'canada',
      shipmentIncluded: true,
      status: 'available',
      isFeatured: true,
      fuelType: 'Hybrid',
      transmission: 'Automatic',
      color: 'White',
      images: ['1.avif', '2.webp', '3.webp'],
      condition: 'Used'
    },
    {
      id: 2,
      title: 'Honda CR-V EX-L 2021',
      make: 'Honda',
      model: 'CR-V',
      year: 2021,
      price: 22000,
      mileage: 32000,
      location: 'canada',
      shipmentIncluded: false,
      status: 'available',
      isFeatured: true,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      color: 'Black',
      images: ['4.webp', '5.webp', '6.avif'],
      condition: 'Used'
    },
    {
      id: 3,
      title: 'Mercedes-Benz C300 2020',
      make: 'Mercedes-Benz',
      model: 'C300',
      year: 2020,
      price: 35000,
      mileage: 45000,
      location: 'ghana',
      status: 'reserved',
      isFeatured: false,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      color: 'Silver',
      images: ['7.avif', '8.avif', '9.avif'],
      condition: 'Used'
    },
    {
      id: 4,
      title: 'Ford F-150 Lightning 2023',
      make: 'Ford',
      model: 'F-150 Lightning',
      year: 2023,
      price: 59500,
      mileage: 9000,
      location: 'canada',
      shipmentIncluded: true,
      status: 'available',
      isFeatured: true,
      fuelType: 'Electric',
      transmission: 'Automatic',
      color: 'White',
      images: ['10.webp', '11.webp', '12.jpg'],
      condition: 'Used'
    }
  ])

  const uniqueMakes = [...new Set(vehicles.map(v => v.make))]

  const getStatusBadge = (status) => {
    switch(status) {
      case 'available':
        return <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Available</span>
      case 'reserved':
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">Reserved</span>
      case 'sold':
        return <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">Sold</span>
      default:
        return null
    }
  }

  const toggleVehicleSelection = (id) => {
    setSelectedVehicles(prev =>
      prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
    )
  }

  const toggleAllVehicles = () => {
    if (selectedVehicles.length === vehicles.length) {
      setSelectedVehicles([])
    } else {
      setSelectedVehicles(vehicles.map(v => v.id))
    }
  }

  const handleBulkAction = (action) => {
    if (selectedVehicles.length === 0) return
    
    switch(action) {
      case 'delete':
        if (confirm(`Delete ${selectedVehicles.length} vehicles?`)) {
          setVehicles(vehicles.filter(v => !selectedVehicles.includes(v.id)))
          setSelectedVehicles([])
        }
        break
      case 'feature':
        // Bulk feature logic
        break
      case 'export':
        // Export logic
        break
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Vehicle Management</h1>
          <p className="text-gray-600 mt-1">Manage your vehicle inventory</p>
        </div>
        <div className="flex items-center gap-3">
          {/* FR-VM-01: Add new vehicle */}
          <Link
            to="/admin/vehicles/new"
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#3b2a1f] to-[#5c483a] text-white rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <Plus className="w-5 h-5" />
            <span>Add New Vehicle</span>
          </Link>
          <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Download className="w-5 h-5" />
          </button>
          <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Upload className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bulk Actions */}
      <AnimatePresence>
        {selectedVehicles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-[#3b2a1f] text-white rounded-lg p-4 flex items-center justify-between"
          >
            <span className="font-medium">{selectedVehicles.length} vehicles selected</span>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleBulkAction('feature')}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors"
              >
                Mark Featured
              </button>
              <button
                onClick={() => handleBulkAction('export')}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors"
              >
                Export
              </button>
              <button
                onClick={() => handleBulkAction('delete')}
                className="px-3 py-1 bg-red-500/80 hover:bg-red-500 rounded-lg text-sm transition-colors"
              >
                Delete
              </button>
              <button
                onClick={() => setSelectedVehicles([])}
                className="text-white/60 hover:text-white"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search vehicles by title, make, model..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f] focus:ring-2 focus:ring-[#3b2a1f]/20 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 transition-colors ${viewMode === 'grid' ? 'bg-[#3b2a1f] text-white' : 'hover:bg-gray-50'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 transition-colors ${viewMode === 'list' ? 'bg-[#3b2a1f] text-white' : 'hover:bg-gray-50'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* FR-VM-04: Filter by status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={filters.status}
                    onChange={(e) => setFilters({...filters, status: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                  >
                    <option value="all">All Status</option>
                    <option value="available">Available</option>
                    <option value="reserved">Reserved</option>
                    <option value="sold">Sold</option>
                  </select>
                </div>

                {/* FR-VM-06: Filter by location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <select
                    value={filters.location}
                    onChange={(e) => setFilters({...filters, location: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                  >
                    <option value="all">All Locations</option>
                    <option value="canada">Canada</option>
                    <option value="ghana">Ghana</option>
                  </select>
                </div>

                {/* FR-VM-05: Filter by featured */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Featured</label>
                  <select
                    value={filters.featured}
                    onChange={(e) => setFilters({...filters, featured: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                  >
                    <option value="all">All Vehicles</option>
                    <option value="featured">Featured Only</option>
                    <option value="non-featured">Non-Featured</option>
                  </select>
                </div>

                {/* Filter by make */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
                  <select
                    value={filters.make}
                    onChange={(e) => setFilters({...filters, make: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                  >
                    <option value="all">All Makes</option>
                    {uniqueMakes.map(make => (
                      <option key={make} value={make}>{make}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setFilters({ status: 'all', location: 'all', featured: 'all', make: 'all' })}
                  className="text-sm text-[#3b2a1f] hover:text-[#5c483a]"
                >
                  Clear all filters
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Vehicle Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              {/* Image Gallery Preview */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`/images/${vehicle.images[0]}`}
                  alt={vehicle.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                  {getStatusBadge(vehicle.status)}
                </div>

                {/* Featured Badge */}
                {vehicle.isFeatured && (
                  <div className="absolute top-3 right-3">
                    <span className="flex items-center space-x-1 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      <Star className="w-3 h-3 fill-white" />
                      <span>Featured</span>
                    </span>
                  </div>
                )}

                {/* Selection Checkbox */}
                <div className="absolute bottom-3 left-3">
                  <input
                    type="checkbox"
                    checked={selectedVehicles.includes(vehicle.id)}
                    onChange={() => toggleVehicleSelection(vehicle.id)}
                    className="w-4 h-4 rounded border-gray-300 text-[#3b2a1f] focus:ring-[#3b2a1f]"
                  />
                </div>

                {/* Image Count */}
                <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg">
                  {vehicle.images.length} photos
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">{vehicle.title}</h3>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">{vehicle.year} • {vehicle.mileage.toLocaleString()}km</span>
                  <span className="text-sm font-medium text-gray-900">${vehicle.price.toLocaleString()}</span>
                </div>

                {/* Location & Shipment */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="flex items-center text-gray-600">
                    <MapPin className="w-3 h-3 mr-1" />
                    {vehicle.location === 'canada' ? 'Canada' : 'Ghana'}
                  </span>
                  {vehicle.location === 'canada' && (
                    <span className={`flex items-center ${vehicle.shipmentIncluded ? 'text-green-600' : 'text-amber-600'}`}>
                      <Truck className="w-3 h-3 mr-1" />
                      {vehicle.shipmentIncluded ? 'Ship incl.' : 'Ship extra'}
                    </span>
                  )}
                </div>

                {/* Action Buttons - FR-VM-02: Edit vehicle */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <Link
                    to={`/admin/vehicles/${vehicle.id}`}
                    className="flex items-center space-x-1 text-[#3b2a1f] hover:text-[#5c483a] text-sm font-medium"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </Link>
                  <Link
                    to={`/admin/vehicles/${vehicle.id}/edit`}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </Link>
                  <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedVehicles.length === vehicles.length}
                    onChange={toggleAllVehicles}
                    className="w-4 h-4 rounded border-gray-300 text-[#3b2a1f] focus:ring-[#3b2a1f]"
                  />
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Vehicle</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Location</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Price</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {vehicles.map((vehicle) => (
                <tr key={vehicle.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedVehicles.includes(vehicle.id)}
                      onChange={() => toggleVehicleSelection(vehicle.id)}
                      className="w-4 h-4 rounded border-gray-300 text-[#3b2a1f] focus:ring-[#3b2a1f]"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={`/images/${vehicle.images[0]}`}
                        alt={vehicle.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{vehicle.title}</p>
                        <p className="text-sm text-gray-600">{vehicle.year} • {vehicle.mileage.toLocaleString()}km</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(vehicle.status)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-900">
                        {vehicle.location === 'canada' ? 'Canada' : 'Ghana'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-gray-900">${vehicle.price.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Link
                        to={`/admin/vehicles/${vehicle.id}`}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Eye className="w-4 h-4 text-gray-600" />
                      </Link>
                      <Link
                        to={`/admin/vehicles/${vehicle.id}/edit`}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Edit className="w-4 h-4 text-blue-600" />
                      </Link>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default VehicleList