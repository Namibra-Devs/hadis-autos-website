import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Mail, Phone, Calendar, Car, MessageSquare, CheckCircle, XCircle } from 'lucide-react'

const InquiryDetails = () => {
  const { id } = useParams()
  const [status, setStatus] = useState('pending')

  // Mock data
  const inquiry = {
    id: id,
    name: 'Kwame Mensah',
    email: 'kwame.mensah@example.com',
    phone: '+233 24 123 4567',
    vehicle: 'Toyota Camry XLE 2022',
    message: 'I am interested in this vehicle. Is it still available? I would like to schedule a viewing.',
    date: '2024-02-15',
    status: 'pending'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/admin/inquiries" className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Inquiry Details</h1>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Inquiry Message</h2>
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#3b2a1f] flex items-center justify-center text-white font-bold">
                {inquiry.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-medium">{inquiry.name}</p>
                <p className="text-sm text-gray-500">{inquiry.date}</p>
              </div>
            </div>
            <p className="text-gray-700">{inquiry.message}</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Add Note</h2>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
              placeholder="Add internal notes about this inquiry..."
            />
            <div className="flex justify-end mt-4">
              <button className="px-4 py-2 bg-[#3b2a1f] text-white rounded-lg hover:bg-[#5c483a]">
                Save Note
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a href={`mailto:${inquiry.email}`} className="text-[#3b2a1f] hover:underline">
                  {inquiry.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a href={`tel:${inquiry.phone}`} className="text-[#3b2a1f] hover:underline">
                  {inquiry.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Car className="w-5 h-5 text-gray-400" />
                <span>{inquiry.vehicle}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span>{inquiry.date}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                <CheckCircle className="w-4 h-4" />
                <span>Mark as Resolved</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <MessageSquare className="w-4 h-4" />
                <span>Send Reply</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InquiryDetails