import { Link } from 'react-router-dom'
import { ArrowRight, Star, TrendingUp } from 'lucide-react'
import Button from '@components/ui/Button'
import VehicleCard from '@components/ui/VehicleCard'
import { featuredVehicles } from '@utils/data'

const FeaturedVehicles = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230284c7' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16">
          <div className="mb-8 lg:mb-0">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                Featured Selection
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Premium Vehicles
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-emerald-600">
                Ready for Import
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl">
              Carefully selected cars available for immediate import from Canada to Ghana
            </p>
          </div>

          <Link to="/cars">
            <Button className="
              group relative overflow-hidden
              bg-gradient-to-r from-primary-600 to-emerald-600
              hover:from-primary-700 hover:to-emerald-700
              text-white px-8 py-4 rounded-xl font-semibold
              shadow-lg hover:shadow-xl
              transition-all duration-300
            ">
              <span className="relative z-10 flex items-center">
                View All Vehicles
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-white/10 rounded-xl scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
            </Button>
          </Link>
        </div>

        {/* Trending Badge */}
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-full px-4 py-2 mb-8">
          <TrendingUp className="w-4 h-4 text-amber-600" />
          <span className="text-sm font-semibold text-amber-700">
            Trending this month
          </span>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="transform transition-all duration-500 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <VehicleCard vehicle={vehicle} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-16">
          <Link
            to="/cars"
            className="
              inline-flex items-center space-x-2
              text-primary-600 hover:text-primary-700
              font-semibold text-lg
              group
            "
          >
            <span>Explore All Available Vehicles</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
          
          <p className="text-gray-500 mt-2">
            50+ vehicles available with various makes and models
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeaturedVehicles