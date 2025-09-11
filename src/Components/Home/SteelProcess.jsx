import React, { useState, useEffect, useRef } from 'react';
import { Factory, Zap, TrendingDown, Award, Cog, Wrench, CheckCircle, Shield } from 'lucide-react';

const SteelProcess = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const sectionRef = useRef(null);

    const processes = [
        {
            id: 1,
            number: "01",
            title: "Raw Material Sourcing",
            description: "High-quality iron ore, coal, and scrap are sourced from trusted suppliers and stored carefully to maintain consistency.",
            icon: Factory,
            color: "from-orange-400 to-red-500"
        },
        {
            id: 2,
            number: "02",
            title: "Hot Rolling & Coil Cutting",
            description: "Steel slabs are hot rolled into HR coils, then cut, trimmed, and finished to precise dimensions as per customer needs.",
            icon: Zap,
            color: "from-orange-400 to-red-500"
        },
        {
            id: 3,
            number: "03",
            title: "Quality Optimization",
            description: "Each coil undergoes strict inspections for surface, size, and strength to ensure industry-standard quality.",
            icon: TrendingDown,
            color: "from-orange-400 to-red-500"
        },
        {
            id: 4,
            number: "04",
            title: "Quality Assurance",
            description: "Coils are securely packed, labeled, and dispatched with proper documentation for timely delivery.",
            icon: Award,
            color: "from-orange-400 to-red-500"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animate items with staggered delays
                        processes.forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleItems(prev => [...prev, index]);
                            }, index * 200);
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 relative overflow-hidden">

            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1500">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--brand-color)]/10 text-[var(--brand-color)] text-sm font-semibold mb-4 tracking-wide">
                        <Cog className="w-4 h-4 mr-2" />
                        STEEL MANUFACTURING PROCESS
                    </div>
                    <h2 className="heading-text text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" style={{fontFamily: "Rajdhani, sans-serif"}}>
                        Check How Our Process Is
                        <br />
                        <span className="heading-text bg-gradient-to-r from-[#2b325e] to-[#5a639c] bg-clip-text text-transparent" style={{fontFamily: "Rajdhani, sans-serif"}}>
                            Done For Industry
                        </span>
                    </h2>
                    <div className="flex items-center justify-center mb-8">
                        <div className="w-12 h-1 bg-[var(--brand-color)] rounded-full"></div>
                        <div className="mx-3">
                            <Wrench className="w-8 h-8 text-[var(--brand-color)]" />
                        </div>
                        <div className="w-12 h-1 bg-[var(--brand-color)] rounded-full"></div>
                    </div>
                </div>

                {/* Process Flow */}
                <div className="relative">
                    {/* Connection Lines */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-16 z-0">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 60">
                            <defs>
                                <pattern id="dash" patternUnits="userSpaceOnUse" width="10" height="2">
                                    <line x1="0" y1="1" x2="5" y2="1" stroke="#3b82f6" strokeWidth="2" opacity="0.4" />
                                </pattern>
                            </defs>
                            <path d="M100 30 Q300 10 500 30 T900 30 T1100 30" stroke="url(#dash)" strokeWidth="2" fill="none" />
                        </svg>
                    </div>

                    {/* Process Items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                        {processes.map((process, index) => {
                            const IconComponent = process.icon;
                            const isVisible = visibleItems.includes(index);

                            return (
                                <div
                                    key={process.id}
                                    className={`relative group transition-all duration-700 transform`}
                                    data-aos="fade-up" data-aos-duration="1500"
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    {/* Process Circle */}
                                    <div className="relative mb-8 mx-auto w-fit">
                                        {/* Outer Decorative Ring */}
                                        <div className="absolute top-[-15px] w-32 h-32 rounded-full border-2 border-dashed border-[var(--brand-color)]/20 animate-spin-slow opacity-100"></div>

                                        {/* Main Circle */}
                                        <div className="relative w-24 h-24 mx-4 my-4 bg-white rounded-full shadow-xl border-4 border-[var(--brand-color)]/20 flex items-center justify-center group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 z-10">
                                            <IconComponent className="w-8 h-8 text-gray-700 group-hover:text-[var(--brand-color)] transition-colors duration-300" />
                                        </div>

                                        {/* Step Number */}
                                        <div className={`absolute -top-2 -right-2 w-12 h-12 bg-[var(--brand-color)] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-20 group-hover:scale-110 transition-transform duration-300`}>
                                            {process.number}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center px-2">
                                        <h3 className="heading-text text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[var(--brand-color)] transition-colors duration-300" style={{fontFamily: "Rajdhani, sans-serif"}}>
                                            {process.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300">
                                            {process.description}
                                        </p>
                                    </div>

                                    {/* Hover Effect Background */}
                                    <div className="absolute inset-0 bg-[var(--brand-color)]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform scale-105"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center px-6 py-3 bg-[var(--brand-color)] text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Learn More About Our Quality Standards
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default SteelProcess;