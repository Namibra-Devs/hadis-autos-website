import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BrowseSection = () => {
  const [activeCategory, setActiveCategory] = useState("suv");
  const [hoveredId, setHoveredId] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const categories = [
    {
      id: "suv",
      name: "SUV",
      image: "/images/suv.webp",
      fallbackColor: "from-blue-500 to-blue-600",
      count: "24 vehicles",
    },
    {
      id: "cars",
      name: "Cars",
      image: "/images/sedan.webp",
      fallbackColor: "from-green-500 to-green-600",
      count: "32 vehicles",
    },
    {
      id: "electric",
      name: "Electric",
      image: "/images/electric-2.webp",
      fallbackColor: "from-purple-500 to-purple-600",
      count: "18 vehicles",
    },

    {
      id: "hybrid",
      name: "Hybrid",
      image: "/images/hybrid.webp",
      fallbackColor: "from-teal-500 to-teal-600",
      count: "21 vehicles",
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
      case "cars":
        return "#10B981";
      case "electric":
        return "#8B5CF6";
      case "trucks":
        return "#F59E0B";
      case "vans":
        return "#EF4444";
      case "hybrid":
        return "#14B8A6";
      default:
        return "#3B82F6";
    }
  };

  return (
    <section className="w-full bg-white py-16 px-4 lg:px-8">
      <div className="container mx-auto">
        {/* Header with decorative elements */}

        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-12 h-1 bg-gradient-to-r from-[#3b2a1f]/70 to-[#1A1C47] rounded-full" />
          <h2 className="px-4 py-2 bg-blue-50 text-[#3b2a1f] rounded-full text-sm font-semibold">
            Browse by Category
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#3b2a1f]/70 to-[#1A1C47] rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            const isHovered = hoveredId === category.id;
            const hasImageError = imageErrors[category.id];

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative"
                onHoverStart={() => setHoveredId(category.id)}
                onHoverEnd={() => setHoveredId(null)}
                onClick={() => setActiveCategory(category.id)}
              >
                {/* Bouncy Shadow - Disappears on hover cycle */}
                <motion.div
                  className="absolute -inset-3 rounded-3xl"
                  animate={{
                    scale: isHovered ? [1, 1.5, 0.8, 1.2, 0] : 0,
                    opacity: isHovered ? [0.3, 0.6, 0.4, 0.5, 0] : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    times: [0, 0.3, 0.5, 0.7, 1],
                    repeat: isHovered ? Infinity : 0,
                    repeatDelay: 0.5,
                  }}
                  style={{
                    background: `radial-gradient(circle, ${getShadowColor(category.id)} 0%, transparent 70%)`,
                  }}
                />

                {/* Main Card */}
                <motion.div
                  className="relative  overflow-hidden  cursor-pointer group"
                  whileHover="hover"
                  variants={{
                    hover: {
                      y: [0, -15, 0],
                      transition: {
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    },
                  }}
                >
                  {/* Image Container */}
                  <div className="relative h-40 lg:h-48 overflow-hidden bg-gray-100 ">
                    {/* Actual Image */}
                    <img
                      src={category.image}
                      alt={category.name}
                      className={`
                        w-full h-full object-cover transition-all duration-700 object-fill
                        ${isHovered ? "scale-110" : "scale-100"}
                        ${hasImageError ? "hidden" : "block"}
                      `}
                      onError={() => handleImageError(category.id)}
                      loading="lazy"
                    />

                    {/* Fallback Gradient (shows when image fails to load) */}
                    {hasImageError && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${category.fallbackColor} transition-all duration-500 group-hover:scale-110`}
                      >
                        {/* Category Name Watermark */}
                        <span className="absolute inset-0 flex items-center justify-center text-white/20 text-4xl font-black">
                          {category.name}
                        </span>
                      </div>
                    )}

                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 20,
                      }}
                      className="absolute bottom-3 left-1/2 transform -translate-x-1/2"
                    >
                      <div className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs px-4 py-2 rounded-full font-medium shadow-lg">
                        View {category.name}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-4 text-center relative">
                    <h3 className="font-bold text-[#3b2a1f]/70 text-lg mb-1">
                      {category.name}
                    </h3>

                    {/* Hover Indicator Bar */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b2a1f]/70 to-[#3b2a1f]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrowseSection;
