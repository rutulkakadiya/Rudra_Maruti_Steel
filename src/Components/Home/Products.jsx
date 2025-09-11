import React from "react";

export default function Products() {
    const products = [
        { id: 1, image: "/Images/hr_sheet.jpg", productName: "H.R. Coils and Sheets" },
        { id: 2, image: "/Images/chequered_plate.jpg", productName: "Chequered Plate" },
        { id: 3, image: "/Images/crca_coil.jpg", productName: "CRCA Coils and Sheets" },
    ];


    return (
        <div className="py-16 overflow-hidden relative">
            {/* Header Section */}
            <div className="overflow-hidden relative">
                <div
                    data-index="0"
                    className="text-center mb-16 transition-all duration-1000"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <div className="inline-block mb-6">
                        <span className="px-4 py-2 bg-[var(--brand-color)]/10 text-[var(--brand-color)] text-sm font-semibold rounded-full shadow-lg">
                            Sheet & Coil
                        </span>
                    </div>
                    <h2 className="heading-text text-5xl md:text-6xl font-bold text-black mb-3 leading-tight" style={{fontFamily: "Rajdhani, sans-serif"}}>
                        Our <span className="heading-text bg-gradient-to-r from-[#2b325e] to-[#5a639c] bg-clip-text text-transparent" style={{fontFamily: "Rajdhani, sans-serif"}}>Products</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover our premium range of high-quality steel products.
                    </p>
                </div>


                <img
                    className="custom-pulse h-[150px] absolute top-0 right-[-50px] md:h-[200px] opacity-70 transition-opacity duration-1000 hover:opacity-60"
                    src="/Images/product2.png"
                    alt="Product image"
                    data-aos="slide-left"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                    data-aos-easing="ease-out"
                />
            </div>

            {/* Products Grid */}
            <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((item, index) => (
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

                            {/* Floating badge */}
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                Premium Quality
                            </div>
                        </div>

                        {/* Content Box */}
                        <div className="p-6 relative">
                            {/* Animated background pattern */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[var(--brand-color)] transition-colors duration-300" style={{fontFamily: "Rajdhani, sans-serif"}}>
                                    {item.productName}
                                </h3>

                                {/* Animated underline */}
                                <div className="w-0 h-0.5 bg-[var(--brand-color)] group-hover:w-full transition-all duration-500 mb-4"></div>

                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full transform group-hover:scale-150 group-hover:rotate-180 transition-all duration-700"></div>
                        <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-purple-400/10 to-blue-400/10 rounded-full transform group-hover:scale-125 group-hover:-rotate-90 transition-all duration-500"></div>


                    </div>

                ))}

            </div>

            {/* Custom CSS for fadeInUp animation */}
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
                
                /* Initial state for animation */
                .product-card {
                    opacity: 0;
                }
            `}</style>


            <div className="relative w-full">
                <div
                    data-index="0"
                    className="text-center mb-16 transition-all duration-1000"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <center>
                        <button className="relative z-50 group mt-[100px] overflow-hidden bg-[var(--brand-color)] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 group-hover:shadow-lg transform group-hover:scale-105"
                            data-aos="fade-up" data-aos-duration="1500">
                            {/* Button shine effect */}
                            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            <span className="relative flex items-center justify-center gap-2">
                                View All Products
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </button>
                    </center>

                </div>


                <img
                    className="h-[150px] absolute top-[30px] left-[-50px] md:h-[200px] opacity-70 transition-opacity duration-1000 hover:opacity-60"
                    src="/Images/product_bg.png"
                    alt="Product image"
                    data-aos="slide-right"
                    data-aos-duration="1200"
                    data-aos-easing="ease-out"
                />
            </div>

            <style>{`
                /* Custom pulse animation */
                .custom-pulse {
                    animation: customPulse 3s infinite;
                }

                @keyframes customPulse {
                    0%, 100% {
                        transform: scale(1) rotate(0deg);
                        opacity: 0.7;
                    }
                    50% {
                        transform: scale(1.05) rotate(5deg);
                        opacity: 0.9;
                    }
                }

            `}</style>
        </div>
    );
}