import { useState } from 'react'
import { Save, Upload, Image, Plus, Trash2 } from 'lucide-react'
import Button from '@components/ui/Button'

const Content = () => {
  const [homepageContent, setHomepageContent] = useState({
    heroTitle: "Quality Vehicles from Canada to Ghana",
    heroSubtitle: "Your trusted partner for importing reliable, inspected vehicles at competitive prices.",
    featuredText: "Carefully selected cars available for immediate import",
    testimonialTitle: "What Our Customers Say",
  })

  const [contactInfo, setContactInfo] = useState({
    phoneCanada: '+1 (234) 567-890',
    phoneGhana: '+233 12 345 6789',
    email: 'info@hadismotors.com',
    whatsapp: 'https://wa.me/1234567890',
  })

  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Kwame Mensah',
      location: 'Accra, Ghana',
      text: "Hadi's Motors made importing my first car from Canada incredibly smooth. The transparency and communication were excellent!",
      rating: 5,
    },
    {
      id: 2,
      name: 'Ama Asante',
      location: 'Kumasi, Ghana',
      text: 'Professional service from start to finish. The vehicle arrived exactly as described. Will definitely use them again.',
      rating: 5,
    },
  ])

  const [activeTab, setActiveTab] = useState('homepage')

  const handleSave = () => {
    // In production, this would save to your backend
    alert('Content saved successfully!')
  }

  const addTestimonial = () => {
    const newTestimonial = {
      id: testimonials.length + 1,
      name: '',
      location: '',
      text: '',
      rating: 5,
    }
    setTestimonials([...testimonials, newTestimonial])
  }

  const removeTestimonial = (id) => {
    setTestimonials(testimonials.filter(t => t.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Content Management</h1>
        <p className="text-gray-600">Update website content and information</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {['homepage', 'contact', 'testimonials'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === tab
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Forms */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        {activeTab === 'homepage' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Homepage Content</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hero Title
              </label>
              <input
                type="text"
                value={homepageContent.heroTitle}
                onChange={(e) => setHomepageContent({...homepageContent, heroTitle: e.target.value})}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hero Subtitle
              </label>
              <textarea
                value={homepageContent.heroSubtitle}
                onChange={(e) => setHomepageContent({...homepageContent, heroSubtitle: e.target.value})}
                className="input-field"
                rows="3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Featured Vehicles Text
              </label>
              <input
                type="text"
                value={homepageContent.featuredText}
                onChange={(e) => setHomepageContent({...homepageContent, featuredText: e.target.value})}
                className="input-field"
              />
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Canada Phone Number
                </label>
                <input
                  type="text"
                  value={contactInfo.phoneCanada}
                  onChange={(e) => setContactInfo({...contactInfo, phoneCanada: e.target.value})}
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ghana Phone Number
                </label>
                <input
                  type="text"
                  value={contactInfo.phoneGhana}
                  onChange={(e) => setContactInfo({...contactInfo, phoneGhana: e.target.value})}
                  className="input-field"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                  className="input-field"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp Link
                </label>
                <input
                  type="text"
                  value={contactInfo.whatsapp}
                  onChange={(e) => setContactInfo({...contactInfo, whatsapp: e.target.value})}
                  className="input-field"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Customer Testimonials</h2>
              <Button onClick={addTestimonial} className="flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                Add Testimonial
              </Button>
            </div>
            
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-gray-900">Testimonial #{index + 1}</h3>
                  <button 
                    onClick={() => removeTestimonial(testimonial.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Customer Name
                    </label>
                    <input
                      type="text"
                      value={testimonial.name}
                      onChange={(e) => {
                        const newTestimonials = [...testimonials]
                        newTestimonials[index].name = e.target.value
                        setTestimonials(newTestimonials)
                      }}
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      value={testimonial.location}
                      onChange={(e) => {
                        const newTestimonials = [...testimonials]
                        newTestimonials[index].location = e.target.value
                        setTestimonials(newTestimonials)
                      }}
                      className="input-field"
                      placeholder="Accra, Ghana"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Testimonial Text
                    </label>
                    <textarea
                      value={testimonial.text}
                      onChange={(e) => {
                        const newTestimonials = [...testimonials]
                        newTestimonials[index].text = e.target.value
                        setTestimonials(newTestimonials)
                      }}
                      className="input-field"
                      rows="3"
                      placeholder="What the customer said..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rating (1-5)
                    </label>
                    <select
                      value={testimonial.rating}
                      onChange={(e) => {
                        const newTestimonials = [...testimonials]
                        newTestimonials[index].rating = parseInt(e.target.value)
                        setTestimonials(newTestimonials)
                      }}
                      className="input-field"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num} Star{num !== 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Customer Photo
                    </label>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                        <Image className="w-8 h-8 text-gray-400" />
                      </div>
                      <button className="btn-secondary flex items-center">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Photo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Save Button */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <Button
            onClick={handleSave}
            className="flex items-center"
          >
            <Save className="w-5 h-5 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Content