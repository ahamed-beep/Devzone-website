"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  ChevronRight,
  ArrowLeft,
  Users,
  TrendingUp,
  MessageCircle,
  BarChart3,
  HeadphonesIcon,
  FileText,
  Eye,
  AlertTriangle,
  Search,
  Lock,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    {
      name: "Who We Are",
      hasDropdown: true,
      dropdownItems: [
        { 
          name: "About Us", 
          path: "/about", 
          description: "Learn about our company and mission", 
          icon: <Users className="w-5 h-5" />,
          isLocked: false // This one is unlocked
        },
        { 
          name: "Our Team", 
          path: "#", 
          description: "Meet our expert team members", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Company History", 
          path: "#", 
          description: "Our journey and milestones", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Mission & Vision", 
          path: "#", 
          description: "Our vision for the future", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Leadership", 
          path: "#", 
          description: "Meet our executive leadership team", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Careers", 
          path: "#", 
          description: "Join our growing team", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
      ],
    },
    {
      name: "Services",
      hasDropdown: true,
      dropdownItems: [
        { 
          name: "Brand Reputation Auditing", 
          path: "#", 
          description: "Never miss an important conversation about your brand again", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Social Media Lead Generation", 
          path: "#", 
          description: "Generate more leads from social media with impressive conversion rates", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Influencer Marketing", 
          path: "#", 
          description: "Connect with top influencers who your customers love", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Campaign Measurement", 
          path: "#", 
          description: "Measure your marketing campaigns with unparalleled precision and detail", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Customer Care", 
          path: "#", 
          description: "Take your customer satisfaction performance to the next level", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Content Strategy", 
          path: "#", 
          description: "Deliver top-notch content that generates traffic and sales", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Competitor Insights", 
          path: "#", 
          description: "Stay ahead of the competition—all the time", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Crisis Management", 
          path: "#", 
          description: "Detect and fix problems before they become a pain", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Market Research", 
          path: "#", 
          description: "Gain access to never-before-seen social media insights for your brand", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
      ],
    },
    {
      name: "Work With Us",
      hasDropdown: true,
      dropdownItems: [
        { 
          name: "Partnership Program", 
          path: "#", 
          description: "Join our partner network and grow together", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Consulting Services", 
          path: "#", 
          description: "Get expert guidance for your business", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Custom Solutions", 
          path: "#", 
          description: "Tailored solutions for your unique needs", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Enterprise Support", 
          path: "#", 
          description: "Dedicated support for enterprise clients", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Training Programs", 
          path: "#", 
          description: "Comprehensive training for your team", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Implementation", 
          path: "#", 
          description: "Full implementation and setup services", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
      ],
    },
    {
      name: "Company",
      hasDropdown: true,
      dropdownItems: [
        { 
          name: "News & Updates", 
          path: "#", 
          description: "Latest company news and announcements", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Blog", 
          path: "#", 
          description: "Industry insights and expert articles", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Case Studies", 
          path: "#", 
          description: "Success stories from our clients", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Resources", 
          path: "#", 
          description: "Helpful guides and documentation", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Events", 
          path: "#", 
          description: "Upcoming webinars and conferences", 
          icon: <Lock className="w-5 h-5" />,
          isLocked: true
        },
        { 
          name: "Contact", 
          path: "/contact", 
          description: "Get in touch with our team", 
          icon: <HeadphonesIcon className="w-5 h-5" />,
          isLocked: false // This one is unlocked
        },
      ],
    },
  ]

  const handleNavItemClick = (itemName) => {
    const item = navItems.find((nav) => nav.name === itemName)
    if (item?.hasDropdown) {
      setActiveSubmenu(itemName)
    }
  }

  const handleBackClick = () => {
    setActiveSubmenu(null)
  }

  const handleClose = () => {
    setIsOpen(false)
    setActiveSubmenu(null)
  }

  const handleSubItemClick = (subItem, e) => {
    if (subItem.isLocked) {
      e.preventDefault()
      return false
    }
    handleClose()
  }

  return (
    <>
      {/* Mobile Navbar - Only visible on mobile */}
      <nav
        className={`md:hidden fixed top-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-blue-900 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dezone_logo-removebg-preview-cIwjanzAf7Q7pNAscxie6zaxt6mz3t.webp"
              alt="DevZone"
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* Toggle Button */}
          <motion.button
            onClick={() => setIsOpen(true)}
            className="p-2 text-white"
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>
      </nav>

      {/* Full Screen Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-white z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Main Menu */}
            <AnimatePresence mode="wait">
              {!activeSubmenu ? (
                <motion.div
                  key="main-menu"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="h-full flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dezone_logo-removebg-preview-cIwjanzAf7Q7pNAscxie6zaxt6mz3t.webp"
                      alt="DevZone"
                      className="h-8 w-auto object-contain"
                    />
                    <motion.button
                      onClick={handleClose}
                      className="p-2 text-blue-900 bg-blue-100 rounded-lg"
                      whileTap={{ scale: 0.95 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Navigation Items */}
                  <div className="flex-1 overflow-y-auto">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={() => handleNavItemClick(item.name)}
                        className="w-full flex items-center justify-between p-4 text-left border-b border-gray-100 hover:bg-gray-50"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-gray-900 font-medium">
                          {item.name}
                        </span>
                        {item.hasDropdown && (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                /* Submenu */
                <motion.div
                  key="submenu"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="h-full flex flex-col"
                >
                  {/* Submenu Header */}
                  <div className="flex items-center justify-between p-4 border-b">
                    <motion.button
                      onClick={handleBackClick}
                      className="flex items-center gap-2 text-blue-900"
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowLeft className="w-5 h-5" />
                      <span className="font-medium">Back</span>
                    </motion.button>
                    <motion.button
                      onClick={handleClose}
                      className="p-2 text-blue-900 bg-blue-100 rounded-lg"
                      whileTap={{ scale: 0.95 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Submenu Items */}
                  <div className="flex-1 overflow-y-auto">
                    {navItems
                      .find((item) => item.name === activeSubmenu)
                      ?.dropdownItems?.map((subItem, index) => (
                        <motion.div
                          key={subItem.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {subItem.isLocked ? (
                            <div className="flex items-start gap-4 p-4 border-b border-gray-100 bg-gray-50 opacity-60 cursor-not-allowed">
                              <div className="text-gray-400 mt-1 flex-shrink-0">
                                {subItem.icon}
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-gray-500 text-sm mb-1 flex items-center gap-2">
                                  {subItem.name}
                                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">Coming Soon</span>
                                </h3>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                  {subItem.description}
                                </p>
                              </div>
                            </div>
                          ) : (
                            <Link
                              to={subItem.path}
                              className="flex items-start gap-4 p-4 border-b border-gray-100 hover:bg-gray-50"
                              onClick={(e) => handleSubItemClick(subItem, e)}
                            >
                              <div className="text-blue-600 mt-1 flex-shrink-0">
                                {subItem.icon}
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                                  {subItem.name}
                                </h3>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                  {subItem.description}
                                </p>
                              </div>
                            </Link>
                          )}
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}