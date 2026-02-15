import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { categories, getCategoryCounts } from '@utils/categories'
import { motion, AnimatePresence } from 'framer-motion'

const FilterBar = ({ vehicles, activeCategory, onCategoryChange }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [counts, setCounts] = useState({})

  useEffect(() => {
    setCounts(getCategoryCounts(vehicles))
  }, [vehicles])

  return (
    <div className="w-full">
      {/* Mobile Dropdown */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3"
        >
          <span className="font-medium text-gray-900">
            {categories.find(c => c.id === activeCategory)?.name || 'All Vehicles'}
          </span>
          <ChevronDown className={`w-5 h-5 transition-transform ${isMobileOpen ? 'rotate-180' : ''}`} />
        </button>
        
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden"
            >
              {categories.map((category) => {
                const Icon = category.icon
                const count = counts[category.id] || 0
                
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      onCategoryChange(category.id)
                      setIsMobileOpen(false)
                    }}
                    className={`
                      w-full flex items-center justify-between px-4 py-3
                      hover:bg-gray-50 transition-colors
                      ${activeCategory === category.id ? 'bg-gray-50' : ''}
                    `}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full ${category.lightColor} flex items-center justify-center`}>
                        <Icon className={`w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`} />
                      </div>
                      <span className="font-medium text-gray-900">{category.name}</span>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {count}
                    </span>
                  </button>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-3 xl:grid-cols-5 gap-3 mb-8">
        {categories.map((category) => {
          const Icon = category.icon
          const count = counts[category.id] || 0
          const isActive = activeCategory === category.id
          
          return (
            <motion.button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                relative group flex flex-col items-center p-4 rounded-xl
                transition-all duration-300 overflow-hidden
                ${isActive 
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
                  : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md'
                }
              `}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                  backgroundSize: '20px 20px'
                }} />
              </div>

              <div className={`
                relative w-12 h-12 rounded-full flex items-center justify-center mb-2
                transition-all duration-300 group-hover:scale-110
                ${isActive 
                  ? 'bg-white/20' 
                  : category.lightColor
                }
              `}>
                <Icon className={`
                  w-6 h-6 transition-colors
                  ${isActive ? 'text-white' : `text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}
                `} />
              </div>

              <span className={`text-sm font-medium mb-1 ${isActive ? 'text-white' : 'text-gray-900'}`}>
                {category.name}
              </span>
              
              <span className={`
                text-xs px-2 py-0.5 rounded-full
                ${isActive 
                  ? 'bg-white/20 text-white' 
                  : 'bg-gray-100 text-gray-600'
                }
              `}>
                {count} vehicles
              </span>

              {isActive && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 border-2 border-white/30 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

export default FilterBar