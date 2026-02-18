import { useState } from 'react'
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
  Archive
} from 'lucide-react'

const VehicleManagement = () => {
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
      status: 'available',
      isFeatured: true,
      shipmentIncluded: true,
      fuelType: 'Hybrid',
      transmission: 'Automatic',
      color: 'White',
      images: ['1.avif', '2.webp', '3.webp'],
      category: 'sedan'
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
      status: 'available',
      isFeatured: true,
      shipmentIncluded: false,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      color: 'Black',
      images: ['6.avif', '7.avif', '8.avif'],
      category: 'suv'
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
      images: ['11.webp', '12.jpg', '13.webp'],
      category: 'luxury'
    }
  ])

  const [selectedVehicles, setSelectedVehicles] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    status: 'all',
    location: 'all',
    featured: 'all'
  })
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState('grid') // grid or list

  const getStatusBadge = (status) => {
    switch(status) {
      case 'available':
        return <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center">
          <CheckCircle className="w-3 h-3 mr-1" /> Available
        </span>
      case 'reserved':
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium flex items-center">
          <AlertCircle className="w-3 h-3 mr-1" /> Reserved
        </span>
      case 'sold':
        return <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium flex items-center">
          <XCircle className="w-3 h-3 mr-1" /> Sold
        </span>
      default:
        return null
    }
  }

  const filteredVehicles = vehicles.filter(vehicle => {
    if (searchTerm && !vehicle.title.toLowerCase().includes(searchTerm.toLowerCase())) return false
    if (filters.status !== 'all' && vehicle.status !== filters.status) return false
    if (filters.location !== 'all' && vehicle.location !== filters.location) return false
    if (filters.featured !== 'all') {
      if (filters.featured === 'featured' && !vehicle.isFeatured) return false
      if (filters.featured === 'not-featured' && vehicle.isFeatured) return false
    }
    return true
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Vehicle Management</h1>
          <p className="text-gray-600 mt-1">Manage your vehicle inventory, add new listings, and update details</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/admin/vehicles/new"
            className="flex items-center space-x-2 bg-gradient-to-r from-[#3b2a1f] to-[#5c483a] text-white px-4 py-2.5 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <Plus className="w-5 h-5" />
            <span>Add New Vehicle</span>
          </Link>
          <button className="p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50">
            <Download className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50">
            <Upload className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard label="Total Vehicles" value={vehicles.length} icon={Car} color="blue" />
        <StatCard label="Available" value={vehicles.filter(v => v.status === 'available').length} icon={CheckCircle} color="green" />
        <StatCard label="Reserved" value={vehicles.filter(v => v.status === 'reserved').length} icon={AlertCircle} color="yellow" />
        <StatCard label="Sold" value={vehicles.filter(v => v.status === 'sold').length} icon={XCircle} color="red" />
        <StatCard label="Featured" value={vehicles.filter(v => v.isFeatured).length} icon={Star} color="amber" />
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search vehicles by title, make, or model..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3b2a1f] focus:ring-2 focus:ring-[#3b2a1f]/20"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 ${viewMode === 'grid' ? 'bg-[#3b2a1f] text-white' : 'hover:bg-gray-50'}`}
              >
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-1.5 h-1.5 bg-current rounded-sm" />
                  <div className="w-1.5 h-1.5 bg-current rounded-sm" />
                  <div className="w-1.5 h-1.5 bg-current rounded-sm" />
                  <div className="w-1.5 h-1.5 bg-current rounded-sm" />
                </div>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 ${viewMode === 'list' ? 'bg-[#3b2a1f] text-white' : 'hover:bg-gray-50'}`}
              >
                <div className="space-y-0.5">
                  <div className="w-4 h-0.5 bg-current rounded-sm" />
                  <div className="w-4 h-0.5 bg-current rounded-sm" />
                  <div className="w-4 h-0.5 bg-current rounded-sm" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Options */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={filters.status}
                    onChange={(e) => setFilters({...filters, status: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                  >
                    <option value="all">All Status</option>
                    <option value="available">Available</option>
                    <option value="reserved">Reserved</option>
                    <option value="sold">Sold</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <select
                    value={filters.location}
                    onChange={(e) => setFilters({...filters, location: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                  >
                    <option value="all">All Locations</option>
                    <option value="canada">Canada</option>
                    <option value="ghana">Ghana</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Featured</label>
                  <select
                    value={filters.featured}
                    onChange={(e) => setFilters({...filters, featured: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                  >
                    <option value="all">All</option>
                    <option value="featured">Featured Only</option>
                    <option value="not-featured">Not Featured</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bulk Actions */}
      {selectedVehicles.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#3b2a1f] text-white rounded-2xl p-4 flex items-center justify-between"
        >
          <span className="text-sm font-medium">{selectedVehicles.length} vehicles selected</span>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors">
              <Copy className="w-4 h-4 inline mr-2" />
              Duplicate
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors">
              <Archive className="w-4 h-4 inline mr-2" />
              Archive
            </button>
            <button className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg text-sm transition-colors">
              <Trash2 className="w-4 h-4 inline mr-2" />
              Delete
            </button>
          </div>
        </motion.div>
      )}

      {/* Vehicle Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard
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
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                    className="rounded border-gray-300 text-[#3b2a1f] focus:ring-[#3b2a1f]"
                  />
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredVehicles.map((vehicle) => (
                <tr key={vehicle.id} className="hover:bg-gray-50">
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
                      className="rounded border-gray-300 text-[#3b2a1f] focus:ring-[#3b2a1f]"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-lg overflow-hidden">
                        <img src={`/images/${vehicle.images[0]}`} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{vehicle.title}</p>
                        <p className="text-sm text-gray-500">{vehicle.make} • {vehicle.model} • {vehicle.year}</p>
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
                  <td className="px-6 py-4 font-semibold text-gray-900">${vehicle.price.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-red-600">
                        <Trash2 className="w-4 h-4" />
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

const StatCard = ({ label, value, icon: Icon, color }) => {
  const colors = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    red: 'bg-red-50 text-red-600',
    amber: 'bg-amber-50 text-amber-600'
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        <div className={`w-12 h-12 rounded-xl ${colors[color]} flex items-center justify-center`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  )
}

const VehicleCard = ({ vehicle, getStatusBadge, selected, onSelect }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`bg-white rounded-2xl shadow-lg border overflow-hidden group hover:shadow-xl transition-all duration-300 ${
        selected ? 'border-[#3b2a1f] ring-2 ring-[#3b2a1f]/20' : 'border-gray-100'
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={`/images/${vehicle.images[0]}`}
          alt={vehicle.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex space-x-2">
          {vehicle.isFeatured && (
            <span className="px-2 py-1 bg-amber-500 text-white rounded-lg text-xs font-medium flex items-center">
              <Star className="w-3 h-3 mr-1 fill-white" /> Featured
            </span>
          )}
        </div>
        <div className="absolute top-4 right-4">
          <input
            type="checkbox"
            checked={selected}
            onChange={onSelect}
            onClick={(e) => e.stopPropagation()}
            className="w-5 h-5 rounded border-gray-300 text-[#3b2a1f] focus:ring-[#3b2a1f]"
          />
        </div>
        <div className="absolute bottom-4 left-4">
          {getStatusBadge(vehicle.status)}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">{vehicle.title}</h3>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <Calendar className="w-4 h-4 text-gray-500 mx-auto mb-1" />
            <span className="text-xs font-medium">{vehicle.year}</span>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <Gauge className="w-4 h-4 text-gray-500 mx-auto mb-1" />
            <span className="text-xs font-medium">{vehicle.mileage.toLocaleString()}km</span>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <Fuel className="w-4 h-4 text-gray-500 mx-auto mb-1" />
            <span className="text-xs font-medium">{vehicle.fuelType}</span>
          </div>
        </div>

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
          <div className="flex space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Eye className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Edit className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg text-red-600">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default VehicleManagement