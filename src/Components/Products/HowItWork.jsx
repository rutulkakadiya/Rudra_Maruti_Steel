import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowItWorksSection = () => {
    const [hoveredStep, setHoveredStep] = useState(null);
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });

        // Refresh AOS when hoveredStep changes
        AOS.refresh();
    }, [hoveredStep]);
    const steps = [
        {
            number: '01',
            image: '/Images/process1.jpg',
            title: 'Raw Material Sourcing',
            description: "High-quality iron ore, coal, and scrap are sourced from trusted suppliers and stored carefully to maintain consistency.",
        },
        {
            number: '02',
            image: '/Images/process2.jpg',
            title: "Hot Rolling & Coil Cutting",
            description: "Steel slabs are hot rolled into HR coils, then cut, trimmed, and finished to precise dimensions as per customer needs.",
        },
        {
            number: '03',
            image: '/Images/process3.webp',
            title: "Quality Optimization",
            description: "Each coil undergoes strict inspections for surface, size, and strength to ensure industry-standard quality.",
        },
    ];

    return (
        <div className="py-16 px-4 ">
            <div className="w-[95%] mx-auto hidden md:block">

                <div className="text-center">
                    <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6" data-aos="fade-up" data-aos-duration="1500">
                        <div className="w-8 sm:w-12 h-0.5 bg-[var(--brand-color)] rounded-full"></div>
                        <span
                            className="text-[var(--brand-color)] font-bold text-xs sm:text-sm tracking-widest uppercase"
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                            How It Work
                        </span>
                        <div className="w-8 sm:w-12 h-0.5 bg-[var(--brand-color)] rounded-full"></div>
                    </div>

                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6"
                    >
                        <span className="heading-text block bg-gradient-to-r from-[#2b325e] to-[#5a639c] bg-clip-text text-transparent mb-1 sm:mb-2" data-aos="fade-up" data-aos-duration="1500" style={{ fontFamily: "Rajdhani, sans-serif" }}>Our Company</span>
                        <span className="heading-text block text-[var(--brand-color)]" data-aos="fade-up" data-aos-duration="1500" style={{ fontFamily: "Rajdhani, sans-serif" }}>Working
                            Process</span>
                    </h2>
                </div>


                <div className="grid lg:grid-cols-2 gap-16 items-start mt-[100px] py-[50px]">
                    {/* Left Column - Content */}
                    <div className="space-y-12 order-2 lg:order-1 flex items-center mt-[300px] lg:mt-[0px]">
                        {/* Steps */}
                        <div className="space-y-4" data-aos="fade-right" data-aos-duration="1500">
                            {steps.map((step, index) => (
                                <div
                                    key={step.number}
                                    className={`group cursor-pointer transition-all duration-300 ${hoveredStep === index ? "transform translate-x-2" : ""
                                        }`}
                                    onMouseEnter={() => setHoveredStep(index)}
                                    onMouseLeave={() => setHoveredStep(null)}
                                >
                                    <div className="flex items-start gap-6">
                                        {/* Large Number */}
                                        <div className="relative flex-shrink-0">
                                            <span
                                                className={`text-6xl font-black transition-colors duration-300 ${hoveredStep === index ? "text-[var(--brand-color)]" : "text-gray-100"
                                                    }`}
                                            >
                                                {step.number}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3
                                                className={`heading-text text-2xl font-bold mb-4 transition-colors duration-300 ${hoveredStep === index ? "text-[var(--brand-color)]" : "text-gray-900"
                                                    }`
                                                }
                                                style={{ fontFamily: "Rajdhani, sans-serif" }}
                                            >
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 text-[16px] leading-relaxed">
                                                {step.description}
                                            </p>

                                            {/* Animated underline */}
                                            <div
                                                className={`mt-4 h-1 bg-[var(--brand-color)] transition-all duration-300 ${hoveredStep === index ? "w-full opacity-100" : "w-0 opacity-0"
                                                    }`}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Images */}
                    <div className="flex relative items-center justify-center h-full order-1 lg:order-2">
                        {/* Main container for images */}
                        <div className="relative h-full">
                            {/* Image 1 */}
                            <div
                                className={`w-[45%] md:w-[35%] lg:w-[45%] rounded-2xl z-10 absolute top-[0px] left-[17.5%] lg:left-[0%] border-[10px] border-white overflow-hidden shadow-2xl transition-all duration-300 ease-in-out ${hoveredStep === 0 ? "scale-105 shadow-2xl" : ""
                                    }`}
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <img
                                    src="/Images/process1.jpg"
                                    alt="Raw material sourcing"
                                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                                <div
                                    className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${hoveredStep === 0 ? "bg-[var(--brand-color)]/20 opacity-100" : "opacity-0"
                                        }`}
                                ></div>
                            </div>

                            {/* Image 2 */}
                            <div
                                className={`w-[50%] md:w-[45%] lg:w-[55%] rounded-2xl absolute top-[50%] lg:top-[15%] xl:top-[30%] right-[10%] border-[10px] border-white overflow-hidden shadow-2xl transition-all duration-300 ease-in-out ${hoveredStep === 1 ? "scale-105 shadow-2xl z-45" : "z-5"
                                    }`}
                                data-aos="fade-left"
                                data-aos-duration="1500"
                            >
                                <img
                                    src="/Images/process2.jpg"
                                    alt="Steel production"
                                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                                <div
                                    className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${hoveredStep === 1 ? "bg-[var(--brand-color)]/20 opacity-100" : "opacity-0"
                                        }`}
                                ></div>
                            </div>

                            {/* Image 3 */}
                            <div
                                className={`w-[45%] md:w-[35%] lg:w-[50%] rounded-2xl relative top-[150%] lg:top-[35%] xl:top-[70%] left-[17.5%] lg:left-[0px] border-[10px] border-white overflow-hidden shadow-xl transition-all duration-300 ease-in-out ${hoveredStep === 2 ? "scale-105 shadow-2xl z-45" : "z-0"
                                    }`}
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <img
                                    src="/Images/process3.webp"
                                    alt="Quality optimization"
                                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                                <div
                                    className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${hoveredStep === 2 ? "bg-[var(--brand-color)]/20 opacity-100" : "opacity-0"
                                        }`}
                                ></div>
                            </div>

                            {/* Decorative elements */}
                            <div
                                className="absolute top-16 left-8 w-4 h-4 bg-[var(--brand-color)] rounded-full opacity-30 animate-pulse"
                                data-aos="fade-in"
                                data-aos-delay="300"
                            ></div>
                            <div
                                className="absolute bottom-32 right-8 w-6 h-6 bg-[var(--brand-color)] rounded-full opacity-40 animate-bounce"
                                data-aos="fade-in"
                                data-aos-delay="500"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>


            {/* for mobile */}
            <div className="w-[95%] mx-auto block md:hidden">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6" data-aos="fade-up" data-aos-duration="1500">
                        <div className="w-8 sm:w-12 h-0.5 bg-[var(--brand-color)] rounded-full"></div>
                        <span
                            className="text-[var(--brand-color)] font-bold text-xs sm:text-sm tracking-widest uppercase"
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                            How It Work
                        </span>
                        <div className="w-8 sm:w-12 h-0.5 bg-[var(--brand-color)] rounded-full"></div>
                    </div>

                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        <span className="heading-text block text-gray-900 mb-1 sm:mb-2" data-aos="fade-up" data-aos-duration="1500" style={{ fontFamily: "Rajdhani, sans-serif" }}>Our Company</span>
                        <span className="heading-text block text-[var(--brand-color)]" data-aos="fade-up" data-aos-duration="1500" style={{ fontFamily: "Rajdhani, sans-serif" }}>Working Process</span>
                    </h2>
                </div>

                {/* Alternating Image-Process Layout */}
                <div>
                    {steps.map((step, index) => (
                        <div key={step.number} className="relative mt-6">
                            {/* Image Section */}
                            <div className="flex justify-center mb-12">
                                <div className="relative">
                                    <div className={`rounded-2xl border-[10px] border-white overflow-hidden shadow-2xl transition-all duration-500 ${hoveredStep === index ? 'transform scale-105 shadow-2xl' : ''}`}>
                                        <img
                                            src={step.image}
                                            alt={step.alt}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                        />
                                        <div className={`absolute inset-0 transition-opacity duration-300 ${hoveredStep === index ? 'bg-[var(--brand-color)]/20 opacity-100' : 'opacity-0'}`}></div>
                                    </div>

                                    {/* Decorative elements */}
                                    <div className="absolute -top-4 -left-4 w-4 h-4 bg-[var(--brand-color)] rounded-full opacity-30 animate-pulse"></div>
                                    <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[var(--brand-color)] rounded-full opacity-40 animate-bounce"></div>
                                </div>
                            </div>

                            {/* Process Step Section */}
                            <div className="flex justify-center">
                                <div
                                    className={`group cursor-pointer transition-all duration-300 max-w-2xl ${hoveredStep === index ? 'transform translate-y-2' : ''}`}
                                    onMouseEnter={() => setHoveredStep(index)}
                                    onMouseLeave={() => setHoveredStep(null)}
                                >
                                    <div className="flex items-start gap-6 text-center sm:text-left">
                                        {/* Large Number */}
                                        <div className="relative flex-shrink-0">
                                            <span className={`text-6xl font-black transition-all duration-300 ${hoveredStep === index ? 'text-[var(--brand-color)]' : 'text-gray-100'}`}>
                                                {step.number}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className={`heading-text text-left text-2xl font-bold mb-4 transition-colors duration-300 ${hoveredStep === index ? 'text-[var(--brand-color)]' : 'text-gray-900'}`} style={{ fontFamily: "Rajdhani, sans-serif" }}>
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 text-left text-[16px] leading-relaxed">
                                                {step.description}
                                            </p>

                                            {/* Animated underline */}
                                            <div className={`mt-4 h-1 bg-[var(--brand-color)] transition-all duration-300 mx-auto sm:mx-0 ${hoveredStep === index ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default HowItWorksSection;