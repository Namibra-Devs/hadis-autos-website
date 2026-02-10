import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { MapPin, Truck, Calendar, Gauge, Phone, MessageCircle, Check, X } from 'lucide-react'
import Badge from '@components/ui/Badge'
import Button from '@components/ui/Button'
import InquiryForm from '@components/ui/InquiryForm'
import { vehicleData } from '@utils/data'

const CarDetails = () => {
  const { id } = useParams()
  const [activeImage, setActiveImage] = useState(0)
  
  // Find vehicle by ID
  const vehicle = vehicleData.find(v => v.id === parseInt(id)) || vehicleData[0]
  
  const images = [
    `/images/cars/car${(parseInt(id) || 1)}.jpg`,
    `/images/cars/car${(parseInt(id) || 1) + 1 || 2}.jpg`,
    `/images/cars/car${(parseInt(id) || 1) + 2 || 3}.jpg`,
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/cars" className="text-primary-600 hover:text-primary-700">
          ← Back to Vehicles
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Images */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
            <img
              src={images[activeImage]}
              alt={vehicle.title}
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 ${
                  activeImage === index ? 'border-primary-600' : 'border-transparent'
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
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{vehicle.title}</h1>
                <div className="flex items-center space-x-4 mt-2">
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
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary-600">
                  ${vehicle.price.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Key Specs */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-sm text-gray-500">Year</div>
                  <div className="font-medium">{vehicle.year}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Gauge className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-sm text-gray-500">Mileage</div>
                  <div className="font-medium">{vehicle.mileage.toLocaleString()} km</div>
                </div>
              </div>
            </div>

            {/* Shipment Info */}
            {vehicle.location === 'canada' && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Truck className="w-5 h-5 text-primary-600" />
                  <span className="font-medium">Shipment Information</span>
                </div>
                <div className="flex items-center space-x-2">
                  {vehicle.shipmentIncluded ? (
                    <>
                      <Check className="w-5 h-5 text-green-600" />
                      <span>Shipment to Ghana is included in the price</span>
                    </>
                  ) : (
                    <>
                      <X className="w-5 h-5 text-yellow-600" />
                      <span>Shipment cost is not included. Contact us for shipping quote.</span>
                    </>
                  )}
                </div>
                {vehicle.shipmentNotes && (
                  <p className="text-sm text-gray-600 mt-2">{vehicle.shipmentNotes}</p>
                )}
              </div>
            )}

            {/* Quick CTAs */}
            <div className="space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center space-x-2 btn-primary"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: +1 (234) 567-890</span>
              </a>
              <a
                href={`https://wa.me/1234567890?text=Interested in ${vehicle.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 btn-secondary"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Full Specifications */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Specifications</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">Make</div>
                <div className="font-medium">{vehicle.make}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Model</div>
                <div className="font-medium">{vehicle.model}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Fuel Type</div>
                <div className="font-medium">{vehicle.fuelType || 'Gasoline'}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Transmission</div>
                <div className="font-medium">{vehicle.transmission || 'Automatic'}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Color</div>
                <div className="font-medium">{vehicle.color || 'Black'}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Condition</div>
                <div className="font-medium">{vehicle.condition || 'Used'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Form Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Interested in this vehicle?</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Steps</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm">
                    1
                  </div>
                  <span>Send inquiry with your questions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm">
                    2
                  </div>
                  <span>We'll contact you within 24 hours</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm">
                    3
                  </div>
                  <span>Schedule vehicle inspection if needed</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm">
                    4
                  </div>
                  <span>Proceed with purchase and shipping arrangements</span>
                </li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Important Notes</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
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
    </div>
  )
}

export default CarDetails