import React from 'react'
import Navbar from './Navbar'
import Testimonials from './Testimonials'
import Hero from './Herosection'
import ServicesSection from './OurServices'
import { ProjectsSection } from './Projects'
import { Footer } from './Footer'

const Section = () => {
  return (
    <div>
        <Navbar/>
            
 <Hero/>
            
             <ServicesSection/>
             <ProjectsSection/>
         
        <div className='mt-10' >

      <Testimonials/>
        </div>
        <Footer/>

      
    </div>
  )
}

export default Section