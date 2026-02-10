import { Link } from 'react-router-dom'
import { MapPin, Truck } from 'lucide-react' // Changed Shipping to Truck
import Badge from './Badge'

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden card-hover">
      {/* Vehicle Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={`/images/cars/${vehicle.image || 'car1.jpg'}`}
          alt={vehicle.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          <Badge
            variant={vehicle.location === 'canada' ? 'primary' : 'success'}
            className="flex items-center"
          >
            <MapPin className="w-3 h-3 mr-1" />
            {vehicle.location === 'canada' ? 'Canada' : 'Ghana'}
          </Badge>
          {vehicle.isFeatured && (
            <Badge variant="warning">Featured</Badge>
          )}
        </div>
      </div>

      {/* Vehicle Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.title}</h3>
        <div className="space-y-3 mb-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Year: {vehicle.year}</span>
            <span>Mileage: {vehicle.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Make: {vehicle.make}</span>
            <span>Model: {vehicle.model}</span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="text-2xl font-bold text-primary-600">
            ${vehicle.price.toLocaleString()}
          </div>
          {vehicle.shipmentIncluded !== undefined && (
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <Truck className="w-4 h-4 mr-1" /> {/* Changed from Shipping to Truck */}
              <span>
                Shipment: {vehicle.shipmentIncluded ? 'Included' : 'Excluded'}
                {!vehicle.shipmentIncluded && ' (Contact for pricing)'}
              </span>
            </div>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex space-x-3">
          <Link
            to={`/cars/${vehicle.id}`}
            className="btn-primary flex-1 text-center"
          >
            View Details
          </Link>
          <a
            href={`https://wa.me/1234567890?text=Interested in ${vehicle.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex-1 text-center"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default VehicleCard