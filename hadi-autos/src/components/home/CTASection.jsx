import { Link } from 'react-router-dom'
import { MessageCircle, Phone, Mail, Clock, CheckCircle } from 'lucide-react'
import Button from '@components/ui/Button'

const CTASection = () => {
  return (
    <section className="relative py-10 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-light" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-gradient-shift" style={{
          backgroundImage: `linear-gradient(45deg, transparent 45%, rgba(205, 38, 38, 0.44) 50%, transparent 55%)`,
          backgroundSize: '200% 200%'
        }} />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-red-500/20 to-transparent blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-l from-red-500/10 to-transparent blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            
            <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent" />
            <span className="text-red-700 text-sm uppercase tracking-[0.2em] font-medium">
             Start Your Import Journey Today
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent" />
          </div>

           <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-black mb-6">
           Ready to {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-black">
             Import Your  Dream Car?
            </span>
          </h2>

          
            
            <p className="text-xl text-black max-w-2xl mx-auto">
              Contact us today for a personalized consultation and get started on your vehicle import journey from Canada to Ghana.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Clock className="w-6 h-6" />,
                title: 'Quick Response',
                description: 'Get answers within 24 hours'
              },
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: 'Free Consultation',
                description: 'No obligation assessment'
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: 'Full Support',
                description: 'Guidance every step of the way'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="
                  bg-red-900 backdrop-blur-xlg rounded-xl p-6
                  border border-white/20
                 
                  group
                "
              >
                <div className="
                  w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-transparent
                  flex items-center justify-center mb-4
                  group-hover:scale-110 transition-transform duration-300
                ">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-white/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            {/* WhatsApp Button */}
            <Button
              as="a"
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative overflow-hidden
                bg-gradient-to-r from-green-500 to-emerald-600
                hover:from-green-600 hover:to-emerald-700
                text-white px-8 py-4 rounded-md font-semibold
                shadow-sm hover:shadow-xl
                transition-all duration-300
                transform hover:scale-105
                flex-1 lg:flex-none cursor-pointer
              "
              aria-label="Chat on WhatsApp"
            >
              <span className="relative z-10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 mr-3" />
                Chat on WhatsApp
              </span>
              <span className="
                absolute inset-0 bg-gradient-to-r from-white/10 to-transparent
                translate-x-full group-hover:translate-x-0
                transition-transform duration-500 c
              " />
            </Button>

            {/* Phone Button */}
            <Button
              as="a"
              href="tel:+1234567890"
              className="
                group relative overflow-hidden
                 text-gray-900 hover:text-gray-900
                px-8 py-4 rounded-md font-semibold
                shadow-sm hover:shadow-xl
                transition-all duration-300
                transform hover:scale-105
                flex-1 lg:flex-none cursor-pointer
              "
              aria-label="Call Hadi's Motors"
            >
              <span className="relative z-10 flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3" />
                Call Now: +1 (234) 567-890
              </span>
              <span className="
                absolute inset-0 bg-gradient-to-r from-primary-100 to-emerald-100
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              " />
            </Button>

            {/* Contact Form Link */}
            <Link to="/contact">
              <Button
                className="
                  group relative overflow-hidden
                   border-1 border-white/30 text-white
                  hover:bg-white/10 hover:border-black hover:text-black
                  px-8 py-4 rounded-md font-semibold
                  transition-all duration-300
                  transform hover:scale-105
                  flex-1 lg:flex-none cursor-pointer
                "
                aria-label="Contact us via form"
              >
                <span className="relative z-10">
                  Contact Form
                </span>
                <span className="
                  absolute inset-0 bg-white/5 rounded-xl
                  scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100
                  transition-all duration-300
                " />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CTASection