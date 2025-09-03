"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

export function Footer() {
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

  return (
    <div className="relative">
      <section className="relative hidden md:block top-20  max-w-6xl mx-auto  z-20 bg-gradient-to-r from-[#28172C] via-[#010101] to-[#0F0F0F] text-white py-5 pl-18 overflow-hidden  rounded-3xl  mb-[-2rem]">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl lg:text-5xl font-semibold mb-4">
                Experience superior
                <br />
                skip tracing
              </h2>
              <p className="text-gray-300 text-lg mb-6">150+ data points per search.</p>
              <button className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Get started
              </button>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full border border-green-400/20 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full flex items-center justify-center relative">
                    {/* Dotted globe pattern */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-green-400/10 to-transparent rounded-full">
                        {/* Dotted pattern overlay */}
                        <div className="absolute inset-0 opacity-60">
                          {Array.from({ length: 200 }).map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 bg-white/40 rounded-full"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 bg-black text-white py-16 px-6 md:pt-50">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout - Hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className=" flex justify-between gap-100" >

            
            <div className="md:col-span-1 ml-10 ">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-4 h-4 bg-black rounded-sm"></div>
                  </div>
                  <span className="text-white font-bold text-xl">skipmatrix</span>
                </div>
              </div>

              <div className="space-y-2 text-gray-300 text-sm">
                <p>20619 Torrence Chapel Rd</p>
                <p>Suite 116 #1040</p>
                <p>Cornelius, NC 28031</p>
                <p>United States</p>
              </div>

              <div className="mt-6 space-y-2">
                <div>
                  <span className="text-gray-400 text-sm">Phone number</span>
                  <p className="text-white">1-800-201-1019</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Email</span>
                  <p className="text-white">support@skipmatrix.com</p>
                </div>
              </div>
            </div>

            <div className=" flex gap-40 whitespace-nowrap" >

           

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-medium mb-6">Quick links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white font-medium mb-6">Social</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/facebook" className="text-gray-300 hover:text-white transition-colors">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link to="/instagram" className="text-gray-300 hover:text-white transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to="/linkedin" className="text-gray-300 hover:text-white transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link to="/twitter" className="text-gray-300 hover:text-white transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link to="/youtube" className="text-gray-300 hover:text-white transition-colors">
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-medium mb-6">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                    Terms of service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">
                    Cookie policy
                  </Link>
                </li>
              </ul>
            </div>
             </div>
             </div>
          </div>

          {/* Mobile Layout - Accordion Style */}
          <div className="md:hidden space-y-4">
            {/* Company Info */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-4 h-4 bg-black rounded-sm"></div>
                  </div>
                  <span className="text-white font-bold text-xl">skipmatrix</span>
                </div>
              </div>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>20619 Torrence Chapel Rd</p>
                <p>Suite 116 #1040</p>
                <p>Cornelius, NC 28031</p>
                <p>United States</p>
              </div>
              <div className="mt-6 space-y-2">
                <div>
                  <span className="text-gray-400 text-sm">Phone number</span>
                  <p className="text-white">1-800-201-1019</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Email</span>
                  <p className="text-white">support@skipmatrix.com</p>
                </div>
              </div>
            </div>

            {/* Quick Links Accordion */}
            <div className="border-b border-gray-800 pb-4">
              <button
                onClick={() => toggleSection("quickLinks")}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-white font-medium text-lg">Quick Links</h3>
                {openSections.quickLinks ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              <AnimatePresence>
                {openSections.quickLinks && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-4 space-y-3 pl-4"
                  >
                    <li>
                      <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                        Resources
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                        Contact us
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Social Accordion */}
            <div className="border-b border-gray-800 pb-4">
              <button
                onClick={() => toggleSection("social")}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-white font-medium text-lg">Social</h3>
                {openSections.social ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              <AnimatePresence>
                {openSections.social && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-4 space-y-3 pl-4"
                  >
                    <li>
                      <Link to="/facebook" className="text-gray-300 hover:text-white transition-colors">
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link to="/instagram" className="text-gray-300 hover:text-white transition-colors">
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link to="/linkedin" className="text-gray-300 hover:text-white transition-colors">
                        LinkedIn
                      </Link>
                    </li>
                    <li>
                      <Link to="/twitter" className="text-gray-300 hover:text-white transition-colors">
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <Link to="/youtube" className="text-gray-300 hover:text-white transition-colors">
                        Youtube
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Legal Accordion */}
            <div className="border-b border-gray-800 pb-4">
              <button
                onClick={() => toggleSection("legal")}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-white font-medium text-lg">Legal</h3>
                {openSections.legal ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              <AnimatePresence>
                {openSections.legal && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-4 space-y-3 pl-4"
                  >
                    <li>
                      <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                        Terms of service
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                        Privacy policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">
                        Cookie policy
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Copyright */}
          <div className="   mt-12">
            <p className="text-gray-400 text-sm text-center">© 2024 Skipmatrix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
