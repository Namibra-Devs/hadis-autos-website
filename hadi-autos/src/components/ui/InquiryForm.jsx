import { useState } from 'react'
import { Send, Loader } from 'lucide-react'
import Button from './Button'

const InquiryForm = ({ vehicleId }) => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    vehicleId: vehicleId || '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // TODO: Connect to backend
    console.log('Form submitted:', formData)
    alert('Inquiry sent successfully! We\'ll contact you shortly.')
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
      vehicleId: vehicleId || '',
    })
    setLoading(false)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Send Inquiry</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
            placeholder="+1 (234) 567-890"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            name="message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="input-field"
            placeholder="I'm interested in this vehicle..."
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Inquiry
            </>
          )}
        </Button>
      </form>
    </div>
  )
}

export default InquiryForm