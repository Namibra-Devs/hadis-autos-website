import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BrowseSection = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const categories = [
    {
      id: "suv",
      name: "SUV",
      image: "/images/suv-80.png",
      fallbackColor: "from-blue-500 to-blue-600",
      count: "24 vehicles",
      path: "/cars?category=suv"
    },
    {
      id: "sedan",
      name: "Sedan",
      image: "/images/car-100.png",
      fallbackColor: "from-green-500 to-green-600",
      count: "32 vehicles",
      path: "/cars?category=sedan"
    },
    {
      id: "pickup",
      name: "Pickup",
      image: "/images/pickup-80.png",
      fallbackColor: "from-purple-500 to-purple-600",
      count: "18 vehicles",
      path: "/cars?category=pickup"
    },
    {
      id: "hybrid",
      name: "Hybrid",
      image: "/images/hybrid-80.png",
      fallbackColor: "from-teal-500 to-teal-600",
      count: "21 vehicles",
      path: "/cars?category=hybrid"
    },
   
  ];

  const handleImageError = (categoryId) => {
    setImageErrors((prev) => ({ ...prev, [categoryId]: true }));
    console.error(`Failed to load image for category: ${categoryId}`);
  };

  // Get shadow color based on category
  const getShadowColor = (categoryId) => {
    switch (categoryId) {
      case "suv":
        return "#3B82F6";
      case "sedan":
        return "#10B981";
      case "pickup":
        return "#8B5CF6";
      case "hybrid":
        return "#14B8A6";
      
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 px-4 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        {/* Header with decorative elements */}
        <div className="flex flex-col items-left mb-6">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-[#3b2a1f]/70 to-[#1A1C47] rounded-full" />
            <h2 className="px-4 py-2 bg-blue-50 text-[#3b2a1f] rounded-full text-sm font-semibold">
              Browse by Category
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#3b2a1f]/70 to-[#1A1C47] rounded-full" />
          </div>
          
         
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category) => {
            const isHovered = hoveredId === category.id;
            const hasImageError = imageErrors[category.id];

            return (
              <Link
                to={category.path}
                key={category.id}
                className="relative block group"
                onMouseEnter={() => setHoveredId(category.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Bouncy Shadow */}
                <motion.div
                  className="absolute -inset-3 rounded-3xl -z-10"
                  animate={{
                    scale: isHovered ? [1, 1.4, 0.9, 1.2, 0] : 0,
                    opacity: isHovered ? [0.2, 0.4, 0.3, 0.4, 0] : 0,
                  }}
                  transition={{
                    duration: 0.9,
                    repeat: isHovered ? Infinity : 0,
                    repeatDelay: 0.6,
                  }}
                  style={{
                    background: `radial-gradient(circle, ${getShadowColor(category.id)} 0%, transparent 70%)`,
                  }}
                />

                {/* Card */}
                <motion.div
                  className="relative overflow-hidden bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Container */}
                  <div className="relative h-32 lg:h-36 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <img
                      src={category.image}
                      alt={category.name}
                      className={`
                        w-full h-full object-contain p-4 transition-all duration-500
                        ${isHovered ? "scale-110 rotate-2" : "scale-100"}
                        ${imageErrors[category.id] ? "hidden" : "block"}
                      `}
                      onError={() => handleImageError(category.id)}
                      loading="lazy"
                    />

                    {hasImageError && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${category.fallbackColor} flex items-center justify-center`}
                      >
                        <span className="text-white/20 text-4xl font-black">
                          {category.name}
                        </span>
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: isHovered ? 1 : 0, 
                        scale: isHovered ? 1 : 0.8 
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span className="bg-red-800/80 text-white text-xs px-4 py-2 rounded-full font-medium shadow-xl flex items-center gap-1">
                        Browse {category.name}
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-gray-900 text-base mb-1">
                      {category.name}
                    </h3>
                    
                  </div>

                  {/* Bottom Accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b2a1f] to-[#5c483a]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </motion.div>
              </Link>
            );
          })}
        </div>

       
      </div>
    </section>
  );
};

export default BrowseSection;