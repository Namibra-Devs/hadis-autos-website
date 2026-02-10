import { useState, useEffect } from 'react'
import { Search, Filter } from 'lucide-react'
import VehicleCard from '@components/ui/VehicleCard'
import FilterBar from '@components/ui/FilterBar'
import { vehicleData } from '@utils/data'

const Cars = () => {
  const [vehicles, setVehicles] = useState(vehicleData)
  const [filters, setFilters] = useState({
    search: '',
    location: 'all',
    make: 'all',
    minPrice: '',
    maxPrice: '',
    year: 'all',
  })
  const [filteredVehicles, setFilteredVehicles] = useState(vehicleData)

  useEffect(() => {
    let result = [...vehicles]

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      result = result.filter(vehicle =>
        vehicle.title.toLowerCase().includes(searchLower) ||
        vehicle.make.toLowerCase().includes(searchLower) ||
        vehicle.model.toLowerCase().includes(searchLower)
      )
    }

    // Location filter
    if (filters.location !== 'all') {
      result = result.filter(vehicle => vehicle.location === filters.location)
    }

    // Make filter
    if (filters.make !== 'all') {
      result = result.filter(vehicle => vehicle.make === filters.make)
    }

    // Price filters
    if (filters.minPrice) {
      result = result.filter(vehicle => vehicle.price >= parseInt(filters.minPrice))
    }
    if (filters.maxPrice) {
      result = result.filter(vehicle => vehicle.price <= parseInt(filters.maxPrice))
    }

    // Year filter
    if (filters.year !== 'all') {
      result = result.filter(vehicle => vehicle.year === parseInt(filters.year))
    }

    setFilteredVehicles(result)
  }, [filters, vehicles])

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }))
  }

  const uniqueMakes = [...new Set(vehicles.map(v => v.make))]
  const uniqueYears = [...new Set(vehicles.map(v => v.year))].sort((a, b) => b - a)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Available Vehicles
        </h1>
        <p className="text-gray-600">
          Browse our selection of quality vehicles available for import from Canada
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by make, model, or keyword..."
              className="input-field pl-10"
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
            <select
              className="input-field"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
            >
              <option value="all">All Locations</option>
              <option value="canada">Canada</option>
              <option value="ghana">Ghana</option>
            </select>

            <select
              className="input-field"
              value={filters.make}
              onChange={(e) => handleFilterChange('make', e.target.value)}
            >
              <option value="all">All Makes</option>
              {uniqueMakes.map(make => (
                <option key={make} value={make}>{make}</option>
              ))}
            </select>

            <input
              type="number"
              placeholder="Min Price"
              className="input-field"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange('minPrice', e.target.value)}
            />

            <select
              className="input-field"
              value={filters.year}
              onChange={(e) => handleFilterChange('year', e.target.value)}
            >
              <option value="all">All Years</option>
              {uniqueYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">
          {filteredVehicles.length} {filteredVehicles.length === 1 ? 'Vehicle' : 'Vehicles'} Found
        </h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Filter className="w-4 h-4" />
          <span>Filtered Results</span>
        </div>
      </div>

      {filteredVehicles.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">🚗</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No vehicles found</h3>
          <p className="text-gray-600">Try adjusting your filters to see more results</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Cars