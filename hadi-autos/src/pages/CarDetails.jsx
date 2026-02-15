import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { MapPin, Truck, Calendar, Gauge, Phone, MessageCircle, Check, X, ChevronLeft, ChevronRight, Fuel, Heart, Share2, Printer, Shield, Clock, Users, Star, Award } from 'lucide-react'
import Badge from '@components/ui/Badge'
import Button from '@components/ui/Button'
import InquiryForm from '@components/ui/InquiryForm'
import { vehicleData } from '@utils/data'
import { getVehicleImages, getVehicleImageFilenames } from '@utils/imageMappings'

const CarDetails = () => {
  const { id } = useParams()
  const [activeImage, setActiveImage] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [selectedTab, setSelectedTab] = useState('overview')
  
  // Find vehicle by ID
  const vehicle = vehicleData.find(v => v.id === parseInt(id)) || vehicleData[0]
  
  // Get images from centralized mapping - auto updates when imageMappings.js changes
  const images = getVehicleImages(parseInt(id))

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length)
  }

  // Specifications array
  const specifications = [
    { label: 'Make', value: vehicle.make },
    { label: 'Model', value: vehicle.model },
    { label: 'Year', value: vehicle.year },
    { label: 'Mileage', value: `${vehicle.mileage?.toLocaleString()} km` },
    { label: 'Fuel Type', value: vehicle.fuelType || 'Petrol' },
    { label: 'Transmission', value: vehicle.transmission || 'Automatic' },
    { label: 'Color', value: vehicle.color || 'Black' },
    { label: 'Condition', value: vehicle.condition || 'Used' },
    { label: 'Location', value: vehicle.location === 'canada' ? 'Canada' : 'Ghana' },
    { label: 'Stock ID', value: `HAD-${vehicle.id.toString().padStart(4, '0')}` },
    { label: 'Status', value: vehicle.status || 'Available' },
    { label: 'Price', value: `$${vehicle.price?.toLocaleString()}` },
  ]

  // Features list
  const features = [
    '150-point inspection completed',
    'Clean vehicle history report',
    'Original service records',
    'Professional-grade photos',
    'Comprehensive test drive report',
    'No accident history',
    'Original keys and manuals',
    'Full service history',
    'Money-back guarantee',
    'Export documentation ready'
  ]

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 mt-50">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm">
        <Link to="/" className="text-gray-500 hover:text-[#3b2a1f] transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <Link to="/cars" className="text-gray-500 hover:text-[#3b2a1f] transition-colors">Inventory</Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-[#3b2a1f] font-medium">{vehicle.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Images */}
        <div className="lg:col-span-2">
          {/* Main Image */}
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden mb-4 group">
            <div className="relative h-[400px] lg:h-[500px]">
              <img
                src={images[activeImage]}
                alt={vehicle.title}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#3b2a1f] transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#3b2a1f] transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm">
                {activeImage + 1} / {images.length}
              </div>

              {/* Location Badge */}
              <div className="absolute top-4 left-4">
                <Badge
                  variant={vehicle.location === 'canada' ? 'primary' : 'success'}
                  className="flex items-center shadow-lg backdrop-blur-sm bg-white/95 px-3 py-1.5"
                >
                  <MapPin className="w-3 h-3 mr-1" />
                  {vehicle.location === 'canada' ? 'Canada Stock' : 'Ghana Stock'}
                </Badge>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Share2 className="w-4 h-4 text-gray-700" />
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  activeImage === index 
                    ? 'border-[#3b2a1f] shadow-lg scale-105' 
                    : 'border-transparent hover:border-gray-300'
                }`}
              >
                <img
                  src={img}
                  alt={`${vehicle.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="space-y-6">
          {/* Vehicle Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{vehicle.title}</h1>
                <p className="text-gray-600 text-sm mt-1">{vehicle.make} • {vehicle.model} • {vehicle.year}</p>
                <div className="flex items-center space-x-3 mt-3">
                  <Badge
                    variant={vehicle.location === 'canada' ? 'primary' : 'success'}
                    className="flex items-center"
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    {vehicle.location === 'canada' ? 'Canada' : 'Ghana'}
                  </Badge>
                  {vehicle.status === 'available' ? (
                    <Badge variant="success">Available</Badge>
                  ) : vehicle.status === 'reserved' ? (
                    <Badge variant="warning">Reserved</Badge>
                  ) : (
                    <Badge variant="danger">Sold</Badge>
                  )}
                  {vehicle.isFeatured && (
                    <Badge variant="warning" className="bg-amber-500 text-white">Featured</Badge>
                  )}
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl lg:text-4xl font-bold text-[#3b2a1f]">
                  ${vehicle.price.toLocaleString()}
                </div>
                {vehicle.location === 'canada' && vehicle.shipmentIncluded && (
                  <div className="flex items-center justify-end text-xs text-green-600 mt-1">
                    <Truck className="w-3 h-3 mr-1" />
                    <span>Shipment included</span>
                  </div>
                )}
              </div>
            </div>

            {/* Key Specs Grid */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <Calendar className="w-4 h-4 text-[#3b2a1f] mx-auto mb-1" />
                <div className="text-xs text-gray-500">Year</div>
                <div className="text-sm font-semibold">{vehicle.year}</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <Gauge className="w-4 h-4 text-[#3b2a1f] mx-auto mb-1" />
                <div className="text-xs text-gray-500">Mileage</div>
                <div className="text-sm font-semibold">{vehicle.mileage.toLocaleString()}km</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <Fuel className="w-4 h-4 text-[#3b2a1f] mx-auto mb-1" />
                <div className="text-xs text-gray-500">Fuel</div>
                <div className="text-sm font-semibold">{vehicle.fuelType || 'Petrol'}</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <span className="block text-sm font-semibold mb-1">{vehicle.transmission || 'Auto'}</span>
                <div className="text-xs text-gray-500">Transmission</div>
              </div>
            </div>

            {/* Shipment Info */}
            {vehicle.location === 'canada' && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Truck className="w-5 h-5 text-[#3b2a1f]" />
                  <span className="font-medium">Shipment Information</span>
                </div>
                <div className="flex items-start space-x-2">
                  {vehicle.shipmentIncluded ? (
                    <>
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Shipment to Ghana is included in the price. Door-to-door delivery within 30-45 days.</span>
                    </>
                  ) : (
                    <>
                      <X className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Shipment cost is not included. Contact us for a shipping quote based on your location.</span>
                    </>
                  )}
                </div>
                {vehicle.shipmentNotes && (
                  <p className="text-sm text-gray-600 mt-2 bg-white p-2 rounded">{vehicle.shipmentNotes}</p>
                )}
              </div>
            )}

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-4">
              <div className="flex space-x-6">
                {['overview', 'specifications', 'features'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`
                      pb-3 text-sm font-medium capitalize transition-all duration-300 border-b-2
                      ${selectedTab === tab 
                        ? 'text-[#3b2a1f] border-[#3b2a1f]' 
                        : 'text-gray-500 border-transparent hover:text-gray-700'
                      }
                    `}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="mb-6 min-h-[150px]">
              {selectedTab === 'overview' && (
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    This {vehicle.title} is a premium vehicle available for import to Ghana. 
                    It has been thoroughly inspected and comes with complete documentation. 
                    Perfect for buyers looking for quality and reliability in the Ghanaian market.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">150-point inspection</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">Clean history report</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">Service records included</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">Ready for export</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'specifications' && (
                <div className="grid grid-cols-2 gap-4">
                  {specifications.slice(0, 8).map((spec, idx) => (
                    <div key={idx} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-500">{spec.label}</span>
                      <span className="text-sm font-medium text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {selectedTab === 'features' && (
                <div className="grid grid-cols-2 gap-3">
                  {features.slice(0, 8).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick CTAs */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/1234567890?text=I'm interested in ${vehicle.title} (${vehicle.id})`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <Shield className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                <div className="text-xs font-medium text-gray-700">Buyer Protection</div>
              </div>
              <div className="text-center">
                <Clock className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                <div className="text-xs font-medium text-gray-700">30-Day Guarantee</div>
              </div>
              <div className="text-center">
                <Users className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                <div className="text-xs font-medium text-gray-700">500+ Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Specifications Table (for larger screens) */}
      <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Vehicle Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specifications.map((spec, idx) => (
            <div key={idx} className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-500">{spec.label}</span>
              <span className="font-medium text-gray-900">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry Form Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Interested in this vehicle?</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="w-5 h-5 text-[#3b2a1f] mr-2" />
                Next Steps
              </h3>
              <ul className="space-y-4">
                {[
                  'Send inquiry with your questions',
                  'We\'ll contact you within 24 hours',
                  'Schedule vehicle inspection if needed',
                  'Proceed with purchase and shipping arrangements'
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-[#3b2a1f]/10 text-[#3b2a1f] flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h4 className="font-semibold text-amber-800 mb-2 flex items-center">
                <Star className="w-4 h-4 mr-2 fill-amber-500 text-amber-500" />
                Important Notes
              </h4>
              <ul className="text-sm text-amber-700 space-y-2">
                <li>• Prices are subject to change based on availability</li>
                <li>• All payments are handled outside this platform</li>
                <li>• Vehicle availability is first-come, first-served</li>
                <li>• Contact us for shipping quotes if not included</li>
              </ul>
            </div>
          </div>
          <InquiryForm vehicleId={vehicle.id} />
        </div>
      </div>

      {/* Print Friendly Link */}
      <div className="mt-8 text-center">
        <button 
          onClick={() => window.print()}
          className="inline-flex items-center text-gray-500 hover:text-[#3b2a1f] transition-colors text-sm"
        >
          <Printer className="w-4 h-4 mr-2" />
          Print vehicle details
        </button>
      </div>
    </div>
  )
}

export default CarDetails