import { Search, Car, Ship, CheckCircle } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Browse & Select',
      description: 'Choose from our available vehicles or let us find one for you.',
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: 'Vehicle Inspection',
      description: 'We conduct thorough inspections and provide detailed reports.',
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: 'Shipping & Customs',
      description: 'We handle all logistics including shipping and customs clearance.',
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Delivery & Handover',
      description: 'Vehicle delivered to your preferred location in Ghana.',
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our simple 4-step process makes importing vehicles from Canada to Ghana hassle-free.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                {step.icon}
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks