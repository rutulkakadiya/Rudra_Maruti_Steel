import React, { useState, useEffect, useRef } from "react";

export default function CounterSection() {
    const [counters, setCounters] = useState({
        drilling: 0,
        crane: 0,
        metal: 0
    });
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const counterData = [
        {
            id: 'drilling',
            target: 30,
            label: 'Years Experience',
            suffix: '+',
            description: "Active drilling operations nationwide"
        },
        {
            id: 'crane',
            target: 50,
            label: 'Steel Products',
            suffix: '+',
            description: "Heavy lifting equipment deployed"
        },
        {
            id: 'metal',
            target: 5000,
            label: 'Happy Clients',
            suffix: '+',
            description: "Manufacturing facilities operational"
        }
    ];

    // Intersection Observer for animation trigger
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isVisible]);

    // Counter animation effect
    useEffect(() => {
        if (!isVisible) return;

        const timers = {};

        counterData.forEach((counter) => {
            let start = 0;
            const end = counter.target;
            const duration = 2000; // 2 seconds
            const increment = end / (duration / 16); // 60fps

            timers[counter.id] = setInterval(() => {
                start += increment;
                if (start >= end) {
                    start = end;
                    clearInterval(timers[counter.id]);
                }
                setCounters(prev => ({
                    ...prev,
                    [counter.id]: Math.floor(start)
                }));
            }, 16);
        });

        return () => {
            Object.values(timers).forEach(timer => clearInterval(timer));
        };
    }, [isVisible]);

    const formatDisplayValue = (counter) => {
        return `${counters[counter.id]}`;
    };

    return (
        <div className="py-20" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6" data-aos="fade-up" data-aos-duration="1500">
                    </div>
                    <h2 className="heading-text text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                        Our Industrial <span className="heading-text bg-gradient-to-r from-[#2b325e] to-[#5a639c] bg-clip-text text-transparent" style={{ fontFamily: "Rajdhani, sans-serif" }}>Capabilities</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Leading the industry with comprehensive equipment and facilities
                    </p>
                </div>

                {/* Counter Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {counterData.map((item, index) => (
                        <div
                            key={item.id}
                            className="text-center group"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {/* Large Number Display */}
                            <div className="mb-6">
                                <div className="inline-flex items-baseline justify-center">
                                    <span
                                        className="outlined-number text-8xl md:text-9xl font-bold group-hover:text-gray-700 transition-colors duration-500"
                                        style={{
                                            fontFamily: 'Arial, sans-serif',
                                            fontWeight: '700',
                                            letterSpacing: '-0.02em',
                                            color: 'transparent',
                                            WebkitTextStroke: '3px #6b7280',
                                            textStroke: '3px #6b7280'
                                        }}
                                    >
                                        {formatDisplayValue(item)}
                                    </span>
                                    <span
                                        className="text-4xl md:text-5xl font-bold text-[var(--brand-color)] ml-2"
                                        style={{
                                            color: 'transparent',
                                            WebkitTextStroke: '2px #2b325e',
                                            textStroke: '2px #2b325e'
                                        }}
                                    >
                                        {item.suffix}
                                    </span>
                                </div>
                            </div>

                            {/* Label */}
                            <h3 className="heading-text text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300"
                             style={{ fontFamily: "Rajdhani, sans-serif" }}>
                                {item.label}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                                {item.description}
                            </p>

                            {/* Animated underline */}
                            <div className="mt-4 mx-auto w-0 h-0.5 bg-[var(--brand-color)] group-hover:w-16 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                .outlined-number {
                    -webkit-text-stroke: 3px #6b7280;
                    text-stroke: 3px #6b7280;
                    color: transparent !important;
                    paint-order: stroke fill;
                }
                
                .outlined-number:hover {
                    -webkit-text-stroke: 3px #4b5563;
                    text-stroke: 3px #4b5563;
                }
                
                .group:hover {
                    transform: translateY(-5px);
                    transition: transform 0.3s ease;
                }
                
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

                .group {
                    animation: fadeInUp 0.6s ease forwards;
                    opacity: 0;
                }

                .group:nth-child(1) { animation-delay: 0.1s; }
                .group:nth-child(2) { animation-delay: 0.2s; }
                .group:nth-child(3) { animation-delay: 0.3s; }
            `}</style>
        </div>
    );
}