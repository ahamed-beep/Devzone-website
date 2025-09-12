import React, { useRef } from "react";
import Navbar from "./Navbar"
import { motion, useInView } from "framer-motion"
import MiniFaceInovation from "./MiniFaceInovation";

const MiniAbout = () => {

  const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
    >
      {children}
    </motion.div>
  )
}
    
  return (
   <div>
      <Navbar />

      <div className="font-sans text-gray-600">
        {/* About Us Section */}
        <AnimatedSection>
          <section className="relative bg-gray-100 h-full items-center justify-center">
            <div className="inset-0">
              <img src="/Images/about.jpeg" alt="workspace" className="w-full h-full object-center object-cover" />
            </div>
            <motion.div
              className="text-start text-white bg-white/80 px-5 pt-8 rounded-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className=" flex gap-2 ">

              <h2 className=" text-4xl font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent  bg-clip-text">
                About
              </h2>
              <h2 className="text-4xl font-semibold text-black"> Us</h2>
              </div>
              <p className="mt-4 text-md max-w-xl text-gray-600">
                We are ready to help bring your business to the digital world with experience Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Necessitatibus, sit assumenda placeat minima animi asperiores pariatur
                culpa officia maxime accusantium architecto fugiat velit a laborum fuga. Quo optio assumenda eius!
              </p>
            </motion.div>
          </section>
        </AnimatedSection>

        {/* Mission Section */}
        <AnimatedSection delay={0.2}>
          <div className="items-center justify-center flex mt-10">
            <motion.h3
              className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent  bg-clip-text"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Mission
            </motion.h3>
          </div>
          <section className="container mx-auto px-8 justify-center grid md:grid-cols-2 mt-5 items-center">
            <div></div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src="https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_1280.jpg"
                alt="mission"
                className="rounded-4xl shadow-md"
              />
            </motion.div>
            <motion.p
              className="mt-5 text-md text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Lorem is a digital development company specializing in custom software, mobile apps, and web solutions. We
              work closely with our clients to build innovative and user-friendly products that drive growth and
              efficiency. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempora, enim corporis
              reiciendis eum porro minima pariatur error excepturi dolores accusantium accusamus cupiditate molestias
              voluptatum vero ea labore aspernatur possimus?
            </motion.p>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <MiniFaceInovation/>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <section className="container px-8 pt-16 pb-1 text-start">
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
            <motion.p
              className="mt-4 text-md text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Be part of an innovative and forward-thinking team. We are committed to helping you grow your career while
              making an impact in the digital industry. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              quod? Magnam soluta nobis nesciunt necessitatibus, sint, harum obcaecati numquam error cupiditate
              consequatur dolores earum ad ullam ratione maiores architecto itaque.
            </motion.p>
            <div className="flex">
              <motion.button
                className="mt-4 font-medium rounded-lg hover:bg-orange-600 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Open Positions
              </motion.button>
            </div>
          </section>
        </AnimatedSection>

        {/* Clients Section */}
        <AnimatedSection delay={0.5}>
          <section className="pt-8 pb-12">
            <div className="container px-8 text-start">
              <motion.h3
                className="text-4xl font-bold mb-4 flex gap-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                All <p className="bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent  bg-clip-text" >  Clients</p> 
              </motion.h3>
              <motion.p
                className="text-gray-600 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                We've collaborated with dozens of clients to deliver impactful digital solutions across different
                industries. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim architecto officiis incidunt
                reiciendis corporis, ullam laborum repellat provident corrupti facere molestias perferendis ea voluptate
                ipsa illo ducimus quia dolor! Suscipit?
              </motion.p>

              {/* Horizontal Scroll Section */}
              <div className="overflow-x-auto">
                <motion.div
                  className="flex mb-6 gap-8 items-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {["hpwec", "taf", "tafv", "hqwe", "extra1", "extra2", "extra3", "extra4"].map((text, index) => (
                    <motion.img
                      key={text}
                      src={`https://dummyimage.com/120x60/ccc/000&text=${text}`}
                      alt="Client"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.05 * index,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default MiniAbout;
