import { Link } from 'react-router-dom'
import { MapPin, Truck, ChevronRight, Heart, Fuel, Gauge, Calendar, ChevronLeft, ChevronRight as ChevronRightIcon, Phone, MessageCircle, FileText } from 'lucide-react'
import { useState } from 'react'
import Badge from './Badge'

const VehicleCard = ({ vehicle, featured = false }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  
  // FR-CD-01: Display vehicle image gallery
  const getVehicleImages = () => {
    const imageMap = {
      1: {
        main: '1.avif',
        sub1: '2.webp',
        sub2: '3.webp',
        sub3: '4.webp',
        sub4: '5.webp'
      },
      2: {
        main: '3.webp',
        sub1: '6.avif',
        sub2: '2.webp',
        sub3: '4.webp',
        sub4: '2.webp'
      },
      3: {
        main: '2.webp',
        sub1: '9.avif',
        sub2: '3.webp',
        sub3: '4.webp',
        sub4: '10.webp'
      },
      4: {
        main: '12.jpg',
        sub1: '11.webp',
        sub2: '10.webp',
        sub3: '1.avif',
        sub4: '5.webp'
      },
      5: {
        main: '5.webp',
        sub1: '10.webp',
        sub2: '12.jpg',
        sub3: '2.webp',
        sub4: '9.avif'
      },
      6: {
        main: '7.avif',
        sub1: '6.avif',
        sub2: '3.webp',
        sub3: '8.avif',
        sub4: '4.webp'
      },
      7: {
        main: '10.webp',
        sub1: '3.webp',
        sub2: '2.webp',
        sub3: '11.webp',
        sub4: '6.avif'
      },
      8: {
        main: '1.avif',
        sub1: '10.webp',
        sub2: '12.jpg',
        sub3: '2.webp',
        sub4: '7.avif'
      },
      9: {
        main: '13.webp',
        sub1: '10.webp',
        sub2: '12.jpg',
        sub3: '2.webp',
        sub4: '7.avif'
      }
    }
    
    return imageMap[vehicle.id] || {
      main: 'placeholder-car.jpg',
      sub1: 'placeholder-car.jpg',
      sub2: 'placeholder-car.jpg',
      sub3: 'placeholder-car.jpg',
      sub4: 'placeholder-car.jpg'
    }
  }

  const vehicleImages = getVehicleImages()
  const imageArray = [
    vehicleImages.main,
    vehicleImages.sub1,
    vehicleImages.sub2,
    vehicleImages.sub3,
    vehicleImages.sub4
  ]

  const currentImage = imageError 
    ? '/images/placeholder-car.jpg' 
    : `/images/${imageArray[currentImageIndex]}`

  const nextImage = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % imageArray.length)
  }

  const prevImage = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + imageArray.length) % imageArray.length)
  }

  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setCurrentImageIndex(0)
      }}
    >
      {/* FR-CD-01: Vehicle Image Gallery */}
      <div className="relative h-48 overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={currentImage}
          alt={`${vehicle.title} - View ${currentImageIndex + 1}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={() => setImageError(true)}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Like Button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setIsLiked(!isLiked)
          }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20"
        >
          <Heart className={`w-3.5 h-3.5 transition-colors ${
            isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700'
          }`} />
        </button>

        {/* FR-CD-04: Display vehicle location (Canada or Ghana) */}
        <div className="absolute top-3 left-3 z-10">
          <Badge
            variant={vehicle.location === 'canada' ? 'primary' : 'success'}
            className="flex items-center shadow-lg backdrop-blur-sm bg-white/95 text-xs py-1"
          >
            <MapPin className="w-3 h-3 mr-1" />
            {vehicle.location === 'canada' ? 'Canada' : 'Ghana'}
          </Badge>
        </div>

        {/* Featured Badge */}
        {vehicle.isFeatured && featured && (
          <div className="absolute bottom-3 left-3 z-10">
            <Badge variant="warning" className="bg-amber-500/90 text-white border-0">Featured</Badge>
          </div>
        )}

        {/* Sub-image Navigation Arrows */}
        {isHovered && (
          <>
            <button
              onClick={prevImage}
              className="
                absolute left-2 top-1/2 -translate-y-1/2
                w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm
                flex items-center justify-center
                text-white hover:bg-[#3b2a1f] hover:scale-110
                transition-all duration-300 z-30
                opacity-0 group-hover:opacity-100
              "
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="
                absolute right-2 top-1/2 -translate-y-1/2
                w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm
                flex items-center justify-center
                text-white hover:bg-[#3b2a1f] hover:scale-110
                transition-all duration-300 z-30
                opacity-0 group-hover:opacity-100
              "
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="
          absolute bottom-3 right-3
          bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20
        ">
          {currentImageIndex + 1} / {imageArray.length}
        </div>

        {/* Image Indicators */}
        <div className="
          absolute bottom-3 left-1/2 -translate-x-1/2
          flex items-center space-x-1.5
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20
        ">
          {imageArray.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setCurrentImageIndex(idx)
              }}
              className={`
                w-1.5 h-1.5 rounded-full transition-all duration-300
                ${idx === currentImageIndex 
                  ? 'bg-white w-4' 
                  : 'bg-white/60 hover:bg-white'
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Vehicle Info */}
      <div className="p-4 flex-grow flex flex-col">
        {/* FR-CD-02: Display vehicle specifications */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base font-semibold text-gray-900 leading-tight group-hover:text-[#3b2a1f] transition-colors line-clamp-1">
            {vehicle.title}
          </h3>
          <div className="flex items-center text-xs bg-gray-100 px-1.5 py-1 rounded-md text-gray-700">
            <Calendar className="w-3 h-3 mr-1" />
            {vehicle.year}
          </div>
        </div>

        {/* FR-CD-02: Vehicle specifications grid */}
        <div className="grid grid-cols-3 gap-1 mb-3">
          <div className="flex flex-col items-center p-1.5 bg-gray-50 rounded-lg">
            <Fuel className="w-3.5 h-3.5 text-gray-500 mb-0.5" />
            <span className="text-xs font-medium text-gray-900">{vehicle.fuelType || 'Petrol'}</span>
          </div>
          <div className="flex flex-col items-center p-1.5 bg-gray-50 rounded-lg">
            <Gauge className="w-3.5 h-3.5 text-gray-500 mb-0.5" />
            <span className="text-xs font-medium text-gray-900">{vehicle.mileage?.toLocaleString()}km</span>
          </div>
          <div className="flex flex-col items-center p-1.5 bg-gray-50 rounded-lg">
            <span className="text-xs font-medium text-gray-900">{vehicle.transmission || 'Auto'}</span>
            <span className="text-[10px] text-gray-500">Trans</span>
          </div>
        </div>

        {/* FR-CD-03: Display listed price (display-only) */}
        <div className="mb-3">
          <span className="text-[10px] text-gray-500 uppercase tracking-wider">Price</span>
          <div className="text-xl font-bold text-[#3b2a1f]">
            ${vehicle.price?.toLocaleString()}
          </div>
        </div>

        {/* FR-CD-05: Display shipment inclusion status */}
        {/* FR-CD-06: If shipment is excluded, display shipment note */}
        {/* FR-CD-07: Hide shipment information for Ghana-located vehicles */}
        {vehicle.location === 'canada' && (
          <div className="mb-3">
            {vehicle.shipmentIncluded ? (
              <div className="flex items-center text-xs text-green-600">
                <Truck className="w-3 h-3 mr-1" />
                <span className="font-medium">Shipment included</span>
              </div>
            ) : (
              <div className="flex items-center text-xs text-amber-600">
                <Truck className="w-3 h-3 mr-1" />
                <span className="font-medium">Shipment excluded</span>
                {vehicle.shipmentNotes && (
                  <span className="text-gray-500 ml-1">({vehicle.shipmentNotes})</span>
                )}
              </div>
            )}
          </div>
        )}

        {/* FR-CD-08: Display CTA buttons (Call, WhatsApp, Inquiry Form) */}
        <div className="mt-auto grid grid-cols-3 gap-2">
          <a
            href="tel:+1234567890"
            className="
              flex items-center justify-center
              bg-red-600 hover:bg-red-800
              text-white text-xs font-medium
              px-2 py-2 rounded-md
              transition-all duration-300
              hover:shadow-md hover:scale-105
            "
          >
            <Phone className="w-3.5 h-3.5 mr-1" />
            <span className="hidden sm:inline">Call</span>
          </a>
          
          <a
            href={`https://wa.me/1234567890?text=I'm interested in ${vehicle.title} (${vehicle.id})`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center
              bg-red-600 hover:bg-green-800
              text-white text-xs font-medium
              px-2 py-2 rounded-md
              transition-all duration-300
              hover:shadow-md hover:scale-105
            "
          >
            <MessageCircle className="w-3.5 h-3.5 mr-1" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          
          <Link
            to={`/inquiry/${vehicle.id}`}
            className="
              flex items-center justify-center
              bg-gray-600 hover:bg-gray-800
              text-white text-xs font-medium
              px-2 py-2 rounded-sm
              transition-all duration-300
              hover:shadow-md hover:scale-105
            "
          >
            <FileText className="w-3.5 h-3.5 mr-1" />
            <span className="hidden sm:inline">Inquiry</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default VehicleCard