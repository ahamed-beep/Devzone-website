import { useState } from "react"
import { ChevronUp, MessageCircle, Instagram, Linkedin, Facebook } from "lucide-react"

const SocialMediaToggle = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSocials = () => {
    setIsOpen(!isOpen)
  }

  const socialLinks = [
  {
  name: "WhatsApp",
  icon: MessageCircle,
  url: "https://wa.me/923290303391", // WhatsApp URL me + aur space remove karna hai
  color: "bg-green-500 hover:bg-green-600",
},
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/devzone.official?igsh=bDgwbGtjbGNtdTk=",
      color: "bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "linkedin.com/company/devzone-software",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=61579881629526",
      color: "bg-blue-500 hover:bg-blue-600",
    },
  ]

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-center">
      {/* Social Media Icons - emerge from toggle button */}
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon
        return (
          <div
            key={social.name}
            className={`mb-1 md:mb-1.5 transition-all duration-500 ease-out ${
              isOpen
                ? `opacity-100 translate-y-0 pointer-events-auto scale-100`
                : "opacity-0 translate-y-8 pointer-events-none scale-0"
            }`}
            style={{
              transform: isOpen
                ? `translateY(-${(socialLinks.length - index) * 25}px) scale(1)`
                : "translateY(0px) scale(0)",
              transitionDelay: isOpen ? `${index * 100}ms` : `${(socialLinks.length - index - 1) * 50}ms`,
            }}
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:-translate-y-1 ${social.color} backdrop-blur-sm border border-white/20`}
              title={social.name}
            >
              <IconComponent size={18} className="md:w-5 md:h-5 drop-shadow-sm" />
            </a>
          </div>
        )
      })}

      {/* Toggle Button - positioned at bottom */}
      <button
        onClick={toggleSocials}
        className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-sm border-2 border-white/20 ${
          isOpen
            ? "bg-gradient-to-br  from-black to-gray-800 hover:from-gray-900 hover:to-gray-700"
            : "bg-gradient-to-br from-black to-gray-800 hover:from-gray-900 hover:to-gray-700"
        }`}
        aria-label={isOpen ? "Close social media menu" : "Open social media menu"}
      >
        <ChevronUp
          size={20}
          className={`md:w-6 md:h-6 text-white transition-all duration-500 ${isOpen ? "rotate-0" : "rotate-180"}`}
        />
      </button>
    </div>
  )
}

export default SocialMediaToggle
