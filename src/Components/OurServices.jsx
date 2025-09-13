import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

const AccordionItem = ({ title, description, isOpen, onToggle, delay = 0 }) => {
  const contentRef = useRef(null)
  const itemRef = useRef(null)
  const isInView = useInView(itemRef, { 
    once: true, 
    margin: "-50px",
    amount: 0.3
  })

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      className="border-b border-gray-700/50 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left py-4 hover:bg-gray-800/20 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-white font-medium text-base sm:text-lg pr-4">{title}</span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight || 1000}px` : "0px",
        }}
      >
        <div className="pb-4 pr-4 sm:pr-8">
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

const ServiceSection = ({
  title,
  description,
  accordionItems,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  sectionIndex = 0,
}) => {
  const [openAccordions, setOpenAccordions] = useState({})
  const contentRef = useRef(null)
  const imageRef = useRef(null)
  const isContentInView = useInView(contentRef, { 
    once: true, 
    margin: "-50px",
    amount: 0.2
  })
  const isImageInView = useInView(imageRef, { 
    once: true, 
    margin: "-50px",
    amount: 0.2
  })

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: imagePosition === "right" ? 50 : -50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const descriptionVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start overflow-hidden">
      {/* Content Section */}
      <motion.div
        ref={contentRef}
        initial="hidden"
        animate={isContentInView ? "visible" : "hidden"}
        variants={contentVariants}
        className={`w-full ${imagePosition === "right" ? "lg:order-1" : "lg:order-2"}`}
      >
        <motion.h2 
          variants={titleVariants} 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
        >
          {title}
        </motion.h2>
        <motion.p 
          variants={descriptionVariants} 
          className="text-gray-300 mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base"
        >
          {description}
        </motion.p>

        <div className="space-y-0">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={item.key}
              title={item.title}
              description={item.description}
              isOpen={openAccordions[item.key]}
              onToggle={() => toggleAccordion(item.key)}
              delay={0.1 + index * 0.05}
            />
          ))}
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        ref={imageRef}
        initial="hidden"
        animate={isImageInView ? "visible" : "hidden"}
        variants={imageVariants}
        className={`w-full flex justify-center items-center ${
          imagePosition === "right" ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="p-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg w-full max-w-md lg:max-w-lg">
          <img
            src={imageSrc || "https://via.placeholder.com/400x300"}
            alt={imageAlt}
            className="rounded-lg object-cover w-full h-64 sm:h-80 lg:h-96"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default function AnimatedServicesSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { 
    once: true, 
    margin: "-50px",
    amount: 0.3
  })

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  }

  const services = [
    {
      title: "UI/UX Design",
      description: "Seamless, user-centric design that enhances engagement and delivers an intuitive experience.",
      imageSrc: "/Images/uidesigning.webp",
      imageAlt: "UI/UX Design workspace",
      imagePosition: "right",
      accordionItems: [
        {
          key: "wireframing",
          title: "Wireframing & Prototyping",
          description:
            "Interactive prototypes and detailed wireframes to visualize and test design concepts before development, ensuring optimal user flow and functionality.",
        },
        {
          key: "ui-design",
          title: "User Interface (UI) Design",
          description:
            "User Interface (UI) Design focuses on creating visually appealing, intuitive, and user-friendly digital experiences. It involves designing layouts, typography, color schemes, and interactive elements to ensure seamless navigation.",
        },
        {
          key: "ux-research",
          title: "User Experience (UX) Research",
          description:
            "Comprehensive user research and testing to understand user behavior, needs, and pain points, ensuring designs are data-driven and user-centered for optimal engagement.",
        },
        {
          key: "web-mobile-design",
          title: "Web & Mobile App Design",
          description:
            "Responsive web and mobile application designs that provide consistent user experiences across all devices and platforms, focusing on usability and modern design principles.",
        },
      ],
    },
    {
      title: "Social Media Marketing",
      description: "Transform your brand into a powerful identity with strategic branding solutions.",
      imageSrc: "/Images/socialmedia.webp",
      imagePosition: "left",
      accordionItems: [
        {
          key: "logo-identity",
          title: "Logo & Visual Identity",
          description:
            "Creating memorable brand identities with logos, color schemes, and visual guidelines that resonate with your target audience and strengthen brand recognition.",
        },
        {
          key: "brand-strategy",
          title: "Brand Strategy & Positioning",
          description:
            "Brand Strategy & Positioning define how a brand stands out in the market by establishing its unique identity, values, and messaging. It ensures consistency across all touchpoints.",
        },
        {
          key: "typography",
          title: "Typography & Color Guidelines",
          description:
            "Comprehensive typography and color systems that ensure brand consistency across all digital and print materials.",
        },
        {
          key: "collateral",
          title: "Brand Collateral Design",
          description:
            "Complete brand collateral including business cards, letterheads, brochures, and digital assets that maintain brand consistency.",
        },
      ],
    },
    {
      title: "App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences and robust functionality.",
      imageSrc: "/Images/app.webp",
      imageAlt: "App Development",
      imagePosition: "right",
      accordionItems: [
        {
          key: "native-mobile",
          title: "iOS & Android Development",
          description:
            "Native mobile app development for iOS and Android platforms, ensuring optimal performance and platform-specific user experience with access to device features.",
        },
        {
          key: "cross-platform",
          title: "Cross-Platform Development",
          description:
            "Efficient cross-platform mobile app development using React Native and Flutter, allowing single codebase deployment across multiple platforms while maintaining native performance.",
        },
        {
          key: "app-store",
          title: "App Store Optimization",
          description:
            "Complete app store optimization including metadata optimization, keyword research, and submission process management for both Apple App Store and Google Play Store.",
        },
        {
          key: "app-maintenance",
          title: "App Maintenance & Updates",
          description:
            "Ongoing app maintenance, bug fixes, feature updates, and performance optimization to ensure your app stays current with platform updates and user needs.",
        },
      ],
    },
    {
      title: "Website Design & Development",
      description: "High-performance, responsive websites that combine aesthetics with functionality.",
      imageSrc: "/Images/web.webp",
      imageAlt: "Web development",
      imagePosition: "left",
      accordionItems: [
        {
          key: "custom-web",
          title: "Custom Website Design",
          description:
            "Responsive, high-performance websites tailored to your business goals and brand identity with modern design principles.",
        },
        {
          key: "fullstack",
          title: "Frontend & Backend Development",
          description:
            "Frontend & Backend Development work together to create seamless, high-performing digital experiences. While frontend focuses on user interface and interactivity, backend ensures robust functionality.",
        },
        {
          key: "ecommerce",
          title: "E-commerce Development",
          description:
            "Secure, scalable online stores with seamless payment integration and comprehensive product management systems.",
        },
        {
          key: "cms",
          title: "CMS Integration WordPress, & Webflow",
          description:
            "Content management system integration with WordPress and Webflow for easy content updates and maintenance.",
        },
      ],
    },
  ]

  return (
    <div id="our-services" className="bg-gray-900 min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4"
          >
            We craft world-class digital experiences that elevate your brand and drive results. From strategy to
            execution, we bring your vision to life with creativity and precision.
          </motion.p>
        </motion.div>

        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {services.map((service, index) => (
            <ServiceSection
              key={service.title}
              title={service.title}
              description={service.description}
              accordionItems={service.accordionItems}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              imagePosition={service.imagePosition}
              sectionIndex={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}