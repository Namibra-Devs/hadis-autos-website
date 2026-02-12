import {
  Shield,
  Truck,
  Globe,
  CheckCircle,
  Award,
  Users,
  ArrowRight,
  Star,
  ThumbsUp,
  Clock,
  DollarSign,
} from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 lg:w-7 lg:h-7" />,
      title: "Vehicle Inspection",
      description:
        "Every vehicle undergoes thorough 150-point inspection and quality checks before purchase.",
      color: "from-blue-500 to-cyan-500",
      lightColor: "from-blue-400/20 to-cyan-400/20",
    },
    {
      icon: <Truck className="w-6 h-6 lg:w-7 lg:h-7" />,
      title: "Shipment Handling",
      description:
        "We manage all logistics including shipping, customs, and clearance door-to-door.",
      color: "from-emerald-500 to-green-500",
      lightColor: "from-emerald-400/20 to-green-400/20",
    },
    {
      icon: <Globe className="w-6 h-6 lg:w-7 lg:h-7" />,
      title: "Transparent Process",
      description:
        "Clear pricing with no hidden fees. Know exactly what you're paying for.",
      color: "from-amber-500 to-orange-500",
      lightColor: "from-amber-400/20 to-orange-400/20",
    },
    {
      icon: <CheckCircle className="w-6 h-6 lg:w-7 lg:h-7" />,
      title: "Quality Guarantee",
      description:
        "All vehicles come with verified history reports and comprehensive condition documentation.",
      color: "from-violet-500 to-purple-500",
      lightColor: "from-violet-400/20 to-purple-400/20",
    },
    {
      icon: <Award className="w-6 h-6 lg:w-7 lg:h-7" />,
      title: "Expert Service",
      description:
        "Years of experience in Canada-Ghana vehicle import market with proven track record.",
      color: "from-rose-500 to-pink-500",
      lightColor: "from-rose-400/20 to-pink-400/20",
    },
    {
      icon: <Users className="w-6 h-6 lg:w-7 lg:h-7" />,
      title: "Customer Support",
      description:
        "Dedicated support team available 24/7 throughout the import process.",
      color: "from-teal-500 to-cyan-500",
      lightColor: "from-teal-400/20 to-cyan-400/20",
    },
  ];

  const stats = [
    { value: "500+", label: "Vehicles Imported", icon: Truck },
    { value: "99%", label: "Satisfaction", icon: ThumbsUp },
    { value: "10+", label: "Years Experience", icon: Clock },
    { value: "₵0", label: "Hidden Fees", icon: DollarSign },
  ];

  return (
    <section className="relative bg-[#3b2a1f] py-10 overflow-hidden">
      {/* Premium Textured Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b2a1f] via-[#4a3528] to-[#2e2018]" />

        {/* Leather texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />

        {/* Subtle pattern lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(45deg, #8b7356 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-200/20 rounded-full"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Section Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 mb-8">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 animate-pulse" />
              <span className="text-amber-200/90 text-sm font-medium tracking-wider">
                WHY CHOOSE US
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-xl lg:text-3xl xl:text-5xl font-bold text-white mb-6 leading-tight">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
                Hadi's Motors
              </span>
              <br />
              Advantage
            </h2>

            {/* Description */}
            <p className="text-lg lg:text-xl text-amber-100/80 mb-12 leading-relaxed max-w-xl">
              We make importing vehicles from Canada to Ghana simple,
              transparent, and reliable. Your trusted partner for premium
              automotive imports.
            </p>

            {/* Features List - Reimagined */}
            <div className="space-y-6 mb-12">
              {features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  {/* Icon with gradient background */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`
                      relative w-12 h-12 rounded-xl
                      bg-gradient-to-br ${feature.color}
                      flex items-center justify-center
                      shadow-lg shadow-black/20
                      group-hover:scale-110 transition-transform duration-300
                    `}
                    >
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    {/* Glow effect */}
                    <div
                      className={`
                      absolute inset-0 rounded-xl
                      bg-gradient-to-r ${feature.color}
                      opacity-0 group-hover:opacity-40 blur-md
                      transition-opacity duration-500
                    `}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-amber-100/70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                      <Icon className="w-5 h-5 text-amber-400/80 mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-xl lg:text-2xl font-bold text-white mb-0.5">
                        {stat.value}
                      </div>
                      <div className="text-xs text-amber-100/60">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Large Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative lg:h-[600px]"
          >
            {/* Main Image Container */}
            <div className="relative h-full">
              {/* Decorative Background Elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-full blur-3xl" />

              {/* Main Image Card */}
              <div className="relative p-6">
                {/* Image Frame */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  {/* Replace this with your actual image */}
                  <img
                    src="/images/sale.png"
                    alt="Luxury car showroom with premium vehicles"
                    className="w-full h-full object-fill transform hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3b2a1f]/80 via-transparent to-transparent" />
                </div>
              </div>
              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="
                group relative overflow-hidden
                bg-gradient-to-r from-amber-800 to-orange-600
                text-white font-semibold px-4 py-4 rounded-md
                shadow-2xl shadow-orange-500/20
                hover:shadow-orange-500/40 hover:scale-105
                transition-all duration-300
                flex items-center space-x-3 mt-8 cursor-pointer
              "
              >
                <span className="relative z-10 flex items-center">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-800 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
