import {
  Search,
  Car,
  Ship,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Shield,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse & Select",
      description:
        "Choose from our available vehicles or let us find one that matches your exact specifications.",
      accent: "from-red-500 to-red-800",
    },
    {
      icon: Car,
      title: "Vehicle Inspection",
      description:
        "We conduct thorough 150-point inspections and provide detailed reports with photos.",
      accent: "from-red-500 to-red-800",
    },
    {
      icon: Ship,
      title: "Shipping & Customs",
      description:
        "We handle all logistics including shipping, insurance, and customs clearance.",
      accent: "from-red-500 to-red-800",
    },
    {
      icon: CheckCircle,
      title: "Delivery & Handover",
      description:
        "Vehicle delivered to your preferred location in Ghana with full documentation.",
      accent: "from-red-500 to-red-800",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-10 overflow-hidden">
      {/* Premium Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#3b2a1f]/90 mix-blend-multiply" />

        {/* Background Image */}
        <img
          src="/images/hero3.jpg"
          alt="Luxury car showroom background"
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />

        {/* Subtle Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Decorative Badge */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-red-400 to-transparent" />
            <span className="text-red-600 text-sm uppercase tracking-[0.2em] font-medium">
              Simple Process
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-red-400 to-transparent" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How It Works
          </h2>

          <p className="text-md lg:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Our streamlined 4-step process makes importing vehicles from Canada
            to Ghana simple, transparent, and completely hassle-free.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card Container */}
                <div
                  className="
                  relative h-full
                  bg-white/5 backdrop-blur-md
                  border border-white/10
                  rounded-2xl p-6 lg:p-8
                  transition-all duration-500
                  group-hover:bg-white/10
                  group-hover:border-white/20
                  group-hover:shadow-2xl
                  group-hover:-translate-y-2
                  overflow-hidden
                "
                >
                  {/* Glow Effect on Hover */}
                  <div
                    className={`
                    absolute inset-0 opacity-0 group-hover:opacity-20
                    bg-gradient-to-br ${step.accent}
                    transition-opacity duration-500
                  `}
                  />

                  {/* Step Number */}
                  <div
                    className="
                    absolute -top-3 -right-3
                    w-12 h-12 rounded-full
                    bg-gradient-to-br from-red-600 to-red-700
                    flex items-center justify-center
                    text-white font-bold text-lg
                    shadow-xl
                    transition-transform duration-500
                    group-hover:scale-110 group-hover:rotate-12
                  "
                  >
                    {index + 1}
                  </div>

                  {/* Icon Container */}
                  <div
                    className="
                    relative w-14 h-14 lg:w-16 lg:h-16
                    rounded-xl bg-gradient-to-br from-red-400/20 to-orange-500/20
                    flex items-center justify-center
                    mb-5 lg:mb-6
                    transition-all duration-500
                    group-hover:scale-110
                  "
                  >
                    <IconComponent
                      className={`
                      w-6 h-6 lg:w-7 lg:h-7
                    text-white
                    `}
                    />

                    {/* Icon Glow */}
                    <div
                      className={`
                      absolute inset-0 rounded-xl bg-gradient-to-br ${step.accent}
                      opacity-0 group-hover:opacity-30 blur-md
                      transition-opacity duration-500
                    `}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                    text-xl lg:text-xl font-bold text-white
                    mb-3 lg:mb-4
                    group-hover:bg-clip-text 
                    group-hover:bg-gradient-to-r ${step.accent}
                    transition-all duration-300
                  "
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm lg:text-base text-white leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative Corner */}
                  <div
                    className="
                    absolute bottom-4 right-4 w-8 h-8
                    border-b-2 border-r-2 border-white/10
                    rounded-br-2xl
                    transition-all duration-500
                    group-hover:border-red-400/30
                  "
                  />
                </div>

                {/* Connector Line (for desktop) */}
                {index < steps.length - 1 && (
                  <div
                    className="
                    hidden lg:block
                    absolute top-1/2 -right-4
                    w-8 h-0.5
                    bg-gradient-to-r from-red-400/50 to-transparent
                    transform -translate-y-1/2
                  "
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16"
        >
          <div className="flex items-center gap-4">
            <div className="text-left">
              <div className="text-white font-semibold">
                Trusted by 500+ Importers
              </div>
              <div className="text-red-200/70 text-sm">
                98% customer satisfaction
              </div>
            </div>
          </div>

          <div className="h-8 w-px bg-white/10 hidden sm:block" />

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {["Canada", "Ghana"].map((country) => (
                <span
                  key={country}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-red-100/80 text-sm"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10"
        >
          {[
            { value: "10+", label: "Years Experience", icon: Clock },
            { value: "500+", label: "Vehicles Imported", icon: Car },
            { value: "24/7", label: "Customer Support", icon: Users },
            { value: "100%", label: "Transparency", icon: Shield },
          ].map((stat, index) => {
            const StatIcon = stat.icon;

            return (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <StatIcon className="w-4 h-4 text-red-400" />
                  <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                    {stat.value}
                  </div>
                </div>
                <div className="text-xs lg:text-sm text-amber-100/60">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
