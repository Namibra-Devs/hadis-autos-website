const FilterBar = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Filter Vehicles</h3>
          <p className="text-gray-600 text-sm">Find your perfect vehicle</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-sm text-gray-600 hover:text-gray-900">
            Clear All
          </button>
          <button className="btn-primary">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterBar