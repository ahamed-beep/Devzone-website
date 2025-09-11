"use client"

export default function MobileHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        onError={() => console.log("[v0] Video failed to load")}
        onLoadStart={() => console.log("[v0] Video loading started")}
        onCanPlay={() => console.log("[v0] Video can play")}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        <source src="/Images/coding.mp4" type="video/mp4" />
      </video>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center backdrop-blur-xs">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-green-500/30 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
          <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
          Available for Work
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4 max-w-sm drop-shadow-lg">
          Transform your ideas into{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            digital success
          </span>{" "}
          with us!
        </h1>

        <p className="text-base text-gray-100 leading-relaxed max-w-xs mb-8 drop-shadow-md">
          We're your partner in product design, website creation, and branding for every stage of your business.
        </p>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <a href="##our-services" className="bg-white/90 text-black px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors backdrop-blur-sm" >

         
          <button >
            Services
          </button>
           </a>
           <a href="#ourprojects"className="bg-white/10 border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm">

          
          <button onmouse >
            Our work
          </button>
           </a>
        </div>

        {/* Floating decorative elements */}
    
      </div>
    </section>
  )
}
