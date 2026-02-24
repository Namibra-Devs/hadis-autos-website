import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams, useNavigate } from 'react-router-dom' // Add this import
import {
  MessageSquare,
  Search,
  Filter,
  Mail,
  Phone,
  Calendar,
  User,
  Car,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  Download,
  Archive,
  Star,
  MoreVertical,
  Send,
  Paperclip,
  Inbox,
  Tag,
  Users,
  TrendingUp,
  BarChart3,
  PieChart,
  RefreshCw,
  ChevronDown,
  ChevronRight,
  Copy,
  Trash2,
  Edit,
  Eye,
  Printer,
  Share2,
  Zap,
  Award,
  Sparkles,
  Globe,
  Smartphone,
  Mail as MailIcon,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ExternalLink,
  Check,
  X,
  Plus,
  Minus,
  Settings,
  Bell,
  BellRing,
  BellOff,
  Volume2,
  VolumeX,
  Flag,
  ThumbsUp,
  ThumbsDown,
  Meh,
  Frown,
  Smile,
  Loader,
  AlertTriangle,
  Info,
  HelpCircle,
  Bookmark,
  BookmarkCheck,
  Pin,
  PinOff,
  Star as StarIcon,
  StarHalf,
  Upload,
  Image,
  File,
  FileText,
  Link,
  AtSign,
  Hash,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Reply,
  ReplyAll,
  Forward,
  Trash,
  Archive as ArchiveIcon,
  Inbox as InboxIcon,
  Send as SendIcon,
  DraftingCompass,
  EyeOff,
  Lock,
  Unlock,
  Shield,
  ShieldCheck,
  ShieldAlert,
  ShieldOff,
  Clock as ClockIcon,
  Hourglass,
  Timer,
  AlarmClock,
  AlarmClockCheck,
  AlarmClockOff,
  Calendar as CalendarIcon,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarClock,
  CalendarSearch,
  CalendarHeart,
  CalendarCog,
  CalendarSync,
  CalendarFold,
  CalendarArrowUp,
 CalendarArrowDown,
  Maximize2,  
  Minimize2   
} from 'lucide-react'

const Inquiries = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
   const [isFullscreen, setIsFullscreen] = useState(false);
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      name: 'Kwame Mensah',
      email: 'kwame.mensah@email.com',
      phone: '+233 24 123 4567',
      vehicle: '2022 Toyota Camry XLE',
      vehicleId: 1,
      vehicleImage: '1.avif',
      message: 'I am interested in this vehicle. Is it still available? I would like to schedule a viewing.',
      status: 'pending',
      priority: 'high',
      date: '2024-02-15T10:30:00',
      source: 'website',
      sourceIcon: Globe,
      read: false,
      starred: true,
      tags: ['hot-lead', 'test-drive'],
      attachments: [],
      notes: [],
      conversation: [
        {
          id: 1,
          type: 'inquiry',
          from: 'customer',
          content: 'I am interested in this vehicle. Is it still available? I would like to schedule a viewing.',
          date: '2024-02-15T10:30:00',
          read: true
        }
      ],
      responseTime: 45,
      satisfaction: null,
      assignedTo: 'Admin',
      lastActivity: '2024-02-15T14:30:00'
    },
    {
      id: 2,
      name: 'Ama Asante',
      email: 'ama.asante@email.com',
      phone: '+233 20 987 6543',
      vehicle: '2021 Honda CR-V EX-L',
      vehicleId: 2,
      vehicleImage: '6.avif',
      message: 'Please provide shipping quote to Tema. I am ready to proceed if the price is right.',
      status: 'in-progress',
      priority: 'medium',
      date: '2024-02-14T15:45:00',
      source: 'whatsapp',
      sourceIcon: MessageCircle,
      read: true,
      starred: false,
      tags: ['shipping-quote', 'ready-to-buy'],
      attachments: [
        { name: 'shipping-docs.pdf', size: '2.4 MB', type: 'pdf' }
      ],
      notes: [
        { id: 1, text: 'Sent shipping rates', date: '2024-02-14T16:00:00', user: 'Admin' }
      ],
      conversation: [
        {
          id: 1,
          type: 'inquiry',
          from: 'customer',
          content: 'Please provide shipping quote to Tema. I am ready to proceed if the price is right.',
          date: '2024-02-14T15:45:00',
          read: true
        },
        {
          id: 2,
          type: 'reply',
          from: 'admin',
          content: 'I will get you the shipping rates right away. Please allow me 30 minutes.',
          date: '2024-02-14T15:50:00',
          read: true
        },
        {
          id: 3,
          type: 'reply',
          from: 'admin',
          content: 'Here are the shipping rates to Tema:\n- Standard: $1,200 (14 days)\n- Express: $1,800 (7 days)\n- Premium: $2,500 (3 days)',
          date: '2024-02-14T16:00:00',
          read: true,
          attachments: ['shipping-rates.pdf']
        }
      ],
      responseTime: 5,
      satisfaction: null,
      assignedTo: 'Admin',
      lastActivity: '2024-02-14T16:00:00'
    },
    {
      id: 3,
      name: 'Kofi Boateng',
      email: 'kofi.boateng@email.com',
      phone: '+233 54 567 8901',
      vehicle: '2020 Mercedes-Benz C300',
      vehicleId: 3,
      vehicleImage: '11.webp',
      message: 'Interested in financing options. Do you offer payment plans?',
      status: 'resolved',
      priority: 'low',
      date: '2024-02-13T09:15:00',
      source: 'website',
      sourceIcon: Globe,
      read: true,
      starred: false,
      tags: ['financing'],
      attachments: [],
      notes: [],
      conversation: [
        {
          id: 1,
          type: 'inquiry',
          from: 'customer',
          content: 'Interested in financing options. Do you offer payment plans?',
          date: '2024-02-13T09:15:00',
          read: true
        },
        {
          id: 2,
          type: 'reply',
          from: 'admin',
          content: 'Yes, we offer financing through our partners. The minimum down payment is 20% with terms up to 60 months.',
          date: '2024-02-13T10:00:00',
          read: true
        },
        {
          id: 3,
          type: 'reply',
          from: 'customer',
          content: 'Great! Can you send me the application form?',
          date: '2024-02-13T10:30:00',
          read: true
        },
        {
          id: 4,
          type: 'reply',
          from: 'admin',
          content: 'Application form sent to your email. Let me know if you need any help filling it out.',
          date: '2024-02-13T11:00:00',
          read: true
        }
      ],
      responseTime: 45,
      satisfaction: 'happy',
      assignedTo: 'Admin',
      lastActivity: '2024-02-13T11:00:00'
    },
    {
      id: 4,
      name: 'Esi Nyarko',
      email: 'esi.nyarko@email.com',
      phone: '+233 55 123 7890',
      vehicle: '2019 Ford F-150 XLT',
      vehicleId: 4,
      vehicleImage: 'f150-1.jpg',
      message: 'Is this truck still available? I need it for my construction business.',
      status: 'pending',
      priority: 'high',
      date: '2024-02-15T08:20:00',
      source: 'facebook',
      sourceIcon: Facebook,
      read: false,
      starred: false,
      tags: ['business', 'urgent'],
      attachments: [],
      notes: [],
      conversation: [
        {
          id: 1,
          type: 'inquiry',
          from: 'customer',
          content: 'Is this truck still available? I need it for my construction business.',
          date: '2024-02-15T08:20:00',
          read: false
        }
      ],
      responseTime: null,
      satisfaction: null,
      assignedTo: 'Admin',
      lastActivity: '2024-02-15T08:20:00'
    },
    {
      id: 5,
      name: 'Yaw Appiah',
      email: 'yaw.appiah@email.com',
      phone: '+233 50 456 7890',
      vehicle: '2023 Tesla Model 3',
      vehicleId: 5,
      vehicleImage: 'tesla-1.jpg',
      message: 'Interested in test driving the Tesla. When can I schedule?',
      status: 'in-progress',
      priority: 'medium',
      date: '2024-02-14T11:30:00',
      source: 'instagram',
      sourceIcon: Instagram,
      read: true,
      starred: true,
      tags: ['test-drive', 'electric'],
      attachments: [],
      notes: [
        { id: 1, text: 'Scheduled test drive for Saturday 10am', date: '2024-02-14T12:00:00', user: 'Admin' }
      ],
      conversation: [
        {
          id: 1,
          type: 'inquiry',
          from: 'customer',
          content: 'Interested in test driving the Tesla. When can I schedule?',
          date: '2024-02-14T11:30:00',
          read: true
        },
        {
          id: 2,
          type: 'reply',
          from: 'admin',
          content: 'We have availability this Saturday at 10am. Would that work for you?',
          date: '2024-02-14T11:45:00',
          read: true
        },
        {
          id: 3,
          type: 'reply',
          from: 'customer',
          content: 'Saturday at 10am works perfectly. See you then!',
          date: '2024-02-14T11:55:00',
          read: true
        }
      ],
      responseTime: 15,
      satisfaction: null,
      assignedTo: 'Admin',
      lastActivity: '2024-02-14T11:55:00'
    }
  ])

  const [selectedInquiry, setSelectedInquiry] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [showQuickReply, setShowQuickReply] = useState(false)
  const [replyText, setReplyText] = useState('')
  const [noteText, setNoteText] = useState('')
  const [selectedInquiries, setSelectedInquiries] = useState([])
  const [viewMode, setViewMode] = useState('detailed')
  const [sortBy, setSortBy] = useState('newest')
  const [sortDirection, setSortDirection] = useState('desc')
  const [activeTab, setActiveTab] = useState('all')
  const [autoRefresh, setAutoRefresh] = useState(true)
  const [stats, setStats] = useState({
    total: 0,
    unread: 0,
    pending: 0,
    inProgress: 0,
    resolved: 0,
    avgResponseTime: 0,
    satisfaction: 0
  })

  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    source: 'all',
    dateRange: 'all',
    tags: []
  })

  // Read initial filter from URL
  useEffect(() => {
    const statusParam = searchParams.get('status')
    if (statusParam && ['pending', 'in-progress', 'resolved'].includes(statusParam)) {
      setFilters(prev => ({ ...prev, status: statusParam }))
      
      // Also set activeTab based on status? Optional
      if (statusParam === 'pending') {
        // You could set something else here if needed
      }
    }
  }, [searchParams])

  // Available tags for filtering
  const availableTags = ['hot-lead', 'test-drive', 'shipping-quote', 'ready-to-buy', 'financing', 'business', 'urgent', 'electric']

  // Calculate stats
  useEffect(() => {
    
    const unread = inquiries.filter(i => !i.read).length
    const pending = inquiries.filter(i => i.status === 'pending').length
    const inProgress = inquiries.filter(i => i.status === 'in-progress').length
    const resolved = inquiries.filter(i => i.status === 'resolved').length
    const responseTimes = inquiries.filter(i => i.responseTime).map(i => i.responseTime)
    const avgResponseTime = responseTimes.length ? Math.round(responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length) : 0
    const satisfaction = inquiries.filter(i => i.satisfaction === 'happy').length / inquiries.filter(i => i.satisfaction).length * 100 || 0

    setStats({
      total: inquiries.length,
      unread,
      pending,
      inProgress,
      resolved,
      avgResponseTime,
      satisfaction: Math.round(satisfaction)
    })
  }, [inquiries])

const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  // Filter and sort inquiries
  const filteredInquiries = useMemo(() => {
    let filtered = inquiries.filter(inquiry => {
      // Tab filter
      if (activeTab === 'unread' && inquiry.read) return false
      if (activeTab === 'starred' && !inquiry.starred) return false
      
      // Search
      if (searchTerm) {
        const term = searchTerm.toLowerCase()
        return (
          inquiry.name.toLowerCase().includes(term) ||
          inquiry.email.toLowerCase().includes(term) ||
          inquiry.vehicle.toLowerCase().includes(term) ||
          inquiry.message.toLowerCase().includes(term)
        )
      }
      
      // Status filter
      if (filters.status !== 'all' && inquiry.status !== filters.status) return false
      
      // Priority filter
      if (filters.priority !== 'all' && inquiry.priority !== filters.priority) return false
      
      // Source filter
      if (filters.source !== 'all' && inquiry.source !== filters.source) return false
      
      // Tags filter
      if (filters.tags.length > 0 && !filters.tags.some(tag => inquiry.tags?.includes(tag))) return false
      
      return true
    })

    // Sort
    filtered.sort((a, b) => {
      let comparison = 0
      switch (sortBy) {
        case 'newest':
          comparison = new Date(b.date) - new Date(a.date)
          break
        case 'oldest':
          comparison = new Date(a.date) - new Date(b.date)
          break
        case 'priority':
          const priorityWeight = { high: 3, medium: 2, low: 1 }
          comparison = priorityWeight[b.priority] - priorityWeight[a.priority]
          break
        case 'status':
          const statusWeight = { pending: 3, 'in-progress': 2, resolved: 1 }
          comparison = statusWeight[b.status] - statusWeight[a.status]
          break
        case 'response':
          comparison = (a.responseTime || 999) - (b.responseTime || 999)
          break
        default:
          comparison = 0
      }
      return sortDirection === 'desc' ? comparison : -comparison
    })

    return filtered
  }, [inquiries, searchTerm, filters, sortBy, sortDirection, activeTab])

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending': return <AlertCircle className="w-4 h-4 text-yellow-600" />
      case 'in-progress': return <Clock className="w-4 h-4 text-blue-600" />
      case 'resolved': return <CheckCircle className="w-4 h-4 text-green-600" />
      default: return null
    }
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'in-progress': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'resolved': return 'bg-green-100 text-green-700 border-green-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200'
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'low': return 'bg-green-100 text-green-700 border-green-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getSatisfactionIcon = (satisfaction) => {
    switch(satisfaction) {
      case 'happy': return <Smile className="w-4 h-4 text-green-600" />
      case 'neutral': return <Meh className="w-4 h-4 text-yellow-600" />
      case 'unhappy': return <Frown className="w-4 h-4 text-red-600" />
      default: return null
    }
  }

  const toggleStar = (id) => {
    setInquiries(inquiries.map(i => 
      i.id === id ? { ...i, starred: !i.starred } : i
    ))
  }

  const toggleRead = (id) => {
    setInquiries(inquiries.map(i => 
      i.id === id ? { ...i, read: !i.read } : i
    ))
  }

  const handleBulkAction = (action) => {
    if (selectedInquiries.length === 0) return

    switch(action) {
      case 'delete':
        if (window.confirm(`Delete ${selectedInquiries.length} inquiries?`)) {
          setInquiries(inquiries.filter(i => !selectedInquiries.includes(i.id)))
          setSelectedInquiries([])
          if (selectedInquiry && selectedInquiries.includes(selectedInquiry.id)) {
            setSelectedInquiry(null)
          }
        }
        break
      case 'archive':
        // Archive logic
        setSelectedInquiries([])
        break
      case 'mark-read':
        setInquiries(inquiries.map(i =>
          selectedInquiries.includes(i.id) ? { ...i, read: true } : i
        ))
        setSelectedInquiries([])
        break
      case 'mark-unread':
        setInquiries(inquiries.map(i =>
          selectedInquiries.includes(i.id) ? { ...i, read: false } : i
        ))
        setSelectedInquiries([])
        break
      case 'star':
        setInquiries(inquiries.map(i =>
          selectedInquiries.includes(i.id) ? { ...i, starred: true } : i
        ))
        setSelectedInquiries([])
        break
      case 'unstar':
        setInquiries(inquiries.map(i =>
          selectedInquiries.includes(i.id) ? { ...i, starred: false } : i
        ))
        setSelectedInquiries([])
        break
      default:
        break
    }
  }

  const clearFilters = () => {
    setFilters({
      status: 'all',
      priority: 'all',
      source: 'all',
      dateRange: 'all',
      tags: []
    })
    setSearchParams({}) // Clear URL params
    setSearchTerm('')
    setActiveTab('all')
  }

  const formatTime = (date) => {
    const now = new Date()
    const diff = now - new Date(date)
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    if (minutes < 1) return 'Just now'
    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    return `${days}d ago`
  }

  return (
    <div className="space-y-8 pb-12">
      {/* Premium Header */}
      <div className="relative overflow-hidden rounded-md bg-gradient-to-r from-red-600 via-red-800 to-red-900 p-8">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white flex items-center">
                Inquiry Management
                {stats.unread > 0 && (
                  <span className="ml-4 px-3 py-1 bg-red-500 text-white text-sm rounded-full">
                    {stats.unread} unread
                  </span>
                )}
              </h1>
              <p className="text-white/80 mt-2 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Manage, respond, and track all customer inquiries in one place
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-medium group cursor-pointer">
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Export</span>
            </button>
            <button className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-all cursor-pointer">
              <Archive className="w-5 h-5" />
              <span>Archive</span>
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
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <StatCard
          icon={Inbox}
          label="Total"
          value={stats.total}
          color="from-blue-500 to-blue-600"
          subtitle="All inquiries"
        />
        <StatCard
          icon={Mail}
          label="Unread"
          value={stats.unread}
          color="from-red-500 to-red-600"
          subtitle={`${stats.unread} awaiting response`}
        />
        <StatCard
          icon={AlertCircle}
          label="Pending"
          value={stats.pending}
          color="from-yellow-500 to-yellow-600"
        />
        <StatCard
          icon={Clock}
          label="In Progress"
          value={stats.inProgress}
          color="from-blue-500 to-blue-600"
        />
        <StatCard
          icon={CheckCircle}
          label="Resolved"
          value={stats.resolved}
          color="from-green-500 to-green-600"
        />
        <StatCard
          icon={TrendingUp}
          label="Avg Response"
          value={`${stats.avgResponseTime}m`}
          color="from-purple-500 to-purple-600"
          subtitle={`${stats.satisfaction}% satisfaction`}
        />
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-red-600 transition-colors" />
              <input
                type="text"
                placeholder="Search by name, email, vehicle, or message..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              {/* Tabs */}
              <div className="flex items-center bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-red-100 cursor-pointer ${
                    activeTab === 'all' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveTab('unread')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center cursor-pointer hover:bg-red-100 ${
                    activeTab === 'unread' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Mail className="w-4 h-4 mr-1" />
                  Unread
                  {stats.unread > 0 && (
                    <span className="ml-2 px-1.5 py-0.5 bg-red-500 text-white text-xs rounded-full">
                      {stats.unread}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('starred')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer hover:bg-red-100 ${
                    activeTab === 'starred' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Star className="w-4 h-4" />
                </button>
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center space-x-2 px-6 py-4 border-2 rounded-xl transition-all cursor-pointer cursor-pointer ${
                  showFilters 
                    ? 'bg-red-600 border-red-600 text-white' 
                    : 'border-gray-100 hover:border-gray-200 text-gray-700'
                }`}
              >
                <Filter className="w-5 h-5" />
                <span className="font-medium">Filters</span>
                {Object.values(filters).some(v => v !== 'all' && v !== '' && v.length > 0) && (
                  <span className="ml-2 px-2 py-0.5 bg-white text-blue-600 rounded-full text-xs font-bold">
                    {Object.values(filters).filter(v => v !== 'all' && v !== '' && v.length > 0).length}
                  </span>
                )}
              </button>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-4 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-red-600 bg-white appearance-none pr-12 cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="priority">Priority</option>
                <option value="status">Status</option>
                <option value="response">Response Time</option>
              </select>

              {/* Sort Direction */}
              <button
                onClick={() => setSortDirection(sortDirection === 'desc' ? 'asc' : 'desc')}
                className="p-4 border-2 border-gray-100 rounded-xl hover:border-gray-200 transition-all"
              >
                {sortDirection === 'desc' ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </button>

              {/* View Mode Toggle */}
              <div className="flex items-center border-2 border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode('detailed')}
                  className={`p-4 transition-all cursor-pointer ${
                    viewMode === 'detailed' 
                      ? 'bg-red-600 text-white' 
                      : 'hover:bg-gray-50 text-gray-600'
                  }`}
                  title="Detailed View"
                >
                  <MessageSquare className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('compact')}
                  className={`p-4 transition-all cursor-pointer ${
                    viewMode === 'compact' 
                      ? 'bg-red-600 text-white' 
                      : 'hover:bg-gray-50 text-gray-600'
                  }`}
                  title="Compact View"
                >
                  <Inbox className="w-5 h-5" />
                </button>
              </div>

              {/* Clear Filters */}
              {(searchTerm || Object.values(filters).some(v => v !== 'all' && v !== '' && v.length > 0) || activeTab !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="p-4 border-2 border-gray-100 rounded-xl hover:border-red-200 hover:bg-red-50 text-red-600 transition-all group cursor-pointer"
                  title="Clear all filters"
                >
                  <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform" />
                </button>
              )}
            </div>
          </div>

          {/* Advanced Filters Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 pt-6 border-t-2 border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select
                      value={filters.status}
                      onChange={(e) => {
                        const newStatus = e.target.value
                        setFilters({...filters, status: newStatus})
                        // Update URL when status filter changes
                        if (newStatus !== 'all') {
                          setSearchParams({ status: newStatus })
                        } else {
                          setSearchParams({})
                        }
                      }}
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-blue-600"
                    >
                      <option value="all">All Status</option>
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                    <select
                      value={filters.priority}
                      onChange={(e) => setFilters({...filters, priority: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-blue-600"
                    >
                      <option value="all">All Priority</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Source</label>
                    <select
                      value={filters.source}
                      onChange={(e) => setFilters({...filters, source: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-blue-600"
                    >
                      <option value="all">All Sources</option>
                      <option value="website">Website</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="facebook">Facebook</option>
                      <option value="instagram">Instagram</option>
                      <option value="phone">Phone</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                    <div className="flex flex-wrap gap-2 p-2 border-2 border-gray-100 rounded-xl">
                      {availableTags.map(tag => (
                        <button
                          key={tag}
                          onClick={() => {
                            setFilters({
                              ...filters,
                              tags: filters.tags.includes(tag)
                                ? filters.tags.filter(t => t !== tag)
                                : [...filters.tags, tag]
                            })
                          }}
                          className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                            filters.tags.includes(tag)
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Bar */}
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredInquiries.length}</span> of{' '}
              <span className="font-semibold text-gray-900">{inquiries.length}</span> inquiries
            </span>
            {selectedInquiries.length > 0 && (
              <span className="text-sm text-blue-600">
                {selectedInquiries.length} selected
              </span>
            )}
          </div>
          <div className="flex items-center space-x-4">
            {selectedInquiries.length > 0 ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleBulkAction('mark-read')}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200 transition-colors cursor-pointer"
                >
                  Mark Read
                </button>
                <button
                  onClick={() => handleBulkAction('star')}
                  className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-sm hover:bg-yellow-200 transition-colors cursor-pointer"
                >
                  Star
                </button>
                <button
                  onClick={() => handleBulkAction('archive')}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  Archive
                </button>
                <button
                  onClick={() => handleBulkAction('delete')}
                  className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm hover:bg-red-200 transition-colors cursor-pointer"
                >
                  Delete
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center">
                  <Printer className="w-4 h-4 mr-1" />
                  Print
                </button>
                <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center">
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content - Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Inquiry List */}
        <div className="lg:col-span-1 bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-gray-50">
            <h3 className="font-semibold text-gray-900 flex items-center">
              <Inbox className="w-5 h-5 mr-2 text-red-600" />
              Inbox ({filteredInquiries.length})
            </h3>
          </div>
          
          <div className="divide-y divide-gray-100 max-h-[800px] overflow-y-auto">
            {filteredInquiries.map((inquiry) => (
              <InquiryListItem
                key={inquiry.id}
                inquiry={inquiry}
                isSelected={selectedInquiry?.id === inquiry.id}
                isSelectedInBulk={selectedInquiries.includes(inquiry.id)}
                onSelect={() => {
                  setSelectedInquiry(inquiry)
                  // Optional: Navigate to individual inquiry view
                  // navigate(`/admin/inquiries/${inquiry.id}`)
                }}
                onToggleSelect={(e) => {
                  e.stopPropagation()
                  if (selectedInquiries.includes(inquiry.id)) {
                    setSelectedInquiries(selectedInquiries.filter(id => id !== inquiry.id))
                  } else {
                    setSelectedInquiries([...selectedInquiries, inquiry.id])
                  }
                }}
                onToggleStar={(e) => {
                  e.stopPropagation()
                  toggleStar(inquiry.id)
                }}
                onToggleRead={(e) => {
                  e.stopPropagation()
                  toggleRead(inquiry.id)
                }}
                getStatusIcon={getStatusIcon}
                getPriorityColor={getPriorityColor}
                formatTime={formatTime}
                viewMode={viewMode}
              />
            ))}

            {filteredInquiries.length === 0 && (
              <div className="text-center py-16">
                <Inbox className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No inquiries found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>

        {/* Inquiry Detail View */}
        <div className="lg:col-span-2">
          {selectedInquiry ? (
            <InquiryDetail
              inquiry={selectedInquiry}
              onClose={() => setSelectedInquiry(null)}
              onUpdate={(updated) => {
                setInquiries(inquiries.map(i => 
                  i.id === updated.id ? updated : i
                ))
                setSelectedInquiry(updated)
              }}
              replyText={replyText}
              setReplyText={setReplyText}
              noteText={noteText}
              setNoteText={setNoteText}
              showQuickReply={showQuickReply}
              setShowQuickReply={setShowQuickReply}
              getStatusColor={getStatusColor}
              getPriorityColor={getPriorityColor}
              getSatisfactionIcon={getSatisfactionIcon}
            />
          ) : (
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-12 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Inquiry Selected</h3>
                <p className="text-gray-500 max-w-md">
                  Select an inquiry from the list to view details, respond, and manage the conversation
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Stat Card Component
const StatCard = ({ icon: Icon, label, value, color, subtitle }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className={`bg-gradient-to-br ${color} rounded-sm shadow-sm p-6 text-white relative overflow-hidden`}
  >
    <div className="absolute inset-0 bg-grid-white/10" />
    <div className="relative z-10">
      <Icon className="w-8 h-8 opacity-80 mb-3" />
      <p className="text-2xl font-bold mb-1">{value}</p>
      <p className="text-sm opacity-80">{label}</p>
      {subtitle && <p className="text-xs opacity-60 mt-2">{subtitle}</p>}
    </div>
  </motion.div>
)

// Inquiry List Item Component
const InquiryListItem = ({ 
  inquiry, 
  isSelected, 
  isSelectedInBulk,
  onSelect, 
  onToggleSelect,
  onToggleStar,
  onToggleRead,
  getStatusIcon,
  getPriorityColor,
  formatTime,
  viewMode 
}) => {
  const SourceIcon = inquiry.sourceIcon

  if (viewMode === 'compact') {
    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`p-3 cursor-pointer transition-all ${
          isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'
        } ${!inquiry.read ? 'bg-blue-50/50' : ''}`}
        onClick={onSelect}
      >
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={isSelectedInBulk}
            onChange={onToggleSelect}
            onClick={(e) => e.stopPropagation()}
            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
          />
          <button
            onClick={onToggleStar}
            className="focus:outline-none"
          >
            <Star className={`w-4 h-4 ${inquiry.starred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
          </button>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className={`font-medium truncate ${!inquiry.read ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
                {inquiry.name}
              </p>
              <span className="text-xs text-gray-500 ml-2">
                {formatTime(inquiry.date)}
              </span>
            </div>
            <div className="flex items-center text-xs text-gray-500 mt-0.5">
              <Car className="w-3 h-3 mr-1 flex-shrink-0" />
              <span className="truncate">{inquiry.vehicle}</span>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`p-4 cursor-pointer transition-all ${
        isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'
      } ${!inquiry.read ? 'bg-blue-50/30' : ''}`}
      onClick={onSelect}
    >
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          checked={isSelectedInBulk}
          onChange={onToggleSelect}
          onClick={(e) => e.stopPropagation()}
          className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center space-x-2">
              <button
                onClick={onToggleStar}
                className="focus:outline-none"
              >
                <Star className={`w-4 h-4 ${inquiry.starred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
              </button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                {inquiry.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className={`${!inquiry.read ? 'font-bold' : 'font-medium'} text-gray-900`}>
                  {inquiry.name}
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <SourceIcon className="w-3 h-3 mr-1" />
                  <span>{inquiry.source}</span>
                  <span className="mx-1">•</span>
                  <span>{formatTime(inquiry.date)}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {getStatusIcon(inquiry.status)}
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(inquiry.priority)}`}>
                {inquiry.priority}
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{inquiry.message}</p>

          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2">
              <Car className="w-3 h-3 text-gray-400" />
              <span className="text-gray-600">{inquiry.vehicle}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs ">
              {inquiry.attachments?.length > 0 && (
                <span className="flex items-center text-gray-400">
                  <Paperclip className="w-3 h-3 mr-1" />
                  {inquiry.attachments.length}
                </span>
              )}
              {inquiry.tags?.map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Inquiry Detail Component
const InquiryDetail = ({
  inquiry,
  onClose,
  onUpdate,
  replyText,
  setReplyText,
  noteText,
  setNoteText,
  showQuickReply,
  setShowQuickReply,
  getStatusColor,
  getPriorityColor,
  getSatisfactionIcon
}) => {
  const [localNote, setLocalNote] = useState('')
  const SourceIcon = inquiry.sourceIcon

  const addNote = () => {
    if (!localNote.trim()) return
    const newNote = {
      id: Date.now(),
      text: localNote,
      date: new Date().toISOString(),
      user: 'Admin'
    }
    inquiry.notes.push(newNote)
    onUpdate({...inquiry})
    setLocalNote('')
  }

  const addReply = () => {
    if (!replyText.trim()) return
    const newReply = {
      id: Date.now(),
      type: 'reply',
      from: 'admin',
      content: replyText,
      date: new Date().toISOString(),
      read: true
    }
    inquiry.conversation.push(newReply)
    onUpdate({...inquiry, lastActivity: new Date().toISOString()})
    setReplyText('')
    setShowQuickReply(false)
  }

  const updateStatus = (newStatus) => {
    onUpdate({...inquiry, status: newStatus})
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="bg-white rounded-md shadow-md border border-gray-100 overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors lg:hidden"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{inquiry.name}</h2>
              <div className="flex items-center space-x-3 mt-1">
                <SourceIcon className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{inquiry.source}</span>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-600">ID: {inquiry.id}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onUpdate({...inquiry, starred: !inquiry.starred})}
              className="p-2 hover:bg-red-100 rounded-lg transition-colors cursor-pointer"
            >
              <Star className={`w-5 h-5 ${inquiry.starred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} />
            </button>
            <button
              onClick={() => onUpdate({...inquiry, read: !inquiry.read})}
              className="p-2 hover:bg-red-100 rounded-lg transition-colors cursor-pointer"
            >
              {inquiry.read ? (
                <Mail className="w-5 h-5 text-gray-400" />
              ) : (
                <Mail className="w-5 h-5 text-blue-600" />
              )}
            </button>
            <button className="p-2 hover:bg-red-100 rounded-lg transition-colors cursor-pointer">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <select
            value={inquiry.status}
            onChange={(e) => updateStatus(e.target.value)}
            className={`px-4 py-2 rounded-xl text-sm font-medium border-2 focus:outline-none focus:ring-2 ${getStatusColor(inquiry.status)}`}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>

          <span className={`px-4 py-2 rounded-xl text-sm font-medium border-2 ${getPriorityColor(inquiry.priority)}`}>
            {inquiry.priority.charAt(0).toUpperCase() + inquiry.priority.slice(1)} Priority
          </span>

          {inquiry.satisfaction && (
            <span className="flex items-center px-4 py-2 bg-gray-100 rounded-xl text-sm font-medium">
              {getSatisfactionIcon(inquiry.satisfaction)}
              <span className="ml-2">Customer Satisfaction: {inquiry.satisfaction}</span>
            </span>
          )}

          {inquiry.responseTime && (
            <span className="flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-xl text-sm font-medium">
              <Timer className="w-4 h-4 mr-2" />
              Response: {inquiry.responseTime} min
            </span>
          )}
        </div>
      </div>

      {/* Contact Info */}
      <div className="p-6 border-b border-gray-100 bg-gray-50">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <a href={`mailto:${inquiry.email}`} className="text-sm font-medium text-gray-900 hover:text-blue-600">
                {inquiry.email}
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <Phone className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <a href={`tel:${inquiry.phone}`} className="text-sm font-medium text-gray-900 hover:text-blue-600">
                {inquiry.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Received</p>
              <p className="text-sm font-medium text-gray-900">
                {new Date(inquiry.date).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
              <Car className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Vehicle</p>
              <p className="text-sm font-medium text-gray-900">{inquiry.vehicle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conversation */}
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
          Conversation
        </h3>

        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
          {inquiry.conversation.map((message, index) => (
            <div
              key={message.id}
              className={`flex ${message.from === 'admin' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-4 ${
                  message.from === 'admin'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-gray-100 text-gray-900 rounded-bl-none'
                }`}
              >
                {message.from === 'admin' && (
                  <p className="text-xs opacity-80 mb-1">Admin</p>
                )}
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                <div className="flex items-center justify-end mt-2 space-x-2">
                  <span className={`text-xs ${message.from === 'admin' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {new Date(message.date).toLocaleTimeString()}
                  </span>
                  {message.attachments?.map((att, i) => (
                    <span key={i} className="flex items-center text-xs bg-white/20 px-2 py-1 rounded">
                      <Paperclip className="w-3 h-3 mr-1" />
                      {att}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Reply */}
        <AnimatePresence>
          {showQuickReply ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-4"
            >
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                rows="3"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all"
                placeholder="Type your reply..."
                autoFocus
              />
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Paperclip className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Image className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Link className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setShowQuickReply(false)}
                    className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={addReply}
                    disabled={!replyText.trim()}
                    className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <button
              onClick={() => setShowQuickReply(true)}
              className="mt-4 w-full py-3 border-2 border-dashed border-gray-200 rounded-xl text-gray-500 hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Quick Reply
            </button>
          )}
        </AnimatePresence>
      </div>

      {/* Attachments */}
      {inquiry.attachments?.length > 0 && (
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
            <Paperclip className="w-4 h-4 mr-2" />
            Attachments ({inquiry.attachments.length})
          </h3>
          <div className="flex flex-wrap gap-2">
            {inquiry.attachments.map((att, index) => (
              <div key={index} className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg">
                <FileText className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">{att.name}</span>
                <span className="text-xs text-gray-500">({att.size})</span>
                <button className="ml-2 p-1 hover:bg-gray-200 rounded">
                  <Download className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {inquiry.tags?.length > 0 && (
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
            <Tag className="w-4 h-4 mr-2" />
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {inquiry.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Internal Notes */}
      <div className="p-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
          <FileText className="w-4 h-4 mr-2" />
          Internal Notes
        </h3>

        <div className="space-y-3 mb-3 max-h-[200px] overflow-y-auto">
          {inquiry.notes.map((note) => (
            <div key={note.id} className="p-3 bg-yellow-50 rounded-lg border border-yellow-100">
              <p className="text-sm text-gray-700">{note.text}</p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(note.date).toLocaleString()} by {note.user}
              </p>
            </div>
          ))}
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            value={localNote}
            onChange={(e) => setLocalNote(e.target.value)}
            placeholder="Add internal note..."
            className="flex-1 px-4 py-2 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all"
          />
          <button
            onClick={addNote}
            disabled={!localNote.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add
          </button>
        </div>
      </div>
    </motion.div>
  )
}



export default Inquiries