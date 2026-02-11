
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, MessageCircle, ArrowRight, CheckCircle, ChevronDown, Sparkles, Shield, Truck, Lock } from 'lucide-react'
import Button from '@components/ui/Button'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'

const PremiumStaggeredScrollHero = () => {
  const containerRef = useRef(null)
  const [activeSection, setActiveSection] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const sections = [
    {
      id: 1,
      bgImage: '/images/hero1.jpg',
      title: 'Premium Canadian Vehicles',
      subtitle: 'Source from our exclusive network of Canadian dealerships and private sellers.',
      features: [
        '150-point inspection report',
        'Verified no-accident history',
        'Original service records',
        'Professional-grade photos'
      ],
      ctaText: 'Explore Inventory',
      icon: Shield,
      accentColor: 'from-blue-600 to-cyan-500',
      stats: [
        { value: '98%', label: 'Satisfaction Rate' },
        { value: '2,500+', label: 'Vehicles Imported' },
        { value: '24/7', label: 'Support' }
      ]
    },
    {
      id: 2,
      bgImage: '/images/hero2.webp',
      title: 'Door-to-Door Delivery',
      subtitle: 'Complete logistics solution from Canadian port to your doorstep in Ghana.',
      features: [
        'Real-time shipment tracking',
        'Comprehensive insurance coverage',
        'Customs clearance handled',
        '30-45 day delivery timeline'
      ],
      ctaText: 'Calculate Shipping',
      icon: Truck,
      accentColor: 'from-emerald-600 to-green-500',
      stats: [
        { value: '99.2%', label: 'On-Time Delivery' },
        { value: '₵0', label: 'Hidden Fees' },
        { value: '15', label: 'Ports Served' }
      ]
    },
    {
      id: 3,
      bgImage: '/images/hero3.jpg',
      title: 'Transparent Pricing',
      subtitle: 'All-inclusive pricing with no surprises. Know exactly what you\'re paying for.',
      features: [
        'Vehicle cost breakdown',
        'All duties & taxes included',
        'Shipping & insurance fees',
        'Ghanaian registration fees'
      ],
      ctaText: 'View Price Example',
      icon: Lock,
      accentColor: 'from-amber-600 to-orange-500',
      stats: [
        { value: '100%', label: 'Cost Transparency' },
        { value: '₵5M+', label: 'Saved for Clients' },
        { value: '0%', label: 'Hidden Charges' }
      ]
    }
  ]

  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const bgScale = useTransform(scrollProgress, [0, 1], [1, 1.1])
  const opacity = useTransform(scrollProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.8, 1])

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight
      const scrollPosition = window.scrollY
      const currentSection = Math.floor(scrollPosition / sectionHeight)
      setActiveSection(Math.min(currentSection, sections.length - 1))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections.length])

  return (
    <div ref={containerRef} className="relative">
      {/* Parallax Background Container */}
      <motion.div 
        className="fixed inset-0"
        style={{ scale: bgScale, opacity }}
      >
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === activeSection ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${section.bgImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          >
            {/* Animated Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${section.accentColor.replace('from-', 'from-')}/20 via-black/70 to-black/90`} />
            
            {/* Animated Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/20 rounded-full"
                  initial={{ 
                    x: Math.random() * 100 + '%', 
                    y: Math.random() * 100 + '%',
                    opacity: 0 
                  }}
                  animate={{ 
                    y: [null, `-${Math.random() * 100 + 50}px`],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Sections */}
      {sections.map((section, index) => {
        
        
        return (
          <motion.section
            key={section.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative h-screen flex items-center overflow-hidden"
          >
           

            {/* Content */}
            <div className="container mx-auto px-4 lg:px-8 relative z-20">
              <div className="grid lg:grid-cols-2 gap-3 items-center">
                {/* Left Column - Text */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  {/* Decorative Elements */}
                  <div className="absolute -top-20 lg:-left-7 -left-3 w-12 h-12 border-t-2 border-l-2 border-white/30 rounded-tl-2xl mt-15" />
                  <div className="absolute  top-70 -right-0 w-12 h-12 border-b-2 border-r-2 border-white/30 rounded-br-2xl" />
                  
                  

                  {/* Title */}
                  <h1 className="text-2xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                    {section.title.split(' ').map((word, i) => (
                      <motion.span
                        key={i}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="inline-block mr-3"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-md lg:text-2xl text-white/80 mb-8 leading-relaxed">
                    {section.subtitle}
                  </p>

                 

                  {/* CTA Buttons */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap gap-4 mb-12"
                  >
                    <Button
                      as="a"
                      href="tel:+1234567890"
                      className="
                        group relative overflow-hidden
                        text-black hover:text-gray-900
                        px-8 py-4 rounded-xl font-semibold
                        hover:shadow-2xl hover:scale-105 transition-all
                        border-2 border-white cursor-pointer
                      "
                    >
                      <Phone className="w-5 h-5 mr-3" />
                      Call Our Experts
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity" />
                    </Button>

                    <Button
                      as={Link}
                      to={index === 0 ? "/cars" : index === 1 ? "/shipping" : "/pricing"}
                      className="
                        group relative overflow-hidden
                        bg-transparent border-2 border-white/30 text-white
                        hover:bg-white/10 hover:border-white/60
                        px-8 py-4 rounded-xl font-semibold
                        hover:shadow-2xl hover:scale-105 transition-all cursor-pointer
                      "
                    >
                      <span className="relative z-10 flex items-center">
                        {section.ctaText}
                        <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                      </span>
                      <span className="absolute inset-0 bg-white/5 rounded-xl scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all" />
                    </Button>
                  </motion.div>

                 
                </motion.div>

               
              </div>
            </div>

           

            
          </motion.section>
        )
      })}

      {/* Progress Indicator */}
      <div className="fixed right-15 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col items-center space-y-4">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => window.scrollTo({ top: index * window.innerHeight, behavior: 'smooth' })}
              className="relative group"
            >
              <div className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${index === activeSection 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 group-hover:bg-white/60'
                }
              `} />
              {index < sections.length - 1 && (
                <div className={`
                  h-8 w-0.5 transition-colors duration-300
                  ${index === activeSection || index + 1 === activeSection
                    ? 'bg-gradient-to-b from-white to-transparent'
                    : 'bg-white/20'
                  }
                `} />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PremiumStaggeredScrollHero