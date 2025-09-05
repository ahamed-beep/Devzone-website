"use client"

import Heromobile from "./Mobile-hero"

export default function Hero() {
  return (
    <div>
<div className=" block md:hidden" >
   <Heromobile/> 
</div>
      <div className=" hidden md:block" >
       
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Available for Work
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Transform your ideas into{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                digital success
              </span>{" "}
              with us!
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg">
              We're your partner in product design, website creation, and branding for every stage of your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#our-services" >

            
              <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Services
              </button>
                </a>
                <a href="#ourprojects" >

                
              <button className="bg-transparent border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Our work
              </button>
              </a>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Video Container */}
              <div className="absolute inset-0  rounded-full  overflow-hidden">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src="/Images/coding.mp4" type="video/mp4" />
                  {/* Fallback gradient if video doesn't load */}
               
                </video>
              </div>

            
            
            </div>

            {/* Floating elements */}
            <div className="absolute top-10 right-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-10 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
     </div>  
    </div>
  )
}
