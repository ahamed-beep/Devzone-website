"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Footer() {
  const [openSections, setOpenSections] = useState({
    quickLinks: false,
    social: false,
    legal: false,
  })

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  }

  const slideInLeft = {
    hidden: { 
      x: -100, 
      opacity: 0,
      rotateY: -45
    },
    visible: { 
      x: 0, 
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 1.2
      }
    }
  }

  const slideInRight = {
    hidden: { 
      x: 100, 
      opacity: 0,
      rotateY: 45
    },
    visible: { 
      x: 0, 
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 1.2
      }
    }
  }

  const fadeInUp = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.9
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 1
      }
    }
  }

  const scaleIn = {
    hidden: { 
      scale: 0.5, 
      opacity: 0,
      rotate: -180
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        duration: 1.5
      }
    }
  }

  const linkHover = {
    hover: { 
      scale: 1.1,
      x: 10,
      color: "#ffffff",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }

  const buttonHover = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(255,255,255,0.3)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <div className="relative">
      {/* Hero Section with Heavy Animation */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative hidden md:block top-20 max-w-6xl mx-auto z-20 bg-gradient-to-r from-[#28172C] via-[#010101] to-[#0F0F0F] text-white py-5 pl-18 overflow-hidden rounded-3xl mb-[-2rem]"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div 
              variants={slideInLeft}
              className="lg:w-1/2 mb-8 lg:mb-0"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl lg:text-5xl font-semibold mb-4"
              >
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Experience superior
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  skip tracing
                </motion.span>
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-lg mb-6"
              >
                150+ data points per search.
              </motion.p>
              <motion.button 
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6, type: "spring", stiffness: 200 }}
                className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get started
              </motion.button>
            </motion.div>
            <motion.div 
              variants={slideInRight}
              className="lg:w-1/2 flex justify-center lg:justify-end"
            >
              <motion.div 
                variants={scaleIn}
                className="relative"
              >
                <motion.div 
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-80 h-80 rounded-full border border-yellow-400/20 flex items-center justify-center"
                >
                  <motion.div 
                    animate={{ 
                      rotate: -360,
                      scale: [1, 0.95, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="w-64 h-64 rounded-full flex items-center justify-center relative"
                  >
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-green-400/10 to-transparent rounded-full">
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 0.6, scale: 1 }}
                          transition={{ delay: 1.5, duration: 1 }}
                          className="absolute inset-0"
                        >
                          <img src="/Images/footer.jpeg" alt="" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mobile Hero Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="block md:hidden w-full bg-gradient-to-r from-[#28172C] via-[#010101] to-[#0F0F0F] text-white pb-5 py-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-start pl-8 justify-between">
            <motion.div 
              variants={fadeInUp}
              className="lg:w-1/2 mb-8 lg:mb-0"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl lg:text-5xl font-semibold mb-4"
              >
                Experience superior
                <br />
                skip tracing
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                transition={{ delay: 0.3 }}
                className="text-gray-300 text-lg mb-6"
              >
                150+ data points per search.
              </motion.p>
              <motion.button 
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get started
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Footer with Heavy Animations */}
      <motion.footer 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative z-10 bg-black text-white py-16 px-6 md:pt-50"
      >
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-4 gap-12">
            <div className="flex justify-between gap-100">
              {/* Company Info */}
              <motion.div 
                variants={slideInLeft}
                className="md:col-span-1 ml-10"
              >
                <motion.div 
                  variants={scaleIn}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2 mb-6"
                >
                  <div className="flex items-center gap-2">
                   
                    <motion.span 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="text-white font-bold text-xl"
                    >
                  <img src="/Images/footerlogo.webp" className="  h-15"  />
                    </motion.span>
                  </div>
                </motion.div>

                <motion.div 
                  variants={fadeInUp}
                  transition={{ delay: 0.4 }}
                  className="space-y-2 text-gray-300 text-sm"
                >
                  {["Location(Lahore, Pakistan)"].map((line, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    >
                      {line}
                    </motion.p>
                  ))}
                </motion.div>

                <motion.div 
                  variants={fadeInUp}
                  transition={{ delay: 0.8 }}
                  className="mt-6 space-y-2"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    <span className="text-gray-400 text-sm">Phone number</span>
                    <motion.p 
                      whileHover={{ scale: 1.05, color: "#10b981" }}
                      className="text-white cursor-pointer"
                    >
                      +92 3290303391
                    </motion.p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    <span className="text-gray-400 text-sm">Email</span>
                    <motion.p 
                      whileHover={{ scale: 1.05, color: "#10b981" }}
                      className="text-white cursor-pointer"
                    >
                     devzonesoftwarehouse@gmail.com
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>

              <div className="flex gap-60">
                {/* Quick Links */}
                <motion.div
                  variants={fadeInUp}
                  transition={{ delay: 0.6 }}
                  className=" whitespace-nowrap"
                >
                  <motion.h3 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="text-white font-medium mb-6"
                  >
                    Quick links
                  </motion.h3>
                  <ul className="space-y-3">
                    {[
                      { to: "/pricing", label: "Services" },
                      { to: "/resources", label: "Projects" },
                      { to: "/about", label: "About us" },
                      { to: "/contact", label: "Contact us" }
                    ].map((link, index) => (
                      <motion.li
                        key={link.to}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                        
                      >
                        <motion.a
                          href={link.to}
                          variants={linkHover}
                          whileHover="hover"
                          className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                          {link.label}
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Social */}
                <motion.div
                  variants={fadeInUp}
                  transition={{ delay: 0.8 }}
                >
                  <motion.h3 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="text-white font-medium mb-6"
                  >
                    Social
                  </motion.h3>
                  <ul className="space-y-3">
                    {[
                      { to: "/facebook", label: "Facebook" },
                      { to: "/instagram", label: "Instagram" },
                      { to: "https://www.linkedin.com/company/devzone-software/?viewAsMember=true", label: "LinkedIn" },
                      { to: "https://api.whatsapp.com/send/?phone=923290303391&text&type=phone_number&app_absent=0", label: "Whatsapp" }
                    ].map((link, index) => (
                      <motion.li
                        key={link.to}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                      >
                        <motion.a
                          href={link.to}
                          variants={linkHover}
                          whileHover="hover"
                          className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                          {link.label}
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mobile Layout with Heavy Animations */}
          <div className="md:hidden space-y-4">
            {/* Company Info */}
            <motion.div 
              variants={slideInLeft}
              className="mb-8"
            >
              <motion.div 
                variants={scaleIn}
                className="flex items-center gap-2 mb-6"
              >
                <div className="flex items-center gap-2">
                
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-white font-bold text-xl"
                  >
                    <img src="/Images/footerlogo.webp" className="  h-15"  />
                  </motion.span>
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="space-y-2 text-gray-300 text-sm"
              >
                {["20619 Torrence Chapel Rd", "Suite 116 #1040", "Cornelius, NC 28031", "United States"].map((line, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  >
                    {line}
                  </motion.p>
                ))}
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                transition={{ delay: 0.8 }}
                className="mt-6 space-y-2"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <span className="text-gray-400 mb-2 text-sm">Phone number</span>
                  <motion.p 
                    whileHover={{ scale: 1.05, color: "#10b981" }}
                    className="text-white"
                  >
                 +92 3290303391
                  </motion.p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <span className="text-gray-400 mb-2 text-sm">Email</span>
                  <motion.p 
                    whileHover={{ scale: 1.05, color: "#10b981" }}
                    className="text-white"
                  >
                   devzonesoftwarehouse@gmail.com
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Quick Links Accordion */}
            <motion.div 
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
              className="border-b border-gray-800 pb-4"
            >
              <motion.button
                onClick={() => toggleSection("quickLinks")}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-white font-medium text-lg">Quick Links</h3>
                <motion.div
                  animate={{ rotate: openSections.quickLinks ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openSections.quickLinks ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openSections.quickLinks && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden mt-4 space-y-3 pl-4"
                  >
                    {[
                      { to: "/pricing", label: "Services" },
                      { to: "/resources", label: "Projects" },
                      { to: "/about", label: "About us" },
                      { to: "/contact", label: "Contact us" }
                    ].map((link, index) => (
                      <motion.li
                        key={link.to}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                      >
                        <motion.a
                          href={link.to}
                          variants={linkHover}
                          whileHover="hover"
                          className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                          {link.label}
                        </motion.a>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Social Accordion */}
            <motion.div 
              variants={fadeInUp}
              transition={{ delay: 0.7 }}
              className="border-b border-gray-800 pb-4"
            >
              <motion.button
                onClick={() => toggleSection("social")}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-white font-medium text-lg">Social</h3>
                <motion.div
                  animate={{ rotate: openSections.social ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openSections.social ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openSections.social && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden mt-4 space-y-3 pl-4"
                  >
                    {[
                      { to: "/facebook", label: "Facebook" },
                      { to: "/instagram", label: "Instagram" },
                      { to: "/linkedin", label: "LinkedIn" },
                      { to: "/twitter", label: "Whatsapp" },
                    ].map((link, index) => (
                      <motion.li
                        key={link.to}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                      >
                        <motion.a
                          href={link.to}
                          variants={linkHover}
                          whileHover="hover"
                          className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                          {link.label}
                        </motion.a>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Copyright with Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-12"
          >
            
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}