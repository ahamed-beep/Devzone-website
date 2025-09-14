"use client";
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

// --- DATA ---
const projectData = [
 {
    id: "1",
    title: "Khat-Khazanah Heritage: Preserving Stories Through Design",
    subtitle: "UI/UX Designing",
    date: "2024",
    imageUrl: "/Images/khat-cover.webp",
    isFeatured: true,
    client: "Alex",
    service: "Figma UI/UX Design",
    agency: "Heritage Creatives",
    industry: "Cultural & Archival",
    approach: "We crafted an immersive digital experience blending modern UI/UX practices with heritage-inspired aesthetics. Using Figma, the design process balanced usability with storytelling, ensuring users connect emotionally with the archival content.",
    process: {
        strategy: ["Design Workshops", "Moodboards", "User Journey Mapping"],
        uxResearch: ["Audience Analysis", "Wireframing", "Prototype Testing"],
        design: ["UI Kit", "Interactive Prototypes", "Responsive Layouts"],
    },
    sideProjectImages: [
        "/Images/khat-1.webp",
        "/Images/khat-1.webp",
    ]
},

      {
        id: "2",
        title: " Redefining Corporate Branding for Aura-e-Zindagi",
        subtitle: "Web Design & Development",
        date: "2024",
        imageUrl: "/Images/auracover.webp",
        isFeatured: false,
        client: "Elysium Perfumes",
        service: "Web Design & Development",
        agency: "Alex Digital Studio",
        industry: "Luxury E-commerce",
        approach: "We believe a powerful website is a fusion of strategic design and robust technology. Our process is collaborative and iterative, ensuring the final product not only looks stunning but also performs flawlessly and delivers real business results. We crafted a modern, responsive e-commerce experience for a luxury perfume brand, from concept to deployment.",
        process: {
            strategy: ["UX Research & Planning", "User Flow Mapping", "Wireframing", "Prototyping"],
            uxResearch: ["Design & Development", "Frontend Development", "Backend Development", "Design System"],
            design: ["Testing & Launch", "Usability Testing", "Performance Optimization", "Deployment & Go-Live"],
        },
        sideProjectImages: [
            "/Images/aura1.webp",
            "/Images/aura2.webp",
        ]
    },
    {
        id: "3",
        title: "Varidate: Smart Validation & Authentication Platform",
        subtitle: "Mobile App Development",
        date: "2024",
        imageUrl: "/Images/varidatecover.webp",
        isFeatured: false,
        client: "Mubbasir Tech Solutions",
        service: "Mobile App Development",
        agency: "Alex Mobile Innovations",
        industry: "Technology & Security",
        approach: "We developed a comprehensive mobile application that combines cutting-edge validation technologies with seamless user experience. Our development approach focused on building a secure, scalable, and intuitive app that handles complex authentication processes while maintaining simplicity for end users. The development process emphasized performance optimization, cross-platform compatibility, and robust security protocols.",
        process: {
            strategy: ["Technical Architecture Planning", "Security Framework Design", "Platform Strategy"],
            uxResearch: ["Native Development Implementation", "API Integration", "Database Optimization"],
            design: ["Quality Assurance Testing", "Performance Testing", "App Store Deployment"],
        },
        sideProjectImages: [
            "/Images/vairdate1.webp",
            "/Images/varidate2.webp",
        ]
    },
];

// --- HOOKS ---
const useScrollAnimation = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    const getAnimationClass = (delay = '') => {
        return `transition-all ease-out duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${delay}`;
    };

    return [ref, getAnimationClass];
};

const InfoDetail = ({ label, value, className = "" }) => (
    <div className={className}>
        <p className="text-sm text-gray-400 font-mono uppercase tracking-wider">{label}</p>
        <p className="text-lg text-white mt-1">{value}</p>
    </div>
);

// --- COMPONENT ---
export const ProjectDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const project = projectData.find(p => p.id === id);
        useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    
    const [headerRef, getHeaderAnimation] = useScrollAnimation();
    const [imageRef, getImageAnimation] = useScrollAnimation();
    const [contentRef, getContentAnimation] = useScrollAnimation();
    const [processRef, getProcessAnimation] = useScrollAnimation();
    const [sideProjectsRef, getSideProjectsAnimation] = useScrollAnimation();

    // Handle case where project is not found
    if (!project) {
        return (
            <div  className="w-full max-w-7xl mx-auto px-4 py-16 sm:py-24">
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8 group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Projects
                </button>
                <div className="text-center">
                    <h1 className="text-2xl text-white">Project not found</h1>
                </div>
            </div>
        );
    }

    return (
        <div>

        <Navbar/>
        <div className="w-full   px-4 py-16 sm:py-24 bg-black text-white ">
            {/* Back Button */}
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8 group">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Projects
            </button>
            
            {/* Header Section */}
            <header ref={headerRef} className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start ${getHeaderAnimation()}`}>
                <h1 className="lg:w-1/2 text-4xl text-[#FFFFFD] md:text-5xl font-bold leading-tight">{project.title}</h1>
                <div className="lg:w-1/2 grid grid-cols-2 gap-8 w-full">
                    {/* Column 1 */}
                    <div>
                        <InfoDetail label="Year" value={project.date} className="mb-6" />
                        <InfoDetail label="Client" value={project.client} className="mb-6"/>
                        <InfoDetail label="Industry" value={project.industry}/>
                    </div>
                    {/* Column 2 */}
                    <div>
                        <InfoDetail label="Service" value={project.service} className="mb-6"/>
                        <InfoDetail label="Agency" value={project.agency} className="mb-6"/>
                        
                    </div>
                </div>
            </header>

            {/* Main Image */}
            <div ref={imageRef} className={`my-16 sm:my-24 object-center object-cover bg-center bg-cover ${getImageAnimation('delay-100')}`}>
                <img src={project.imageUrl} alt={project.title} className="w-full object-center object-cover bg-center bg-cover h-auto rounded-lg shadow-2xl shadow-black/30" />
            </div>

            {/* Challenge & Approach */}
            <section ref={contentRef} className={`grid md:grid-cols-2 gap-12 justify-center items-center lg:gap-16 ${getContentAnimation()}`}>
            
                <div>
                    <h2 className="text-3xl text-[#FFFFFD] font-bold mb-4">Our Approach</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">{project.approach}</p>
                </div>
            </section>
            
            {/* Process Section */}
            <section ref={processRef} className={`my-16 sm:my-24 text-center ${getProcessAnimation()}`}>
                <h2 className="text-3xl text-[#FFFFFD] font-bold mb-4">We cover a full design process</h2>
                <div className="mt-12 grid sm:grid-cols-3 gap-10">
                    <div>
                        <h3 className="text-xl text-[#FFFFFD] font-semibold mb-3">Strategy</h3>
                        <ul className="text-gray-400 space-y-2">
                           {project.process.strategy.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-xl text-[#FFFFFD] font-semibold mb-3">UX Research</h3>
                        <ul className="text-gray-400 space-y-2">
                           {project.process.uxResearch.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-xl text-[#FFFFFD] font-semibold mb-3">Design</h3>
                        <ul className="text-gray-400 space-y-2">
                           {project.process.design.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </section>
            
            {/* Side Projects */}
            <section ref={sideProjectsRef} className={getSideProjectsAnimation()}>
                <h2 className="text-3xl font-bold text-[#FFFFFD] mb-8 text-center">More Imagery</h2>
                 <div className="grid md:grid-cols-2 gap-8">
                    {project.sideProjectImages.map((img, index) => (
                        <div key={index} className="overflow-hidden object-center object-cover bg-center bg-cover rounded-lg group shadow-lg">
                            <img src={img} alt={`Side project ${index + 1}`} className="w-full h-full  object-center object-cover bg-center bg-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
        <Footer/>
        </div>
    );
};