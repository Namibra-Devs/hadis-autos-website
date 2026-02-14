import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Users,
  Sparkles,
  Award,
  Pause,
  Play,
} from "lucide-react";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const autoPlayRef = useRef(null);
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: "Michael Owusu",
      role: "Business Owner",
      content:
        "From the first inquiry to final delivery, the entire process was seamless. My vehicle arrived exactly as described, and the team handled everything professionally.",
      rating: 5,
      avatarColor: "from-blue-500 to-blue-800",
    },
    {
      id: 2,
      name: "Akosua Bennett",
      role: "Entrepreneur",
      content:
        "I was initially nervous about importing a vehicle, but their transparency and constant updates gave me complete confidence. The car exceeded my expectations.",
      rating: 5,
      avatarColor: "from-purple-500 to-pink-800",
    },
    {
      id: 3,
      name: "Daniel Mensimah",
      role: "Project Manager",
      content:
        "The pricing was clear, fair, and fully explained. No hidden fees. What I was quoted is exactly what I paid. That level of honesty is rare.",
      rating: 4,
      avatarColor: "from-emerald-500 to-teal-800",
    },
    {
      id: 4,
      name: "Linda Asare",
      role: "Corporate Executive",
      content:
        "Their premium vehicle selection is impressive. I found the exact model I wanted, and the condition was immaculate upon arrival.",
      rating: 5,
      avatarColor: "from-amber-500 to-orange-800",
    },
    {
      id: 5,
      name: "Kwesi Boateng",
      role: "Tech Consultant",
      content:
        "The team kept me informed at every stage — from sourcing in Canada to delivery in Ghana. Outstanding communication and service.",
      rating: 5,
      avatarColor: "from-rose-500 to-red-800",
    },
    {
      id: 6,
      name: "Adwoa Koomson",
      role: "Healthcare Professional",
      content:
        "I appreciate how detailed the inspection reports were before purchase. It made the decision easy and stress-free.",
      rating: 4,
      avatarColor: "from-indigo-500 to-violet-800",
    },
  ];

  // Calculate visible reviews (always 3 in view)
  const getVisibleReviews = () => {
    const visible = [];
    const total = reviews.length;

    // Always show 3 cards: previous, current, next
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + total) % total;
      visible.push({
        ...reviews[index],
        position: i === -1 ? "left" : i === 0 ? "center" : "right",
        index: i,
      });
    }

    return visible;
  };

  const visibleReviews = getVisibleReviews();

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayRef.current = setInterval(() => {
      setDirection(1); // Always slide from right for auto-play
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, reviews.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Touch/swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;

    const distance = touchStartRef.current - touchEndRef.current;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }

    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  return (
    <section className="relative w-full py-8 md:py-12 lg:py-15 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-200/20 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-purple-200/20 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-red-900 rounded-full" />
            <h2 className="px-4 py-2 bg-red-50 text-red-500 rounded-full text-sm font-semibold">
              MEMBER TESTIMONIALS
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-red-900 rounded-full" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Voices of Trust
          </h2>
        </motion.div>

        {/* Testimonial Slider Container */}
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Testimonial Cards - Desktop (3 cards visible) */}
          <div className="hidden md:flex items-center justify-center gap-4 lg:gap-8 relative h-[400px] lg:h-[450px]">
            <AnimatePresence custom={direction} mode="popLayout">
              {visibleReviews.map((review) => {
                const isCenter = review.position === "center";
                const isLeft = review.position === "left";
                const isRight = review.position === "right";

                return (
                  <motion.div
                    key={`${review.id}-${currentIndex}`}
                    custom={review.index}
                    initial={{
                      opacity: isCenter ? 0 : 0.4,
                      scale: isCenter ? 0.9 : 0.7,
                      x:
                        direction === 1
                          ? isLeft
                            ? -400
                            : isRight
                              ? 400
                              : 0
                          : isLeft
                            ? -400
                            : isRight
                              ? 400
                              : 0,
                    }}
                    animate={{
                      opacity: isCenter ? 1 : 0.4,
                      scale: isCenter ? 1 : 0.7,
                      x: 0,
                      filter: isCenter ? "none" : "grayscale(30%) blur(2px)",
                    }}
                    exit={{
                      opacity: 0,
                      x: direction === 1 ? -400 : 400,
                      scale: 0.8,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                    className={`absolute ${
                      isCenter
                        ? "z-20 left-1/2 transform -translate-x-1/2 w-full max-w-md lg:max-w-lg"
                        : isLeft
                          ? "z-10 left-0 lg:left-8"
                          : "z-10 right-0 lg:right-8"
                    }`}
                  >
                    <div
                      className={`rounded-xl shadow-md overflow-hidden transition-all duration-500 ${
                        isCenter
                          ? "shadow-2xl bg-black text-white ring-2 ring-white/20"
                          : "shadow-md bg-white opacity-90 hover:opacity-100 cursor-pointer"
                      }`}
                      onClick={() =>
                        !isCenter &&
                        handleDotClick(
                          (currentIndex + review.index + reviews.length) %
                            reviews.length,
                        )
                      }
                    >
                      {/* Card Content */}
                      <div className="p-6 lg:p-8">
                        {/* Quote Icon */}
                        <Quote
                          className={`w-8 h-8 mb-4 ${
                            isCenter ? "text-white" : "text-white"
                          }`}
                        />

                        {/* Stars */}
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < review.rating
                                  ? "text-red-600 fill-current"
                                  : "text-red-500"
                              } ${isCenter ? "scale-110" : "scale-90"}`}
                            />
                          ))}
                        </div>

                        {/* Review Text */}
                        <p
                          className={`mb-6 leading-relaxed ${
                            isCenter
                              ? "text-white text-lg lg:text-xl italic"
                              : "text-gray-600 text-base"
                          }`}
                        >
                          "{review.content}"
                        </p>

                        {/* Reviewer Info */}
                        <div className="flex items-center">
                          <div
                            className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r ${review.avatarColor} flex items-center justify-center text-white font-bold text-lg lg:text-xl mr-4`}
                          >
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <h4
                              className={`font-bold ${
                                isCenter
                                  ? "text-white-100 text-lg"
                                  : "text-gray-800"
                              }`}
                            >
                              {review.name}
                            </h4>
                            <p
                              className={`${
                                isCenter ? "text-white" : "text-gray-500"
                              }`}
                            >
                              {review.role}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Center Card Badge */}
                      {isCenter && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.3, type: "spring" }}
                          className="absolute -top-3 -right-3"
                        >
                          <div className="bg-gradient-to-r from-red-600 to-red-900 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-lg flex items-center gap-2">
                            <Star size={12} className="text-white" />
                            <span className="text-xs lg:text-sm font-bold">
                              FEATURED
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Testimonial Cards - Mobile (Single card centered) */}
          <div className="md:hidden pb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
                transition={{ duration: 0.4 }}
                className="bg-[#3b2a1f] rounded-xl shadow-md p-6 mx-auto max-w-sm"
              >
                <Quote className="w-8 h-8 text-blue-500 mb-4" />

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < reviews[currentIndex].rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-white mb-6 leading-relaxed italic">
                  "{reviews[currentIndex].content}"
                </p>

                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${reviews[currentIndex].avatarColor} flex items-center justify-center text-white font-bold text-lg mr-4`}
                  >
                    {reviews[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">
                      {reviews[currentIndex].name}
                    </h4>
                    <p className="text-white">{reviews[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
