import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Car,
  MessageSquare,
  DollarSign,
  TrendingUp,
  Activity,
  Users,
  Star,
  Truck,
  CheckCircle,
  AlertCircle,
  Clock,
  Calendar,
  Eye,
  Download,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  FileText,
  Phone,
  Mail,
  MapPin,
  ShoppingCart,
  CreditCard,
  UserPlus,
  Settings,
  Bell,
  Shield,
  Award,
  BarChart3,
  PieChart,
  LineChart,
  Globe,
  AlertTriangle,
  Filter,
  TrendingDown,
  Maximize2,  
  Minimize2 
} from "lucide-react";

// Import actual images
import profileImage from "/images/user6.webp";
import user1Image from "/images/user2.webp";
import user2Image from "/images/user4.webp";
import user3Image from "/images/user5.webp";
import user4Image from "/images/user6.webp";
import user5Image from "/images/user9.webp";
import canadaMap from "/images/canada-flag.webp";
import ghanaMap from "/images/ghana-flag.webp";

const Dashboard = () => {
  const navigate = useNavigate();
  const [timeframe, setTimeframe] = useState("week");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState(new Date());
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [stats, setStats] = useState({
    totalVehicles: 42,
    totalInquiries: 156,
    pendingInquiries: 12,
    revenue: 1250000,
    featuredVehicles: 8,
    soldVehicles: 15,
    canadaStock: 28,
    ghanaStock: 14,
    monthlyGrowth: 12.5,
    conversionRate: 24.8,
    avgResponseTime: 2.4,
    customerSatisfaction: 98,
  });

  // Revenue trend data (simulated)
  const revenueTrend = [
    { month: "Jan", revenue: 850000, target: 800000 },
    { month: "Feb", revenue: 920000, target: 850000 },
    { month: "Mar", revenue: 1080000, target: 900000 },
    { month: "Apr", revenue: 1150000, target: 950000 },
    { month: "May", revenue: 1250000, target: 1000000 },
    { month: "Jun", revenue: 1320000, target: 1100000 },
  ];

  // Geographic distribution data
  const geographicData = {
    canada: {
      provinces: [
        { name: "Ontario", sales: 145, percentage: 35, growth: 12 },
        { name: "Quebec", sales: 98, percentage: 24, growth: 8 },
        { name: "British Columbia", sales: 87, percentage: 21, growth: 15 },
        { name: "Alberta", sales: 82, percentage: 20, growth: -2 },
      ],
      total: 412,
    },
    ghana: {
      regions: [
        { name: "Greater Accra", sales: 234, percentage: 45, growth: 18 },
        { name: "Ashanti", sales: 156, percentage: 30, growth: 22 },
        { name: "Western", sales: 78, percentage: 15, growth: 5 },
        { name: "Eastern", sales: 52, percentage: 10, growth: -3 },
      ],
      total: 520,
    },
  };

  // Conversion funnel data
  const conversionFunnel = [
    { stage: "Website Visits", count: 5842, percentage: 100 },
    { stage: "Vehicle Views", count: 3218, percentage: 55 },
    { stage: "Inquiries", count: 1042, percentage: 18 },
    { stage: "Test Drives", count: 487, percentage: 8.3 },
    { stage: "Sales", count: 256, percentage: 4.4 },
  ];

  // Performance alerts
  const performanceAlerts = [
    {
      id: 1,
      type: "critical",
      title: "Low Inventory Alert",
      message: "Toyota Camry models running low in Canada",
      time: "30 minutes ago",
      icon: AlertTriangle,
      action: "View Inventory",
    },
    {
      id: 2,
      type: "warning",
      title: "Response Time Spike",
      message: "Average response time increased by 25%",
      time: "2 hours ago",
      icon: Clock,
      action: "Check Inquiries",
    },
    {
      id: 3,
      type: "info",
      title: "High Demand Region",
      message: "Increased interest from Western region, Ghana",
      time: "5 hours ago",
      icon: TrendingUp,
      action: "View Analytics",
    },
    {
      id: 4,
      type: "success",
      title: "Sales Target Progress",
      message: "On track to exceed monthly target by 15%",
      time: "1 day ago",
      icon: Award,
      action: "View Report",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      user: "Kwame Mensah",
      action: "inquired about Toyota Camry",
      time: "2 hours ago",
      type: "inquiry",
      priority: "high",
      image: user1Image,
    },
    {
      id: 2,
      user: "Ama Asante",
      action: "scheduled vehicle inspection",
      time: "4 hours ago",
      type: "schedule",
      priority: "medium",
      image: user2Image,
    },
    {
      id: 3,
      user: "Kofi Boateng",
      action: "completed payment for Honda CR-V",
      time: "1 day ago",
      type: "payment",
      priority: "low",
      image: user3Image,
    },
    {
      id: 4,
      user: "Yaw Appiah",
      action: "submitted shipping documents",
      time: "2 days ago",
      type: "document",
      priority: "medium",
      image: user4Image,
    },
    {
      id: 5,
      user: "Esi Nyarko",
      action: "requested vehicle quote",
      time: "3 days ago",
      type: "inquiry",
      priority: "high",
      image: user5Image,
    },
  ];

  const topVehicles = [
    {
      id: 1,
      name: "Toyota Camry XLE 2022",
      views: 234,
      inquiries: 18,
      status: "available",
      image: "/images/1.avif",
    },
    {
      id: 2,
      name: "Honda CR-V EX-L 2021",
      views: 189,
      inquiries: 12,
      status: "available",
      image: "/images/6.avif",
    },
    {
      id: 3,
      name: "Mercedes-Benz C300 2020",
      views: 156,
      inquiries: 9,
      status: "reserved",
      image: "/images/11.webp",
    },
  ];

  const recentInquiries = [
    {
      id: 1,
      name: "Kwame Mensah",
      vehicle: "Toyota Camry XLE 2022",
      status: "pending",
      time: "2 hours ago",
      image: user1Image,
    },
    {
      id: 2,
      name: "Ama Asante",
      vehicle: "Honda CR-V EX-L 2021",
      status: "progress",
      time: "4 hours ago",
      image: user2Image,
    },
    {
      id: 3,
      name: "Kofi Boateng",
      vehicle: "Mercedes-Benz C300 2020",
      status: "resolved",
      time: "1 day ago",
      image: user3Image,
    },
  ];

  // Simulated data refresh function
  const refreshData = useCallback(async () => {
    setIsRefreshing(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Generate slightly updated random data to simulate real changes
      const newStats = {
        totalVehicles: 42 + Math.floor(Math.random() * 3) - 1,
        totalInquiries: 156 + Math.floor(Math.random() * 10) - 3,
        pendingInquiries: Math.max(
          8,
          Math.min(18, 12 + Math.floor(Math.random() * 6) - 2),
        ),
        revenue: 1250000 + Math.floor(Math.random() * 50000) - 15000,
        featuredVehicles: 8 + Math.floor(Math.random() * 3) - 1,
        soldVehicles: 15 + Math.floor(Math.random() * 4) - 1,
        canadaStock: 28 + Math.floor(Math.random() * 3) - 1,
        ghanaStock: 14 + Math.floor(Math.random() * 3) - 1,
        monthlyGrowth: +(12.5 + (Math.random() * 2 - 1)).toFixed(1),
        conversionRate: +(24.8 + (Math.random() * 1.5 - 0.5)).toFixed(1),
        avgResponseTime: +(2.4 + (Math.random() * 0.4 - 0.2)).toFixed(1),
        customerSatisfaction: Math.min(
          100,
          98 + Math.floor(Math.random() * 3) - 1,
        ),
      };

      setStats(newStats);
      setLastRefreshed(new Date());

      console.log("Data refreshed successfully!");
    } catch (error) {
      console.error("Error refreshing data:", error);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  // Auto-refresh every 5 minutes 
  useEffect(() => {
    const interval = setInterval(
      () => {
        refreshData();
      },
      5 * 60 * 1000,
    );

    return () => clearInterval(interval);
  }, [refreshData]);

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "in-progress":
        return "bg-blue-100 text-blue-700";
      case "resolved":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case "inquiry":
        return <MessageSquare className="w-4 h-4" />;
      case "schedule":
        return <Calendar className="w-4 h-4" />;
      case "payment":
        return <DollarSign className="w-4 h-4" />;
      case "document":
        return <FileText className="w-4 h-4" />;
      default:
        return <Activity className="w-4 h-4" />;
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case "inquiry":
        return "bg-blue-100 text-blue-600";
      case "schedule":
        return "bg-purple-100 text-purple-600";
      case "payment":
        return "bg-green-100 text-green-600";
      case "document":
        return "bg-amber-100 text-amber-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getAlertStyles = (type) => {
    switch (type) {
      case "critical":
        return {
          bg: "bg-red-50",
          border: "border-red-200",
          icon: "text-red-600",
          text: "text-red-800",
        };
      case "warning":
        return {
          bg: "bg-yellow-50",
          border: "border-yellow-200",
          icon: "text-yellow-600",
          text: "text-yellow-800",
        };
      case "info":
        return {
          bg: "bg-blue-50",
          border: "border-blue-200",
          icon: "text-blue-600",
          text: "text-blue-800",
        };
      case "success":
        return {
          bg: "bg-green-50",
          border: "border-green-200",
          icon: "text-green-600",
          text: "text-green-800",
        };
      default:
        return {
          bg: "bg-gray-50",
          border: "border-gray-200",
          icon: "text-gray-600",
          text: "text-gray-800",
        };
    }
  };

  // Format last refreshed time
  const getLastRefreshedText = () => {
    const now = new Date();
    const diffMs = now - lastRefreshed;
    const diffMins = Math.floor(diffMs / 60000);
    const diffSecs = Math.floor((diffMs % 60000) / 1000);

    if (diffMins === 0) {
      return `${diffSecs} seconds ago`;
    } else if (diffMins === 1) {
      return "1 minute ago";
    } else if (diffMins < 60) {
      return `${diffMins} minutes ago`;
    } else {
      return lastRefreshed.toLocaleTimeString();
    }
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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Welcome back, Admin! Here's what's happening with your business.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Last refreshed indicator */}
          <div className="hidden md:flex items-center space-x-2 text-xs text-gray-500">
            <span>Last updated:</span>
            <span className="font-medium">{getLastRefreshedText()}</span>
          </div>

          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#3b2a1f] text-sm"
          >
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>

          <button
            onClick={refreshData}
            disabled={isRefreshing}
            className={`
              p-2.5 bg-white border border-gray-200 rounded-xl 
              hover:bg-gray-50 transition-all duration-300
              ${isRefreshing ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
              relative overflow-hidden group
            `}
          >
            <RefreshCw
              className={`
                w-5 h-5 text-gray-600 transition-all duration-500
                ${isRefreshing ? "animate-spin" : "group-hover:scale-110"}
              `}
            />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Refresh data
            </span>
          </button>

          <button className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer">
            <Download className="w-5 h-5 text-gray-600" />
          </button>
           {/* Fullscreen toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer"
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5 text-gray-600" />
            ) : (
              <Maximize2 className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Revenue"
          value={`$${(stats.revenue / 1000).toFixed(1)}K`}
          change={+12.5}
          icon={DollarSign}
          color="emerald"
          subtitle="vs last month"
        />
        <KPICard
          title="Total Vehicles"
          value={stats.totalVehicles}
          change={+8.2}
          icon={Car}
          color="blue"
          subtitle="vs last month"
        />
        <KPICard
          title="Conversion Rate"
          value={`${stats.conversionRate}%`}
          change={-2.1}
          icon={TrendingUp}
          color="purple"
          subtitle="vs last month"
        />
        <KPICard
          title="Customer Satisfaction"
          value={`${stats.customerSatisfaction}%`}
          change={+1.5}
          icon={Star}
          color="amber"
          subtitle="customer rating"
        />
      </div>

      {/* Revenue & Sales Trend Chart - MOST IMPORTANT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-sm shadow-md p-6 border border-gray-100"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
              <LineChart className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Revenue & Sales Trend
              </h2>
              <p className="text-sm text-gray-500">
                Monthly performance vs targets
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Actual Revenue</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <span className="text-xs text-gray-600">Target</span>
            </div>
          </div>
        </div>

        <div className="relative h-64">
          {/* Chart bars */}
          <div className="absolute inset-0 flex items-end justify-between px-4">
            {revenueTrend.map((item, index) => (
              <div key={index} className="flex flex-col items-center w-1/6">
                <div className="relative w-full flex justify-center space-x-1">
                  {/* Actual revenue bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(item.revenue / 1500000) * 200}px` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="w-8 bg-emerald-500 rounded-t-lg relative group"
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      ${(item.revenue / 1000).toFixed(0)}K
                    </div>
                  </motion.div>
                  {/* Target bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(item.target / 1500000) * 200}px` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className="w-8 bg-gray-300 rounded-t-lg"
                  />
                </div>
                <span className="text-xs text-gray-600 mt-2">{item.month}</span>
              </div>
            ))}
          </div>

          {/* Y-axis grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[1500000, 1125000, 750000, 375000, 0].map((value, index) => (
              <div
                key={index}
                className="border-b border-gray-100 w-full h-0 relative"
              >
                <span className="absolute -left-2 -top-3 text-xs text-gray-400">
                  ${(value / 1000).toFixed(0)}K
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <ArrowUpRight className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-900">
                  +18.5%
                </span>
                <span className="text-xs text-gray-500">vs last period</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-medium text-gray-900">
                  $1.45M
                </span>
                <span className="text-xs text-gray-500">projected</span>
              </div>
            </div>
            <Link
              to="/admin/reports"
              className="text-sm text-[#3b2a1f] hover:text-[#5c483a] font-medium"
            >
              View Detailed Report →
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Geographic Sales Distribution & Performance Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Geographic Sales Distribution */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-sm shadow-md p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                <Globe className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Geographic Sales Distribution
                </h2>
                <p className="text-sm text-gray-500">Sales by region</p>
              </div>
            </div>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5">
              <option>Both Countries</option>
              <option>Canada</option>
              <option>Ghana</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Canada */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <img src={canadaMap} alt="Canada" className="w-6 h-6" />
                <h3 className="font-medium text-gray-900">Canada</h3>
                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                  {geographicData.canada.total} sales
                </span>
              </div>
              <div className="space-y-3">
                {geographicData.canada.provinces.map((province, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{province.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900">
                          {province.sales}
                        </span>
                        <span
                          className={`text-xs ${province.growth >= 0 ? "text-green-600" : "text-red-600"}`}
                        >
                          {province.growth >= 0 ? "+" : ""}
                          {province.growth}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${province.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ghana */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <img src={ghanaMap} alt="Ghana" className="w-6 h-6" />
                <h3 className="font-medium text-gray-900">Ghana</h3>
                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                  {geographicData.ghana.total} sales
                </span>
              </div>
              <div className="space-y-3">
                {geographicData.ghana.regions.map((region, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{region.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900">
                          {region.sales}
                        </span>
                        <span
                          className={`text-xs ${region.growth >= 0 ? "text-green-600" : "text-red-600"}`}
                        >
                          {region.growth >= 0 ? "+" : ""}
                          {region.growth}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${region.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-green-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

         
        </motion.div>

        {/* Performance Alerts Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-sm shadow-md p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Performance Alerts
                </h2>
                <p className="text-sm text-gray-500">
                  Business-critical notifications
                </p>
              </div>
            </div>
           
          </div>

          <div className="space-y-3">
            {performanceAlerts.map((alert) => {
              const styles = getAlertStyles(alert.type);
              return (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl ${styles.bg} border ${styles.border} relative overflow-hidden group cursor-pointer hover:shadow-md transition-all`}
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className={`p-2 rounded-lg ${styles.bg} ${styles.icon}`}
                    >
                      <alert.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className={`font-medium ${styles.text}`}>
                          {alert.title}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {alert.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {alert.message}
                      </p>
                      <button
                        className={`text-xs font-medium mt-2 ${styles.icon} hover:underline`}
                      >
                        {alert.action} →
                      </button>
                    </div>
                  </div>
                  {alert.type === "critical" && (
                    <div className="absolute top-0 right-0 w-1 h-full bg-red-500 animate-pulse" />
                  )}
                </motion.div>
              );
            })}
          </div>

        </motion.div>
      </div>

      {/* Main Stats Grid with Conversion Funnel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Stats */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <QuickStatCard
              title="Total Inquiries"
              value={stats.totalInquiries}
              icon={MessageSquare}
              color="blue"
              link="/admin/inquiries"
            />
            <QuickStatCard
              title="Pending"
              value={stats.pendingInquiries}
              icon={AlertCircle}
              color="yellow"
              link="/admin/inquiries?status=pending"
            />
            <QuickStatCard
              title="Avg Response"
              value={`${stats.avgResponseTime}h`}
              icon={Clock}
              color="purple"
              link="/admin/inquiries"
            />
          </div>

          {/* Vehicle Status Overview */}
          <div className="bg-white rounded-sm shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">
                Vehicle Inventory Overview
              </h2>
              <Link
                to="/admin/vehicles"
                className="text-sm text-[#3b2a1f] hover:text-[#5c483a] font-medium"
              >
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <ProgressBar
                  label="Available in Canada"
                  value={stats.canadaStock}
                  total={stats.totalVehicles}
                  color="blue"
                  icon={MapPin}
                />
                <ProgressBar
                  label="Available in Ghana"
                  value={stats.ghanaStock}
                  total={stats.totalVehicles}
                  color="green"
                  icon={MapPin}
                />
                <ProgressBar
                  label="Featured Vehicles"
                  value={stats.featuredVehicles}
                  total={stats.totalVehicles}
                  color="amber"
                  icon={Star}
                />
              </div>
              <div className="space-y-4">
                <ProgressBar
                  label="Sold Vehicles"
                  value={stats.soldVehicles}
                  total={stats.totalVehicles}
                  color="red"
                  icon={CheckCircle}
                />
                <ProgressBar
                  label="Reserved"
                  value={5}
                  total={stats.totalVehicles}
                  color="yellow"
                  icon={AlertCircle}
                />
                <ProgressBar
                  label="Available"
                  value={stats.canadaStock + stats.ghanaStock}
                  total={stats.totalVehicles}
                  color="green"
                  icon={Truck}
                />
              </div>
            </div>
          </div>

          {/* Top Performing Vehicles */}
          <div className="bg-white rounded-sm shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">
                Top Performing Vehicles
              </h2>
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">Last 30 days</span>
              </div>
            </div>

            <div className="space-y-4">
              {topVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={vehicle.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {vehicle.name}
                      </h3>
                      <div className="flex items-center space-x-3 mt-1">
                        <span className="text-xs text-gray-500 flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {vehicle.views} views
                        </span>
                        <span className="text-xs text-gray-500 flex items-center">
                          <MessageSquare className="w-3 h-3 mr-1" />
                          {vehicle.inquiries} inquiries
                        </span>
                      </div>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(vehicle.status)}`}
                  >
                    {vehicle.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column with Conversion Funnel */}
        <div className="space-y-6">
          {/* Conversion Funnel Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-sm shadow-md p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    Conversion Funnel
                  </h2>
                  <p className="text-sm text-gray-500">
                    Visitor to customer journey
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {conversionFunnel.map((stage, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{stage.stage}</span>
                    <div className="flex items-center space-x-3">
                      <span className="font-medium text-gray-900">
                        {stage.count.toLocaleString()}
                      </span>
                      <span className="text-xs text-gray-500 w-12">
                        {stage.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="relative h-8">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${stage.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`absolute left-0 top-0 h-full rounded-lg ${
                        index === 0
                          ? "bg-blue-500"
                          : index === 1
                            ? "bg-indigo-500"
                            : index === 2
                              ? "bg-purple-500"
                              : index === 3
                                ? "bg-pink-500"
                                : "bg-emerald-500"
                      } opacity-20`}
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${stage.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`absolute left-0 top-0 h-1 ${
                        index === 0
                          ? "bg-blue-500"
                          : index === 1
                            ? "bg-indigo-500"
                            : index === 2
                              ? "bg-purple-500"
                              : index === 3
                                ? "bg-pink-500"
                                : "bg-emerald-500"
                      } rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Recent Inquiries with Actual Images */}
          <div className="bg-white rounded-sm shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">
                Recent Inquiries
              </h2>
              <Link
                to="/admin/inquiries"
                className="text-sm text-red-500 hover:text-red-800"
              >
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {recentInquiries.map((inquiry) => (
                <div
                  key={inquiry.id}
                  className="flex items-start justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={inquiry.image}
                        alt={inquiry.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {inquiry.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {inquiry.vehicle}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {inquiry.time}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(inquiry.status)}`}
                  >
                    {inquiry.status}
                  </span>
                </div>
              ))}
            </div>

            
          </div>

          {/* Activity Feed with Actual Images */}
          <div className="bg-white rounded-sm shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Activity Feed</h2>
              <Activity className="w-5 h-5 text-red-400" />
            </div>

            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={activity.image}
                      alt={activity.user}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.user}
                    </p>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {activity.time}
                    </p>
                  </div>
                  {activity.priority === "high" && (
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-red-600 via-red-900 to-red-900 rounded-sm shadow-sm p-6 text-white">
            <h3 className="text-lg font-bold mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white">Canada Stock</span>
                <span className="font-bold">{stats.canadaStock}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">Ghana Stock</span>
                <span className="font-bold">{stats.ghanaStock}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">Featured</span>
                <span className="font-bold">{stats.featuredVehicles}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">Sold</span>
                <span className="font-bold">{stats.soldVehicles}</span>
              </div>
            
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <QuickActionCard
          title="Add New Vehicle"
          description="List a new car in inventory"
          icon={Car}
          href="/admin/vehicles/new"
          color="blue"
        />
        <QuickActionCard
          title="Respond to Inquiries"
          description={`${stats.pendingInquiries} pending responses`}
          icon={MessageSquare}
          href="/admin/inquiries"
          color="green"
          badge={stats.pendingInquiries}
        />
        <QuickActionCard
          title="Update Homepage"
          description="Edit content and testimonials"
          icon={FileText}
          href="/admin/content/homepage"
          color="purple"
        />
        <QuickActionCard
          title="View Reports"
          description="Analytics and insights"
          icon={BarChart3}
          href="/admin/reports"
          color="amber"
        />
      </div>

      {/* Optional: Add refresh indicator */}
      {isRefreshing && (
        <div className="fixed bottom-4 right-4 bg-[#3b2a1f] text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 z-50">
          <RefreshCw className="w-4 h-4 animate-spin" />
          <span className="text-sm">Refreshing dashboard data...</span>
        </div>
      )}
    </div>
  );
};

const KPICard = ({ title, value, change, icon: Icon, color, subtitle }) => {
  const isPositive = change >= 0;
  const colors = {
    emerald: { bg: "bg-red-50", text: "text-red-600" },
    blue: { bg: "bg-red-50", text: "text-red-600" },
    purple: { bg: "bg-red-50", text: "text-red-600" },
    amber: { bg: "bg-red-50", text: "text-red-600" },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-sm shadow-lg p-6 border border-gray-100"
    >
      <div className="flex items-center justify-between mb-3">
        <div
          className={`w-12 h-12 rounded-xl ${colors[color].bg} flex items-center justify-center`}
        >
          <Icon className={`w-6 h-6 ${colors[color].text}`} />
        </div>
        <div
          className={`flex items-center space-x-1 px-2 py-1 rounded-full ${
            isPositive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
          }`}
        >
          {isPositive ? (
            <ArrowUpRight className="w-3 h-3" />
          ) : (
            <ArrowDownRight className="w-3 h-3" />
          )}
          <span className="text-xs font-medium">{Math.abs(change)}%</span>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-xs text-gray-400 mt-2">{subtitle}</p>
    </motion.div>
  );
};

const QuickStatCard = ({ title, value, icon: Icon, color, link }) => {
  const colors = {
    blue: { bg: "bg-red-50", text: "text-red-600" },
    yellow: { bg: "bg-red-50", text: "text-red-600" },
    purple: { bg: "bg-red-50", text: "text-red-600" },
  };

  return (
    <Link
      to={link}
      className="bg-white rounded-md shadow-sm p-4 border border-gray-100 hover:shadow-md transition-all group"
    >
      <div className="flex items-center justify-between mb-2">
        <div
          className={`w-10 h-10 rounded-lg ${colors[color].bg} flex items-center justify-center group-hover:scale-110 transition-transform`}
        >
          <Icon className={`w-5 h-5 ${colors[color].text}`} />
        </div>
        <MoreVertical className="w-4 h-4 text-gray-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-900">{value}</h3>
      <p className="text-xs text-gray-600 mt-1">{title}</p>
    </Link>
  );
};

const ProgressBar = ({ label, value, total, color, icon: Icon }) => {
  const percentage = (value / total) * 100;
  const colors = {
    blue: { text: "text-blue-600", progress: "bg-blue-500" },
    green: { text: "text-green-600", progress: "bg-green-500" },
    amber: { text: "text-amber-600", progress: "bg-amber-500" },
    red: { text: "text-red-600", progress: "bg-red-500" },
    yellow: { text: "text-yellow-600", progress: "bg-yellow-500" },
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center space-x-2">
          <Icon className={`w-4 h-4 ${colors[color].text}`} />
          <span className="text-sm text-gray-600">{label}</span>
        </div>
        <span className={`text-sm font-medium ${colors[color].text}`}>
          {value}
        </span>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`h-full ${colors[color].progress} rounded-full`}
        />
      </div>
    </div>
  );
};

const QuickActionCard = ({
  title,
  description,
  icon: Icon,
  href,
  color,
  badge,
}) => {
  const colors = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      hover: "hover:border-blue-200",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-600",
      hover: "hover:border-green-200",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      hover: "hover:border-purple-200",
    },
    amber: {
      bg: "bg-amber-50",
      text: "text-amber-600",
      hover: "hover:border-amber-200",
    },
  };

  return (
    <Link
      to={href}
      className={`bg-white rounded-md shadow-sm p-4 border border-gray-100 ${colors[color].hover} hover:shadow-2xl transition-all duration-300 group relative`}
    >
      {badge && (
        <span className="absolute -top-2 -right-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
          {badge}
        </span>
      )}
      <div className="flex items-center space-x-4">
        <div
          className={`w-12 h-12 rounded-xl ${colors[color].bg} flex items-center justify-center group-hover:scale-110 transition-transform`}
        >
          <Icon className={`w-6 h-6 ${colors[color].text}`} />
        </div>
        <div>
          <h3 className="font-medium text-gray-900 group-hover:text-[#3b2a1f] transition-colors">
            {title}
          </h3>
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Dashboard;
