"use client";
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './navbar';

// --- DATA ---
const projectData = [
    {
        id: "1",
        title: "Project Alpha: Redefining Corporate Branding",
        subtitle: "Corporate Branding",
        date: "2024",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
        isFeatured: true,
        client: "Innovate Corp",
        service: "Branding & Web Design",
        agency: "Creative Minds",
        industry: "Technology",
        challenge: "To redefine Innovate Corp's brand identity and create a compelling online presence that reflects their cutting-edge technology and forward-thinking culture.",
        approach: "We started with deep-dive workshops with stakeholders to distill the core brand values. Our approach was iterative, combining user research with creative exploration to build a flexible yet consistent brand system and a highly performant website.",
        process: {
            strategy: ["Brand Workshops", "Competitive Analysis", "Audience Persona"],
            uxResearch: ["User Interviews", "Surveys", "Usability Testing"],
            design: ["Logo & Identity", "Design System", "Responsive Web Design"],
        },
        sideProjectImages: [
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        ]
    },
    {
        id: "2",
        title: "Project Beta: A HIPAA-Compliant Health Platform",
        subtitle: "Web Application",
        date: "2024",
        imageUrl: "https://plus.unsplash.com/premium_photo-1661758351472-52ed02e99496?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isFeatured: false,
        client: "HealthTrackr",
        service: "Full-Stack Development",
        agency: "In-house",
        industry: "Healthcare",
        challenge: "Develop a secure and user-friendly platform for patients to track their medical records and appointments.",
        approach: "Our team built a robust web application using modern technologies, focusing on data security (HIPAA compliance) and an intuitive interface for users of all ages.",
        process: {
            strategy: ["Requirement Gathering", "Technical Specification", "Roadmapping"],
            uxResearch: ["Patient Journey Mapping", "Accessibility Audits", "Prototype Testing"],
            design: ["Data Visualization", "Mobile-First UI", "API Design"],
        },
        sideProjectImages: [
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1573167101669-476636b96cea?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]
    },
    {
        id: "3",
        title: "Project Gamma: Gamifying Sustainable Travel",
        subtitle: "Mobile App Design",
        date: "2024",
        imageUrl: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=2070&auto=format&fit=crop",
        isFeatured: false,
        client: "EcoJourney",
        service: "UI/UX for Mobile",
        agency: "Creative Minds",
        industry: "Travel & Sustainability",
        challenge: "Design an engaging mobile app that encourages sustainable travel choices by gamifying eco-friendly activities.",
        approach: "We designed a vibrant and motivating user interface with a strong focus on positive reinforcement, social sharing, and beautiful illustrations to make sustainability fun.",
        process: {
            strategy: ["Concept Validation", "Gamification Strategy", "Feature Prioritization"],
            uxResearch: ["Focus Groups", "A/B Testing", "Behavioral Analysis"],
            design: ["Illustration System", "Micro-interactions", "iOS & Android Guidelines"],
        },
        sideProjectImages: [
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop",
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
            <div ref={imageRef} className={`my-16 sm:my-24 ${getImageAnimation('delay-100')}`}>
                <img src={project.imageUrl} alt={project.title} className="w-full h-auto rounded-lg shadow-2xl shadow-black/30" />
            </div>

            {/* Challenge & Approach */}
            <section ref={contentRef} className={`grid md:grid-cols-2 gap-12 lg:gap-16 ${getContentAnimation()}`}>
                <div>
                    <h2 className="text-3xl text-[#FFFFFD] font-bold mb-4">The Challenge</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">{project.challenge}</p>
                </div>
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
                        <div key={index} className="overflow-hidden rounded-lg group shadow-lg">
                            <img src={img} alt={`Side project ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
        <Footer/>
        </div>
    );
};