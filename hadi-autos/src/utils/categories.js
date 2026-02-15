import { Car, Truck, Zap, Battery, Wind, Gauge, Sparkles } from 'lucide-react'

export const categories = [
  {
    id: 'all',
    name: 'All Vehicles',
    icon: Car,
    color: 'from-gray-500 to-gray-600',
    lightColor: 'bg-gray-100',
    description: 'Browse our complete inventory'
  },
  {
    id: 'suv',
    name: 'SUVs',
    icon: Truck,
    color: 'from-blue-500 to-blue-600',
    lightColor: 'bg-blue-50',
    description: 'Sport Utility Vehicles - Perfect for families and off-road adventures'
  },
  {
    id: 'sedan',
    name: 'Sedans',
    icon: Car,
    color: 'from-green-500 to-green-600',
    lightColor: 'bg-green-50',
    description: 'Comfortable and efficient everyday drivers'
  },
  {
    id: 'pickup', // Changed from 'electric' to 'pickup'
    name: 'Pickup', // Changed from 'Electric' to 'Pickup'
    icon: Truck, // Using Truck icon for pickup
    color: 'from-purple-500 to-purple-600',
    lightColor: 'bg-purple-50',
    description: 'Powerful pickup trucks for work and recreation'
  },
  {
    id: 'hybrid',
    name: 'Hybrid',
    icon: Battery,
    color: 'from-teal-500 to-teal-600',
    lightColor: 'bg-teal-50',
    description: 'Fuel-efficient hybrid vehicles'
  },
 
]

// Helper function to get category counts from vehicle data
export const getCategoryCounts = (vehicles) => {
  const counts = {
    all: vehicles.length
  }
  
  categories.forEach(cat => {
    if (cat.id !== 'all') {
      counts[cat.id] = vehicles.filter(v => v.category === cat.id).length
    }
  })
  
  return counts
}

// Helper function to filter vehicles by category
export const filterVehiclesByCategory = (vehicles, categoryId) => {
  if (categoryId === 'all') return vehicles
  return vehicles.filter(v => v.category === categoryId)
}

// Helper function to get category icon
export const getCategoryIcon = (categoryId) => {
  const category = categories.find(c => c.id === categoryId)
  return category?.icon || Car
}

// Helper function to get category color
export const getCategoryColor = (categoryId) => {
  const category = categories.find(c => c.id === categoryId)
  return category?.color || 'from-gray-500 to-gray-600'
}

// Helper function to get category by ID (THIS WAS MISSING)
export const getCategoryById = (categoryId) => {
  return categories.find(c => c.id === categoryId) || categories[0]
}