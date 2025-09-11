import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Home, MapPin, Settings, TrendingUp } from 'lucide-react';

const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2,
};

const TiltedTimelineCard = ({
    item,
    index,
    isVisible,
    rotateAmplitude = 12,
    scaleOnHover = 1.05
}) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, {
        stiffness: 350,
        damping: 30,
        mass: 1,
    });

    const [lastY, setLastY] = useState(0);

    function handleMouse(e) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }

    function handleMouseEnter() {
        scale.set(scaleOnHover);
        opacity.set(1);
    }

    function handleMouseLeave() {
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
    }

    return (
        <figure
            ref={ref}
            className={`
        relative w-full md:w-[42%] [perspective:800px] rounded-xl md:rounded-2xl cursor-pointer
        ${index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'}
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 md:translate-x-0'}
        transition-all duration-700 ease-out
      `}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-duration="1500"
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="relative [transform-style:preserve-3d] w-full"
                style={{
                    rotateX,
                    rotateY,
                    scale,
                }}
            >
                <motion.div
                    className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl border border-white/20 will-change-transform [transform:translateZ(0)]"
                >
                    {/* Header */}
                    <div
                        className="p-4 md:p-6 border-b-2 md:border-b-3 flex items-center justify-between"
                        style={{
                            borderColor: item.steelColor,
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))'
                        }}
                    >
                        <div
                            className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-white font-bold text-sm md:text-base shadow-md"
                            style={{
                                backgroundColor: item.steelColor,
                                boxShadow: '0 2px 8px rgba(43, 50, 94, 0.3)',
                                fontFamily: 'Space Grotesk, sans-serif'
                            }}
                        >
                            {item.year}
                        </div>
                        <div className="flex items-center gap-2">
                            <div
                                className="w-3 h-3 md:w-4 md:h-4 rounded-full relative animate-pulse"
                                style={{ backgroundColor: item.steelColor }}
                            >
                                <div
                                    className="absolute top-1/2 left-1/2 w-1.5 h-1.5 md:w-2 md:h-2 transform -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse"
                                    style={{ backgroundColor: item.steelColor }}
                                />
                            </div>
                            <span
                                className="text-xs md:text-sm font-semibold uppercase tracking-wide"
                                style={{ color: item.steelColor }}
                            >
                                Operational
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-6">
                        <h3
                            className="heading-text text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-3"
                            style={{ fontFamily: "Rajdhani, sans-serif" }}
                        >
                            {/* Icon Box */}
                            <span
                                className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-md shadow-md"
                                style={{
                                    background: `linear-gradient(135deg, ${item.steelColor}, #1e223d)`,
                                }}
                            >
                                <item.icon size={20} className="text-white" />
                            </span>

                            {/* Title */}
                            {item.title}
                        </h3>


                        <p
                            className="text-gray-600 text-sm md:text-base leading-relaxed"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            {item.description}
                        </p>
                    </div>
                </motion.div>

                {/* 3D Layered Elements */}
                <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 md:w-12 md:h-12 rounded-full opacity-80 will-change-transform"
                    style={{
                        backgroundColor: item.steelColor,
                        boxShadow: '0 4px 15px rgba(43, 50, 94, 0.4)',
                        transform: 'translateZ(20px)'
                    }}
                />

                <motion.div
                    className="absolute -bottom-1 -left-1 w-6 h-6 md:w-8 md:h-8 rounded-full opacity-60 will-change-transform"
                    style={{
                        backgroundColor: item.steelColor,
                        boxShadow: '0 2px 8px rgba(43, 50, 94, 0.3)',
                        transform: 'translateZ(15px)'
                    }}
                />
            </motion.div>

            {/* Interactive Tooltip */}
            <motion.figcaption
                className="pointer-events-none absolute left-0 top-0 rounded-lg bg-gray-900 px-3 py-2 text-xs text-white opacity-0 z-10 hidden md:block shadow-lg"
                style={{
                    x,
                    y,
                    opacity,
                    rotate: rotateFigcaption,
                }}
            >
                <div className="font-semibold">{item.title}</div>
                <div className="text-gray-300">{item.year}</div>
            </motion.figcaption>
        </figure>
    );
};

const OurJourney = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());

    const journeyData = [
        {
            year: '1994',
            title: 'Foundation & Steel Vision',
            description: 'Maruti Steel was founded by Mr. Dilipbhai M. Patel starting its journey as a trusted steel trading company committed to delivering quality and reliability.',
            icon: Home,
            steelColor: '#2b325e'
        },
        {
            year: "2012",
            title: "Factory Expansion",
            description: "With growing customer trust, we expanded our trading operations, strengthening our presence in the steel market and offering a wider range of customized solutions.",
            icon: TrendingUp,
            steelColor: "#2b325e"
        },
        {
            year: "2015",
            title: "Trading Capacity Expansion",
            description: "To meet increasing demand, we enhanced our trading capacity by adding advanced processes like cut-to-length and further cutting services, ensuring customers receive products as per their exact requirements.",
            icon: Settings,
            steelColor: "#2b325e"
        },
        {
            year: "2020",
            title: "Ahmedabad Branch Office",
            description: "We extended our reach by establishing our Ahmedabad branch office, bringing us closer to customers and offering prompt service with greater convenience.",
            icon: MapPin,
            steelColor: "#2b325e"
        },
        // {
        //     year: "2025",
        //     title: "Modern Infrastructure & Technology",
        //     description: "Invested in state-of-the-art machinery and modern infrastructure. Our facility now features advanced steel processing equipment, automated quality control systems, and expanded storage capacity to serve clients across India.",
        //     icon: "⚙️",
        //     steelColor: "#2b325e"
        // }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setVisibleItems(prev => new Set([...prev, index]));
                    }
                });
            },
            { threshold: 0.3 }
        );

        const elements = document.querySelectorAll('.steel-timeline-item');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Steel Coil Component
    const SteelCoil = ({ index, className = "" }) => (
        <div
            className={`absolute opacity-10 ${className}`}
            style={{
                left: `${10 + index * 20}%`,
                top: `${8 + index * 18}%`,
                transform: `rotate(${10 + index * 25}deg)`,
                animation: `steelFloat ${6 + index}s ease-in-out infinite`
            }}
        >
            <div className="relative">
                {/* Steel Coil */}
                <div
                    className="w-20 md:w-28 lg:w-32 h-20 md:h-28 lg:h-32 rounded-full relative shadow-lg border-4"
                    style={{
                        background: `conic-gradient(from 0deg, #2b325e 0deg, #454d7a 90deg, #2b325e 180deg, #454d7a 270deg, #2b325e 360deg)`,
                        borderColor: '#2b325e',
                        boxShadow: '0 4px 15px rgba(43, 50, 94, 0.3), inset 0 2px 8px rgba(0,0,0,0.2)'
                    }}
                >
                    {/* Inner coil rings */}
                    <div
                        className="absolute top-2 left-2 right-2 bottom-2 rounded-full border-2"
                        style={{
                            borderColor: '#2b325e',
                            background: 'radial-gradient(circle, rgba(43, 50, 94, 0.8) 0%, rgba(69, 77, 122, 0.6) 100%)'
                        }}
                    />
                    <div
                        className="absolute top-4 left-4 right-4 bottom-4 rounded-full border-2"
                        style={{
                            borderColor: '#2b325e',
                            background: 'radial-gradient(circle, rgba(43, 50, 94, 0.6) 0%, rgba(69, 77, 122, 0.4) 100%)'
                        }}
                    />
                    <div
                        className="absolute top-6 left-6 right-6 bottom-6 rounded-full"
                        style={{
                            background: 'radial-gradient(circle, #2b325e 0%, #454d7a 100%)'
                        }}
                    />
                    
                    {/* Center hole */}
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(43, 50, 94, 0.6) 100%)',
                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'
                        }}
                    />
                </div>
            </div>
        </div>
    );

    // Steel Sheet Component
    const SteelSheet = ({ index, className = "" }) => (
        <div
            className={`absolute opacity-8 ${className}`}
            style={{
                right: `${5 + index * 15}%`,
                top: `${12 + index * 20}%`,
                transform: `rotate(${-15 + index * 20}deg)`,
                animation: `steelFloat ${7 + index * 0.5}s ease-in-out infinite reverse`
            }}
        >
            <div className="relative">
                {/* Steel Sheet */}
                <div
                    className="w-16 md:w-24 lg:w-28 h-24 md:h-32 lg:h-36 rounded-sm relative shadow-lg"
                    style={{
                        background: 'linear-gradient(135deg, #2b325e 0%, #454d7a 25%, #2b325e 50%, #454d7a 75%, #2b325e 100%)',
                        boxShadow: '0 4px 15px rgba(43, 50, 94, 0.3), inset 2px 2px 8px rgba(255,255,255,0.1), inset -2px -2px 8px rgba(0,0,0,0.2)',
                        border: '1px solid rgba(43, 50, 94, 0.4)'
                    }}
                >
                    {/* Steel sheet shine effect */}
                    <div
                        className="absolute left-1 top-1 right-1 h-2 md:h-3 rounded-sm"
                        style={{
                            background: 'linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 50%, transparent 100%)'
                        }}
                    />
                    
                    {/* Steel sheet texture lines */}
                    <div className="absolute inset-0 flex flex-col justify-evenly px-1">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className="h-px opacity-30"
                                style={{
                                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)'
                                }}
                            />
                        ))}
                    </div>
                    
                    {/* Corner reinforcement */}
                    <div
                        className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(43, 50, 94, 0.6) 100%)',
                            clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
                        }}
                    />
                </div>
            </div>
        </div>
    );

    // Steel Bar Component
    const SteelBar = ({ index, className = "" }) => (
        <div
            className={`absolute opacity-6 ${className}`}
            style={{
                left: `${15 + index * 25}%`,
                bottom: `${10 + index * 15}%`,
                transform: `rotate(${45 + index * 30}deg)`,
                animation: `steelFloat ${5.5 + index * 0.8}s ease-in-out infinite`
            }}
        >
            <div className="relative">
                {/* Steel Bar */}
                <div
                    className="w-3 md:w-4 h-16 md:h-20 lg:h-24 rounded-full relative shadow-lg"
                    style={{
                        background: 'linear-gradient(90deg, #2b325e 0%, #454d7a 50%, #2b325e 100%)',
                        boxShadow: '0 2px 8px rgba(43, 50, 94, 0.3), inset -1px 0 3px rgba(0,0,0,0.3), inset 1px 0 3px rgba(255,255,255,0.2)'
                    }}
                >
                    {/* Steel bar highlight */}
                    <div
                        className="absolute left-0 top-1 bottom-1 w-1 rounded-full"
                        style={{
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)'
                        }}
                    />
                </div>
            </div>
        </div>
    );

    return (
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">

            {/* Enhanced Steel Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
                {/* Steel Coils */}
                {[...Array(4)].map((_, i) => (
                    <SteelCoil key={`coil-${i}`} index={i} />
                ))}
                
                {/* Steel Sheets */}
                {[...Array(5)].map((_, i) => (
                    <SteelSheet key={`sheet-${i}`} index={i} />
                ))}
                
                {/* Steel Bars */}
                {[...Array(6)].map((_, i) => (
                    <SteelBar key={`bar-${i}`} index={i} />
                ))}
            </div>

            <div className="w-[95%] mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6" data-aos="fade-up" data-aos-duration="1500">
                        <div className="w-8 sm:w-12 h-0.5 bg-[var(--brand-color)] rounded-full"></div>
                        <span
                            className="text-[var(--brand-color)] font-bold text-xs sm:text-sm tracking-widest uppercase"
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                            MARUTI STEEL JOURNEY
                        </span>
                        <div className="w-8 sm:w-12 h-0.5 bg-[var(--brand-color)] rounded-full"></div>
                    </div>

                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        <span className="heading-text block text-gray-900 mb-1 sm:mb-2" data-aos="fade-up" data-aos-duration="1500" style={{ fontFamily: "Rajdhani, sans-serif" }}>Forging Excellence</span>
                        <span className="heading-text block bg-gradient-to-r from-[#2b325e] to-[#5a639c] bg-clip-text text-transparent" data-aos="fade-up" data-aos-duration="1500" style={{ fontFamily: "Rajdhani, sans-serif" }}>Since 1994</span>
                    </h2>

                    <p
                        className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
                        data-aos="fade-up" data-aos-duration="1500"
                    >
                        Hover over each milestone to experience our interactive timeline. Like forged steel, our journey has been shaped through strength, precision, and unwavering quality.
                    </p>

                    <div className="mt-4 text-sm text-gray-500 md:hidden">
                        <span className="inline-flex items-center gap-2">
                            <span>📱</span>
                            <span>3D effects optimized for desktop experience</span>
                        </span>
                    </div>
                </div>

                {/* Interactive Steel Timeline */}
                <div className="relative w-full mx-auto">
                    {/* Main Steel Beam Line - Desktop Only */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-8 z-10">
                        <div
                            className="w-full h-full rounded-sm shadow-xl"
                            style={{
                                background: 'linear-gradient(90deg, #2b325e 0%, #2b325e 25%, #2b325e 50%, #2b325e 75%, #2b325e 100%)',
                                boxShadow: '-3px 0 8px rgba(43, 50, 94, 0.3), 3px 0 8px rgba(43, 50, 94, 0.2), inset -2px 0 4px rgba(0,0,0,0.3), inset 2px 0 4px rgba(255,255,255,0.2), 0 0 15px rgba(43, 50, 94, 0.2)',
                                border: '1px solid rgba(43, 50, 94, 0.4)'
                            }}
                        >
                            <div
                                className="absolute left-1 top-0 bottom-0 w-2 rounded-sm"
                                style={{
                                    background: 'linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 50%, transparent 100%)'
                                }}
                            />
                            <div
                                className="absolute right-1 top-0 bottom-0 w-1.5 rounded-sm"
                                style={{
                                    background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)'
                                }}
                            />
                        </div>
                    </div>

                    {journeyData.map((item, index) => (
                        <div
                            key={index}
                            className="steel-timeline-item relative mb-8 md:mb-24 flex items-center min-h-[120px] md:min-h-[200px]"
                            data-index={index}
                        >
                            {/* Steel Connection Joint - Desktop Only */}
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-1/2 transform -translate-y-1/2 z-20">
                                <div
                                    className="w-16 h-16 lg:w-18 lg:h-18 rounded-lg flex items-center justify-center relative overflow-hidden shadow-xl"
                                    style={{
                                        background: `linear-gradient(135deg, #2b325e 0%, #2b325e 25%, ${item.steelColor} 50%, #2b325e 75%, #2b325e 100%)`,
                                        boxShadow: '0 6px 20px rgba(43, 50, 94, 0.4), inset -2px -2px 6px rgba(0,0,0,0.3), inset 2px 2px 6px rgba(255,255,255,0.2)',
                                    }}
                                >
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 z-30">
                                        <div
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-lg border-2 border-white/80"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.2) 70%, transparent 100%)',
                                                boxShadow: '0 2px 4px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.5)'
                                            }}
                                        />
                                        <div
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-white/40 rounded-lg animate-spin"
                                            style={{
                                                borderTopColor: 'rgba(255,255,255,0.8)',
                                                borderRightColor: 'rgba(255,255,255,0.6)',
                                                animationDuration: '6s'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Steel Connection Beam */}
                                <div
                                    className={`absolute top-1/2 transform -translate-y-1/2 h-6 rounded-sm shadow-lg ${index % 2 === 0
                                        ? 'right-10 w-24'
                                        : 'left-10 w-24'
                                        }`}
                                    style={{
                                        background: 'linear-gradient(135deg, #2b325e 0%, #2b325e 25%, #2b325e 50%, #2b325e 75%, #2b325e 100%)',
                                        boxShadow: '0 -2px 6px rgba(43, 50, 94, 0.3), 0 2px 6px rgba(43, 50, 94, 0.2), inset 0 -1px 3px rgba(0,0,0,0.3), inset 0 1px 3px rgba(255,255,255,0.2)',
                                        border: '1px solid rgba(43, 50, 94, 0.4)'
                                    }}
                                >
                                    <div
                                        className="absolute left-0 top-1 right-0 h-1.5 rounded-sm"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.3) 100%)'
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Tilted Interactive Card */}
                            <TiltedTimelineCard
                                item={item}
                                index={index}
                                isVisible={visibleItems.has(index)}
                            />
                        </div>
                    ))}
                </div>

            </div>

            {/* CSS Animations */}
            <style jsx>{`
        @keyframes steelFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-8px) translateX(4px); }
          50% { transform: translateY(-4px) translateX(-2px); }
          75% { transform: translateY(-12px) translateX(6px); }
        }
        
        .steel-timeline-item {
          scroll-margin-top: 100px;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
        </section>
    );
};

export default OurJourney;