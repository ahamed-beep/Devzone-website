import { ChevronRight } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Shiekh Usman",
    role: "CEO",
    image: "Images/usman.webp",
  },
  {
    id: 2,
   name: "Hassan Raza",
    role: "co-Founder",
       image: "/Images/hassan.webp",

  },
 
  {
    id: 4,
    name: "Abdul Ahad",
    role: "Full Stack Developer",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/professional-man-with-beard-in-blue-shirt-FoVeOWcGYxeO4E1a8ivk37mCQpHlph.jpg",
  },
];

function TeamMemberCard({ member }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative mb-4 overflow-hidden  rounded-t-xl">
        <img
          src={member.image }
          alt={member.name}
          className="w-full h-100 object-center bg-center bg-cover   object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* Member Info */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-foreground text-lg mb-1">{member.name}</h3>
          <p className="text-muted-foreground text-sm">{member.role}</p>
        </div>
        {/* Navigation Arrow */}
        <div className="flex-shrink-0 w-12 h-12 rounded-full border border-teal-200 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
             <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-5 h-5 text-teal-600" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
        </div>
   

      </div>
    </div>
  );
}

export default function FacesOfInnovation() {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex items-start pl-17  mb-8">
        <div>
          <h2 className=" md:text-3xl font-bold text-foreground mb-2">
            The Faces of <span className="bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent  bg-clip-text">Innovation</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base text-shadow-gray-600  font-light mt-1 ">Behind Every Line of Code, There's a Visionary.</p>
        </div>
       
      </div>
      {/* Team Members Grid */}
      <div className="grid px-15 grid-cols-1 md:grid-cols-3 gap-10">
        {teamMembers.slice(0, 2).map((member) => (
          <div key={`mobile-${member.id}`} className="md:hidden">
            <TeamMemberCard member={member} />
          </div>
        ))}
        {/* Desktop: Show first 3 members */}
        {teamMembers.slice(0, 3).map((member) => (
          <div key={`desktop-${member.id}`} className="hidden md:block">
            <TeamMemberCard member={member} />
          </div>
        ))}
      </div>
    </section>
  );
}