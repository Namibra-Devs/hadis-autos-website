import { Shield, Truck, Globe, CheckCircle, Award, Users } from 'lucide-react'

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Vehicle Inspection',
      description: 'Every vehicle undergoes thorough inspection and quality checks before purchase.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Shipment Handling',
      description: 'We manage all logistics including shipping, customs, and clearance.',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Transparent Process',
      description: 'Clear pricing with no hidden fees. Know exactly what you\'re paying for.',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Quality Guarantee',
      description: 'All vehicles come with verified history and condition reports.',
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Expert Service',
      description: 'Years of experience in Canada-Ghana vehicle import market.',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-50'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Support',
      description: 'Dedicated support team available throughout the import process.',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50'
    }
  ]

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary-50/50 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-primary-100/30 to-transparent blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-emerald-100/20 to-transparent blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-emerald-500 text-white px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-semibold">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-emerald-600">Hadi's Motors</span> Advantage
          </h2>
          
          <p className="text-xl text-gray-600">
            We make importing vehicles from Canada to Ghana simple, transparent, and reliable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Card */}
              <div className="
                relative h-full bg-white rounded-2xl p-8
                border border-gray-100
                shadow-lg shadow-gray-100/50
                transition-all duration-500
                group-hover:shadow-2xl group-hover:shadow-primary-100/30
                group-hover:-translate-y-2
                overflow-hidden
              ">
                {/* Background Gradient */}
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-10
                  bg-gradient-to-br ${feature.color}
                  transition-opacity duration-500
                `} />

                {/* Icon Container */}
                <div className={`
                  relative w-16 h-16 rounded-2xl ${feature.bgColor}
                  flex items-center justify-center mb-6
                  transition-all duration-500
                  group-hover:scale-110
                `}>
                  <div className={`
                    text-transparent bg-clip-text bg-gradient-to-r ${feature.color}
                  `}>
                    {feature.icon}
                  </div>
                  
                  {/* Icon Glow */}
                  <div className={`
                    absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color}
                    opacity-0 group-hover:opacity-20 blur-md
                    transition-opacity duration-500
                  `} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom Line */}
                <div className={`
                  absolute bottom-0 left-0 right-0 h-1
                  bg-gradient-to-r ${feature.color}
                  transform scale-x-0 group-hover:scale-x-100
                  transition-transform duration-500 origin-left
                `} />

                {/* Corner Accent */}
                <div className="
                  absolute top-0 right-0 w-6 h-6
                  border-t-2 border-r-2 border-gray-100
                  rounded-tr-2xl
                  group-hover:border-primary-200
                  transition-colors duration-500
                " />
              </div>

              {/* Floating Number */}
              <div className={`
                absolute -top-3 -left-3 w-12 h-12 rounded-full
                bg-gradient-to-r ${feature.color} text-white
                flex items-center justify-center text-lg font-bold
                shadow-lg
                transition-transform duration-500
                group-hover:scale-110 group-hover:rotate-12
              `}>
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Vehicles Imported' },
            { value: '99%', label: 'Customer Satisfaction' },
            { value: '10+', label: 'Years Experience' },
            { value: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100 + 300}
            >
              <div className="
                text-4xl lg:text-5xl font-bold
                bg-gradient-to-r from-primary-600 to-emerald-600
                text-transparent bg-clip-text
                mb-3
              ">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs