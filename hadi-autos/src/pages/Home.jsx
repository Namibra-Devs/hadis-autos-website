import { Link } from 'react-router-dom'
import { Phone, MessageCircle, ArrowRight, Shield, Truck, Globe } from 'lucide-react'
import Button from '@components/ui/Button'
import VehicleCard from '@components/ui/VehicleCard'
import HowItWorks from '@components/shared/HowItWorks'
import Testimonials from '@components/shared/Testimonials'
import { featuredVehicles } from '@utils/data'

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Quality Vehicles from <span className="text-primary-200">Canada</span> to <span className="text-primary-200">Ghana</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              Your trusted partner for importing reliable, inspected vehicles at competitive prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                as="a"
                href="tel:+1234567890"
                size="lg"
                className="bg-white text-primary-700 hover:bg-gray-100"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button
                as="a"
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
              <Link to="/cars">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View All Cars
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Hadi's Motors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We make importing vehicles from Canada to Ghana simple, transparent, and reliable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="w-8 h-8" />,
              title: 'Vehicle Inspection',
              description: 'Every vehicle undergoes thorough inspection and quality checks before purchase.',
            },
            {
              icon: <Truck className="w-8 h-8" />,
              title: 'Shipment Handling',
              description: 'We manage all logistics including shipping, customs, and clearance.',
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: 'Transparent Process',
              description: 'Clear pricing with no hidden fees. Know exactly what you\'re paying for.',
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Vehicles</h2>
            <p className="text-gray-600">Carefully selected cars available for immediate import</p>
          </div>
          <Link to="/cars" className="text-primary-600 hover:text-primary-700 font-medium">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="bg-primary-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Import Your Dream Car?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us today for a personalized consultation and get started on your vehicle import journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              as="a"
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="bg-green-600 hover:bg-green-700"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Form
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home