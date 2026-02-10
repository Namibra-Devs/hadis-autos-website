import { useState } from 'react'
import { Search, Filter, Mail, Phone, Calendar, CheckCircle, Clock, XCircle, Eye, MessageSquare } from 'lucide-react'
import Button from '@components/ui/Button'

const Inquiries = () => {
  const [inquiries] = useState([
    {
      id: 1,
      name: 'Kwame Mensah',
      phone: '+233 12 345 6789',
      email: 'kwame@example.com',
      vehicle: 'Toyota Camry XLE 2022',
      message: 'Interested in this vehicle. Please provide more details.',
      status: 'pending',
      date: '2024-01-15',
    },
    {
      id: 2,
      name: 'Ama Asante',
      phone: '+233 23 456 7890',
      email: 'ama@example.com',
      vehicle: 'Honda CR-V EX-L 2021',
      message: 'Need shipping quote for Ghana delivery.',
      status: 'responded',
      date: '2024-01-14',
    },
    {
      id: 3,
      name: 'Kofi Boateng',
      phone: '+233 34 567 8901',
      email: 'kofi@example.com',
      vehicle: 'Mercedes-Benz C300 2020',
      message: 'When can I schedule an inspection?',
      status: 'closed',
      date: '2024-01-13',
    },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesSearch = 
      inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.vehicle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.phone.includes(searchTerm)
    const matchesStatus = statusFilter === 'all' || inquiry.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4 text-yellow-500" />
      case 'responded': return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'closed': return <XCircle className="w-4 h-4 text-gray-500" />
      default: return null
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'responded': return 'bg-green-100 text-green-800'
      case 'closed': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Inquiry Management</h1>
        <p className="text-gray-600">Manage customer inquiries and responses</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search inquiries..."
              className="input-field pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="input-field"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="responded">Responded</option>
            <option value="closed">Closed</option>
          </select>

          <button className="btn-secondary flex items-center justify-center">
            <Filter className="w-5 h-5 mr-2" />
            Export Data
          </button>
        </div>
      </div>

      {/* Inquiry List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vehicle
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Message
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
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
              {filteredInquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{inquiry.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="w-4 h-4 mr-2" />
                        {inquiry.phone}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="w-4 h-4 mr-2" />
                        {inquiry.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{inquiry.vehicle}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 max-w-xs truncate">{inquiry.message}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {inquiry.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(inquiry.status)}
                      <span className={`ml-2 inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(inquiry.status)}`}>
                        {inquiry.status.charAt(0).toUpperCase() + inquiry.status.slice(1)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <button className="text-blue-600 hover:text-blue-700" title="View">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="text-green-600 hover:text-green-700" title="Respond">
                        <MessageSquare className="w-5 h-5" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-700" title="Close">
                        <XCircle className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredInquiries.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">📧</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No inquiries found</h3>
            <p className="text-gray-600">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Inquiries