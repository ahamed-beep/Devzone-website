"use client"

import { useState, useRef } from "react"

const AccordionItem = ({ title, description, isOpen, onToggle }) => {
  const contentRef = useRef(null)

  return (
    <div className="border-b border-gray-700/50 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left py-4 hover:bg-gray-800/20 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-white font-medium text-lg">{title}</span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        ref={contentRef}
        className="transition-all duration-500 ease-in-out overflow-hidden"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="pb-4 pr-8">
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  const [openAccordions, setOpenAccordions] = useState({})

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div   id="our-services" className=   "bg-gray-900 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            We craft world-class digital experiences that elevate your brand and drive results. From strategy to
            execution, we bring your vision to life with creativity and precision.
          </p>
        </div>

        <div className="space-y-32">
          {/* Sections */}
          {/* --- UI/UX Design --- */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-1">
              <h2 className="text-4xl font-bold text-white mb-4">UI/UX Design</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Seamless, user-centric design that enhances engagement and delivers an intuitive experience.
              </p>

              <div className="space-y-0 mb-8 lg:mb-0">
                <AccordionItem
                  title="Wireframing & Prototyping"
                  description="Interactive prototypes and detailed wireframes to visualize and test design concepts before development, ensuring optimal user flow and functionality."
                  isOpen={openAccordions["wireframing"]}
                  onToggle={() => toggleAccordion("wireframing")}
                />
                <AccordionItem
                  title="User Interface (UI) Design"
                  description="User Interface (UI) Design focuses on creating visually appealing, intuitive, and user-friendly digital experiences. It involves designing layouts, typography, color schemes, and interactive elements to ensure seamless navigation. A well-crafted UI enhances engagement, improves usability, and strengthens brand identity."
                  isOpen={openAccordions["ui-design"]}
                  onToggle={() => toggleAccordion("ui-design")}
                />
                <AccordionItem
                  title="User Experience (UX) Research"
                  description="Comprehensive user research and testing to understand user behavior, needs, and pain points, ensuring designs are data-driven and user-centered for optimal engagement and conversion."
                  isOpen={openAccordions["ux-research"]}
                  onToggle={() => toggleAccordion("ux-research")}
                />
                <AccordionItem
                  title="Web & Mobile App Design"
                  description="Responsive web and mobile application designs that provide consistent user experiences across all devices and platforms, focusing on usability and modern design principles."
                  isOpen={openAccordions["web-mobile-design"]}
                  onToggle={() => toggleAccordion("web-mobile-design")}
                />
              </div>
            </div>

            <div className="flex justify-center lg:order-2">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yR5SQH9YQ2MU7gOnIwKFcjjNwpfydH.png"
                  alt="UI/UX Design workspace"
                  className="rounded-lg object-cover h-110 w-full max-w-lg"
                />
              </div>
            </div>
          </div>

          {/* --- Branding & Identity --- */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold text-white mb-4">Branding & Identity</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Transform your brand into a powerful identity with strategic branding solutions.
              </p>

              <div className="space-y-0 mb-8 lg:mb-0">
                <AccordionItem
                  title="Logo & Visual Identity"
                  description="Creating memorable brand identities with logos, color schemes, and visual guidelines that resonate with your target audience and strengthen brand recognition."
                  isOpen={openAccordions["logo-identity"]}
                  onToggle={() => toggleAccordion("logo-identity")}
                />
                <AccordionItem
                  title="Brand Strategy & Positioning"
                  description="Brand Strategy & Positioning define how a brand stands out in the market by establishing its unique identity, values, and messaging. It ensures consistency across all touchpoints to create a lasting impression and build customer trust."
                  isOpen={openAccordions["brand-strategy"]}
                  onToggle={() => toggleAccordion("brand-strategy")}
                />
                <AccordionItem
                  title="Typography & Color Guidelines"
                  description="Comprehensive typography and color systems that ensure brand consistency across all digital and print materials."
                  isOpen={openAccordions["typography"]}
                  onToggle={() => toggleAccordion("typography")}
                />
                <AccordionItem
                  title="Brand Collateral Design"
                  description="Complete brand collateral including business cards, letterheads, brochures, and digital assets that maintain brand consistency."
                  isOpen={openAccordions["collateral"]}
                  onToggle={() => toggleAccordion("collateral")}
                />
              </div>
            </div>

            <div className="flex justify-center lg:order-1">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/color-palette-design-tools-dRDKdSoKEoPgDx8bBHnOEGccgjyDu1.png"
                  alt="Branding materials"
                  className="rounded-lg object-cover h-110 w-full max-w-lg"
                />
              </div>
            </div>
          </div>

          {/* --- App Development --- */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-1">
              <h2 className="text-4xl font-bold text-white mb-4">App Development</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Native and cross-platform mobile applications that deliver exceptional user experiences and robust
                functionality.
              </p>

              <div className="space-y-0 mb-8 lg:mb-0">
                <AccordionItem
                  title="iOS & Android Development"
                  description="Native mobile app development for iOS and Android platforms, ensuring optimal performance and platform-specific user experience with access to device features."
                  isOpen={openAccordions["native-mobile"]}
                  onToggle={() => toggleAccordion("native-mobile")}
                />
                <AccordionItem
                  title="Cross-Platform Development"
                  description="Efficient cross-platform mobile app development using React Native and Flutter, allowing single codebase deployment across multiple platforms while maintaining native performance."
                  isOpen={openAccordions["cross-platform"]}
                  onToggle={() => toggleAccordion("cross-platform")}
                />
                <AccordionItem
                  title="App Store Optimization"
                  description="Complete app store optimization including metadata optimization, keyword research, and submission process management for both Apple App Store and Google Play Store."
                  isOpen={openAccordions["app-store"]}
                  onToggle={() => toggleAccordion("app-store")}
                />
                <AccordionItem
                  title="App Maintenance & Updates"
                  description="Ongoing app maintenance, bug fixes, feature updates, and performance optimization to ensure your app stays current with platform updates and user needs."
                  isOpen={openAccordions["app-maintenance"]}
                  onToggle={() => toggleAccordion("app-maintenance")}
                />
              </div>
            </div>

            <div className="flex justify-center lg:order-2">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/mobile-app-development-coding-screen-with-smartpho-ytCU1lzFOi7ZRFQU5QwsptOSGbhjoD.png"
                  alt="App Development"
                  className="rounded-lg object-cover h-110 w-full max-w-lg"
                />
              </div>
            </div>
          </div>

          {/* --- Web Development --- */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold text-white mb-4">Website Design & Development</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                High-performance, responsive websites that combine aesthetics with functionality.
              </p>

              <div className="space-y-0 mb-8 lg:mb-0">
                <AccordionItem
                  title="Custom Website Design"
                  description="Responsive, high-performance websites tailored to your business goals and brand identity with modern design principles."
                  isOpen={openAccordions["custom-web"]}
                  onToggle={() => toggleAccordion("custom-web")}
                />
                <AccordionItem
                  title="Frontend & Backend Development"
                  description="Frontend & Backend Development work together to create seamless, high-performing digital experiences. While frontend focuses on user interface and interactivity, backend ensures robust functionality, data management, and security."
                  isOpen={openAccordions["fullstack"]}
                  onToggle={() => toggleAccordion("fullstack")}
                />
                <AccordionItem
                  title="E-commerce Development"
                  description="Secure, scalable online stores with seamless payment integration and comprehensive product management systems."
                  isOpen={openAccordions["ecommerce"]}
                  onToggle={() => toggleAccordion("ecommerce")}
                />
                <AccordionItem
                  title="CMS Integration WordPress, & Webflow"
                  description="Content management system integration with WordPress and Webflow for easy content updates and maintenance."
                  isOpen={openAccordions["cms"]}
                  onToggle={() => toggleAccordion("cms")}
                />
              </div>
            </div>

            <div className="flex justify-center lg:order-1">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/web-development-coding-screen-PDmanjiDvW4LpDfNQUhlQfi2QiuAKw.png"
                  alt="Web development"
                  className="rounded-lg object-cover h-110 w-full max-w-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
