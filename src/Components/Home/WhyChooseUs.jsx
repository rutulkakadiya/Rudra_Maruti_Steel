import React from "react";

export default function WhyChooseUs() {
    const features = [
        {
            id: 1,
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.6-6.3 4.6 2.3-7.4-6-4.6h7.6z" />
                </svg>
            ),
            title: "Premium Quality",
            description: "ISO certified steel products with superior strength and durability for all industrial applications.",
        },
        {
            id: 2,
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 3L4 14h5v7l9-11h-5V3z" />
                </svg>
            ),
            title: "Fast Delivery",
            description: "Quick turnaround times with our efficient supply chain and nationwide distribution network.",
        },
        {
            id: 3,
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
            ),
            title: "Best Pricing",
            description: "Competitive rates without compromising on quality. Get the best value for your investment.",
        },
        {
            id: 4,
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                </svg>
            ),
            title: "Custom Solutions",
            description: "Tailored steel solutions to meet your specific requirements and project specifications.",
        },
        {
            id: 5,
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
            ),
            title: "Industry Expertise",
            description: "Over 25+ years of experience serving various industries with reliable steel products.",
        },
        {
            id: 6,
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                    <path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="white" />
                </svg>
            ),
            title: "Quality Assurance",
            description: "Rigorous testing and quality control processes ensure consistent product excellence.",
        }
    ];

    return (
        <div className="py-16 overflow-hidden relative">
            {/* Header Section */}
            <div className="overflow-hidden relative">
                <div
                    className="text-center mb-16 transition-all duration-1000"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <div className="inline-block mb-6 mt-3">
                        <span className="px-4 py-2 bg-[#3b82f6]/10 text-[var(--brand-color)] text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-default">
                            Why Us?
                        </span>
                    </div>
                    <h2 className="heading-text text-5xl md:text-6xl font-bold text-black mb-3 leading-tight hover:scale-105 transition-transform duration-300 cursor-default" style={{fontFamily: "Rajdhani, sans-serif"}}>
                        Why <span className="heading-text bg-gradient-to-r from-[#2b325e] to-[#5a639c] bg-clip-text text-transparent" style={{fontFamily: "Rajdhani, sans-serif"}}>Choose Us</span>
                    </h2>
                    <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed hover:text-gray-700 transition-colors duration-300">
                        Discover what makes us the preferred choice for premium steel solutions.
                    </p>
                </div>

            </div>

            {/* Features Grid */}
            <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((item, index) => (
                    <div
                        key={item.id}
                        className="feature-card group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-transparent cursor-pointer"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-delay={index * 100}
                    >
                        {/* Animated background gradient */}
                        <div className={`absolute inset-0 bg-[var(--brand-color)] opacity-0 group-hover:opacity-5 transition-all duration-500`}></div>

                        {/* Glowing border effect */}
                        <div className={`absolute inset-0 rounded-2xl bg-[var(--brand-color)] opacity-0 group-hover:opacity-20 blur-sm scale-105 transition-all duration-500`}></div>

                        {/* Content */}
                        <div className="relative p-8 z-10">
                            {/* Icon */}
                            <div className={`w-16 h-16 bg-[var(--brand-color)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                                <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-all duration-300 transform group-hover:translate-x-1" style={{fontFamily: "Rajdhani, sans-serif"}}>
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed text-sm mb-6 group-hover:text-gray-700 transition-all duration-300">
                                {item.description}
                            </p>

                            {/* Learn More Link */}
                            <div className="inline-flex items-center text-gray-500 font-medium text-sm group-hover:text-[var(--brand-color)] transition-all duration-300 transform group-hover:translate-x-2">
                                <span className="relative">
                                    Learn More
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--brand-color)] group-hover:w-full transition-all duration-300"></span>
                                </span>
                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>

                        {/* Floating particles effect */}
                        <div className="absolute top-4 right-4 w-2 h-2 bg-[#3b82f6] rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-ping transition-all duration-500"></div>
                        <div className="absolute top-8 right-8 w-1 h-1 bg-[#3b82f6] rounded-full opacity-0 group-hover:opacity-50 group-hover:animate-ping transition-all duration-700 delay-100"></div>
                        <div className="absolute top-6 right-12 w-1.5 h-1.5 bg-[#3b82f6] rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-all duration-600 delay-200"></div>
                    </div>
                ))}
            </div>


            {/* Bottom CTA Section */}
            <div className="relative w-full">
                <div
                    data-index="0"
                    className="text-center mb-8 transition-all duration-1000"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <center>
                        <button className="relative z-50 group mt-[100px] overflow-hidden bg-[var(--brand-color)] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 group-hover:shadow-lg transform group-hover:scale-105"
                            data-aos="fade-up" data-aos-duration="1500">
                            {/* Button shine effect */}
                            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            <span className="relative flex items-center justify-center gap-2">
                                View More
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </button>
                    </center>

                </div>
            </div>

            {/* Custom CSS for enhanced animations */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                

            `}</style>
        </div>
    );
}