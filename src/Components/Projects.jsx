import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
            "/Images/varidate1.webp",
            "/Images/varidate2.webp",
        ]
    },
];

// --- COMPONENTS ---
const ProjectCard = ({ project, onClick, delay = 0 }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { 
        once: true, 
        margin: "-50px",
        amount: 0.2
    });

    return (
        <motion.div 
            ref={cardRef}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: "easeOut"
            }}
            className="group relative overflow-hidden rounded-lg shadow-lg w-full h-full cursor-pointer"
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
            aria-label={`View details for ${project.title}`}
            whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.05 }}
                animate={isInView ? { scale: 1 } : { scale: 1.05 }}
                transition={{ 
                    duration: 0.8, 
                    delay: delay + 0.1,
                    ease: "easeOut"
                }}
                whileHover={{ scale: 1.05 }}
            />
            
            <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: delay + 0.2 }}
            />
            
            <motion.div 
                className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.4, delay: delay + 0.3 }}
            >
                <div className="flex justify-between items-end">
                    <div>
                        <motion.h3 
                            className="text-lg sm:text-xl font-bold mb-2"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.4, delay: delay + 0.4 }}
                        >
                            {project.subtitle}
                        </motion.h3>
                        <motion.p 
                            className="text-sm sm:text-md text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.4, delay: delay + 0.5 }}
                        >
                            {project.date}
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export const ProjectsSection = () => {
    const featuredProject = projectData.find(p => p.isFeatured);
    const otherProjects = projectData.filter(p => !p.isFeatured);
    
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const mainContentRef = useRef(null);
    const navigate = useNavigate();
    
    const isHeaderInView = useInView(headerRef, { 
        once: true, 
        margin: "-50px",
        amount: 0.3
    });
    
    const isMainContentInView = useInView(mainContentRef, { 
        once: true, 
        margin: "-50px",
        amount: 0.2
    });

    // Handle project selection and navigate to detail page
    const handleProjectSelect = (project) => {
        navigate(`/project/${project.id}`);
    };

    const headerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1,
            },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const subtitleVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const featuredCardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const sideCardsVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    return (
        <motion.div 
            id='ourprojects' 
            ref={sectionRef} 
            className="w-full  px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-black text-white overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto max-w-7xl">
                {/* Header Section */}
                <motion.div 
                    ref={headerRef}
                    className="text-center mb-12 sm:mb-16"
                    initial="hidden"
                    animate={isHeaderInView ? "visible" : "hidden"}
                    variants={headerVariants}
                >
                    <motion.h1 
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4"
                        variants={titleVariants}
                    >
                        Our Projects
                    </motion.h1>
                    <motion.p 
                        className="text-[#B5B6B6] text-base sm:text-lg lg:text-xl px-4"
                        variants={subtitleVariants}
                    >
                        A showcase of our passion and commitment to excellence.
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div 
                    ref={mainContentRef}
                    className="flex flex-col lg:flex-row gap-6 lg:gap-8 overflow-hidden"
                    initial="hidden"
                    animate={isMainContentInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {/* Featured Project */}
                    <motion.div 
                        className="w-full lg:w-1/2"
                        variants={featuredCardVariants}
                    >
                        {featuredProject && (
                            <div className="h-80 sm:h-96 lg:h-[34rem]">
                                <ProjectCard 
                                    project={featuredProject} 
                                    onClick={() => handleProjectSelect(featuredProject)}
                                    delay={0}
                                />
                            </div>
                        )}
                    </motion.div>

                    {/* Other Projects */}
                    <motion.div 
                        className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8"
                        variants={sideCardsVariants}
                    >
                        {otherProjects.map((project, index) => (
                           <motion.div 
                               className="h-48 sm:h-56 lg:h-64" 
                               key={project.id}
                               variants={{
                                   hidden: { opacity: 0, y: 30, scale: 0.95 },
                                   visible: {
                                       opacity: 1,
                                       y: 0,
                                       scale: 1,
                                       transition: {
                                           duration: 0.6,
                                           delay: index * 0.1,
                                           ease: "easeOut"
                                       }
                                   }
                               }}
                           >
                               <ProjectCard 
                                   project={project} 
                                   onClick={() => handleProjectSelect(project)}
                                   delay={index * 0.05}
                               />
                           </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};