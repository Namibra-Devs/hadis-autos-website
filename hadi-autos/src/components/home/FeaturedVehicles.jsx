import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Truck, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import VehicleCard from "@components/ui/VehicleCard";
import { vehicleData } from "@utils/data";
import Button from "@components/ui/Button";

const PremiumCarShowSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Get 8 vehicles for the slider
  const sliderVehicles = vehicleData
    .filter((v) => v.status === "available")
    .slice(0, 8);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(sliderVehicles.length / itemsPerPage);

  const currentVehicles = sliderVehicles.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage,
  );

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-2 lg:mb-12">
          <div className="mb-8 lg:mb-0">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-red-400 to-red-800 rounded-full" />
              <h2 className="px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold">
                Featured Selection
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-red-400 to-red-800 rounded-full" />
            </div>

            <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready Premium Vehicles
            </h2>
          </div>

          {/* Manual Arrow Navigation */}
          <div className="flex items-center gap-4 mt-2 lg:mt-0 hidden lg:block">
            <span className="text-sm text-red-500">
              Page {currentPage + 1} of {totalPages}
            </span>
            <div className="flex items-center gap-2 mt-3">
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className={`
                  w-11 h-11 rounded-full flex items-center justify-center
                  border transition-all duration-300
                  ${
                    currentPage === 0
                      ? "border-gray-200 text-gray-300 cursor-not-allowed"
                      : "border-gray-300 text-gray-700 hover:bg-[#3b2a1f] hover:text-white hover:border-[#3b2a1f]"
                  }
                `}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                className={`
                  w-11 h-11 rounded-full flex items-center justify-center
                  border transition-all duration-300
                  ${
                    currentPage === totalPages - 1
                      ? "border-gray-200 text-gray-300 cursor-not-allowed"
                      : "border-gray-300 text-gray-700 hover:bg-[#3b2a1f] hover:text-white hover:border-[#3b2a1f]"
                  }
                `}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Grid - 4 Vehicles */}
        <div className="hidden lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-4 gap-6"
            >
              {currentVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tablet Grid - 2 Vehicles */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-6">
            {sliderVehicles.slice(0, 4).map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>

        {/* Mobile Scroll */}
        <div className="md:hidden">
          <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            <div className="flex space-x-4">
              {sliderVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="w-[280px] flex-shrink-0 snap-start"
                >
                  <VehicleCard vehicle={vehicle} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-3 lg:mt-12 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Truck className="w-4 h-4 text-[#3b2a1f]/70" />
              <span>Door-to-door delivery • Customs clearance included</span>
            </div>
          </div>

        <Link
  to="/cars"
  className="
    group relative overflow-hidden inline-flex items-center gap-2
    text-white bg-black hover:bg-black/60
    px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold
    hover:shadow-2xl hover:scale-105 transition-all cursor-pointer
  "
>
  <span>All Inventory</span>
  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</Link>

        </div>
      </div>
    </section>
  );
};

export default PremiumCarShowSlider;
