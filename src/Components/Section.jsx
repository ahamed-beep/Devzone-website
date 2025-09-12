import React from 'react'
import Testimonials from './Testimonials'
import Hero from './Herosection'
import ServicesSection from './OurServices'
import { ProjectsSection } from './Projects'
import Footer from './Footer'
import Navbar from './Navbar'


const Section = () => {
  return (
    <div>
        <Navbar className='' />
            
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