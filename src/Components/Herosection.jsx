import React from "react"
import { motion } from "framer-motion"
import Heromobile from "./Mobile-hero"

const Hero = () => {
  return (
    <div>
      <div className="block md:hidden">
        <Heromobile />
      </div>

      <div className="hidden md:block">
        <section className="relative min-h-screen overflow-hidden bg-black">
          <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
            <source src="/Images/coding.mp4" type="video/mp4" />
          </video>

          <div className="relative z-10 container mx-auto px-4 pt-20">
            <div className="flex items-center min-h-[80vh]">
              {/* Left Content */}
              <motion.div
                className="space-y-8 max-w-3xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 bg-green-500/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Available for Work
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Transform your ideas into{" "}
                  <motion.span
                    className="text-cyan-400 drop-shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    digital success
                  </motion.span>{" "}
                  with us!
                </motion.h1>

                <motion.p
                  className=" text-xl text-white  leading-relaxed max-w-lg drop-shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  We're your partner in product design, website creation, and branding for every stage of your business.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <motion.button
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-black px-10 py-4 rounded-lg  font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Services
                  </motion.button>
                  <motion.button
                    className="bg-transparent backdrop-blur-md border-2 border-white/60 text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-white/10 hover:border-white/80 transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      borderColor: "#06b6d4",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Our work
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero