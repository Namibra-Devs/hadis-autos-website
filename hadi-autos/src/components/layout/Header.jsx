import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Phone, Menu, X, Car } from 'lucide-react'
import Button from '@components/ui/Button'
import MobileNav from './MobileNav'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/cars', label: 'Available Cars' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <Car className="w-8 h-8 text-primary-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Hadi's Motors</h1>
                <p className="text-sm text-gray-600">Canada to Ghana Vehicle Import</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-medium transition-colors ${
                      isActive
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-gray-600 hover:text-primary-600'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Contact Button */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">+1 (234) 567-890</span>
              </a>
              <Button
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700"
              >
                WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  )
}

export default Header