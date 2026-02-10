import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, Filter, Edit, Trash2, Eye, MapPin, Truck } from 'lucide-react'
import Button from '@components/ui/Button'

const Vehicles = () => {
  const [vehicles] = useState([
    {
      id: 1,
      title: 'Toyota Camry XLE 2022',
      location: 'canada',
      shipmentIncluded: true,
      status: 'available',
      price: 18500,
      year: 2022,
    },
    {
      id: 2,
      title: 'Honda CR-V EX-L 2021',
      location: 'canada',
      shipmentIncluded: false,
      status: 'available',
      price: 22000,
      year: 2021,
    },
    {
      id: 3,
      title: 'Mercedes-Benz C300 2020',
      location: 'ghana',
      status: 'available',
      price: 35000,
      year: 2020,
    },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [locationFilter, setLocationFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = locationFilter === 'all' || vehicle.location === locationFilter
    const matchesStatus = statusFilter === 'all' || vehicle.status === statusFilter
    return matchesSearch && matchesLocation && matchesStatus
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800'
      case 'reserved': return 'bg-yellow-100 text-yellow-800'
      case 'sold': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Vehicle Management</h1>
            <p className="text-gray-600">Manage your vehicle listings</p>
          </div>
          <Link
            to="/admin/vehicles/new"
            className="btn-primary flex items-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Vehicle
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search vehicles..."
              className="input-field pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="input-field"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option value="all">All Locations</option>
            <option value="canada">Canada</option>
            <option value="ghana">Ghana</option>
          </select>

          <select
            className="input-field"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="available">Available</option>
            <option value="reserved">Reserved</option>
            <option value="sold">Sold</option>
          </select>

          <button className="btn-secondary flex items-center justify-center">
            <Filter className="w-5 h-5 mr-2" />
            More Filters
          </button>
        </div>
      </div>

      {/* Vehicle List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vehicle
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Shipment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredVehicles.map((vehicle) => (
                <tr key={vehicle.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{vehicle.title}</div>
                      <div className="text-sm text-gray-500">Year: {vehicle.year}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-900">
                        {vehicle.location === 'canada' ? 'Canada' : 'Ghana'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {vehicle.location === 'canada' && (
                      <div className="flex items-center">
                        <Truck className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-sm text-gray-900">
                          {vehicle.shipmentIncluded ? 'Included' : 'Excluded'}
                        </span>
                      </div>
                    )}
                    {vehicle.location === 'ghana' && (
                      <span className="text-sm text-gray-500">N/A</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${vehicle.price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(vehicle.status)}`}>
                      {vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <Link
                        to={`/cars/${vehicle.id}`}
                        target="_blank"
                        className="text-blue-600 hover:text-blue-700"
                        title="View on website"
                      >
                        <Eye className="w-5 h-5" />
                      </Link>
                      <button className="text-green-600 hover:text-green-700" title="Edit">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-700" title="Delete">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">🚗</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No vehicles found</h3>
            <p className="text-gray-600">Try adjusting your filters or add a new vehicle</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Vehicles