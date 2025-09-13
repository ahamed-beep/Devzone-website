import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Navbar from "./Navbar"
import Footer from "./Footer"



const Contact = () => {
  const form = useRef(null)

  // Refs for scroll animations
  const heroRef = useRef(null)
  const formRef = useRef(null)
  const contactInfoRef = useRef(null)
  const businessHoursRef = useRef(null)

  // InView hooks
  const heroInView = useInView(heroRef, { once: true, margin: "-50px", amount: 0.2 })
  const formInView = useInView(formRef, { once: true, margin: "-50px", amount: 0.2 })
  const contactInfoInView = useInView(contactInfoRef, { once: true, margin: "-50px", amount: 0.2 })
  const businessHoursInView = useInView(businessHoursRef, { once: true, margin: "-50px", amount: 0.2 })

  const sendEmail = (e) => {
    e.preventDefault()

    if (form.current) {
      console.log("Form submitted:", form.current)
      alert("Message sent successfully!")
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const slideInVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  }

  const formFieldVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  }

  const bounceVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  }

  return (
    <div className="overflow-x-hidden">
    <Navbar/>

      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        className="relative w-full h md:h-100 h-90 bg-cover bg-center object-center object-cover flex items-end pb-16 sm:pb-22 justify-start pl-4 sm:pl-8 lg:pl-15"
        style={{
          backgroundImage: "url('/Images/contact.webp')",
        }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="relative justify-start text-start text-white px-4 z-10 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              textShadow: "0px 0px 20px rgba(255,255,255,0.8)",
            }}
          >
            {"LET'S TALK".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: "easeOut",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-4 font-light text-base sm:text-lg max-w-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
          >
            We're here to help and answer any questions you might have.
            <br className="hidden sm:block" />
            Feel free to reach out — we'd love to hear from you!
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="bg-white min-h-screen flex items-center justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Side - Form */}
          <motion.div
            ref={formRef}
            className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg w-full"
            variants={slideInVariants}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
          >
            <motion.h2
              className="text-xl sm:text-2xl font-bold mb-2"
              variants={bounceVariants}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
            >
              GET IN TOUCH
            </motion.h2>

            <motion.hr
              className="mb-4"
              initial={{ width: 0 }}
              animate={formInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div className="flex flex-col" variants={formFieldVariants} custom={0}>
                  <label htmlFor="user_name" className="mb-1 font-bold text-gray-700 text-sm sm:text-base">
                    Name
                  </label>
                  <motion.input
                    id="user_name"
                    type="text"
                    name="user_name"
                    placeholder="Enter your name"
                    required
                    className="w-full border bg-white border-gray-300 rounded px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm sm:text-base"
                    whileFocus={{
                      scale: 1.01,
                      boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)",
                    }}
                  />
                </motion.div>

                <motion.div className="flex flex-col" variants={formFieldVariants} custom={1}>
                  <label htmlFor="user_phone" className="mb-1 font-bold text-gray-700 text-sm sm:text-base">
                    Phone Number
                  </label>
                  <motion.input
                    id="user_phone"
                    type="tel"
                    name="user_phone"
                    placeholder="Enter your phone number"
                    required
                    className="w-full border bg-white border-gray-300 rounded px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm sm:text-base"
                    whileFocus={{
                      scale: 1.01,
                      boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)",
                    }}
                  />
                </motion.div>
              </div>

              <motion.div className="flex flex-col" variants={formFieldVariants} custom={2}>
                <label htmlFor="user_email" className="mb-1 font-bold text-gray-700 text-sm sm:text-base">
                  Email
                </label>
                <motion.input
                  id="user_email"
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                  className="w-full border bg-white border-gray-300 rounded px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm sm:text-base"
                  whileFocus={{
                    scale: 1.01,
                    boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)",
                  }}
                />
              </motion.div>

              <motion.div className="flex flex-col" variants={formFieldVariants} custom={3}>
                <label htmlFor="message" className="mb-1 font-bold text-gray-700 text-sm sm:text-base">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={4}
                  className="w-full border bg-white border-gray-300 rounded px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm sm:text-base resize-none"
                  whileFocus={{
                    scale: 1.01,
                    boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)",
                  }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full sm:w-60 bg-blue-900 text-white py-2 px-4 rounded-md font-semibold hover:bg-red-700 transition-all text-sm sm:text-base"
                variants={formFieldVariants}
                custom={4}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(239, 68, 68, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                SEND MESSAGE
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Right Side - Contact Info */}
          <div className="space-y-6 lg:space-y-8 w-full">
            {/* Contact Information */}
            <motion.div
              ref={contactInfoRef}
              className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg w-full"
              variants={slideInVariants}
              initial="hidden"
              animate={contactInfoInView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.01,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <motion.h2
                className="text-xl sm:text-2xl font-bold mb-2"
                variants={bounceVariants}
                initial="hidden"
                animate={contactInfoInView ? "visible" : "hidden"}
              >
                CONTACT INFORMATION
              </motion.h2>

              <motion.hr
                className="mb-4"
                initial={{ width: 0 }}
                animate={contactInfoInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />

              <motion.ul
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                animate={contactInfoInView ? "visible" : "hidden"}
              >
                {[
                  { icon: "📞", text: "+92 3290303391" },
                  { icon: "📍", text: "Lahore , Pakistan" },
                  { icon: "📧", text: "devzonesoftwarehouse@gmail.com" },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-sm sm:text-base"
                    variants={formFieldVariants}
                    custom={i}
                    whileHover={{
                      x: 5,
                      scale: 1.02,
                    }}
                  >
                    <motion.span
                      className="text-red-600 text-lg flex-shrink-0"
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span className="break-all sm:break-normal">{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              ref={businessHoursRef}
              className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg w-full"
              variants={slideInVariants}
              initial="hidden"
              animate={businessHoursInView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.01,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <motion.h2
                className="text-xl sm:text-2xl font-bold mb-2"
                variants={bounceVariants}
                initial="hidden"
                animate={businessHoursInView ? "visible" : "hidden"}
              >
                BUSINESS HOURS
              </motion.h2>

              <motion.hr
                className="mb-4"
                initial={{ width: 0 }}
                animate={businessHoursInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />

              <motion.ul
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                animate={businessHoursInView ? "visible" : "hidden"}
              >
                {[
                  { day: "Monday - Sunday:", hours: "24/7 Availible" },
               
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex justify-between text-sm sm:text-base"
                    variants={formFieldVariants}
                    custom={i}
                    whileHover={{
                      x: 3,
                      backgroundColor: "rgba(239, 68, 68, 0.1)",
                      borderRadius: "4px",
                      padding: "4px 8px",
                    }}
                  >
                    <span className="font-medium">{item.day}</span>
                    <span>{item.hours}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>

<Footer/>
    </div>
  )
}

export default Contact