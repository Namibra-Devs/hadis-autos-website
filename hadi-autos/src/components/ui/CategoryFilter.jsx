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
    id: 'pickup',  
    name: 'Pickup',
    icon: Truck,  
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