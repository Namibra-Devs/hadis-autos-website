import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Save, Phone, Mail, MapPin, Globe } from 'lucide-react'

const ContactDetails = () => {
  const [contact, setContact] = useState({
    phone: '+1 (234) 567-890',
    email: 'info@hadismotors.com',
    address: '123 Business Ave, Toronto, ON, Canada',
    hours: 'Mon-Fri: 9am - 6pm EST',
    facebook: 'https://facebook.com/hadismotors',
    instagram: 'https://instagram.com/hadismotors',
    twitter: 'https://twitter.com/hadismotors'
  })

  const handleSave = () => {
    console.log('Saving contact:', contact)
    alert('Contact details saved successfully!')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/admin/content" className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Contact Details</h1>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center px-4 py-2 bg-[#3b2a1f] text-white rounded-lg hover:bg-[#5c483a]"
        >
          <Save className="w-5 h-5 mr-2" />
          Save Changes
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Phone className="w-4 h-4 mr-2" /> Phone Number
            </label>
            <input
              type="text"
              value={contact.phone}
              onChange={(e) => setContact({...contact, phone: e.target.value})}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Mail className="w-4 h-4 mr-2" /> Email Address
            </label>
            <input
              type="email"
              value={contact.email}
              onChange={(e) => setContact({...contact, email: e.target.value})}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <MapPin className="w-4 h-4 mr-2" /> Address
            </label>
            <input
              type="text"
              value={contact.address}
              onChange={(e) => setContact({...contact, address: e.target.value})}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Business Hours</label>
            <input
              type="text"
              value={contact.hours}
              onChange={(e) => setContact({...contact, hours: e.target.value})}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
            />
          </div>
        </div>

        <div className="pt-4 border-t">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Social Media Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Facebook</label>
              <input
                type="url"
                value={contact.facebook}
                onChange={(e) => setContact({...contact, facebook: e.target.value})}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
              <input
                type="url"
                value={contact.instagram}
                onChange={(e) => setContact({...contact, instagram: e.target.value})}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Twitter</label>
              <input
                type="url"
                value={contact.twitter}
                onChange={(e) => setContact({...contact, twitter: e.target.value})}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails