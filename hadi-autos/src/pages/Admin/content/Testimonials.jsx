import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Plus, Edit, Trash2, Star } from 'lucide-react'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    { id: 1, name: 'Kwame Mensah', role: 'Customer', rating: 5, text: 'Great service! Imported my car without any issues.' },
    { id: 2, name: 'Ama Asante', role: 'Customer', rating: 5, text: 'Very professional team. Highly recommended!' },
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/admin/content" className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Manage Testimonials</h1>
        </div>
        <button className="flex items-center px-4 py-2 bg-[#3b2a1f] text-white rounded-lg hover:bg-[#5c483a]">
          <Plus className="w-5 h-5 mr-2" />
          Add Testimonial
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Rating</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Testimonial</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < item.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 max-w-md">
                  <p className="text-sm text-gray-700 line-clamp-2">{item.text}</p>
                </td>
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

export default Testimonials