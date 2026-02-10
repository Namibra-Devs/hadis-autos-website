import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Phone, Menu, X, ChevronRight } from 'lucide-react'
import Button from '@components/ui/Button'
import MobileNav from './MobileNav'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const location = useLocation()
  const headerRef = useRef(null)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/cars', label: 'Available Cars' },
    { path: '/contact', label: 'Contact Us' },
  ]

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true)
      }
      
      // Add scrolled class for background change
      setIsScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  // Reset visibility when location changes
  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <header 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0'
        } ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
            : 'bg-white/90 backdrop-blur-md'
        }`}
        role="banner"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 no-underline group"
              aria-label="Hadi's Motors Home"
            >
              {/* Logo Image */}
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/Logo.jpeg" 
                    alt="Hadi's Motors Logo" 
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center">
                          <span class="text-white font-bold text-lg">HM</span>
                        </div>
                      `
                    }}
                  />
                </div>
                {/* Logo Animation */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
              </div>
              
              {/* Brand Text */}
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                  Hadi's <span className="text-primary-600">Motors</span>
                </h1>
                <p className="text-xs text-gray-600 font-medium tracking-wider uppercase">
                  Canada ↔ Ghana
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10" aria-label="Main navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    relative font-medium text-gray-700 no-underline 
                    transition-colors duration-300 group py-2
                    ${isActive ? 'text-primary-600' : 'hover:text-primary-600'}
                  `}
                  aria-current={({ isActive }) => isActive ? 'page' : undefined}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Animated Underline - Left to Right */}
                  <span className={`
                    absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-700
                    transition-all duration-300 ease-out group-hover:w-full
                    ${item.path === location.pathname ? 'w-full' : ''}
                  `}></span>
                  
                  {/* Hover Background Effect */}
                  <span className="
                    absolute inset-0 bg-gradient-to-r from-primary-50 to-transparent 
                    rounded-lg -z-10 opacity-0 group-hover:opacity-100
                    transition-opacity duration-300 scale-95 group-hover:scale-105
                  "></span>
                </NavLink>
              ))}
            </nav>

            {/* Contact & CTA Section */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Phone with Animation */}
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 no-underline group/phone hover:scale-105 transition-transform duration-300"
                aria-label="Call Hadi's Motors" 
              >
                <div className="relative">
                  <Phone className="w-5 h-5 transition-transform duration-300 group-hover/phone:scale-110" />
                  <div className="absolute inset-0 rounded-full bg-primary-100 opacity-0 group-hover/phone:opacity-100 transition-opacity duration-300 animate-ping-slow"></div>
                </div>
                <span className="font-semibold transition-colors duration-300">
                  +1 (234) 567-890
                </span>
              </a>

              {/* WhatsApp Button with Icon Animation */}
              <Button
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative overflow-hidden group/btn
                  bg-gradient-to-r from-green-500 to-green-700 hover:from-green-800 hover:to-green-400
                  text-white px-6 py-2.5 rounded-lg font-semibold
                  transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer hover:scale-105
                "
                aria-label="Chat on WhatsApp"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover/btn:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                  </svg>
                  WhatsApp
                  <ChevronRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                </span>
                
                {/* Button Background Animation */}
                <span className="
                  absolute inset-0 bg-gradient-to-r from-green-600 to-green-700
                  translate-y-full group-hover/btn:translate-y-0
                  transition-transform duration-300
                "></span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors duration-300 group"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative">
                <Menu className="w-6 h-6 text-gray-700 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute -inset-2 rounded-xl bg-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </button>
          </div>

          {/* Divider with Gradient */}
          <div className={`
            h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent
            transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-50'}
          `}></div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes ping-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.75;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  )
}

export default Header