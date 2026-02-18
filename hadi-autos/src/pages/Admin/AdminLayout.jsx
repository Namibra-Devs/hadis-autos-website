import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Car,
  MessageSquare,
  FileText,
  Settings,
  Users,
  LogOut,
  ChevronDown,
  Menu,
  X,
  Bell,
  Search,
  Home,
  Truck,
  Star,
  BarChart3,
  HelpCircle,
} from "lucide-react";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check authentication
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("admin_logged_in");
    if (!isLoggedIn && location.pathname !== "/admin/login") {
      navigate("/admin/login");
    }
  }, [navigate, location]);

  const handleLogout = () => {
    localStorage.removeItem("admin_logged_in");
    localStorage.removeItem("admin_email");
    localStorage.removeItem("admin_role");
    navigate("/admin/login");
  };

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      current: location.pathname === "/admin",
    },
    {
      name: "Vehicles",
      href: "/admin/vehicles",
      icon: Car,
      current: location.pathname.includes("/admin/vehicles"),
      submenu: [
        { name: "All Vehicles", href: "/admin/vehicles" },
        { name: "Add New", href: "/admin/vehicles/new" },
        { name: "Categories", href: "/admin/vehicles/categories" },
      ],
    },
    {
      name: "Inquiries",
      href: "/admin/inquiries",
      icon: MessageSquare,
      current: location.pathname.includes("/admin/inquiries"),
      submenu: [
        { name: "All Inquiries", href: "/admin/inquiries" },
        { name: "Pending", href: "/admin/inquiries?status=pending" },
        { name: "Archived", href: "/admin/inquiries?status=archived" },
      ],
    },
    {
      name: "Content",
      href: "/admin/content",
      icon: FileText,
      current: location.pathname.includes("/admin/content"),
      submenu: [
        { name: "Homepage", href: "/admin/content/homepage" },
        { name: "Testimonials", href: "/admin/content/testimonials" },
        { name: "Contact", href: "/admin/content/contact" },
      ],
    },
    {
      name: "Analytics",
      href: "/admin/analytics",
      icon: BarChart3,
      current: location.pathname.includes("/admin/analytics"),
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: Settings,
      current: location.pathname.includes("/admin/settings"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            transition={{ type: "spring", damping: 35 }}
            className=" fixed inset-0
        w-full h-full
        bg-gradient-to-b from-red-700 via-red-900 to-red-900
        z-50
        shadow-2xl
        lg:hidden
        overflow-y-auto"
          >
            <SidebarContent
              navigation={navigation}
              onClose={() => setMobileSidebarOpen(false)}
              onLogout={handleLogout}
            />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside
        className={`
    fixed inset-y-0 left-0 z-30
    bg-gradient-to-b from-red-700 via-red-900 to-red-900
    transition-all duration-300 shadow-2xl
    hidden lg:block
    ${sidebarOpen ? "w-80" : "w-20"}
  `}
      >
        <SidebarContent
          navigation={navigation}
          collapsed={!sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          onLogout={handleLogout}
        />

        {/* Expand Button (only when collapsed) */}
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="
        absolute -right-4 top-1/2 -translate-y-1/2
        bg-black shadow-xl rounded-full
        p-2 hover:scale-109 transition-all cursor-pointer
      "
          >
            <ChevronDown className="w-6 h-6 rotate-[-90deg] text-white" />
          </button>
        )}
      </aside>

      {/* Main Content */}
      <main
        className={`
        transition-all duration-300 min-h-screen
        lg:ml-80 ${!sidebarOpen ? "lg:!ml-20" : ""}
      `}
      >
        {/* Header */}
        <Header
          onMenuClick={() => setMobileSidebarOpen(true)}
          showUserMenu={showUserMenu}
          setShowUserMenu={setShowUserMenu}
          onLogout={handleLogout}
          sidebarOpen={sidebarOpen}
        />

        {/* Page Content */}
        <div className="p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

// Sidebar Content Component
const SidebarContent = ({
  navigation,
  collapsed = false,
  onToggle,
  onClose,
  onLogout,
}) => {
  const [expandedMenus, setExpandedMenus] = useState({});
  const location = useLocation();

  const toggleMenu = (name) => {
    setExpandedMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="h-full flex flex-col">
      {/* Logo */}
      <div
        className={`p-6 flex items-center ${collapsed ? "justify-center" : "justify-between"}`}
      >
        {!collapsed ? (
          <>
            <Link to="/admin" className="flex items-center space-x-3">
              <img
                src="/Logo.jpeg"
                alt="Hadi's Motors"
                className={`object-contain transition-all duration-300 ${
                  collapsed ? "h-8 w-8" : "h-10 w-auto"
                }`}
              />

              {!collapsed && (
                <div>
                  <h2 className="text-white font-bold">Hadi's Autos</h2>
                  <p className="text-white text-xs">Admin Panel</p>
                </div>
              )}
            </Link>

            {onToggle && (
              <button
                onClick={onToggle}
                className="text-white hover:text-white"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}
          </>
        ) : (
          <Link to="/admin" className="flex justify-center">
            <img
              src="/Logo.jpeg"
              alt="Logo"
              className="h-8 w-8 object-contain"
            />
          </Link>
        )}
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden text-white hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-4">
        {navigation.map((item) => (
          <div key={item.name} className="mb-2">
            {item.submenu ? (
              <>
                <button
                  onClick={() => toggleMenu(item.name)}
                  className={`
                    w-full flex items-center justify-between px-4 py-3 rounded-xl
                    transition-all duration-200
                    ${
                      location.pathname.includes(item.href)
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-6 h-6" />
                    {!collapsed && (
                      <span className="text-md font-medium">{item.name}</span>
                    )}
                  </div>
                  {!collapsed && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${expandedMenus[item.name] ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                {!collapsed && expandedMenus[item.name] && (
                  <div className="mt-1 ml-12 space-y-1">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="block px-4 py-2 text-md text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        onClick={onClose}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={item.href}
                className={`
                  flex items-center space-x-3 px-4 py-3 rounded-xl
                  transition-all duration-200
                  ${
                    item.current
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }
                `}
                onClick={onClose}
              >
                <item.icon className="w-5 h-5" />
                {!collapsed && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-4">
        <button
          onClick={onLogout}
          className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/5 hover:text-white transition-all duration-200 w-full ${collapsed ? "justify-center" : ""}`}
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && <span className="text-sm font-medium">Sign Out</span>}
        </button>
      </div>
    </div>
  );
};

// Header Component
const Header = ({
  onMenuClick,
  showUserMenu,
  setShowUserMenu,
  onLogout,
  sidebarOpen,
}) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Breadcrumb */}
          <nav className="hidden md:flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronDown className="w-4 h-4 text-gray-400 rotate-90" />
            <span className="font-medium text-gray-900">Admin Dashboard</span>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:block relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f] focus:ring-2 focus:ring-[#3b2a1f]/20 transition-all w-64"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 shadow-sm">
                <img
                  src="/images/male2.webp"
                  alt="Admin Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="hidden md:block text-sm font-medium">
                Admin User
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showUserMenu ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 z-50"
                >
                  <div className="py-2">
                    <Link
                      to="/admin/profile"
                      className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Profile</span>
                    </Link>
                    <Link
                      to="/admin/settings"
                      className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <Settings className="w-4 h-4" />
                      <span className="text-sm">Settings</span>
                    </Link>
                    <hr className="my-2" />
                    <button
                      onClick={() => {
                        onLogout();
                        setShowUserMenu(false);
                      }}
                      className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 text-red-600 w-full"
                    >
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm">Sign Out</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminLayout;