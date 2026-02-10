import { NavLink } from 'react-router-dom'
import { Phone, X, MessageCircle, Home, Car, Contact } from 'lucide-react'
import Button from '@components/ui/Button'

const MobileNav = ({ isOpen, onClose }) => {
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/cars', label: 'Available Cars', icon: Car },
    { path: '/contact', label: 'Contact', icon: Contact },
  ]

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 mb-4"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">+1 (234) 567-890</span>
            </a>
            <Button
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-600 hover:bg-green-700"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNav