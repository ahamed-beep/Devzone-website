import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import emailjs from "emailjs-com"
import Navbar from "./navbar"
import Footer from "./Footer"

const Contact = () => {
  const form = useRef(null)

  // Refs for scroll animations
  const heroRef = useRef(null)
  const formRef = useRef(null)
  const contactInfoRef = useRef(null)
  const businessHoursRef = useRef(null)

  // InView hooks
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const formInView = useInView(formRef, { once: true, margin: "-100px" })
  const contactInfoInView = useInView(contactInfoRef, { once: true, margin: "-100px" })
  const businessHoursInView = useInView(businessHoursRef, { once: true, margin: "-100px" })

  const sendEmail = (e) => {
    e.preventDefault()

    if (form.current) {
      emailjs.sendForm("service_gwisxbo", "template_wh4evpl", form.current, "XyAaz0baTStZQ-wju").then(
        (result) => {
          console.log("Message Sent:", result.text)
          alert("Message sent successfully!")
        },
        (error) => {
          console.log("Error:", error.text)
          alert("Failed to send message. Try again.")
        },
      )
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const slideInLeft = {
    hidden: {
      opacity: 0,
      x: -100,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      },
    },
  }

  const slideInRight = {
    hidden: {
      opacity: 0,
      x: 100,
      rotateY: 15,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.5,
      },
    },
  }

  const formFieldVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  const bounceVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.68, -0.55, 0.265, 1.55],
        delay: 0.2,
      },
    },
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        className="relative w-full h-screen bg-cover bg-center flex items-end pb-22 justify-start pl-15 overflow-hidden"
        style={{
          backgroundImage: "url('/Images/contact.webp ')",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        <motion.div
          className="relative text-start text-white px-4 z-10"
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <motion.h1
            className="text-6xl font-bold"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 20px rgba(255,255,255,0.8)",
            }}
          >
            {"LET'S TALK".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-4 font-light text-lg max-w-xl mx-auto"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            We're here to help and answer any questions you might have.
            <br />
            Feel free to reach out — we'd love to hear from you!
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="bg-white min-h-screen flex items-center justify-center py-10 px-4">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
          {/* Left Side - Form */}
          <motion.div
            ref={formRef}
            className="bg-gray-100 p-8 rounded-lg shadow-lg"
            variants={slideInLeft}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
          >
            <motion.h2
              className="text-2xl font-bold mb-2"
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
              transition={{ duration: 1, delay: 0.5 }}
            />

            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div className="flex flex-col" variants={formFieldVariants} custom={0}>
                  <label htmlFor="user_name" className="mb-1 font-bold text-gray-700">
                    Name
                  </label>
                  <motion.input
                    id="user_name"
                    type="text"
                    name="user_name"
                    placeholder="Enter your name"
                    required
                    className="w-full border bg-white border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)",
                    }}
                  />
                </motion.div>

                <motion.div className="flex flex-col" variants={formFieldVariants} custom={1}>
                  <label htmlFor="user_phone" className="mb-1 font-bold text-gray-700">
                    Phone Number
                  </label>
                  <motion.input
                    id="user_phone"
                    type="tel"
                    name="user_phone"
                    placeholder="Enter your phone number"
                    required
                    className="w-full border bg-white border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)",
                    }}
                  />
                </motion.div>
              </div>

              <motion.div className="flex flex-col" variants={formFieldVariants} custom={2}>
                <label htmlFor="user_email" className="mb-1 font-bold text-gray-700">
                  Email
                </label>
                <motion.input
                  id="user_email"
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                  className="w-full border bg-white border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)",
                  }}
                />
              </motion.div>

              <motion.div className="flex flex-col" variants={formFieldVariants} custom={3}>
                <label htmlFor="message" className="mb-1 font-bold text-gray-700">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={4}
                  className="w-full border bg-white border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)",
                  }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-60 bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 transition-all"
                variants={formFieldVariants}
                custom={4}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(239, 68, 68, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                SEND MESSAGE
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Right Side - Contact Info */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              ref={contactInfoRef}
              className="bg-gray-100 p-8 rounded-lg shadow-lg"
              variants={slideInRight}
              initial="hidden"
              animate={contactInfoInView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <motion.h2
                className="text-2xl font-bold mb-2"
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
                transition={{ duration: 1, delay: 0.7 }}
              />

              <motion.ul
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                animate={contactInfoInView ? "visible" : "hidden"}
              >
                {[
                  { icon: "📞", text: "773-305-1420" },
                  { icon: "📍", text: "1425 N McLean Blvd, Elgin, IL" },
                  { icon: "📧", text: "office@skiptontrans.com" },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3"
                    variants={formFieldVariants}
                    custom={i}
                    whileHover={{
                      x: 10,
                      scale: 1.05,
                    }}
                  >
                    <motion.span
                      className="text-red-600 text-lg"
                      whileHover={{
                        scale: 1.3,
                        rotate: 360,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              ref={businessHoursRef}
              className="bg-gray-100 p-8 rounded-lg shadow-lg"
              variants={slideInRight}
              initial="hidden"
              animate={businessHoursInView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <motion.h2
                className="text-2xl font-bold mb-2"
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
                transition={{ duration: 1, delay: 0.9 }}
              />

              <motion.ul
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                animate={businessHoursInView ? "visible" : "hidden"}
              >
                {[
                  { day: "Monday - Friday:", hours: "9:00 am - 8:00 pm" },
                  { day: "Saturday:", hours: "9:00 am - 6:00 pm" },
                  { day: "Sunday:", hours: "9:00 am - 5:00 pm" },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex justify-between"
                    variants={formFieldVariants}
                    custom={i}
                    whileHover={{
                      x: 5,
                      backgroundColor: "rgba(239, 68, 68, 0.1)",
                      borderRadius: "4px",
                      padding: "4px 8px",
                    }}
                  >
                    <span>{item.day}</span>
                    <span>{item.hours}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact