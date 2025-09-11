import React from 'react';
import { Scissors, Truck, Settings } from 'lucide-react';

export default function Services() {
    const services = [
        {
            id: 1,
            image: "/Images/cut_to_length.jpg",
            serviceName: "Cut to Length Coil",
            description: "Sheet Length As Per Your Need",
            details: "Precision cutting services tailored to your exact specifications"
        },
        {
            id: 1,
            image: "/Images/shearing_cutting.jpeg",
            serviceName: "Shearing Cutting",
            description: "Sheet Further Cutting",
            details: "Advanced shearing technology for precise sheet cutting"
        },
        {
            id: 1,
            image: "/Images/logistic.jpg",
            serviceName: "Logistic Service",
            description: "As Per Need",
            details: "Reliable delivery solutions for all your steel requirements"
        }
    ];

    return (
        <div>
            <div
                data-index="0"
                className={`text-center mb-16 transition-all duration-1000`} data-aos="fade-up" data-aos-duration="1000"
            >
                <div className="inline-block mb-6">
                    <span className="px-4 py-2 bg-[#2b325e] text-white text-sm font-semibold rounded-full shadow-lg">
                        Services
                    </span>
                </div>
                <h2 className="heading-text text-5xl md:text-6xl font-bold text-black mb-6 leading-tight" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                    Our <span className="heading-text bg-gradient-to-r from-[#2b325e] to-[#5a639c] bg-clip-text text-transparent" style={{ fontFamily: "Rajdhani, sans-serif" }}>Services</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Delivering trusted steel solutions with precision, strength, and reliability.
                </p>
            </div>

            {/* Services Grid */}
            <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-[25px]">
                {services.map((item, index) => (
                    <div
                        key={item.id}
                        className="product-card group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                        data-aos="fade-up" data-aos-duration="1500"
                    >
                        {/* Image Container */}
                        <div className="relative h-[300px] overflow-hidden rounded-t-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                            <img
                                src={item.image}
                                alt={item.productName}
                                className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            {/* Fallback placeholder */}
                            <div className="hidden w-full h-full bg-gray-100 items-center justify-center">
                                <div className="text-gray-400 text-center">
                                    <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                                    <p className="text-sm">Product Image</p>
                                </div>
                            </div>

                        </div>

                        {/* Content Box */}
                        <div className="p-6 relative">
                            {/* Animated background pattern */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[var(--brand-color)] transition-colors duration-300" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                                    {item.serviceName}
                                </h3>

                                 <p>
                                    {item.details}
                                </p>

                                {/* Animated underline */}
                                <div className="w-0 h-0.5 bg-[var(--brand-color)] mt-[15px] group-hover:w-full transition-all duration-500 mb-4"></div>

                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full transform group-hover:scale-150 group-hover:rotate-180 transition-all duration-700"></div>
                        <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-purple-400/10 to-blue-400/10 rounded-full transform group-hover:scale-125 group-hover:-rotate-90 transition-all duration-500"></div>


                    </div>

                ))}

            </div>
        </div>
    );
}