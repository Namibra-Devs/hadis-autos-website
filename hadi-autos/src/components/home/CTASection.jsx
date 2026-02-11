import { Link } from 'react-router-dom'
import { MessageCircle, Phone, Mail, Clock, CheckCircle } from 'lucide-react'
import Button from '@components/ui/Button'

const CTASection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-emerald-800" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-gradient-shift" style={{
          backgroundImage: `linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%)`,
          backgroundSize: '200% 200%'
        }} />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary-500/20 to-transparent blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-l from-emerald-500/10 to-transparent blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <CheckCircle className="w-5 h-5 text-emerald-300" />
              <span className="text-white font-semibold">Start Your Import Journey Today</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Import Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">
                Dream Car?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
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
                  bg-white/10 backdrop-blur-sm rounded-2xl p-6
                  border border-white/20
                  hover:bg-white/15 hover:border-white/30
                  transition-all duration-300
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
                text-white px-8 py-4 rounded-xl font-semibold
                shadow-2xl hover:shadow-3xl
                transition-all duration-300
                transform hover:scale-105
                flex-1 lg:flex-none
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
                transition-transform duration-500
              " />
            </Button>

            {/* Phone Button */}
            <Button
              as="a"
              href="tel:+1234567890"
              className="
                group relative overflow-hidden
                bg-white text-gray-900 hover:text-gray-900
                px-8 py-4 rounded-xl font-semibold
                shadow-2xl hover:shadow-3xl
                transition-all duration-300
                transform hover:scale-105
                flex-1 lg:flex-none
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
                  bg-transparent border-2 border-white/30 text-white
                  hover:bg-white/10 hover:border-white/60
                  px-8 py-4 rounded-xl font-semibold
                  transition-all duration-300
                  transform hover:scale-105
                  flex-1 lg:flex-none
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

          {/* Footer Note */}
          <div className="text-center mt-12 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm">
              <span className="font-semibold text-white/80">Office Hours:</span> Mon-Fri 9AM-6PM EST • Sat 10AM-4PM EST
            </p>
            <p className="text-white/60 text-sm mt-2">
              We serve clients across Canada and Ghana with personalized import solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection