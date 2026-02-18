import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Car,
  Upload,
  X,
  MapPin,
  Truck,
  Star,
  Save,
  ArrowLeft,
  Image as ImageIcon,
  AlertCircle,
  CheckCircle
} from 'lucide-react'

const AddEditVehicle = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = !!id

  const [formData, setFormData] = useState({
    title: '',
    make: '',
    model: '',
    year: new Date().getFullYear(),
    price: '',
    mileage: '',
    location: 'canada', // FR-VM-06
    shipmentIncluded: true, // FR-VM-07
    shipmentNotes: '', // FR-VM-08
    status: 'available', // FR-VM-04
    isFeatured: false, // FR-VM-05
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    color: '',
    condition: 'Used',
    description: '',
    category: 'sedan',
    bodyType: 'Sedan',
    drivetrain: 'FWD',
    engineSize: '',
    doors: 4,
    seats: 5
  })

  const [images, setImages] = useState([]) // FR-VM-03
  const [uploading, setUploading] = useState(false)
  const [errors, setErrors] = useState({})

  // FR-VM-09: Prevent shipment fields for Ghana vehicles
  const showShipmentFields = formData.location === 'canada'

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    setUploading(true)
    
    // Simulate upload
    setTimeout(() => {
      setImages(prev => [...prev, ...files.map(file => ({
        file,
        preview: URL.createObjectURL(file),
        name: file.name
      }))])
      setUploading(false)
    }, 1000)
  }

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index))
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.title) newErrors.title = 'Title is required'
    if (!formData.make) newErrors.make = 'Make is required'
    if (!formData.model) newErrors.model = 'Model is required'
    if (!formData.year) newErrors.year = 'Year is required'
    if (!formData.price) newErrors.price = 'Price is required'
    if (!formData.mileage) newErrors.mileage = 'Mileage is required'
    if (images.length === 0) newErrors.images = 'At least one image is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Submit form
      console.log('Form submitted:', { ...formData, images })
      navigate('/admin/vehicles')
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/admin/vehicles')}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {isEditing ? 'Edit Vehicle' : 'Add New Vehicle'}
            </h1>
            <p className="text-gray-600 mt-1">
              {isEditing ? 'Update vehicle details' : 'List a new vehicle in your inventory'}
            </p>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#3b2a1f] to-[#5c483a] text-white rounded-lg hover:shadow-lg transition-all duration-300"
        >
          <Save className="w-5 h-5" />
          <span>{isEditing ? 'Update Vehicle' : 'Save Vehicle'}</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Upload - FR-VM-03 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <ImageIcon className="w-5 h-5 mr-2 text-[#3b2a1f]" />
            Vehicle Images
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative group aspect-square rounded-lg overflow-hidden border-2 border-gray-200"
              >
                <img
                  src={image.preview}
                  alt={`Vehicle ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
            
            <label className="relative aspect-square rounded-lg border-2 border-dashed border-gray-300 hover:border-[#3b2a1f] transition-colors cursor-pointer flex flex-col items-center justify-center p-4">
              <Upload className="w-8 h-8 text-gray-400 mb-2" />
              <span className="text-sm text-gray-600 text-center">Upload Image</span>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
                disabled={uploading}
              />
              {uploading && (
                <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-[#3b2a1f] border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </label>
          </div>
          {errors.images && (
            <p className="mt-2 text-sm text-red-600">{errors.images}</p>
          )}
        </div>

        {/* Basic Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Basic Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  errors.title 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                    : 'border-gray-200 focus:border-[#3b2a1f] focus:ring-[#3b2a1f]/20'
                }`}
                placeholder="e.g., Toyota Camry XLE 2022"
              />
              {errors.title && <p className="mt-1 text-xs text-red-600">{errors.title}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Make *</label>
              <input
                type="text"
                value={formData.make}
                onChange={(e) => setFormData({...formData, make: e.target.value})}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  errors.make 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                    : 'border-gray-200 focus:border-[#3b2a1f] focus:ring-[#3b2a1f]/20'
                }`}
                placeholder="e.g., Toyota"
              />
              {errors.make && <p className="mt-1 text-xs text-red-600">{errors.make}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Model *</label>
              <input
                type="text"
                value={formData.model}
                onChange={(e) => setFormData({...formData, model: e.target.value})}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  errors.model 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                    : 'border-gray-200 focus:border-[#3b2a1f] focus:ring-[#3b2a1f]/20'
                }`}
                placeholder="e.g., Camry"
              />
              {errors.model && <p className="mt-1 text-xs text-red-600">{errors.model}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year *</label>
              <input
                type="number"
                value={formData.year}
                onChange={(e) => setFormData({...formData, year: parseInt(e.target.value)})}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  errors.year 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                    : 'border-gray-200 focus:border-[#3b2a1f] focus:ring-[#3b2a1f]/20'
                }`}
                placeholder="2022"
              />
              {errors.year && <p className="mt-1 text-xs text-red-600">{errors.year}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price ($) *</label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  errors.price 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                    : 'border-gray-200 focus:border-[#3b2a1f] focus:ring-[#3b2a1f]/20'
                }`}
                placeholder="18500"
              />
              {errors.price && <p className="mt-1 text-xs text-red-600">{errors.price}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mileage (km) *</label>
              <input
                type="number"
                value={formData.mileage}
                onChange={(e) => setFormData({...formData, mileage: e.target.value})}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  errors.mileage 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                    : 'border-gray-200 focus:border-[#3b2a1f] focus:ring-[#3b2a1f]/20'
                }`}
                placeholder="25000"
              />
              {errors.mileage && <p className="mt-1 text-xs text-red-600">{errors.mileage}</p>}
            </div>
          </div>
        </div>

        {/* Status & Location */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Status & Location</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FR-VM-04: Vehicle Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
              >
                <option value="available">Available</option>
                <option value="reserved">Reserved</option>
                <option value="sold">Sold</option>
              </select>
            </div>

            {/* FR-VM-05: Featured Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Featured</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={formData.isFeatured}
                    onChange={() => setFormData({...formData, isFeatured: true})}
                    className="w-4 h-4 text-[#3b2a1f] border-gray-300 focus:ring-[#3b2a1f]"
                  />
                  <span className="ml-2 text-sm text-gray-700">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={!formData.isFeatured}
                    onChange={() => setFormData({...formData, isFeatured: false})}
                    className="w-4 h-4 text-[#3b2a1f] border-gray-300 focus:ring-[#3b2a1f]"
                  />
                  <span className="ml-2 text-sm text-gray-700">No</span>
                </label>
              </div>
            </div>

            {/* FR-VM-06: Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
              >
                <option value="canada">Canada</option>
                <option value="ghana">Ghana</option>
              </select>
            </div>

            {/* FR-VM-09: Conditional Shipment Fields */}
            {showShipmentFields && (
              <>
                {/* FR-VM-07: Shipment Inclusion */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Shipment Included</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={formData.shipmentIncluded}
                        onChange={() => setFormData({...formData, shipmentIncluded: true})}
                        className="w-4 h-4 text-[#3b2a1f] border-gray-300 focus:ring-[#3b2a1f]"
                      />
                      <span className="ml-2 text-sm text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={!formData.shipmentIncluded}
                        onChange={() => setFormData({...formData, shipmentIncluded: false})}
                        className="w-4 h-4 text-[#3b2a1f] border-gray-300 focus:ring-[#3b2a1f]"
                      />
                      <span className="ml-2 text-sm text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                {/* FR-VM-08: Shipment Notes */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Shipment Notes (Optional)</label>
                  <textarea
                    value={formData.shipmentNotes}
                    onChange={(e) => setFormData({...formData, shipmentNotes: e.target.value})}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                    placeholder="Add any additional shipping information..."
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
              <select
                value={formData.fuelType}
                onChange={(e) => setFormData({...formData, fuelType: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
              >
                <option value="Gasoline">Gasoline</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Electric">Electric</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
              <select
                value={formData.transmission}
                onChange={(e) => setFormData({...formData, transmission: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
              >
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
                <option value="CVT">CVT</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
              <input
                type="text"
                value={formData.color}
                onChange={(e) => setFormData({...formData, color: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                placeholder="e.g., Black, White, Silver"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
              <select
                value={formData.condition}
                onChange={(e) => setFormData({...formData, condition: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
              >
                <option value="New">New</option>
                <option value="Used">Used</option>
                <option value="Certified">Certified Pre-Owned</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Engine Size</label>
              <input
                type="text"
                value={formData.engineSize}
                onChange={(e) => setFormData({...formData, engineSize: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
                placeholder="e.g., 2.5L"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Drivetrain</label>
              <select
                value={formData.drivetrain}
                onChange={(e) => setFormData({...formData, drivetrain: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
              >
                <option value="FWD">FWD</option>
                <option value="RWD">RWD</option>
                <option value="AWD">AWD</option>
                <option value="4WD">4WD</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows="4"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
              placeholder="Enter vehicle description..."
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddEditVehicle