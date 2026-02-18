import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageSquare,
  Search,
  Filter,
  Mail,
  Phone,
  Calendar,
  User,
  Car,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  Download,
  Archive,
  Star,
  MoreVertical,
  Send,
  Paperclip
} from 'lucide-react'

const InquiryManagement = () => {
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      name: 'Kwame Mensah',
      email: 'kwame.mensah@email.com',
      phone: '+233 24 123 4567',
      vehicle: 'Toyota Camry XLE 2022',
      vehicleId: 1,
      message: 'I am interested in this vehicle. Is it still available? I would like to schedule a viewing.',
      status: 'pending',
      priority: 'high',
      date: '2024-02-15T10:30:00',
      source: 'website',
      notes: []
    },
    {
      id: 2,
      name: 'Ama Asante',
      email: 'ama.asante@email.com',
      phone: '+233 20 987 6543',
      vehicle: 'Honda CR-V EX-L 2021',
      vehicleId: 2,
      message: 'Please provide shipping quote to Tema. I am ready to proceed if the price is right.',
      status: 'in-progress',
      priority: 'medium',
      date: '2024-02-14T15:45:00',
      source: 'whatsapp',
      notes: [
        { id: 1, text: 'Sent shipping rates', date: '2024-02-14T16:00:00', user: 'Admin' }
      ]
    },
    {
      id: 3,
      name: 'Kofi Boateng',
      email: 'kofi.boateng@email.com',
      phone: '+233 54 567 8901',
      vehicle: 'Mercedes-Benz C300 2020',
      vehicleId: 3,
      message: 'Interested in financing options. Do you offer payment plans?',
      status: 'resolved',
      priority: 'low',
      date: '2024-02-13T09:15:00',
      source: 'website',
      notes: []
    }
  ])

  const [selectedInquiry, setSelectedInquiry] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    source: 'all'
  })
  const [showFilters, setShowFilters] = useState(false)
  const [replyText, setReplyText] = useState('')
  const [noteText, setNoteText] = useState('')

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending': return <AlertCircle className="w-4 h-4 text-yellow-600" />
      case 'in-progress': return <Clock className="w-4 h-4 text-blue-600" />
      case 'resolved': return <CheckCircle className="w-4 h-4 text-green-600" />
      default: return null
    }
  }

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-700'
      case 'medium': return 'bg-yellow-100 text-yellow-700'
      case 'low': return 'bg-green-100 text-green-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const filteredInquiries = inquiries.filter(inquiry => {
    if (searchTerm && !inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !inquiry.email.toLowerCase().includes(searchTerm.toLowerCase())) return false
    if (filters.status !== 'all' && inquiry.status !== filters.status) return false
    if (filters.priority !== 'all' && inquiry.priority !== filters.priority) return false
    if (filters.source !== 'all' && inquiry.source !== filters.source) return false
    return true
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Inquiry Management</h1>
          <p className="text-gray-600 mt-1">Manage and respond to customer inquiries</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50">
            <Archive className="w-4 h-4" />
            <span>Archive</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          label="Total Inquiries"
          value={inquiries.length}
          icon={MessageSquare}
          color="blue"
        />
        <StatCard
          label="Pending"
          value={inquiries.filter(i => i.status === 'pending').length}
          icon={AlertCircle}
          color="yellow"
        />
        <StatCard
          label="In Progress"
          value={inquiries.filter(i => i.status === 'in-progress').length}
          icon={Clock}
          color="blue"
        />
        <StatCard
          label="Resolved"
          value={inquiries.filter(i => i.status === 'resolved').length}
          icon={CheckCircle}
          color="green"
        />
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3b2a1f] focus:ring-2 focus:ring-[#3b2a1f]/20"
            />
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50"
          >
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </button>
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
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                  <select
                    value={filters.priority}
                    onChange={(e) => setFilters({...filters, priority: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                  >
                    <option value="all">All Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Source</label>
                  <select
                    value={filters.source}
                    onChange={(e) => setFilters({...filters, source: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                  >
                    <option value="all">All Sources</option>
                    <option value="website">Website</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="phone">Phone</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Inquiry List and Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* List */}
        <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900">All Inquiries ({filteredInquiries.length})</h3>
          </div>
          <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
            {filteredInquiries.map((inquiry) => (
              <button
                key={inquiry.id}
                onClick={() => setSelectedInquiry(inquiry)}
                className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                  selectedInquiry?.id === inquiry.id ? 'bg-gray-50' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-[#3b2a1f]/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-[#3b2a1f]">
                        {inquiry.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{inquiry.name}</p>
                      <p className="text-xs text-gray-500">{inquiry.vehicle}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(inquiry.priority)}`}>
                    {inquiry.priority}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{new Date(inquiry.date).toLocaleDateString()}</span>
                  <span className="flex items-center">
                    {getStatusIcon(inquiry.status)}
                    <span className="ml-1 capitalize">{inquiry.status}</span>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Detail View */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          {selectedInquiry ? (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedInquiry.name}</h2>
                  <p className="text-gray-600">{selectedInquiry.vehicle}</p>
                </div>
                <select
                  value={selectedInquiry.status}
                  onChange={(e) => {
                    const updated = { ...selectedInquiry, status: e.target.value }
                    setSelectedInquiry(updated)
                    // Update in list
                  }}
                  className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                >
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <a href={`mailto:${selectedInquiry.email}`} className="text-sm text-[#3b2a1f] hover:underline">
                    {selectedInquiry.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a href={`tel:${selectedInquiry.phone}`} className="text-sm text-[#3b2a1f] hover:underline">
                    {selectedInquiry.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    {new Date(selectedInquiry.date).toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Car className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Vehicle ID: {selectedInquiry.vehicleId}</span>
                </div>
              </div>

              {/* Message */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Message</h3>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-gray-700">{selectedInquiry.message}</p>
                </div>
              </div>

              {/* Internal Notes */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Internal Notes</h3>
                <div className="space-y-3 mb-3">
                  {selectedInquiry.notes.map((note) => (
                    <div key={note.id} className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">{note.text}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(note.date).toLocaleString()} by {note.user}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Add internal note..."
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                  />
                  <button
                    onClick={() => {
                      if (!noteText.trim()) return
                      const newNote = {
                        id: Date.now(),
                        text: noteText,
                        date: new Date().toISOString(),
                        user: 'Admin'
                      }
                      selectedInquiry.notes.push(newNote)
                      setSelectedInquiry({...selectedInquiry})
                      setNoteText('')
                    }}
                    className="px-4 py-2 bg-[#3b2a1f] text-white rounded-lg hover:bg-[#5c483a]"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Reply Section */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Send Reply</h3>
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3b2a1f] focus:ring-2 focus:ring-[#3b2a1f]/20"
                  placeholder="Type your reply..."
                />
                <div className="flex items-center justify-between mt-3">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                    <Paperclip className="w-4 h-4" />
                    <span className="text-sm">Attach files</span>
                  </button>
                  <button
                    onClick={() => {
                      // Send reply
                      setReplyText('')
                    }}
                    className="flex items-center space-x-2 px-6 py-2 bg-[#3b2a1f] text-white rounded-lg hover:bg-[#5c483a]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Reply</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Select an inquiry to view details</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const StatCard = ({ label, value, icon: Icon, color }) => {
  const colors = {
    blue: 'bg-blue-50 text-blue-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    green: 'bg-green-50 text-green-600',
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

export default InquiryManagement