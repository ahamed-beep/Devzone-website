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
} from "lucide-react"

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
        { name: "About Us", description: "Learn about our company and mission", icon: <Users className="w-5 h-5" /> },
        { name: "Our Team", description: "Meet our expert team members", icon: <Users className="w-5 h-5" /> },
        { name: "Company History", description: "Our journey and milestones", icon: <FileText className="w-5 h-5" /> },
        { name: "Mission & Vision", description: "Our vision for the future", icon: <TrendingUp className="w-5 h-5" /> },
        { name: "Leadership", description: "Meet our executive leadership team", icon: <Users className="w-5 h-5" /> },
        { name: "Careers", description: "Join our growing team", icon: <Search className="w-5 h-5" /> },
      ],
    },
    {
      name: "Services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Brand Reputation Auditing", description: "Never miss an important conversation about your brand again", icon: <Eye className="w-5 h-5" /> },
        { name: "Social Media Lead Generation", description: "Generate more leads from social media with impressive conversion rates", icon: <TrendingUp className="w-5 h-5" /> },
        { name: "Influencer Marketing", description: "Connect with top influencers who your customers love", icon: <Users className="w-5 h-5" /> },
        { name: "Campaign Measurement", description: "Measure your marketing campaigns with unparalleled precision and detail", icon: <BarChart3 className="w-5 h-5" /> },
        { name: "Customer Care", description: "Take your customer satisfaction performance to the next level", icon: <HeadphonesIcon className="w-5 h-5" /> },
        { name: "Content Strategy", description: "Deliver top-notch content that generates traffic and sales", icon: <FileText className="w-5 h-5" /> },
        { name: "Competitor Insights", description: "Stay ahead of the competition—all the time", icon: <Search className="w-5 h-5" /> },
        { name: "Crisis Management", description: "Detect and fix problems before they become a pain", icon: <AlertTriangle className="w-5 h-5" /> },
        { name: "Market Research", description: "Gain access to never-before-seen social media insights for your brand", icon: <MessageCircle className="w-5 h-5" /> },
      ],
    },
    {
      name: "Work With Us",
      hasDropdown: true,
      dropdownItems: [
        { name: "Partnership Program", description: "Join our partner network and grow together", icon: <Users className="w-5 h-5" /> },
        { name: "Consulting Services", description: "Get expert guidance for your business", icon: <MessageCircle className="w-5 h-5" /> },
        { name: "Custom Solutions", description: "Tailored solutions for your unique needs", icon: <BarChart3 className="w-5 h-5" /> },
        { name: "Enterprise Support", description: "Dedicated support for enterprise clients", icon: <HeadphonesIcon className="w-5 h-5" /> },
        { name: "Training Programs", description: "Comprehensive training for your team", icon: <FileText className="w-5 h-5" /> },
        { name: "Implementation", description: "Full implementation and setup services", icon: <TrendingUp className="w-5 h-5" /> },
      ],
    },
    {
      name: "Company",
      hasDropdown: true,
      dropdownItems: [
        { name: "News & Updates", description: "Latest company news and announcements", icon: <FileText className="w-5 h-5" /> },
        { name: "Blog", description: "Industry insights and expert articles", icon: <MessageCircle className="w-5 h-5" /> },
        { name: "Case Studies", description: "Success stories from our clients", icon: <BarChart3 className="w-5 h-5" /> },
        { name: "Resources", description: "Helpful guides and documentation", icon: <Search className="w-5 h-5" /> },
        { name: "Events", description: "Upcoming webinars and conferences", icon: <TrendingUp className="w-5 h-5" /> },
        { name: "Contact", description: "Get in touch with our team", icon: <HeadphonesIcon className="w-5 h-5" /> },
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
          <motion.button onClick={() => setIsOpen(true)} className="p-2 text-white" whileTap={{ scale: 0.95 }}>
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
                        <span className="text-gray-900 font-medium">{item.name}</span>
                        {item.hasDropdown && <ChevronRight className="w-5 h-5 text-gray-400" />}
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
                        <motion.a
                          key={subItem.name}
                          href="#"
                          className="flex items-start gap-4 p-4 border-b border-gray-100 hover:bg-gray-50"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="text-blue-600 mt-1 flex-shrink-0">{subItem.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 text-sm mb-1">{subItem.name}</h3>
                            <p className="text-xs text-gray-600 leading-relaxed">{subItem.description}</p>
                          </div>
                        </motion.a>
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
