import { Link } from 'react-router-dom'
import { ArrowLeft, Plus, Edit, Trash2 } from 'lucide-react'

const VehicleCategories = () => {
  const categories = [
    { id: 1, name: 'SUVs', count: 12 },
    { id: 2, name: 'Sedans', count: 8 },
    { id: 3, name: 'Trucks', count: 5 },
    { id: 4, name: 'Electric', count: 3 },
    { id: 5, name: 'Luxury', count: 7 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/admin/vehicles" className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Vehicle Categories</h1>
        </div>
        <button className="flex items-center px-4 py-2 bg-[#3b2a1f] text-white rounded-lg hover:bg-[#5c483a]">
          <Plus className="w-5 h-5 mr-2" />
          Add Category
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Vehicles</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{category.name}</td>
                <td className="px-6 py-4">{category.count} vehicles</td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="p-1 hover:bg-gray-100 rounded text-blue-600">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default VehicleCategories