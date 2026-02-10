import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send, Loader } from 'lucide-react'
import Button from '@components/ui/Button'

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Contact form submitted:', formData)
    alert('Message sent successfully! We\'ll contact you shortly.')
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Contact Hadi's Motors
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get in touch with us for inquiries about vehicle imports, pricing, or shipping information.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone Numbers</h3>
                  <p className="text-gray-600 mt-1">
                    Canada: <a href="tel:+1234567890" className="text-primary-600 hover:text-primary-700">+1 (234) 567-890</a>
                  </p>
                  <p className="text-gray-600">
                    Ghana: <a href="tel:+233123456789" className="text-primary-600 hover:text-primary-700">+233 12 345 6789</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600 mt-1">
                    <a href="mailto:info@hadismotors.com" className="text-primary-600 hover:text-primary-700">
                      info@hadismotors.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Locations</h3>
                  <p className="text-gray-600 mt-1">Toronto, Canada</p>
                  <p className="text-gray-600">Accra, Ghana</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <MessageCircle className="w-6 h-6 text-green-600" />
                <h3 className="font-semibold text-gray-900">Quick WhatsApp Chat</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Get instant responses on WhatsApp
              </p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 btn-primary bg-green-600 hover:bg-green-700 w-full"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h2>
            <div className="space-y-3">
              {[
                { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
                { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST' },
                { day: 'Sunday', hours: '12:00 PM - 4:00 PM EST' },
              ].map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700">{schedule.day}</span>
                  <span className="font-medium text-gray-900">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select a subject</option>
                    <option value="vehicle-inquiry">Vehicle Inquiry</option>
                    <option value="shipping-quote">Shipping Quote</option>
                    <option value="pricing-question">Pricing Question</option>
                    <option value="general-question">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Tell us about your vehicle needs or any questions you have..."
                />
              </div>

              <Button
                type="submit"
                className="w-full md:w-auto"
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
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact