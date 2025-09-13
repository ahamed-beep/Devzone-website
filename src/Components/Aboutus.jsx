import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Navbar from "./Navbar"
import FacesOfInnovation from "./FacesInovation"
import MiniAbout from "./MiniAboutus"
import Footer from "./Footer"

const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
    >
      {children}
    </motion.div>
  )
}

const AnimatedAbout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="block md:hidden">
          <MiniAbout/>
        </div>

        <div className="hidden md:block font-sans text-gray-800">
          {/* About Us Section */}
          <AnimatedSection>
            <section className="relative bg-gray-100 h-94 flex items-center justify-center">
              <div className="absolute inset-0">
                <img src="/Images/about.webp" alt="workspace" className="w-full h-full object-center object-cover" />
              </div>
              <motion.div
                className="relative text-center text-white bg-white/30 backdrop-blur-md px-10 py-14 rounded-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className=" flex justify-center gap-2" >

                <h2 className="text-5xl font-bold text-black">About </h2>
                <h2 className=" text-5xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent  bg-clip-text" >Us</h2>
                </div>
                <p className="mt-4 text-md max-w-xl text-black">
                We strive to bridge the gap between ideas and execution by combining creativity, technical expertise, and a customer-first approach. Our goal is simple: to be your trusted partner in turning visions into impactful digital realities.
                </p>
              </motion.div>
            </section>
          </AnimatedSection>

          {/* Mission Section */}
          <AnimatedSection delay={0.2}>
            <section className="container mx-auto px-10 py-12 grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent  bg-clip-text">Our Mission</h3>
                <p className="mt-8 font-semibold text-gray-600 leading-relaxed">
                At Devzone Software House, our mission is to empower businesses with innovative, reliable, and scalable digital solutions. We believe technology should not only solve problems but also create opportunities for growth. That’s why we are dedicated to building fast, secure, and user-friendly applications tailored to your unique needs.
                </p>
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <img
                  src="/Images/ourmission.webp"
                  alt="mission"
                  className="rounded-4xl shadow-md h-80 w-full object-center object-cover bg-center bg-cover"
                />
              </motion.div>
            </section>
          </AnimatedSection>

          {/* Faces of Innovation */}
          <AnimatedSection delay={0.3}>
            <FacesOfInnovation />
          </AnimatedSection>

          {/* Join Team Section */}
          <AnimatedSection delay={0.4}>
            <section className="container mx-auto px-6 mt-4 py-16 justify-between text-start flex">
              <motion.h3
                className="text-4xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Join <span className="bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent  bg-clip-text">Our Team</span> to <br />
                Growup Together
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="mt-4 font-semibold text-gray-600 max-w-2xl mx-auto">
                We’re on the lookout for passionate and creative minds who want to make an impact through technology. Here, you’ll find an environment that values innovation, teamwork, and personal growth. Together, we take on challenges, build solutions that matter, and grow stronger every day.
                </p>
                <motion.button
                  className="mt-4 font-bold rounded-lg hover:bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent  "
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See Open Positions
                </motion.button>
              </motion.div>
            </section>
          </AnimatedSection>

          {/* Clients Section */}
          <AnimatedSection delay={0.5}>
            <section className="py-12">
              <div className="container mx-auto px-6 text-center">
                <motion.h3
                  className="text-4xl flex justify-center gap-2 font-bold mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  All <h2 className="bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent  bg-clip-text">Clients</h2>  
                </motion.h3>
                
                <motion.p
                  className="text-gray-600 font-semibold mt-2 mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  We've collaborated with dozens of clients to deliver impactful digital solutions across different
                  industries.
                </motion.p>
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {["hpwec", "taf", "tvc", "tafv", "hqwe", "brand"].map((text, index) => (
                    <motion.img
                      key={text}
                      src={`https://dummyimage.com/120x60/ccc/000&text=${text}`}
                      alt="Client"
                      className="mx-auto"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 * index,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    />
                  ))}
                </motion.div>
              </div>
            </section>
          </AnimatedSection>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AnimatedAbout