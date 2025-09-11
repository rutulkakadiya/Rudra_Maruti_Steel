import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2,
};

const TiltedCard = ({
    children,
    className = "",
    rotateAmplitude = 10,
    scaleOnHover = 1.03
}) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);

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
    }

    return (
        <motion.div
            ref={ref}
            className={`[perspective:800px] ${className}`}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="relative [transform-style:preserve-3d] w-full h-full"
                style={{
                    rotateX,
                    rotateY,
                    scale,
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

const FloatingSteel = ({ index, className = "" }) => (
    <div
        className={`absolute opacity-6 ${className}`}
        style={{
            left: `${10 + index * 8}%`,
            top: `${15 + index * 12}%`,
            transform: `rotate(${25 + index * 35}deg)`,
            animation: `steelFloat ${4 + index}s ease-in-out infinite`
        }}
    >
        <div
            className="w-8 md:w-12 lg:w-16 h-4 md:h-6 lg:h-8 rounded-sm shadow-md"
            style={{
                background: 'linear-gradient(135deg, #2b325e 0%, var(--brand-color) 50%, #2b325e 100%)',
                boxShadow: '0 2px 6px rgba(43, 50, 94, 0.2)',
                border: '1px solid rgba(43, 50, 94, 0.3)'
            }}
        >
            <div
                className="absolute left-1 top-0.5 right-1 h-1 md:h-1.5 rounded-sm"
                style={{
                    background: 'linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2), transparent)'
                }}
            />
        </div>
    </div>
);

const OurMission = () => {
    const [activeTab, setActiveTab] = useState('mission');

    const missionData = {
        title: 'Our Mission',
        icon: '🎯',
        subtitle: 'Forging Excellence in Every Steel Product',
        description: 'To deliver superior quality steel products that exceed industry standards while building lasting partnerships with our clients through innovation, reliability, and exceptional service.',
        points: [
            {
                icon: '🏭',
                title: 'Manufacturing Excellence',
                description: 'Utilizing state-of-the-art technology and precision engineering to produce the finest H.R., G.P., and C.R.C.A steel products.'
            },
            {
                icon: '🔍',
                title: 'Quality Assurance',
                description: 'Implementing rigorous quality control measures at every stage to ensure consistent, reliable steel solutions.'
            },
            {
                icon: '🤝',
                title: 'Client Partnership',
                description: 'Building long-term relationships through transparent communication, timely delivery, and customized solutions.'
            },
            {
                icon: '🌱',
                title: 'Sustainable Practices',
                description: 'Committed to environmentally responsible manufacturing processes and sustainable steel production methods.'
            }
        ]
    };

    const visionData = {
        title: 'Our Vision',
        icon: '🚀',
        subtitle: 'Leading India\'s Steel Revolution',
        description: 'To become the most trusted and innovative steel manufacturing company in India, recognized for our unwavering commitment to quality, technological advancement, and customer satisfaction.',
        points: [
            {
                icon: '🏆',
                title: 'Industry Leadership',
                description: 'Establishing Maruti Steel as the benchmark for quality and innovation in the Indian steel manufacturing sector.'
            },
            {
                icon: '⚡',
                title: 'Technological Innovation',
                description: 'Continuously investing in cutting-edge technology to enhance product quality and manufacturing efficiency.'
            },
            {
                icon: '🌍',
                title: 'National Expansion',
                description: 'Expanding our reach across India while maintaining our commitment to personalized service and local expertise.'
            },
            {
                icon: '📈',
                title: 'Continuous Growth',
                description: 'Achieving sustainable growth through strategic partnerships, product diversification, and market expansion.'
            }
        ]
    };

    const currentData = activeTab === 'mission' ? missionData : visionData;

    return (
        <section className="relative overflow-hidden mb-12">

            {/* Floating Steel Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
                {[...Array(12)].map((_, i) => (
                    <FloatingSteel key={`steel-bg-${i}`} index={i} />
                ))}
            </div>

            <div className="w-[95%] mx-auto px-4 relative z-10 py-12">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16" data-aos="fade-up" data-aos-duration="1500">
                    <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <div className="w-8 sm:w-12 h-0.5 bg-[var(--brand-color)] rounded-full"></div>
                        <span
                            className="text-[var(--brand-color)] font-bold text-xs sm:text-sm tracking-widest uppercase"
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                            OUR COMMITMENT
                        </span>
                        <div className="w-8 sm:w-12 h-0.5 bg-[var(--brand-color)] rounded-full"></div>
                    </div>

                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        <span className="heading-text block text-gray-900 mb-1 sm:mb-2" style={{fontFamily: "Rajdhani, sans-serif"}}>Mission &</span>
                        <span className="heading-text block bg-gradient-to-r from-[#2b325e] to-[#5a639c] bg-clip-text text-transparent" style={{fontFamily: "Rajdhani, sans-serif"}}>Vision</span>
                    </h2>

                    <p
                        className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        Driven by purpose, guided by vision. Discover what fuels our passion for steel excellence and shapes our future aspirations.
                    </p>
                </div>

                {/* Interactive Tab Selector */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-white/30" data-aos="fade-up" data-aos-duration="1500">
                        <div className="flex">
                            <button
                                onClick={() => setActiveTab('mission')}
                                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'mission'
                                    ? 'text-white shadow-lg'
                                    : 'text-gray-600 hover:text-[var(--brand-color)]'
                                    }`}
                                style={{
                                    backgroundColor: activeTab === 'mission' ? 'var(--brand-color)' : 'transparent',
                                    fontFamily: 'Space Grotesk, sans-serif'
                                }}
                            >
                                🎯 Our Mission
                            </button>
                            <button
                                onClick={() => setActiveTab('vision')}
                                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'vision'
                                    ? 'text-white shadow-lg'
                                    : 'text-gray-600 hover:text-[var(--brand-color)]'
                                    }`}
                                style={{
                                    backgroundColor: activeTab === 'vision' ? 'var(--brand-color)' : 'transparent',
                                    fontFamily: 'Space Grotesk, sans-serif'
                                }}
                            >
                                🚀 Our Vision
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Main Card */}
                    <TiltedCard className="mb-16">
                        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden will-change-transform [transform:translateZ(0)]"
                            data-aos="fade-up" data-aos-duration="1500"
                        >
                            <div
                                className="p-8 md:p-12 text-center border-b-4"
                                style={{
                                    borderColor: 'var(--brand-color)',
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.8))'
                                }}
                            >
                                <div className="flex justify-center items-center gap-4 mb-6">
                                    <span className="text-5xl md:text-6xl">{currentData.icon}</span>
                                    <h3
                                        className="heading-text text-3xl md:text-4xl lg:text-5xl font-black text-gray-900"
                                         style={{fontFamily: "Rajdhani, sans-serif"}}
                                    >
                                        {currentData.title}
                                    </h3>
                                </div>

                                <h4
                                    className="text-xl md:text-2xl font-bold text-[var(--brand-color)] mb-6"
                                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                                >
                                    {currentData.subtitle}
                                </h4>

                                <p
                                    className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    {currentData.description}
                                </p>
                            </div>
                        </div>

                        {/* 3D Floating Elements */}
                        <motion.div
                            className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 rounded-2xl opacity-80 will-change-transform"
                            style={{
                                backgroundColor: 'var(--brand-color)',
                                boxShadow: '0 8px 25px rgba(43, 50, 94, 0.4)',
                                transform: 'translateZ(30px)'
                            }}
                        />
                        <motion.div
                            className="absolute -bottom-2 -left-2 w-12 h-12 md:w-16 md:h-16 rounded-xl opacity-60 will-change-transform"
                            style={{
                                backgroundColor: '#4169e1',
                                boxShadow: '0 4px 15px rgba(43, 50, 94, 0.3)',
                                transform: 'translateZ(20px)'
                            }}
                        />
                    </TiltedCard>

                    {/* Key Points Grid */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {currentData.points.map((point, index) => (
                            <TiltedCard key={index} className={`h-full ${index % 2 === 0 ? 'md:mt-8' : ''}`}>
                                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 md:p-8 h-full will-change-transform [transform:translateZ(0)] hover:shadow-2xl transition-all duration-300"
                                    data-aos="fade-up" data-aos-duration="1500"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div
                                            className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-xl md:text-2xl flex-shrink-0 shadow-lg"
                                            style={{
                                                backgroundColor: 'var(--brand-color)',
                                                boxShadow: '0 4px 12px rgba(43, 50, 94, 0.3)'
                                            }}
                                        >
                                            <span className="filter brightness-0 invert">{point.icon}</span>
                                        </div>
                                        <h4
                                            className="heading-text text-lg md:text-xl font-bold text-gray-900 leading-tight"
                                             style={{fontFamily: "Rajdhani, sans-serif"}}
                                        >
                                            {point.title}
                                        </h4>
                                    </div>
                                    <p
                                        className="text-gray-600 leading-relaxed text-sm md:text-base"
                                    >
                                        {point.description}
                                    </p>

                                    {/* 3D accent element */}
                                    <motion.div
                                        className="absolute -bottom-1 -right-1 w-8 h-8 rounded-lg opacity-40 will-change-transform"
                                        style={{
                                            backgroundColor: 'var(--brand-color)',
                                            transform: 'translateZ(15px)'
                                        }}
                                    />
                                </div>
                            </TiltedCard>
                        ))}
                    </div>
                </motion.div>

            </div>

            {/* Enhanced CSS Animations */}
            <style jsx>{`
        @keyframes steelFloat {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-12px) translateX(8px) rotate(5deg); }
          50% { transform: translateY(-6px) translateX(-4px) rotate(-3deg); }
          75% { transform: translateY(-18px) translateX(12px) rotate(8deg); }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        .container {
          scroll-margin-top: 100px;
        }
      `}</style>
        </section>
    );
};

export default OurMission;