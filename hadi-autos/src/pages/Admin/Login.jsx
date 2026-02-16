import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Phone,
  ArrowRight,
  Car,
  Shield,
  Truck,
  Sparkles,
  CheckCircle,
  X,
  AlertCircle,
} from "lucide-react";

const AdminAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Form states
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const switchVariants = {
    login: { x: 0, opacity: 1 },
    signup: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  // Validation functions
  const validateLogin = () => {
    if (!loginData.email || !loginData.password) {
      setError("Please fill in all fields");
      return false;
    }
    return true;
  };

  const validateSignup = () => {
    const newErrors = {};

    if (!signupData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (signupData.fullName.length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    }

    if (!signupData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(signupData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!signupData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{10,}$/.test(signupData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!signupData.password) {
      newErrors.password = "Password is required";
    } else if (signupData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(signupData.password)) {
      newErrors.password = "Must contain uppercase, lowercase and number";
    }

    if (signupData.password !== signupData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!signupData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateLogin()) return;

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Admin credentials check
      if (
        loginData.email === "admin@hadisautos.com" &&
        loginData.password === "Admin123"
      ) {
        setSuccess("Login successful! Redirecting to dashboard...");

        // Store admin session
        localStorage.setItem("admin_logged_in", "true");
        localStorage.setItem("admin_email", loginData.email);
        localStorage.setItem("admin_role", "administrator");

        if (loginData.rememberMe) {
          localStorage.setItem("admin_remember", loginData.email);
        }

        // Set session timestamp
        localStorage.setItem("admin_session_start", Date.now().toString());

        // Redirect to admin dashboard
        setTimeout(() => {
          navigate("/admin");
        }, 1500);
      } else {
        setError(
          "Invalid email or password. Please use admin@hadisautos.com / Admin123",
        );
      }
      setLoading(false);
    }, 1500);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateSignup()) return;

    setLoading(true);

    // Simulate API call for admin account creation
    setTimeout(() => {
      // In a real app, this would send data to your backend
      setSuccess(
        "Admin account created successfully! Please check your email to verify.",
      );

      // Clear form
      setSignupData({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
      });

      // Switch to login after 2 seconds
      setTimeout(() => {
        setIsLogin(true);
        setSuccess("");
        // Pre-fill email
        setLoginData((prev) => ({ ...prev, email: signupData.email }));
      }, 1000);

      setLoading(false);
    }, 1500);
  };

  // Check if already logged in
  useState(() => {
    if (localStorage.getItem("admin_logged_in") === "true") {
      navigate("/admin");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex overflow-hidden">
      {/* Left Side - Branding & Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/hero3.jpg"
            alt="Luxury car showroom"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col p-16 w-full">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            className="flex items-center space-x-4"
          >
            <div className="flex justify-center">
              <img
                src="/Logo.jpeg"
                alt="Hadi's Motors Logo"
                className="h-14 w-auto object-contain drop-shadow-md rounded-full"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-white">Hadi's Autos</h1>
              <p className="text-white">Premium Vehicle Imports</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-8 mt-30"
          >
            <h2 className="text-5xl font-bold text-white leading-tight">
              Admin
              <br />
              <span className="text-white">Dashboard Access</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  icon: Shield,
                  text: "Secure vehicle management",
                  color: "transparent from-red-500 to-red-900",
                },
                {
                  icon: Truck,
                  text: "Track shipments in real-time",
                  color: "transparent from-red-500 to-red-900",
                },
                {
                  icon: Car,
                  text: "Manage customer inquiries",
                  color: "transparent from-red-500 to-red-900",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} bg-opacity-20 flex items-center justify-center`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{feature.text}</p>
                    <p className="text-white text-sm">24/7 secure access</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Auth Forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Header */}
          <div className="text-center mb-8 lg:hidden">
            <div className="flex justify-center mb-4">
              <div className="flex justify-center mb-2">
                <img
                  src="/Logo.jpeg"
                  alt="Hadi's Motors Logo"
                  className="h-14 w-auto object-contain drop-shadow-md rounded-full"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Admin Access</h2>
          </div>

          {/* Toggle Buttons */}
          <div className="flex p-1 bg-gray-100 rounded-2xl mb-8">
            <motion.button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                isLogin
                  ? "bg-white text-[#3b2a1f] shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign In
            </motion.button>
            <motion.button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                !isLogin
                  ? "bg-white text-[#3b2a1f] shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Create Account
            </motion.button>
          </div>

          {/* Messages */}
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3"
              >
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-red-600 text-sm flex-1">{error}</p>
                <button onClick={() => setError("")} className="ml-auto">
                  <X className="w-4 h-4 text-red-400 hover:text-red-600" />
                </button>
              </motion.div>
            )}

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-green-600 text-sm flex-1">{success}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Forms */}
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.form
                key="login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleLogin}
                className="space-y-5"
              >
                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#3b2a1f] transition-colors" />
                    <input
                      type="email"
                      value={loginData.email}
                      onChange={(e) =>
                        setLoginData({ ...loginData, email: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#3b2a1f] focus:ring-2 focus:ring-[#3b2a1f]/20 transition-all duration-300 bg-white"
                      placeholder="admin@hadisautos.com"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#3b2a1f] transition-colors" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={loginData.password}
                      onChange={(e) =>
                        setLoginData({ ...loginData, password: e.target.value })
                      }
                      className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#3b2a1f] focus:ring-2 focus:ring-[#3b2a1f]/20 transition-all duration-300 bg-white"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={loginData.rememberMe}
                      onChange={(e) =>
                        setLoginData({
                          ...loginData,
                          rememberMe: e.target.checked,
                        })
                      }
                      className="w-4 h-4 text-[#3b2a1f] border-gray-300 rounded focus:ring-[#3b2a1f]"
                    />
                    <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900">
                      Remember me
                    </span>
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      /* Handle forgot password */
                    }}
                    className="text-sm text-[#3b2a1f] hover:text-[#5c483a] font-medium"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-md font-semibold text-white bg-gradient-to-r from-red-500 via-black to-red-900 hover:from-[#5c483a] hover:to-[#3b2a1f] transition-all duration-300 shadow-md hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Signing in...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign In to Admin</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {/* Demo Credentials */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center mb-3">
                    Demo Admin Access
                  </p>
                  <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Email:</span>
                      <code className="font-mono bg-white px-2 py-1 rounded border border-gray-200 text-[#3b2a1f]">
                        admin@hadisautos.com
                      </code>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Password:</span>
                      <code className="font-mono bg-white px-2 py-1 rounded border border-gray-200 text-[#3b2a1f]">
                        Admin123
                      </code>
                    </div>
                  </div>
                </div>
              </motion.form>
            ) : (
              <motion.form
                key="signup"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSignup}
                className="space-y-4"
              >
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      value={signupData.fullName}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          fullName: e.target.value,
                        })
                      }
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 bg-white ${
                        errors.fullName
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:border-[#3b2a1f] focus:ring-[#3b2a1f]/20"
                      }`}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={signupData.email}
                      onChange={(e) =>
                        setSignupData({ ...signupData, email: e.target.value })
                      }
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 bg-white ${
                        errors.email
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:border-[#3b2a1f] focus:ring-[#3b2a1f]/20"
                      }`}
                      placeholder="admin@hadisautos.com"
                      required
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      value={signupData.phone}
                      onChange={(e) =>
                        setSignupData({ ...signupData, phone: e.target.value })
                      }
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 bg-white ${
                        errors.phone
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:border-[#3b2a1f] focus:ring-[#3b2a1f]/20"
                      }`}
                      placeholder="+1 (234) 567-8900"
                      required
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={signupData.password}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          password: e.target.value,
                        })
                      }
                      className={`w-full pl-12 pr-12 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 bg-white ${
                        errors.password
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:border-[#3b2a1f] focus:ring-[#3b2a1f]/20"
                      }`}
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={signupData.confirmPassword}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          confirmPassword: e.target.value,
                        })
                      }
                      className={`w-full pl-12 pr-12 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 bg-white ${
                        errors.confirmPassword
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:border-[#3b2a1f] focus:ring-[#3b2a1f]/20"
                      }`}
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={signupData.agreeTerms}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        agreeTerms: e.target.checked,
                      })
                    }
                    className="mt-1 w-4 h-4 text-[#3b2a1f] border-gray-300 rounded focus:ring-[#3b2a1f]"
                    required
                  />
                  <div>
                    <p className="text-sm text-gray-600">
                      I agree to the{" "}
                      <button
                        type="button"
                        className="text-[#3b2a1f] hover:text-[#5c483a] font-medium"
                      >
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button
                        type="button"
                        className="text-[#3b2a1f] hover:text-[#5c483a] font-medium"
                      >
                        Privacy Policy
                      </button>
                    </p>
                    {errors.agreeTerms && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.agreeTerms}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-md font-semibold text-white bg-gradient-to-r from-red-500 via-black to-red-900 hover:from-[#5c483a] hover:to-[#3b2a1f] transition-all duration-300 shadow-md hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 mt-6 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Creating account...</span>
                    </>
                  ) : (
                    <>
                      <span>Create Admin Account</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminAuth;
