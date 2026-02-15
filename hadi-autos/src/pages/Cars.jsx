import { useState, useEffect } from 'react'
import { Search, X, SlidersHorizontal, ChevronDown } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import VehicleCard from '@components/ui/VehicleCard'
import { vehicleData } from '@utils/data'
import { 
  categories, 
  getCategoryCounts, 
  filterVehiclesByCategory, 
  getCategoryById 
} from '@utils/categories'

const Cars = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [vehicles] = useState(vehicleData)
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all')
  const [filters, setFilters] = useState({
    search: '',
    location: 'all',
    make: 'all',
    minPrice: '',
    maxPrice: '',
    year: 'all',
  })
  const [filteredVehicles, setFilteredVehicles] = useState(vehicleData)
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [showMobileCategoryDropdown, setShowMobileCategoryDropdown] = useState(false)
  const [sortBy, setSortBy] = useState('newest')
  const [showSortDropdown, setShowSortDropdown] = useState(false)

  // Get unique values for filters
  const uniqueMakes = [...new Set(vehicles.map(v => v.make))].sort()
  const uniqueYears = [...new Set(vehicles.map(v => v.year))].sort((a, b) => b - a)
  
  // Get category counts
  const categoryCounts = getCategoryCounts(vehicles)

  // Update URL when category changes
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
    setShowMobileCategoryDropdown(false)
    if (categoryId === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', categoryId)
    }
    setSearchParams(searchParams)
  }

  // Sorting function
  const sortVehicles = (vehiclesToSort, sortType) => {
    const sorted = [...vehiclesToSort]
    
    switch(sortType) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price)
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price)
      case 'year-newest':
        return sorted.sort((a, b) => b.year - a.year)
      case 'year-oldest':
        return sorted.sort((a, b) => a.year - b.year)
      case 'mileage-low':
        return sorted.sort((a, b) => a.mileage - b.mileage)
      case 'mileage-high':
        return sorted.sort((a, b) => b.mileage - a.mileage)
      case 'newest':
      default:
        return sorted.sort((a, b) => b.id - a.id)
    }
  }

  // Apply all filters and sorting
  useEffect(() => {
    // First filter by category
    let result = filterVehiclesByCategory(vehicles, activeCategory)

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

    // Apply sorting
    const sortedResult = sortVehicles(result, sortBy)
    
    setFilteredVehicles(sortedResult)
  }, [filters, vehicles, activeCategory, sortBy])

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }))
  }

  const clearFilters = () => {
    setFilters({
      search: '',
      location: 'all',
      make: 'all',
      minPrice: '',
      maxPrice: '',
      year: 'all',
    })
    setActiveCategory('all')
    setSortBy('newest')
    searchParams.delete('category')
    setSearchParams(searchParams)
  }

  const hasActiveFilters = () => {
    return filters.search !== '' ||
      filters.location !== 'all' ||
      filters.make !== 'all' ||
      filters.minPrice !== '' ||
      filters.maxPrice !== '' ||
      filters.year !== 'all' ||
      activeCategory !== 'all'
  }

  // Get sort display text
  const getSortDisplay = () => {
    switch(sortBy) {
      case 'price-low': return 'Price: Low to High'
      case 'price-high': return 'Price: High to Low'
      case 'year-newest': return 'Year: Newest First'
      case 'year-oldest': return 'Year: Oldest First'
      case 'mileage-low': return 'Mileage: Low to High'
      case 'mileage-high': return 'Mileage: High to Low'
      default: return 'Newest First'
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8 lg:py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Available Vehicles
          </h1>
          <p className="text-gray-600">
            Browse our selection of quality vehicles available for import from Canada to Ghana
          </p>
        </div>

        {/* Category Filter - Desktop Pills */}
        <div className="hidden lg:block bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Browse by Category
            </h3>
            <span className="text-xs text-gray-500">
              {categoryCounts[activeCategory] || categoryCounts.all} vehicles
            </span>
          </div>
          
          {/* Desktop Category Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === 'all'
                  ? 'bg-[#3b2a1f] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              All ({categoryCounts.all})
            </button>
            
            {categories.filter(c => c.id !== 'all').map((category) => {
              const count = categoryCounts[category.id] || 0
              if (count === 0) return null
              
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-md`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {category.name} ({count})
                </button>
              )
            })}
          </div>
        </div>

        {/* Mobile Category Dropdown */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowMobileCategoryDropdown(!showMobileCategoryDropdown)}
            className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Category:</span>
              <span className="text-sm font-semibold text-[#3b2a1f]">
                {getCategoryById(activeCategory)?.name} ({categoryCounts[activeCategory] || categoryCounts.all})
              </span>
            </div>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${showMobileCategoryDropdown ? 'rotate-180' : ''}`} />
          </button>

          {/* Mobile Category Dropdown Menu */}
          {showMobileCategoryDropdown && (
            <>
              <div 
                className="fixed inset-0 z-40 bg-black/20"
                onClick={() => setShowMobileCategoryDropdown(false)}
              />
              <div className="absolute left-4 right-4 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`
                    w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors
                    ${activeCategory === 'all' ? 'bg-gray-50' : ''}
                  `}
                >
                  <span className="font-medium">All Vehicles</span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {categoryCounts.all}
                  </span>
                </button>
                
                {categories.filter(c => c.id !== 'all').map((category) => {
                  const count = categoryCounts[category.id] || 0
                  if (count === 0) return null
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`
                        w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors
                        ${activeCategory === category.id ? 'bg-gray-50' : ''}
                      `}
                    >
                      <span className="font-medium">{category.name}</span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </>
          )}
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by make, model, or keyword..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f] focus:ring-1 focus:ring-[#3b2a1f]"
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
              />
              {filters.search && (
                <button
                  onClick={() => handleFilterChange('search', '')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>

            {/* Filter Toggle for Mobile */}
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-lg transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filters</span>
              {hasActiveFilters() && (
                <span className="bg-[#3b2a1f] text-white text-xs px-2 py-0.5 rounded-full">
                  {Object.values(filters).filter(v => v !== 'all' && v !== '').length + (activeCategory !== 'all' ? 1 : 0)}
                </span>
              )}
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <select
                className="px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f] bg-white min-w-[120px]"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <option value="all">All Locations</option>
                <option value="canada">Canada</option>
                <option value="ghana">Ghana</option>
              </select>

              <select
                className="px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f] bg-white min-w-[120px]"
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
                placeholder="Min $"
                className="w-24 px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              />

              <input
                type="number"
                placeholder="Max $"
                className="w-24 px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
              />

              <select
                className="px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f] bg-white min-w-[100px]"
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

          {/* Mobile Filters Panel */}
          {showMobileFilters && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-3">
                <select
                  className="px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f] bg-white"
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                >
                  <option value="all">All Locations</option>
                  <option value="canada">Canada</option>
                  <option value="ghana">Ghana</option>
                </select>

                <select
                  className="px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f] bg-white"
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
                  className="px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                />

                <input
                  type="number"
                  placeholder="Max Price"
                  className="px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                />

                <select
                  className="col-span-2 px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f] bg-white"
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
          )}
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters() && (
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-sm text-gray-600">Active filters:</span>
            
            {activeCategory !== 'all' && (
              <span className="inline-flex items-center space-x-2 bg-[#3b2a1f]/10 text-[#3b2a1f] px-3 py-1.5 rounded-full text-sm">
                <span>Category: {getCategoryById(activeCategory)?.name}</span>
                <button onClick={() => handleCategoryChange('all')}>
                  <X className="w-3 h-3 ml-1" />
                </button>
              </span>
            )}
            
            {filters.location !== 'all' && (
              <span className="inline-flex items-center space-x-2 bg-[#3b2a1f]/10 text-[#3b2a1f] px-3 py-1.5 rounded-full text-sm">
                <span>Location: {filters.location === 'canada' ? 'Canada' : 'Ghana'}</span>
                <button onClick={() => handleFilterChange('location', 'all')}>
                  <X className="w-3 h-3 ml-1" />
                </button>
              </span>
            )}
            
            {filters.make !== 'all' && (
              <span className="inline-flex items-center space-x-2 bg-[#3b2a1f]/10 text-[#3b2a1f] px-3 py-1.5 rounded-full text-sm">
                <span>Make: {filters.make}</span>
                <button onClick={() => handleFilterChange('make', 'all')}>
                  <X className="w-3 h-3 ml-1" />
                </button>
              </span>
            )}
            
            {(filters.minPrice || filters.maxPrice) && (
              <span className="inline-flex items-center space-x-2 bg-[#3b2a1f]/10 text-[#3b2a1f] px-3 py-1.5 rounded-full text-sm">
                <span>
                  Price: {filters.minPrice && `$${filters.minPrice}`}
                  {filters.minPrice && filters.maxPrice && ' - '}
                  {filters.maxPrice && `$${filters.maxPrice}`}
                </span>
                <button onClick={() => {
                  handleFilterChange('minPrice', '')
                  handleFilterChange('maxPrice', '')
                }}>
                  <X className="w-3 h-3 ml-1" />
                </button>
              </span>
            )}
            
            {filters.year !== 'all' && (
              <span className="inline-flex items-center space-x-2 bg-[#3b2a1f]/10 text-[#3b2a1f] px-3 py-1.5 rounded-full text-sm">
                <span>Year: {filters.year}</span>
                <button onClick={() => handleFilterChange('year', 'all')}>
                  <X className="w-3 h-3 ml-1" />
                </button>
              </span>
            )}
            
            {filters.search && (
              <span className="inline-flex items-center space-x-2 bg-[#3b2a1f]/10 text-[#3b2a1f] px-3 py-1.5 rounded-full text-sm">
                <span>Search: "{filters.search}"</span>
                <button onClick={() => handleFilterChange('search', '')}>
                  <X className="w-3 h-3 ml-1" />
                </button>
              </span>
            )}

            <button
              onClick={clearFilters}
              className="text-sm text-gray-500 hover:text-[#3b2a1f] underline"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Results Header with Functional Sorting */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            {filteredVehicles.length} {filteredVehicles.length === 1 ? 'Vehicle' : 'Vehicles'} Found
          </h2>
          
          {/* Custom Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center justify-between gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm min-w-[180px] hover:border-gray-300 transition-colors"
            >
              <span>{getSortDisplay()}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showSortDropdown && (
              <>
                <div 
                  className="fixed inset-0 z-40"
                  onClick={() => setShowSortDropdown(false)}
                />
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden">
                  {[
                    { value: 'newest', label: 'Newest First' },
                    { value: 'price-low', label: 'Price: Low to High' },
                    { value: 'price-high', label: 'Price: High to Low' },
                    { value: 'year-newest', label: 'Year: Newest First' },
                    { value: 'year-oldest', label: 'Year: Oldest First' },
                    { value: 'mileage-low', label: 'Mileage: Low to High' },
                    { value: 'mileage-high', label: 'Mileage: High to Low' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value)
                        setShowSortDropdown(false)
                      }}
                      className={`
                        w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors
                        ${sortBy === option.value ? 'bg-gray-50 text-[#3b2a1f] font-medium' : 'text-gray-700'}
                      `}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Vehicle Grid */}
        {filteredVehicles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl">
            <div className="text-6xl mb-4">🚗</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No vehicles found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters to see more results</p>
            <button
              onClick={clearFilters}
              className="text-[#3b2a1f] font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Cars