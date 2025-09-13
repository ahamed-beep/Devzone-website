import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
        console.log(`Navigate to project/${project.id}`);
        // navigate(`/project/${project.id}`);
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
            className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-black text-white overflow-x-hidden"
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