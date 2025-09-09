import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import MiniAbout from "./MiniAboutus";
import FacesOfInnovation from "./FacesInovation";

const About = () => {
  return (
    <div>
<Navbar/>
    <div>
      <div className=" block md:hidden" >
        <MiniAbout/>
      </div>
    
    <div className=" hidden md:block font-sans text-gray-800">
      {/* About Us Section */}
      <section className="relative bg-gray-100 h-94 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/Images/about.jpeg"
            alt="workspace"
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="relative text-center text-white bg-white/30 backdrop-blur-xl px-10 py-14 rounded-xl">
 <h2 className="text-5xl  font-bold text-black">About Us</h2>
 <p className="mt-4 text-md max-w-xl text-black">
   We are ready to help bring your business to the digital world with
   experience Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam molestias provident nisi 
 </p>
</div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-10 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-4xl font-bold text-orange-500">Our Mission</h3>
          <p className="mt-8 font-semibold text-gray-600 leading-relaxed">
            Lorem is a digital development company specializing in custom
            software, mobile apps, and web solutions. We work closely with our
            clients to build innovative and user-friendly products that drive
            growth and efficiency.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_1280.jpg"
            alt="mission"
            className=" rounded-4xl shadow-md"
          />
        </div>
      </section>

      {/* Faces of Innovation */}
     <FacesOfInnovation/>

      {/* Join Team Section */}
      <section className="container mx-auto px-6 mt-4 py-16 justify-between text-start flex">
        <h3 className="text-4xl font-bold">
          Join <span className="text-orange-500">Our Team</span> to <br />
          Growup Together
        </h3>
        <div>
   <p className="mt-4 font-semibold text-gray-600 max-w-2xl mx-auto">
          Be part of an innovative and forward-thinking team. We are committed
          to helping you grow your career while making an impact in the digital
          industry. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, tempora, unde inventore commodi doloribus perferendis facilis illum odit vero placeat sapiente! Accusamus officiis provident quaerat odio pariatur officia placeat quibusdam.
        </p>
       <button className=" mt-4  font-bold rounded-lg hover:bg-orange-600 transition">
          See Open Positions
   

        </button>
        </div>
     
       
      </section>

      {/* Clients Section */}
      <section className=" py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">All Clients</h3>
          <p className="text-gray-600 font-semibold mt-2 mb-10">
            We’ve collaborated with dozens of clients to deliver impactful
            digital solutions across different industries.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            <img
              src="https://dummyimage.com/120x60/ccc/000&text=hpwec"
              alt="Client"
              className="mx-auto"
            />
            <img
              src="https://dummyimage.com/120x60/ccc/000&text=taf"
              alt="Client"
              className="mx-auto"
            />
            <img
              src="https://dummyimage.com/120x60/ccc/000&text=tvc"
              alt="Client"
              className="mx-auto"
            />
            <img
              src="https://dummyimage.com/120x60/ccc/000&text=tafv"
              alt="Client"
              className="mx-auto"
            />
            <img
              src="https://dummyimage.com/120x60/ccc/000&text=hqwe"
              alt="Client"
              className="mx-auto"
            />
            <img
              src="https://dummyimage.com/120x60/ccc/000&text=brand"
              alt="Client"
              className="mx-auto"
            />
          </div>
        </div>
      </section>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default About;
