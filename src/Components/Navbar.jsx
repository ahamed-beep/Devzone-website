"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
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
import MobileNavbar from "./MobileNavbar"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item)
  }

  const navItems = [
    {
      name: "Who We Are",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "About Us",
          description: "Learn about our company and mission",
          icon: <Users className="w-5 h-5" />,
          link: "/about",
          isLocked: false // This one is unlocked
        },
        {
          name: "Our Team",
          description: "Meet our expert team members",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Company History",
          description: "Our journey and milestones",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Mission & Vision",
          description: "Our vision for the future",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Leadership",
          description: "Meet our executive leadership team",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Careers",
          description: "Join our growing team",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
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
          description: "Never miss an important conversation about your brand again",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Social Media Lead Generation",
          description: "Generate more leads from social media with impressive conversion rates",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Influencer Marketing",
          description: "Connect with top influencers who your customers love",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Campaign Measurement",
          description: "Measure your marketing campaigns with unparalleled precision and detail",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Customer Care",
          description: "Take your customer satisfaction performance to the next level",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Content Strategy",
          description: "Deliver top-notch content that generates traffic and sales",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Competitor Insights",
          description: "Stay ahead of the competition—all the time",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Crisis Management",
          description: "Detect and fix problems before they become a pain",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Market Research",
          description: "Gain access to never-before-seen social media insights for your brand",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
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
          description: "Join our partner network and grow together",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Consulting Services",
          description: "Get expert guidance for your business",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Custom Solutions",
          description: "Tailored solutions for your unique needs",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Enterprise Support",
          description: "Dedicated support for enterprise clients",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Training Programs",
          description: "Comprehensive training for your team",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Implementation",
          description: "Full implementation and setup services",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
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
          description: "Latest company news and announcements",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Blog",
          description: "Industry insights and expert articles",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Case Studies",
          description: "Success stories from our clients",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Resources",
          description: "Helpful guides and documentation",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Events",
          description: "Upcoming webinars and conferences",
          icon: <Lock className="w-5 h-5" />,
          link: "#",
          isLocked: true
        },
        {
          name: "Contact",
          description: "Get in touch with our team",
          icon: <HeadphonesIcon className="w-5 h-5" />,
          link: "/contact",
          isLocked: false // This one is unlocked
        },
      ],
    },
  ]

  const handleDropdownItemClick = (dropdownItem, e) => {
    if (dropdownItem.isLocked) {
      e.preventDefault()
      return false
    }
    setActiveDropdown(null)
  }

  return (
    <div>
      <div className="md:hidden block">
        <MobileNavbar/>
      </div>
      <div className="md:block hidden">
        <motion.nav
          className={`fixed top-0 w-full z-50 transition-all duration-500 ${
            isScrolled
              ? " bg-blue-900 backdrop-blur-sm border-b border-white/10"
              : "bg-transparent"
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.div
            className={`transition-all duration-300 ${isScrolled ? "max-w-4xl mx-auto px-6 py-3" : "w-full px-8 py-4"}`}
            animate={{
              scale: isScrolled ? 0.98 : 1,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              className="flex items-center"
              animate={{
                justifyContent: isScrolled ? "center" : "space-between",
                gap: isScrolled ? "8rem" : "0rem",
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                className="font-bold text-xl text-white"
                animate={{
                  scale: isScrolled ? 1.05 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Link to="/">
                  <motion.img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dezone_logo-removebg-preview-cIwjanzAf7Q7pNAscxie6zaxt6mz3t.webp"
                    alt="DevZone"
                    className="h-10 w-auto object-contain"
                    style={{ minHeight: "40px", minWidth: "120px" }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>

              <motion.div
                className={`hidden md:flex items-center gap-6 relative ${isScrolled ? "" : "flex-1 justify-center"}`}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="relative"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * index,
                      ease: "easeOut",
                    }}
                  >
                    <motion.button
                      onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                      className="flex items-center gap-1 transition-colors duration-200 text-sm font-medium whitespace-nowrap text-white hover:text-blue-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <motion.div
                          animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      )}
                    </motion.button>

                    <AnimatePresence>
                      {item.hasDropdown && activeDropdown === item.name && (
                        <motion.div
                          className="bg-white shadow-xl border-t border-gray-100 z-50"
                          style={{
                            position: "fixed",
                            top: isScrolled ? "65px" : "72px",
                            left: "-20px",
                            width: "calc(100vw + 50px)",
                            marginLeft: "calc(-50vw + 50% - 20px)",
                            marginRight: "calc(-50vw + 50% - 20px)",
                          }}
                          initial={{ opacity: 0, y: -20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.95 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                        >
                          <div className="max-w-7xl mx-auto px-8 py-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
                              {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                                dropdownItem.isLocked ? (
                                  <div
                                    key={dropdownItem.name}
                                    className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 opacity-60 cursor-not-allowed"
                                  >
                                    <motion.div
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{
                                        duration: 0.3,
                                        delay: 0.05 * dropdownIndex,
                                        ease: "easeOut",
                                      }}
                                      className="w-full flex items-start gap-4"
                                    >
                                      <div className="text-gray-400 mt-1 flex-shrink-0">
                                        {dropdownItem.icon}
                                      </div>
                                      <div className="flex-1">
                                        <h3 className="font-semibold text-gray-500 text-sm mb-1 flex items-center gap-2">
                                          {dropdownItem.name}
                                          <span className="text-xs bg-gray-200 px-2 py-1 rounded">Coming Soon</span>
                                        </h3>
                                        <p className="text-xs text-gray-400 leading-relaxed">{dropdownItem.description}</p>
                                      </div>
                                    </motion.div>
                                  </div>
                                ) : (
                                  <Link
                                    key={dropdownItem.name}
                                    to={dropdownItem.link}
                                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                                    onClick={(e) => handleDropdownItemClick(dropdownItem, e)}
                                  >
                                    <motion.div
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{
                                        duration: 0.3,
                                        delay: 0.05 * dropdownIndex,
                                        ease: "easeOut",
                                      }}
                                      whileHover={{
                                        scale: 1.02,
                                      }}
                                      className="w-full flex items-start gap-4"
                                    >
                                      <motion.div
                                        className="text-blue-600 group-hover:text-blue-700 mt-1 flex-shrink-0"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        {dropdownItem.icon}
                                      </motion.div>
                                      <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-900">
                                          {dropdownItem.name}
                                        </h3>
                                        <p className="text-xs text-gray-600 leading-relaxed">{dropdownItem.description}</p>
                                      </div>
                                    </motion.div>
                                  </Link>
                                )
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className={`${isScrolled ? "" : "justify-self-end"}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link to='/contact'>
                  <motion.button
                    className="border border-white bg-transparent text-white hover:bg-white hover:text-blue-900 px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium whitespace-nowrap"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 4px 15px rgba(255, 255, 255, 0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.nav>
      </div>
    </div>
  )
}