import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import MiniFacesOfInnovation from "./MiniFaceInovation";

const MiniAbout = () => {
    
  return (
    <div>
<Navbar/>
    
    <div className="font-sans text-gray-600">
      {/* About Us Section */}
      <section className="relative bg-gray-100 h-full  items-center justify-center">
        <div className=" inset-0">
          <img
            src="/Images/about.jpeg"
            alt="workspace"
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className=" text-start text-white bg-white/80 px-5 pt-8 rounded-md">
          <h2 className="text-4xl font-semibold text-black">About Us</h2>
          <p className="mt-4 text-md max-w-xl text-gray-600">
            We are ready to help bring your business to the digital world with
            experience Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sit assumenda placeat minima animi asperiores pariatur culpa officia maxime accusantium architecto fugiat velit a laborum fuga. Quo optio assumenda eius!
          </p>
        </div>
      </section>

      {/* Mission Section */}
         <div className=" items-center justify-center flex mt-10 " >

           
          <h3 className="text-4xl font-bold text-orange-500">Our Mission</h3>
         </div>
      <section className="container mx-auto   grid md:grid-cols-2 mt-5 items-center">
        <div>
         
        </div>
        <div className="flex justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_1280.jpg"
            alt="mission"
            className="  rounded-4xl shadow-md"
          />
          
        </div>
          <p className="mt-5 text-md text-gray-600 leading-relaxed">
            Lorem is a digital development company specializing in custom
            software, mobile apps, and web solutions. We work closely with our
            clients to build innovative and user-friendly products that drive
            growth and efficiency. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempora, enim corporis reiciendis eum porro minima pariatur error excepturi dolores accusantium accusamus cupiditate molestias voluptatum vero ea labore aspernatur possimus?
          </p>
      </section>

    
      <MiniFacesOfInnovation/>

      
      <section className="container  px-8  pt-16 pb-1 text-start">
        <h3 className="text-4xl font-bold">
          Join <span className="text-orange-500">Our Team</span> to <br />
          Growup Together
        </h3>
        <p className="mt-4 text-md text-gray-600 max-w-2xl mx-auto">
          Be part of an innovative and forward-thinking team. We are committed
          to helping you grow your career while making an impact in the digital
          industry. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quod? Magnam soluta nobis nesciunt necessitatibus, sint, harum obcaecati numquam error cupiditate consequatur dolores earum ad ullam ratione maiores architecto itaque.
        </p>
        <div className=" flex" >

        
        <button className=" mt-4 font-medium rounded-lg hover:bg-orange-600 transition">
          See Open Positions
   

        </button>


        </div>
      </section>

      {/* Clients Section */}
      <section className=" pt-8 pb-12 ">
        <div className="container  px-8 text-start">
          <h3 className="text-4xl font-bold mb-4">All Clients</h3>
          <p className="text-gray-600 mb-10">
            We’ve collaborated with dozens of clients to deliver impactful
            digital solutions across different industries. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim architecto officiis incidunt reiciendis corporis, ullam laborum repellat provident corrupti facere molestias perferendis ea voluptate ipsa illo ducimus quia dolor! Suscipit?
          </p>
          <div className="flex gap-8 items-start">
            <img
              src="https://dummyimage.com/120x60/ccc/000&text=hpwec"
              alt="Client"
            />
            <img
              src="https://dummyimage.com/120x60/ccc/000&text=taf"
              alt="Client"
            />
           
          
           
        
          </div>
        <div className="flex gap-8 items-start mt-10" >
                <img
              src="https://dummyimage.com/120x60/ccc/000&text=tafv"
              alt="Client"
            />
            <img
              src="https://dummyimage.com/120x60/ccc/000&text=hqwe"
              alt="Client"
            />
          
         
          </div>
          <div className="flex gap-8 items-start mt-10" >
                <img
              src="https://dummyimage.com/120x60/ccc/000&text=tafv"
              alt="Client"
            />
            <img
              src="https://dummyimage.com/120x60/ccc/000&text=hqwe"
              alt="Client"
            />
          
         
          </div>
        </div>
      </section>
    </div>
   
    </div>
  );
};

export default MiniAbout;
