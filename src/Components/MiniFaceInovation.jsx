import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useRef } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Jacob Wihardja",
    role: "Founder",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/professional-man-in-light-blue-shirt-smiling-wzygeMgpdee4M8SGMJ1wgMDvIwx3Ka.jpg",
  },
  {
    id: 2,
    name: "Khamir",
    role: "Web Developer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/professional-man-with-beard-in-blue-shirt-FoVeOWcGYxeO4E1a8ivk37mCQpHlph.jpg",
  },
  {
    id: 4,
    name: "Irman Maulana",
    role: "UI Designer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/professional-man-with-beard-smiling-ClR7xFyvPc764QXtHx9q6DFqBkMO8g.jpg",
  },
];

function TeamMemberCard({ member }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative mb-4 overflow-hidden  rounded-t-xl">
        <img
          src={member.image }
          alt={member.name}
          className="w-full h-full  object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Member Info */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-foreground text-lg mb-1">{member.name}</h3>
          <p className="text-muted-foreground text-sm">{member.role}</p>
        </div>

        {/* Navigation Arrow */}
        <div className="flex-shrink-0 w-10 h-10 rounded-full border border-orange-200 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
          <ChevronRight className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent  bg-clip-text" />
        </div>
      </div>
    </div>
  );
}

export default function MiniFaceInovation() {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextMember = () => {
    setCurrentMemberIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentMemberIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left - next member
      nextMember();
    }
    
    if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right - previous member
      prevMember();
    }
  };

  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex items-center px-9 mt-10 justify-between mb-5">
        <div>
          <h2 className="text-4xl  font-bold text-foreground mb-2">
            The Faces of <span className="bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent  bg-clip-text">Innovation</span>
          </h2>
          <p className="text-muted-foreground text-shadow-gray-600 text-sm md:text-base">Behind Every Line of Code, There's a Visionary.</p>
        </div>

      
      </div>

      <div 
        className="md:hidden relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex px-8 items-center gap-4">
          {/* Current Member Card */}
          <div className="flex-1">
            <TeamMemberCard member={teamMembers[currentMemberIndex]} />
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMemberIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentMemberIndex ? "bg-gradient-to-r from-cyan-500 to-teal-500 " : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Show first 3 members */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {teamMembers.slice(0, 3).map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}