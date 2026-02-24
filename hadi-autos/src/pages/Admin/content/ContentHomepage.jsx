import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Save,
  Eye,
  Image as ImageIcon,
  Plus,
  X,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ChevronLeft,
  Trash2,
  Edit,
  Copy,
  Globe,
  Smartphone,
  Tablet,
  Monitor,
  RefreshCw,
  Undo,
  Redo,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Link as LinkIcon,
  Image,
  Video,
  FileText,
  Settings,
  Sparkles,
  Award,
  Star,
  Users,
  Truck,
  CheckCircle,
  AlertCircle,
  Clock,
  Calendar,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  ThumbsUp,
  Share2,
  Download,
  Upload,
  Palette,
  Type,
  Layout,
  Grid,
  List,
  Layers,
  FolderTree,
  Hash,
  AtSign,
  Paperclip,
  Camera,
  Film,
  Music,
  Headphones,
  Mic,
  Volume2,
  VolumeX,
  Play,
  Pause,
  StopCircle,
  SkipForward,
  SkipBack,
  Maximize2,
  Minimize2,
  Zap,
  Award as AwardIcon,
  Heart,
  Bookmark,
  Flag,
  Bell,
  BellRing,
  BellOff,
  Settings as SettingsIcon,
  HelpCircle,
  Info,
  AlertTriangle,
  Check,
  X as XIcon,
} from "lucide-react";

// Sample vehicle images for preview
const SAMPLE_VEHICLES = [
  {
    id: 1,
    name: "2022 Toyota Camry XLE",
    price: 18500,
    mileage: 25000,
    image: "/images/1.avif",
    year: 2022,
    fuelType: "Hybrid",
  },
  {
    id: 2,
    name: "2021 Honda CR-V EX-L",
    price: 22000,
    mileage: 32000,
    image: "/images/6.avif",
    year: 2021,
    fuelType: "Gasoline",
  },
  {
    id: 3,
    name: "2020 Mercedes-Benz C300",
    price: 35000,
    mileage: 45000,
    image: "/images/11.webp",
    year: 2020,
    fuelType: "Gasoline",
  },
  {
    id: 4,
    name: "2019 Ford F-150 XLT",
    price: 28000,
    mileage: 52000,
    image: "/images/f150-1.jpg",
    year: 2019,
    fuelType: "Gasoline",
  },
  {
    id: 5,
    name: "2023 Tesla Model 3",
    price: 42000,
    mileage: 8500,
    image: "/images/tesla-1.jpg",
    year: 2023,
    fuelType: "Electric",
  },
  {
    id: 6,
    name: "2022 BMW X5",
    price: 55000,
    mileage: 15000,
    image: "/images/bmw-x5.jpg",
    year: 2022,
    fuelType: "Gasoline",
  },
];

// Sample testimonial images
const SAMPLE_TESTIMONIAL_IMAGES = [
  "/images/testimonial-1.jpg",
  "/images/testimonial-2.jpg",
  "/images/testimonial-3.jpg",
  "/images/user1.jpg",
  "/images/user2.jpg",
  "/images/user3.jpg",
];

const ContentHomepage = () => {
  const [content, setContent] = useState({
    // Hero Section
    hero: {
      title: "Quality Vehicles from Canada to Ghana",
      subtitle:
        "Import reliable, inspected vehicles with transparent pricing and door-to-door delivery.",
      buttonText: "Browse Vehicles",
      buttonLink: "/vehicles",
      backgroundImage: "/images/hero3.jpg",
      overlay: true,
      overlayOpacity: 0.6,
    },

    // About Section
    about: {
      title: "About Hadi's Autos",
      content:
        "We are a trusted vehicle import company serving customers in Ghana with quality vehicles from Canada. Our mission is to provide reliable, inspected vehicles with transparent pricing and exceptional customer service.",
      image: "/images/sale.png",
      features: [
        { id: 1, text: "10+ years of experience", icon: "Award" },
        { id: 2, text: "500+ vehicles imported", icon: "Truck" },
        { id: 3, text: "98% customer satisfaction", icon: "Star" },
        { id: 4, text: "Full inspection included", icon: "CheckCircle" },
      ],
    },

    // Stats Section
    stats: [
      { id: 1, value: "500+", label: "Vehicles Imported", icon: "Truck" },
      { id: 2, value: "98%", label: "Happy Customers", icon: "Users" },
      { id: 3, value: "10+", label: "Years Experience", icon: "Award" },
      { id: 4, value: "24/7", label: "Customer Support", icon: "Clock" },
    ],

    // Featured Vehicles Section
    featured: {
      title: "Featured Vehicles",
      subtitle: "Hand-picked vehicles ready for immediate import",
      showSection: true,
      maxVehicles: 6,
      layout: "grid", // grid, carousel, list
    },

    // Services Section
    services: [
      {
        id: 1,
        title: "Vehicle Import",
        description: "Full-service import from Canada to Ghana",
        icon: "Truck",
        features: [
          "Door-to-door delivery",
          "Customs clearance",
          "Shipping insurance",
        ],
      },
      {
        id: 2,
        title: "Vehicle Inspection",
        description: "Comprehensive pre-shipment inspection",
        icon: "CheckCircle",
        features: [
          "Mechanical check",
          "Exterior inspection",
          "Test drive report",
        ],
      },
      {
        id: 3,
        title: "Financing Options",
        description: "Flexible payment plans available",
        icon: "Award",
        features: ["0% APR options", "Quick approval", "No hidden fees"],
      },
      {
        id: 4,
        title: "Customer Support",
        description: "24/7 support throughout the process",
        icon: "Users",
        features: [
          "Dedicated agent",
          "WhatsApp support",
          "Track your shipment",
        ],
      },
    ],

    // Testimonials Section
    testimonials: {
      title: "What Our Customers Say",
      subtitle: "Trusted by hundreds of satisfied customers",
      showSection: true,
      items: [
        {
          id: 1,
          name: "Kwame Mensah",
          location: "Accra, Ghana",
          rating: 5,
          text: "Excellent service! The vehicle arrived exactly as described. The team was professional throughout.",
          image: "/images/testimonial-1.jpg",
          date: "2024-02-15",
        },
        {
          id: 2,
          name: "Ama Asante",
          location: "Kumasi, Ghana",
          rating: 5,
          text: "Very happy with my purchase. The shipping was faster than expected and the car is in perfect condition.",
          image: "/images/testimonial-2.jpg",
          date: "2024-02-10",
        },
        {
          id: 3,
          name: "Kofi Boateng",
          location: "Takoradi, Ghana",
          rating: 4,
          text: "Great experience overall. Would definitely recommend to friends and family.",
          image: "/images/testimonial-3.jpg",
          date: "2024-02-05",
        },
      ],
    },

    // Contact Section
    contact: {
      title: "Get In Touch",
      subtitle: "We're here to help with any questions",
      email: "info@hadisautos.com",
      phone: "+233 24 123 4567",
      whatsapp: "+233 24 123 4567",
      address: "123 Liberation Road, Accra, Ghana",
      hours: "Mon-Fri: 9am-6pm, Sat: 10am-4pm",
      mapEmbed: "https://maps.google.com/?q=Accra,Ghana",
      showMap: true,
    },

   

   
  });

  const [activeSection, setActiveSection] = useState("hero");
  const [previewMode, setPreviewMode] = useState("desktop");
  const [showPreview, setShowPreview] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [showSaveConfirm, setShowSaveConfirm] = useState(false);
  const [previewVehicles, setPreviewVehicles] = useState(SAMPLE_VEHICLES);
  const [previewIndex, setPreviewIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
   const [isFullscreen, setIsFullscreen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    hero: true,
    about: true,
    stats: true,
    featured: true,
    services: true,
    testimonials: true,
    contact: true,
    seo: false,
    design: false,
  });

 const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
  };

const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  // Auto-play carousel
  useEffect(() => {
    let interval;

    if (isAutoPlaying && content.featured.layout === "carousel") {
      interval = setInterval(() => {
        setPreviewIndex((prev) =>
          prev <
          Math.min(content.featured.maxVehicles, previewVehicles.length) - 1
            ? prev + 1
            : 0,
        );
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [
    isAutoPlaying,
    content.featured.maxVehicles,
    content.featured.layout,
    previewVehicles.length,
  ]);

  // Track changes
  useEffect(() => {
    setUnsavedChanges(true);
  }, [content]);

  const handleSave = () => {
    console.log("Saving content:", content);
    // Simulate API call
    setTimeout(() => {
      setUnsavedChanges(false);
      setShowSaveConfirm(true);
      setTimeout(() => setShowSaveConfirm(false), 3000);
    }, 1000);
  };

  const handleReset = () => {
    if (window.confirm("Reset all changes? This cannot be undone.")) {
      // Reset to original content
      window.location.reload();
    }
  };

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  const addStat = () => {
    setContent({
      ...content,
      stats: [
        ...content.stats,
        {
          id: Date.now(),
          value: "New",
          label: "New Stat",
          icon: "Star",
        },
      ],
    });
  };

  const removeStat = (id) => {
    setContent({
      ...content,
      stats: content.stats.filter((stat) => stat.id !== id),
    });
  };

  const addService = () => {
    setContent({
      ...content,
      services: [
        ...content.services,
        {
          id: Date.now(),
          title: "New Service",
          description: "Service description",
          icon: "Star",
          features: ["Feature 1", "Feature 2"],
        },
      ],
    });
  };

  const removeService = (id) => {
    setContent({
      ...content,
      services: content.services.filter((service) => service.id !== id),
    });
  };

  const addTestimonial = () => {
    setContent({
      ...content,
      testimonials: {
        ...content.testimonials,
        items: [
          ...content.testimonials.items,
          {
            id: Date.now(),
            name: "New Customer",
            location: "Accra, Ghana",
            rating: 5,
            text: "Customer testimonial text",
            image: "/images/default-avatar.jpg",
            date: new Date().toISOString().split("T")[0],
          },
        ],
      },
    });
  };

  const removeTestimonial = (id) => {
    setContent({
      ...content,
      testimonials: {
        ...content.testimonials,
        items: content.testimonials.items.filter((item) => item.id !== id),
      },
    });
  };

  const updateTestimonial = (id, field, value) => {
    setContent({
      ...content,
      testimonials: {
        ...content.testimonials,
        items: content.testimonials.items.map((item) =>
          item.id === id ? { ...item, [field]: value } : item,
        ),
      },
    });
  };

  const getIconComponent = (iconName) => {
    const icons = {
      Award: AwardIcon,
      Truck: Truck,
      Star: Star,
      Users: Users,
      Clock: Clock,
      CheckCircle: CheckCircle,
      default: AwardIcon,
    };
    return icons[iconName] || AwardIcon;
  };

  

  return (
    <div className="space-y-8 pb-12">
      {/* Premium Header */}
      <div className="relative overflow-hidden rounded-md bg-gradient-to-r from-red-600 via-red-800 to-red-900 p-8">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Link
              to="/admin/content"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all text-white"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white flex items-center">
                <Layout className="w-8 h-8 mr-3" />
                Edit Homepage
              </h1>
              <p className="text-white/80 mt-2 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Customize homepage
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Save Button */}
            <button
              onClick={handleSave}
              disabled={!unsavedChanges}
              className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all cursor-pointer ${
                unsavedChanges
                  ? "bg-white text-gray-900 hover:shadow-2xl hover:scale-105"
                  : "bg-white/10 backdrop-blur-sm text-white/50 cursor-not-allowed"
              }`}
            >
              <Save className="w-5 h-5" />
              <span>Save Changes</span>
            </button>

            {/* Reset Button */}
            <button
              onClick={handleReset}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-md hover:bg-white/20 transition-all text-white cursor-pointer"
              title="Reset Changes"
            >
              <Undo className="w-5 h-5" />
            </button>

             {/* Fullscreen toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2.5 bg-white/10 backdrop-blur-sm rounded-md hover:bg-white/20 transition-all text-white cursor-pointer"
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5 text-white" />
            ) : (
              <Maximize2 className="w-5 h-5 text-white" />
            )}
          </button>
          </div>
        </div>

        {/* Save Confirmation */}
        <AnimatePresence>
          {showSaveConfirm && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Changes saved successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-md shadow-md border border-gray-100 overflow-hidden sticky top-24">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
              <h3 className="font-semibold text-gray-900">Sections</h3>
            </div>
            <nav className="p-2">
              {[
                { id: "hero", label: "Hero Section", icon: Layout },
                { id: "about", label: "About Section", icon: FileText },
                { id: "stats", label: "Stats Section", icon: BarChart3 },
                { id: "featured", label: "Featured Vehicles", icon: Truck },
                { id: "services", label: "Services", icon: Award },
                {
                  id: "testimonials",
                  label: "Testimonials",
                  icon: MessageSquare,
                },
                { id: "contact", label: "Contact Section", icon: Phone },
               
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-all cursor-pointer ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-md"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>

          
          </div>
        </div>

        {/* Editor Area */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {/* Hero Section */}
            {activeSection === "hero" && (
              <motion.div
                key="hero"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-md shadow-md border border-gray-100 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                        <Layout className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">
                          Hero Section
                        </h2>
                        <p className="text-sm text-gray-500">
                          Edit homepage hero banner
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSection("hero")}
                      className="p-2 hover:bg-red-100 cursor-pointer rounded-lg"
                    >
                      {expandedSections.hero ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedSections.hero && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-6 space-y-6"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Hero Title
                          </label>
                          <input
                            type="text"
                            value={content.hero.title}
                            onChange={(e) =>
                              setContent({
                                ...content,
                                hero: {
                                  ...content.hero,
                                  title: e.target.value,
                                },
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 transition-all"
                          />
                        </div>

                        <div className="col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Hero Subtitle
                          </label>
                          <textarea
                            rows="3"
                            value={content.hero.subtitle}
                            onChange={(e) =>
                              setContent({
                                ...content,
                                hero: {
                                  ...content.hero,
                                  subtitle: e.target.value,
                                },
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Button Text
                          </label>
                          <input
                            type="text"
                            value={content.hero.buttonText}
                            onChange={(e) =>
                              setContent({
                                ...content,
                                hero: {
                                  ...content.hero,
                                  buttonText: e.target.value,
                                },
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-red-600"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Button Link
                          </label>
                          <input
                            type="text"
                            value={content.hero.buttonLink}
                            onChange={(e) =>
                              setContent({
                                ...content,
                                hero: {
                                  ...content.hero,
                                  buttonLink: e.target.value,
                                },
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-red-600"
                          />
                        </div>

                        <div className="col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Background Image
                          </label>
                          <div className="flex items-center space-x-4">
                            <div className="flex-1">
                              <input
                                type="text"
                                value={content.hero.backgroundImage}
                                onChange={(e) =>
                                  setContent({
                                    ...content,
                                    hero: {
                                      ...content.hero,
                                      backgroundImage: e.target.value,
                                    },
                                  })
                                }
                                className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-red-600"
                                placeholder="/images/hero-bg.jpg"
                              />
                            </div>
                            <button className="px-4 py-3 border-2 border-gray-100 rounded-xl hover:bg-red-50 cursor-pointer transition-colors">
                              <Upload className="w-5 h-5" />
                            </button>
                          </div>
                          <div className="mt-2 aspect-video bg-gray-100 rounded-xl overflow-hidden">
                            <img
                              src={content.hero.backgroundImage}
                              alt="Hero background"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src =
                                  "https://via.placeholder.com/800x400?text=No+Image";
                              }}
                            />
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <label className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={content.hero.overlay}
                              onChange={(e) =>
                                setContent({
                                  ...content,
                                  hero: {
                                    ...content.hero,
                                    overlay: e.target.checked,
                                  },
                                })
                              }
                              className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
                            />
                            <span className="text-sm text-gray-700">
                              Enable Overlay
                            </span>
                          </label>

                          {content.hero.overlay && (
                            <div className="flex items-center space-x-2">
                              <label className="text-sm text-gray-700">
                                Opacity:
                              </label>
                              <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={content.hero.overlayOpacity}
                                onChange={(e) =>
                                  setContent({
                                    ...content,
                                    hero: {
                                      ...content.hero,
                                      overlayOpacity: parseFloat(
                                        e.target.value,
                                      ),
                                    },
                                  })
                                }
                                className="w-32"
                              />
                              <span className="text-sm text-gray-600">
                                {content.hero.overlayOpacity}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* About Section */}
            {activeSection === "about" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-md shadow-md border border-gray-100 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">
                          About Section
                        </h2>
                        <p className="text-sm text-gray-500">
                          Edit about us content
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSection("about")}
                      className="p-2 hover:bg-red-100 cursor-pointer rounded-lg"
                    >
                      {expandedSections.about ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedSections.about && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-6 space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Section Title
                        </label>
                        <input
                          type="text"
                          value={content.about.title}
                          onChange={(e) =>
                            setContent({
                              ...content,
                              about: {
                                ...content.about,
                                title: e.target.value,
                              },
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-blue-600"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          About Content
                        </label>
                        <textarea
                          rows="5"
                          value={content.about.content}
                          onChange={(e) =>
                            setContent({
                              ...content,
                              about: {
                                ...content.about,
                                content: e.target.value,
                              },
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-blue-600"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          About Image
                        </label>
                        <div className="flex items-center space-x-4">
                          <div className="flex-1">
                            <input
                              type="text"
                              value={content.about.image}
                              onChange={(e) =>
                                setContent({
                                  ...content,
                                  about: {
                                    ...content.about,
                                    image: e.target.value,
                                  },
                                })
                              }
                              className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-blue-600"
                            />
                          </div>
                          <button className="px-4 py-3 border-2 border-gray-100 rounded-xl hover:bg-gray-50 cursor-pointer">
                            <Upload className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <label className="text-sm font-medium text-gray-700">
                            Features
                          </label>
                          <button
                            onClick={() => {
                              const newFeature = {
                                id: Date.now(),
                                text: "New feature",
                                icon: "Award",
                              };
                              setContent({
                                ...content,
                                about: {
                                  ...content.about,
                                  features: [
                                    ...content.about.features,
                                    newFeature,
                                  ],
                                },
                              });
                            }}
                            className="flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200"
                          >
                            <Plus className="w-4 h-4" />
                            <span>Add Feature</span>
                          </button>
                        </div>

                        <div className="space-y-3">
                          {content.about.features.map((feature, index) => (
                            <div
                              key={feature.id}
                              className="flex items-center space-x-2"
                            >
                              <input
                                type="text"
                                value={feature.text}
                                onChange={(e) => {
                                  const newFeatures = [
                                    ...content.about.features,
                                  ];
                                  newFeatures[index] = {
                                    ...feature,
                                    text: e.target.value,
                                  };
                                  setContent({
                                    ...content,
                                    about: {
                                      ...content.about,
                                      features: newFeatures,
                                    },
                                  });
                                }}
                                className="flex-1 px-4 py-2 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-blue-600"
                              />
                              <select
                                value={feature.icon}
                                onChange={(e) => {
                                  const newFeatures = [
                                    ...content.about.features,
                                  ];
                                  newFeatures[index] = {
                                    ...feature,
                                    icon: e.target.value,
                                  };
                                  setContent({
                                    ...content,
                                    about: {
                                      ...content.about,
                                      features: newFeatures,
                                    },
                                  });
                                }}
                                className="px-3 py-2 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-blue-600"
                              >
                                <option value="Award">Award</option>
                                <option value="Truck">Truck</option>
                                <option value="Star">Star</option>
                                <option value="Users">Users</option>
                                <option value="Clock">Clock</option>
                                <option value="CheckCircle">Check</option>
                              </select>
                              <button
                                onClick={() => {
                                  setContent({
                                    ...content,
                                    about: {
                                      ...content.about,
                                      features: content.about.features.filter(
                                        (f) => f.id !== feature.id,
                                      ),
                                    },
                                  });
                                }}
                                className="p-2 hover:bg-red-100 text-red-600 rounded-lg"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* Stats Section */}
            {activeSection === "stats" && (
              <motion.div
                key="stats"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-md shadow-md border border-gray-100 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">
                          Stats Section
                        </h2>
                        <p className="text-sm text-gray-500">
                          Edit statistics and metrics
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSection("stats")}
                      className="p-2 hover:bg-red-100 cursor-pointer rounded-lg"
                    >
                      {expandedSections.stats ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedSections.stats && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-6 space-y-4"
                    >
                      <div className="flex justify-end">
                        <button
                          onClick={addStat}
                          className="flex items-center space-x-1 px-4 py-2 bg-green-100 text-green-700 rounded-xl hover:bg-green-200 cursor-pointer"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Add Stat</span>
                        </button>
                      </div>

                      {content.stats.map((stat, index) => (
                        <motion.div
                          key={stat.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="p-4 border-2 border-gray-100 rounded-xl"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium text-gray-900">
                              Stat #{index + 1}
                            </h4>
                            <button
                              onClick={() => removeStat(stat.id)}
                              className="p-1 hover:bg-red-100 text-red-600 rounded"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-xs text-gray-500 mb-1">
                                Value
                              </label>
                              <input
                                type="text"
                                value={stat.value}
                                onChange={(e) => {
                                  const newStats = [...content.stats];
                                  newStats[index] = {
                                    ...stat,
                                    value: e.target.value,
                                  };
                                  setContent({ ...content, stats: newStats });
                                }}
                                className="w-full px-3 py-2 border-2 border-gray-100 rounded-lg"
                                placeholder="e.g., 500+"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-gray-500 mb-1">
                                Label
                              </label>
                              <input
                                type="text"
                                value={stat.label}
                                onChange={(e) => {
                                  const newStats = [...content.stats];
                                  newStats[index] = {
                                    ...stat,
                                    label: e.target.value,
                                  };
                                  setContent({ ...content, stats: newStats });
                                }}
                                className="w-full px-3 py-2 border-2 border-gray-100 rounded-lg"
                                placeholder="e.g., Vehicles"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-gray-500 mb-1">
                                Icon
                              </label>
                              <select
                                value={stat.icon}
                                onChange={(e) => {
                                  const newStats = [...content.stats];
                                  newStats[index] = {
                                    ...stat,
                                    icon: e.target.value,
                                  };
                                  setContent({ ...content, stats: newStats });
                                }}
                                className="w-full px-3 py-2 border-2 border-gray-100 rounded-lg"
                              >
                                <option value="Truck">Truck</option>
                                <option value="Users">Users</option>
                                <option value="Award">Award</option>
                                <option value="Clock">Clock</option>
                                <option value="Star">Star</option>
                              </select>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* Editor Area - Only showing Featured Vehicles section for brevity */}
            
              <AnimatePresence mode="wait">
                {/* Featured Vehicles Section */}
                {activeSection === "featured" && (
                  <motion.div
                    key="featured"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white rounded-md shadow-md border border-gray-100 overflow-hidden"
                  >
                    <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                            <Truck className="w-5 h-5 text-orange-600" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-gray-900">
                              Featured Vehicles Section
                            </h2>
                            <p className="text-sm text-gray-500">
                              Configure how featured vehicles are displayed
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleSection("featured")}
                          className="p-2 hover:bg-gray-100 rounded-lg"
                        >
                          {expandedSections.featured ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedSections.featured && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="p-6 space-y-6"
                        >
                          <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Section Title
                              </label>
                              <input
                                type="text"
                                value={content.featured.title}
                                onChange={(e) =>
                                  setContent({
                                    ...content,
                                    featured: {
                                      ...content.featured,
                                      title: e.target.value,
                                    },
                                  })
                                }
                                className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-orange-600 focus:ring-4 focus:ring-orange-600/10 transition-all"
                              />
                            </div>

                            <div className="col-span-2">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Section Subtitle
                              </label>
                              <input
                                type="text"
                                value={content.featured.subtitle}
                                onChange={(e) =>
                                  setContent({
                                    ...content,
                                    featured: {
                                      ...content.featured,
                                      subtitle: e.target.value,
                                    },
                                  })
                                }
                                className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-orange-600"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Max Vehicles to Show
                              </label>
                              <input
                                type="number"
                                min="1"
                                max="12"
                                value={content.featured.maxVehicles}
                                onChange={(e) =>
                                  setContent({
                                    ...content,
                                    featured: {
                                      ...content.featured,
                                      maxVehicles: parseInt(e.target.value),
                                    },
                                  })
                                }
                                className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-orange-600"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Layout Style
                              </label>
                              <select
                                value={content.featured.layout}
                                onChange={(e) =>
                                  setContent({
                                    ...content,
                                    featured: {
                                      ...content.featured,
                                      layout: e.target.value,
                                    },
                                  })
                                }
                                className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-orange-600"
                              >
                                <option value="grid">Grid Layout</option>
                                <option value="carousel">
                                  Carousel/Slider
                                </option>
                                <option value="list">List Layout</option>
                              </select>
                            </div>

                            <div className="col-span-2">
                              <label className="flex items-center space-x-3">
                                <input
                                  type="checkbox"
                                  checked={content.featured.showSection}
                                  onChange={(e) =>
                                    setContent({
                                      ...content,
                                      featured: {
                                        ...content.featured,
                                        showSection: e.target.checked,
                                      },
                                    })
                                  }
                                  className="w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
                                />
                                <span className="text-sm text-gray-700">
                                  Show Featured Vehicles Section on Homepage
                                </span>
                              </label>
                            </div>
                          </div>

                          {/* Interactive Layout Preview with Actual Images */}
                          <div className="bg-red-50 rounded-xl p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-sm font-medium text-red-600 flex items-center">
                                <Eye className="w-4 h-4 mr-2" />
                                Live Layout Preview
                              </h4>
                              {content.featured.layout === "carousel" && (
                                <div className="flex items-center space-x-2">
                                  <button
                                    onClick={() =>
                                      setIsAutoPlaying(!isAutoPlaying)
                                    }
                                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                                      isAutoPlaying
                                        ? "bg-red-600 text-white"
                                        : "bg-white text-red-600 hover:bg-red-100"
                                    }`}
                                  >
                                    {isAutoPlaying ? "Pause" : "Auto-play"}
                                  </button>
                                  <button
                                    onClick={() => setPreviewIndex(0)}
                                    className="p-1 bg-white rounded hover:bg-red-100"
                                    title="Reset"
                                  >
                                    <RefreshCw className="w-3 h-3 text-red-600" />
                                  </button>
                                </div>
                              )}
                            </div>

                            {content.featured.layout === "grid" && (
                              <div
                                className={`grid grid-cols-1 md:grid-cols-${Math.min(content.featured.maxVehicles, 3)} gap-4`}
                              >
                                {previewVehicles
                                  .slice(0, content.featured.maxVehicles)
                                  .map((vehicle) => (
                                    <motion.div
                                      key={vehicle.id}
                                      whileHover={{ y: -4 }}
                                      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
                                    >
                                      <div className="relative h-40 overflow-hidden">
                                        <img
                                          src={vehicle.image}
                                          alt={vehicle.name}
                                          className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-500"
                                          onError={handleImageError}
                                        />
                                        <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-lg text-xs">
                                          Featured
                                        </div>
                                      </div>
                                      <div className="p-3">
                                        <h5 className="font-semibold text-gray-900 text-sm mb-1">
                                          {vehicle.name}
                                        </h5>
                                        <div className="flex justify-between items-center">
                                          <span className="text-orange-600 font-bold">
                                            ${vehicle.price.toLocaleString()}
                                          </span>
                                          <span className="text-xs text-gray-500">
                                            {vehicle.mileage.toLocaleString()}{" "}
                                            km
                                          </span>
                                        </div>
                                      </div>
                                    </motion.div>
                                  ))}
                              </div>
                            )}

                            {content.featured.layout === "carousel" && (
                              <div className="relative">
                                <div className="flex space-x-4 overflow-hidden">
                                  <motion.div
                                    key={previewIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    className="flex space-x-4"
                                  >
                                    {[
                                      ...Array(
                                        Math.min(
                                          content.featured.maxVehicles,
                                          4,
                                        ),
                                      ),
                                    ].map((_, i) => {
                                      const vehicleIndex =
                                        (previewIndex + i) %
                                        previewVehicles.length;
                                      const vehicle =
                                        previewVehicles[vehicleIndex];
                                      return (
                                        <motion.div
                                          key={vehicle.id}
                                          whileHover={{ y: -4 }}
                                          className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg overflow-hidden"
                                        >
                                          <div className="h-36 overflow-hidden">
                                            <img
                                              src={vehicle.image}
                                              alt={vehicle.name}
                                              className="w-full h-full object-cover"
                                              onError={handleImageError}
                                            />
                                          </div>
                                          <div className="p-3">
                                            <h5 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-1">
                                              {vehicle.name}
                                            </h5>
                                            <div className="flex justify-between items-center">
                                              <span className="text-orange-600 font-bold">
                                                $
                                                {vehicle.price.toLocaleString()}
                                              </span>
                                              <span className="text-xs text-gray-500">
                                                {vehicle.year}
                                              </span>
                                            </div>
                                          </div>
                                        </motion.div>
                                      );
                                    })}
                                  </motion.div>
                                </div>

                                {/* Carousel Controls */}
                                <button
                                  onClick={() =>
                                    setPreviewIndex((prev) =>
                                      prev > 0
                                        ? prev - 1
                                        : previewVehicles.length - 1,
                                    )
                                  }
                                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100"
                                >
                                  <ChevronLeft className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    setPreviewIndex((prev) =>
                                      prev < previewVehicles.length - 1
                                        ? prev + 1
                                        : 0,
                                    )
                                  }
                                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100"
                                >
                                  <ChevronRight className="w-4 h-4" />
                                </button>

                                {/* Dots Indicator */}
                                <div className="flex justify-center mt-4 space-x-1">
                                  {previewVehicles
                                    .slice(0, content.featured.maxVehicles)
                                    .map((_, i) => (
                                      <button
                                        key={i}
                                        onClick={() => setPreviewIndex(i)}
                                        className={`w-2 h-2 rounded-full transition-all ${
                                          i === previewIndex
                                            ? "w-4 bg-orange-600"
                                            : "bg-orange-200 hover:bg-orange-300"
                                        }`}
                                      />
                                    ))}
                                </div>
                              </div>
                            )}

                            {content.featured.layout === "list" && (
                              <div className="space-y-3">
                                {previewVehicles
                                  .slice(0, content.featured.maxVehicles)
                                  .map((vehicle, index) => (
                                    <motion.div
                                      key={vehicle.id}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: index * 0.1 }}
                                      whileHover={{ x: 4 }}
                                      className="flex items-center space-x-4 bg-white rounded-xl p-3 shadow-sm cursor-pointer group"
                                    >
                                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                        <img
                                          src={vehicle.image}
                                          alt={vehicle.name}
                                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                          onError={handleImageError}
                                        />
                                      </div>
                                      <div className="flex-1">
                                        <h5 className="font-semibold text-gray-900">
                                          {vehicle.name}
                                        </h5>
                                        <div className="flex items-center space-x-4 mt-1">
                                          <span className="text-orange-600 font-bold">
                                            ${vehicle.price.toLocaleString()}
                                          </span>
                                          <span className="text-xs text-gray-500">
                                            {vehicle.mileage.toLocaleString()}{" "}
                                            km
                                          </span>
                                          <span className="text-xs text-gray-500">
                                            {vehicle.fuelType}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ChevronRight className="w-5 h-5" />
                                      </div>
                                    </motion.div>
                                  ))}
                              </div>
                            )}
                          </div>

                          {/* Selection Info */}
                          <div className="bg-gray-50 rounded-xl p-4">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">
                              Vehicle Selection
                            </h4>
                            <p className="text-sm text-gray-600 mb-3">
                              Featured vehicles are managed in the Vehicle
                              Management section. Mark vehicles as "Featured" in
                              their individual settings to display them here.
                            </p>
                            <Link
                              to="/admin/vehicles"
                              className="inline-flex items-center text-orange-600 hover:text-orange-700 text-sm font-medium"
                            >
                              Go to Vehicle Management
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
           

            {/* Services Section */}
            {activeSection === "services" && (
              <motion.div
                key="services"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-md shadow-md border border-gray-100 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                        <Award className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">
                          Services Section
                        </h2>
                        <p className="text-sm text-gray-500">
                          Edit your services and features
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSection("services")}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                      {expandedSections.services ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedSections.services && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-6 space-y-4"
                    >
                      <div className="flex justify-end">
                        <button
                          onClick={addService}
                          className="flex items-center space-x-1 px-4 py-2 bg-amber-100 text-amber-700 rounded-xl hover:bg-amber-200"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Add Service</span>
                        </button>
                      </div>

                      {content.services.map((service, index) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="p-4 border-2 border-gray-100 rounded-xl"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium text-gray-900">
                              {service.title}
                            </h4>
                            <button
                              onClick={() => removeService(service.id)}
                              className="p-1 hover:bg-red-100 text-red-600 rounded"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="grid grid-cols-2 gap-3 mb-3">
                            <div className="col-span-2">
                              <label className="block text-xs text-gray-500 mb-1">
                                Title
                              </label>
                              <input
                                type="text"
                                value={service.title}
                                onChange={(e) => {
                                  const newServices = [...content.services];
                                  newServices[index] = {
                                    ...service,
                                    title: e.target.value,
                                  };
                                  setContent({
                                    ...content,
                                    services: newServices,
                                  });
                                }}
                                className="w-full px-3 py-2 border-2 border-gray-100 rounded-lg"
                              />
                            </div>
                            <div className="col-span-2">
                              <label className="block text-xs text-gray-500 mb-1">
                                Description
                              </label>
                              <textarea
                                rows="2"
                                value={service.description}
                                onChange={(e) => {
                                  const newServices = [...content.services];
                                  newServices[index] = {
                                    ...service,
                                    description: e.target.value,
                                  };
                                  setContent({
                                    ...content,
                                    services: newServices,
                                  });
                                }}
                                className="w-full px-3 py-2 border-2 border-gray-100 rounded-lg"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-gray-500 mb-1">
                                Icon
                              </label>
                              <select
                                value={service.icon}
                                onChange={(e) => {
                                  const newServices = [...content.services];
                                  newServices[index] = {
                                    ...service,
                                    icon: e.target.value,
                                  };
                                  setContent({
                                    ...content,
                                    services: newServices,
                                  });
                                }}
                                className="w-full px-3 py-2 border-2 border-gray-100 rounded-lg"
                              >
                                <option value="Truck">Truck</option>
                                <option value="CheckCircle">Check</option>
                                <option value="Award">Award</option>
                                <option value="Users">Users</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs text-gray-500 mb-2">
                              Features
                            </label>
                            {service.features.map((feature, fIndex) => (
                              <div
                                key={fIndex}
                                className="flex items-center space-x-2 mb-2"
                              >
                                <input
                                  type="text"
                                  value={feature}
                                  onChange={(e) => {
                                    const newServices = [...content.services];
                                    newServices[index].features[fIndex] =
                                      e.target.value;
                                    setContent({
                                      ...content,
                                      services: newServices,
                                    });
                                  }}
                                  className="flex-1 px-3 py-2 border-2 border-gray-100 rounded-lg text-sm"
                                  placeholder="Feature"
                                />
                                <button
                                  onClick={() => {
                                    const newServices = [...content.services];
                                    newServices[index].features =
                                      service.features.filter(
                                        (_, i) => i !== fIndex,
                                      );
                                    setContent({
                                      ...content,
                                      services: newServices,
                                    });
                                  }}
                                  className="p-1 hover:bg-red-100 text-red-600 rounded"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ))}
                            <button
                              onClick={() => {
                                const newServices = [...content.services];
                                newServices[index].features.push("New feature");
                                setContent({
                                  ...content,
                                  services: newServices,
                                });
                              }}
                              className="text-sm text-amber-600 hover:text-amber-700 flex items-center mt-2"
                            >
                              <Plus className="w-4 h-4 mr-1" />
                              Add Feature
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* Testimonials Section */}
            {activeSection === "testimonials" && (
              <motion.div
                key="testimonials"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-md shadow-md border border-gray-100 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-pink-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">
                          Testimonials Section
                        </h2>
                        <p className="text-sm text-gray-500">
                          Manage customer testimonials
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSection("testimonials")}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                      {expandedSections.testimonials ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedSections.testimonials && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-6 space-y-6"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Section Title
                          </label>
                          <input
                            type="text"
                            value={content.testimonials.title}
                            onChange={(e) =>
                              setContent({
                                ...content,
                                testimonials: {
                                  ...content.testimonials,
                                  title: e.target.value,
                                },
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-pink-600"
                          />
                        </div>

                        <div className="col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Section Subtitle
                          </label>
                          <input
                            type="text"
                            value={content.testimonials.subtitle}
                            onChange={(e) =>
                              setContent({
                                ...content,
                                testimonials: {
                                  ...content.testimonials,
                                  subtitle: e.target.value,
                                },
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-pink-600"
                          />
                        </div>

                        <div className="col-span-2">
                          <label className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={content.testimonials.showSection}
                              onChange={(e) =>
                                setContent({
                                  ...content,
                                  testimonials: {
                                    ...content.testimonials,
                                    showSection: e.target.checked,
                                  },
                                })
                              }
                              className="w-4 h-4 rounded border-gray-300 text-pink-600 focus:ring-pink-600"
                            />
                            <span className="text-sm text-gray-700">
                              Show Testimonials Section
                            </span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-medium text-gray-900">
                            Testimonials
                          </h3>
                          <button
                            onClick={addTestimonial}
                            className="flex items-center space-x-1 px-4 py-2 bg-pink-100 text-pink-700 rounded-xl hover:bg-pink-200"
                          >
                            <Plus className="w-4 h-4" />
                            <span>Add Testimonial</span>
                          </button>
                        </div>

                        <div className="space-y-4">
                          {content.testimonials.items.map(
                            (testimonial, index) => (
                              <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="p-4 border-2 border-gray-100 rounded-xl"
                              >
                                <div className="flex items-start justify-between mb-3">
                                  <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                                      <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                          e.target.src =
                                            "https://via.placeholder.com/40";
                                        }}
                                      />
                                    </div>
                                    <div>
                                      <input
                                        type="text"
                                        value={testimonial.name}
                                        onChange={(e) =>
                                          updateTestimonial(
                                            testimonial.id,
                                            "name",
                                            e.target.value,
                                          )
                                        }
                                        className="font-medium text-gray-900 border-0 focus:ring-0 p-0"
                                        placeholder="Name"
                                      />
                                      <input
                                        type="text"
                                        value={testimonial.location}
                                        onChange={(e) =>
                                          updateTestimonial(
                                            testimonial.id,
                                            "location",
                                            e.target.value,
                                          )
                                        }
                                        className="text-xs text-gray-500 border-0 focus:ring-0 p-0"
                                        placeholder="Location"
                                      />
                                    </div>
                                  </div>
                                  <button
                                    onClick={() =>
                                      removeTestimonial(testimonial.id)
                                    }
                                    className="p-1 hover:bg-red-100 text-red-600 rounded"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>

                                <div className="flex items-center space-x-1 mb-2">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                      key={star}
                                      onClick={() =>
                                        updateTestimonial(
                                          testimonial.id,
                                          "rating",
                                          star,
                                        )
                                      }
                                      className="focus:outline-none"
                                    >
                                      <Star
                                        className={`w-4 h-4 ${
                                          star <= testimonial.rating
                                            ? "text-yellow-400 fill-yellow-400"
                                            : "text-gray-300"
                                        }`}
                                      />
                                    </button>
                                  ))}
                                </div>

                                <textarea
                                  value={testimonial.text}
                                  onChange={(e) =>
                                    updateTestimonial(
                                      testimonial.id,
                                      "text",
                                      e.target.value,
                                    )
                                  }
                                  rows="3"
                                  className="w-full text-sm text-gray-600 border-2 border-gray-100 rounded-lg p-3 focus:outline-none focus:border-pink-600"
                                  placeholder="Testimonial text"
                                />

                                <div className="mt-2 flex items-center justify-between">
                                  <input
                                    type="text"
                                    value={testimonial.image}
                                    onChange={(e) =>
                                      updateTestimonial(
                                        testimonial.id,
                                        "image",
                                        e.target.value,
                                      )
                                    }
                                    className="text-xs text-gray-500 border-0 focus:ring-0 p-0 flex-1"
                                    placeholder="Image path"
                                  />
                                  <input
                                    type="date"
                                    value={testimonial.date}
                                    onChange={(e) =>
                                      updateTestimonial(
                                        testimonial.id,
                                        "date",
                                        e.target.value,
                                      )
                                    }
                                    className="text-xs text-gray-500 border-0 focus:ring-0 p-0"
                                  />
                                </div>
                              </motion.div>
                            ),
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* Contact Section */}
            {activeSection === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-md shadow-md border border-gray-100 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">
                          Contact Section
                        </h2>
                        <p className="text-sm text-gray-500">
                          Edit contact information
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSection("contact")}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                      {expandedSections.contact ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedSections.contact && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-6 space-y-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Section Title
                          </label>
                          <input
                            type="text"
                            value={content.contact.title}
                            onChange={(e) =>
                              setContent({
                                ...content,
                                contact: {
                                  ...content.contact,
                                  title: e.target.value,
                                },
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-teal-600"
                          />
                        </div>

                        <div className="col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Section Subtitle
                          </label>
                          <input
                            type="text"
                            value={content.contact.subtitle}
                            onChange={(e) =>
                              setContent({
                                ...content,
                                contact: {
                                  ...content.contact,
                                  subtitle: e.target.value,
                                },
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-teal-600"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            value={content.contact.email}
                            onChange={(e) =>
                              setContent({
                                ...content,
                                contact: {
                                  ...content.contact,
                                  email: e.target.value,
                                },
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-teal-600"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            value={content.contact.phone}
                            onChange={(e) =>
                              setContent({
                                ...content,
                                contact: {
                                  ...content.contact,
                                  phone: e.target.value,
                                },
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-teal-600"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            WhatsApp
                          </label>
                          <input
                            type="tel"
                            value={content.contact.whatsapp}
                            onChange={(e) =>
                              setContent({
                                ...content,
                                contact: {
                                  ...content.contact,
                                  whatsapp: e.target.value,
                                },
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-teal-600"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Address
                          </label>
                          <input
                            type="text"
                            value={content.contact.address}
                            onChange={(e) =>
                              setContent({
                                ...content,
                                contact: {
                                  ...content.contact,
                                  address: e.target.value,
                                },
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-teal-600"
                          />
                        </div>

                        <div className="col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Business Hours
                          </label>
                          <input
                            type="text"
                            value={content.contact.hours}
                            onChange={(e) =>
                              setContent({
                                ...content,
                                contact: {
                                  ...content.contact,
                                  hours: e.target.value,
                                },
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-teal-600"
                          />
                        </div>

                        <div className="col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Map Embed URL
                          </label>
                          <input
                            type="text"
                            value={content.contact.mapEmbed}
                            onChange={(e) =>
                              setContent({
                                ...content,
                                contact: {
                                  ...content.contact,
                                  mapEmbed: e.target.value,
                                },
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-teal-600"
                          />
                        </div>

                        <div>
                          <label className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={content.contact.showMap}
                              onChange={(e) =>
                                setContent({
                                  ...content,
                                  contact: {
                                    ...content.contact,
                                    showMap: e.target.checked,
                                  },
                                })
                              }
                              className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600"
                            />
                            <span className="text-sm text-gray-700">
                              Show Map
                            </span>
                          </label>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

           

           
          </AnimatePresence>
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-bold text-gray-900">Homepage Preview</h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setPreviewMode("desktop")}
                    className={`p-2 rounded-lg ${
                      previewMode === "desktop"
                        ? "bg-gray-100"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <Monitor className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setPreviewMode("tablet")}
                    className={`p-2 rounded-lg ${
                      previewMode === "tablet"
                        ? "bg-gray-100"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <Tablet className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setPreviewMode("mobile")}
                    className={`p-2 rounded-lg ${
                      previewMode === "mobile"
                        ? "bg-gray-100"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <Smartphone className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg ml-4"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div
                className="overflow-y-auto p-6"
                style={{
                  maxWidth:
                    previewMode === "mobile"
                      ? "375px"
                      : previewMode === "tablet"
                        ? "768px"
                        : "100%",
                  margin: "0 auto",
                }}
              >
                <div className="space-y-8">
                  {/* Hero Preview */}
                  <div
                    className="relative h-96 rounded-2xl overflow-hidden"
                    style={{
                      backgroundImage: `url(${content.hero.backgroundImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {content.hero.overlay && (
                      <div
                        className="absolute inset-0 bg-black"
                        style={{ opacity: content.hero.overlayOpacity }}
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">
                          {content.hero.title}
                        </h1>
                        <p className="text-xl mb-8">{content.hero.subtitle}</p>
                        <button className="px-8 py-3 bg-white text-gray-900 rounded-xl font-medium">
                          {content.hero.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Stats Preview */}
                  <div className="grid grid-cols-4 gap-4">
                    {content.stats.map((stat) => {
                      const Icon = getIconComponent(stat.icon);
                      return (
                        <div
                          key={stat.id}
                          className="text-center p-6 bg-gray-50 rounded-xl"
                        >
                          <Icon className="w-8 h-8 mx-auto mb-3 text-purple-600" />
                          <p className="text-3xl font-bold text-gray-900">
                            {stat.value}
                          </p>
                          <p className="text-sm text-gray-600">{stat.label}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Featured Vehicles Preview */}
                  {content.featured.showSection && (
                    <div>
                      <h2 className="text-3xl font-bold text-center mb-2">
                        {content.featured.title}
                      </h2>
                      <p className="text-gray-600 text-center mb-8">
                        {content.featured.subtitle}
                      </p>

                      {content.featured.layout === "grid" && (
                        <div
                          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(content.featured.maxVehicles, 3)} gap-6`}
                        >
                          {[
                            ...Array(Math.min(content.featured.maxVehicles, 3)),
                          ].map((_, i) => (
                            <div
                              key={i}
                              className="bg-white rounded-xl shadow-lg overflow-hidden"
                            >
                              <div className="h-48 bg-gray-200"></div>
                              <div className="p-4">
                                <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
                                <div className="flex justify-between">
                                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {content.featured.layout === "carousel" && (
                        <div className="flex space-x-4 overflow-x-auto pb-4">
                          {[
                            ...Array(Math.min(content.featured.maxVehicles, 4)),
                          ].map((_, i) => (
                            <div
                              key={i}
                              className="flex-shrink-0 w-72 bg-white rounded-xl shadow-lg overflow-hidden"
                            >
                              <div className="h-40 bg-gray-200"></div>
                              <div className="p-4">
                                <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {content.featured.layout === "list" && (
                        <div className="space-y-4">
                          {[
                            ...Array(Math.min(content.featured.maxVehicles, 3)),
                          ].map((_, i) => (
                            <div
                              key={i}
                              className="flex bg-white rounded-xl shadow-lg overflow-hidden"
                            >
                              <div className="w-32 h-32 bg-gray-200"></div>
                              <div className="flex-1 p-4">
                                <div className="h-5 bg-gray-200 rounded w-1/3 mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/5"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Testimonials Preview */}
                  {content.testimonials.showSection && (
                    <div>
                      <h2 className="text-3xl font-bold text-center mb-2">
                        {content.testimonials.title}
                      </h2>
                      <p className="text-gray-600 text-center mb-8">
                        {content.testimonials.subtitle}
                      </p>
                      <div className="grid grid-cols-3 gap-6">
                        {content.testimonials.items
                          .slice(0, 3)
                          .map((testimonial) => (
                            <div
                              key={testimonial.id}
                              className="bg-gray-50 rounded-xl p-6"
                            >
                              <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                                  <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <p className="font-semibold text-gray-900">
                                    {testimonial.name}
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    {testimonial.location}
                                  </p>
                                </div>
                              </div>
                              <div className="flex space-x-1 mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                  />
                                ))}
                              </div>
                              <p className="text-gray-600">
                                {testimonial.text}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Missing BarChart3 import
const BarChart3 = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

export default ContentHomepage;
