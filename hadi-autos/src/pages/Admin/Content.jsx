import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Home,
  FileText,
  Users,
  Phone,
  Mail,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Save,
  Upload,
  Plus,
  Edit,
  Trash2,
  Star,
  MessageSquare,
  Image as ImageIcon
} from 'lucide-react'

const ContentManagement = () => {
  const [activeTab, setActiveTab] = useState('homepage')
  const [homepage, setHomepage] = useState({
    heroTitle: 'Quality Vehicles from Canada to Ghana',
    heroSubtitle: 'Import reliable, inspected vehicles with transparent pricing and expert guidance.',
    ctaText: 'Browse Vehicles',
    stats: [
      { label: 'Vehicles Imported', value: '500+' },
      { label: 'Happy Customers', value: '98%' },
      { label: 'Years Experience', value: '10+' }
    ]
  })

  const [contact, setContact] = useState({
    phone: '+1 (234) 567-890',
    email: 'info@hadisautos.com',
    address: '123 Auto Street, Toronto, ON, Canada',
    whatsapp: '+1 (234) 567-890',
    facebook: 'hadisautos',
    twitter: 'hadisautos',
    instagram: 'hadisautos'
  })

  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Michael Adjei',
      role: 'First-time Importer',
      content: 'I was nervous about importing my first car from Canada, but Hadi\'s Motors made the process incredibly smooth.',
      rating: 5,
      avatar: '/images/testimonials/client1.jpg'
    },
    {
      id: 2,
      name: 'Abena Owusu',
      role: 'Business Owner',
      content: 'The transparency throughout the process was impressive. Will definitely use them again.',
      rating: 5,
      avatar: '/images/testimonials/client2.jpg'
    }
  ])

  const tabs = [
    { id: 'homepage', name: 'Homepage', icon: Home },
    { id: 'testimonials', name: 'Testimonials', icon: Users },
    { id: 'contact', name: 'Contact Details', icon: Phone }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Content Management</h1>
          <p className="text-gray-600 mt-1">Update website content, testimonials, and contact information</p>
        </div>
        <button className="flex items-center space-x-2 bg-gradient-to-r from-[#3b2a1f] to-[#5c483a] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300">
          <Save className="w-5 h-5" />
          <span>Save Changes</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-all
                  ${activeTab === tab.id
                    ? 'text-[#3b2a1f] border-b-2 border-[#3b2a1f] bg-[#3b2a1f]/5'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            )
          })}
        </div>

        <div className="p-6">
          {activeTab === 'homepage' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Hero Section</h2>
              
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hero Title
                  </label>
                  <input
                    type="text"
                    value={homepage.heroTitle}
                    onChange={(e) => setHomepage({...homepage, heroTitle: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3b2a1f] focus:ring-2 focus:ring-[#3b2a1f]/20"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hero Subtitle
                  </label>
                  <textarea
                    value={homepage.heroSubtitle}
                    onChange={(e) => setHomepage({...homepage, heroSubtitle: e.target.value})}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3b2a1f] focus:ring-2 focus:ring-[#3b2a1f]/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CTA Button Text
                  </label>
                  <input
                    type="text"
                    value={homepage.ctaText}
                    onChange={(e) => setHomepage({...homepage, ctaText: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3b2a1f] focus:ring-2 focus:ring-[#3b2a1f]/20"
                  />
                </div>
              </div>

              <h2 className="text-lg font-semibold text-gray-900 mb-4 mt-8">Statistics</h2>
              
              <div className="space-y-4">
                {homepage.stats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <input
                      type="text"
                      value={stat.value}
                      onChange={(e) => {
                        const newStats = [...homepage.stats]
                        newStats[index].value = e.target.value
                        setHomepage({...homepage, stats: newStats})
                      }}
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                      placeholder="Value"
                    />
                    <input
                      type="text"
                      value={stat.label}
                      onChange={(e) => {
                        const newStats = [...homepage.stats]
                        newStats[index].label = e.target.value
                        setHomepage({...homepage, stats: newStats})
                      }}
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                      placeholder="Label"
                    />
                    <button
                      onClick={() => {
                        const newStats = homepage.stats.filter((_, i) => i !== index)
                        setHomepage({...homepage, stats: newStats})
                      }}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                
                <button
                  onClick={() => {
                    setHomepage({
                      ...homepage,
                      stats: [...homepage.stats, { label: '', value: '' }]
                    })
                  }}
                  className="flex items-center space-x-2 text-[#3b2a1f] hover:text-[#5c483a]"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Statistic</span>
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'testimonials' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Manage Testimonials</h2>
                <button className="flex items-center space-x-2 px-4 py-2 bg-[#3b2a1f] text-white rounded-lg hover:bg-[#5c483a]">
                  <Plus className="w-4 h-4" />
                  <span>Add Testimonial</span>
                </button>
              </div>

              <div className="space-y-4">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                          <img src={testimonial.avatar} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-white rounded-lg">
                          <Edit className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-white rounded-lg text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    
                    <p className="text-gray-700">{testimonial.content}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'contact' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={contact.phone}
                    onChange={(e) => setContact({...contact, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3b2a1f]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={contact.email}
                    onChange={(e) => setContact({...contact, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3b2a1f]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Address
                  </label>
                  <input
                    type="text"
                    value={contact.address}
                    onChange={(e) => setContact({...contact, address: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3b2a1f]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    WhatsApp
                  </label>
                  <input
                    type="text"
                    value={contact.whatsapp}
                    onChange={(e) => setContact({...contact, whatsapp: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3b2a1f]"
                  />
                </div>
              </div>

              <h2 className="text-lg font-semibold text-gray-900 mb-4 mt-8">Social Media</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Facebook className="w-4 h-4 inline mr-2 text-blue-600" />
                    Facebook
                  </label>
                  <input
                    type="text"
                    value={contact.facebook}
                    onChange={(e) => setContact({...contact, facebook: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3b2a1f]"
                    placeholder="username"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Twitter className="w-4 h-4 inline mr-2 text-blue-400" />
                    Twitter
                  </label>
                  <input
                    type="text"
                    value={contact.twitter}
                    onChange={(e) => setContact({...contact, twitter: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3b2a1f]"
                    placeholder="username"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Instagram className="w-4 h-4 inline mr-2 text-pink-600" />
                    Instagram
                  </label>
                  <input
                    type="text"
                    value={contact.instagram}
                    onChange={(e) => setContact({...contact, instagram: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3b2a1f]"
                    placeholder="username"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContentManagement