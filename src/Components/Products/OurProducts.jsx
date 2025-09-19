import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function OurProducts() {

    const products = [
        {
            id: 1,
            image: "/Images/hr_sheet.jpg",
            productName: "H.R. Coils and Sheets",
            description: "Hot Rolled (H.R.) Coils and Sheets are produced by rolling steel at high temperatures, making them strong, durable, and versatile. They are widely used in construction, automotive, engineering, fabrication, and infrastructure projects. Known for their excellent weldability and formability, H.R. coils and sheets are ideal for applications requiring strength, flexibility, and cost-effectiveness.",
            thickness: "1.60mm to 30m",
            width: "1250, 1500, 1800, 1830, 2000, 2500",
            length: "2500, 5000, 6300, Packet, Customize length"
        },
        {
            id: 2,
            image: "/Images/chequered_plate.jpg",
            productName: "Chequered Plate",
            description: "Chequered Plates, also known as diamond or tread plates, are steel sheets with raised patterns that provide excellent slip resistance. They are commonly used in flooring, stair treads, ramps, walkways, and industrial platforms. Apart from ensuring safety, chequered plates are strong, durable, and easy to maintain, making them ideal for both structural and decorative applications.",
            thickness: "1.60mm to 4.00mm",
            width: "1250, 1500",
            length: "2500, 5000"
        },
        {
            id: 3,
            image: "/Images/crca_coil.jpg",
            productName: "CRCA Coils and Sheets",
            description: "Cold Rolled Close Annealed (CRCA) Coils and Sheets are made by processing Hot Rolled steel through cold rolling and annealing. This gives the steel a smooth surface, accurate dimensions, and good strength. CRCA is widely used in automobiles, appliances, furniture, and general engineering applications.",
            thickness: "0.80mm to 3.00mm",
            width: "1250, 1500, 1540",
            length: "2500, Packet, Customize length"
        },
        {
            id: 4,
            image: "/Images/gp_coil.jpg",
            productName: "G.P. Coils and Sheets",
            description: "Galvanized Plain (G.P.) Coils and Sheets are produced by coating cold rolled steel with a layer of zinc to enhance corrosion resistance and durability. They offer excellent strength, a smooth finish, and long-lasting performance even in harsh environments. G.P. coils and sheets are widely used in roofing, wall cladding, ducting, automotive panels, and general engineering applications.",
            thickness: "0.30mm to 3.00mm",
            width: "900, 1000, 1220, 1250, 1500",
            length: "1830, 2500, Customize length"
        },
        {
            id: 5,
            image: "/Images/gp_chequered_plate.jpg",
            productName: "GP Chequered Plate",
            description: "Galvanized Plain (G.P.) Chequered Plates are steel plates with a zinc coating and raised patterns that provide both corrosion resistance and slip resistance. They combine the durability of galvanization with the safety of anti-skid surfaces, making them ideal for flooring, stair treads, walkways, industrial platforms, and outdoor applications where protection against rust and safety are equally important.",
            thickness: "Upto 3.00mm",
            width: "1250, 1500",
            length: "2500, 5000, 6300, Customize length"
        },
        {
            id: 6,
            image: "/Images/galvalume_coil.jpg",
            productName: "Galvalume Coils and Sheets",
            description: "Galvalume Coils and Sheets are steel products coated with an alloy of aluminum and zinc, providing superior corrosion resistance, heat reflectivity, and durability. They are lightweight yet strong, offering a smooth surface finish and long service life even in harsh weather conditions. Widely used in roofing, wall cladding, panels, appliances, and industrial applications, Galvalume coils and sheets are a cost-effective solution for both structural and aesthetic needs.",
            thickness: "0.40mm to 1.20mm",
            width: "1220, 1440",
            length: "1830, 2500, Customize length"
        },
        {
            id: 7,
            image: "/Images/pre_painted_coil.jpg",
            productName: "Pre-Painted Coils and Sheets",
            description: "Pre-Painted Coils and Sheets are steel products coated with high-quality paint layers to enhance durability, corrosion resistance, and visual appeal. They are available in a wide range of colors, finishes, and textures, making them an ideal choice for roofing, wall cladding, facades, appliances, and decorative applications. With excellent weather resistance and long-lasting performance, pre-painted coils and sheets combine strength with aesthetics to meet both functional and design needs.",
            thickness: "0.30mm to 1.20mm",
            width: "1220, 1440",
            length: "Coil, Customize length Sheet"
        },
    ];


    const navigate = useNavigate('');
    const handleProduct = (product) => {
        navigate(`/detailedProduct`, { state: product });
    }

    return (
        <div>
            <div className="text-center pt-[100px]">
                <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6" data-aos="fade-up" data-aos-duration="1500">
                    <div className="w-8 sm:w-12 h-0.5 bg-[var(--brand-color)] rounded-full"></div>
                    <span
                        className="text-[var(--brand-color)] font-bold text-xs sm:text-sm tracking-widest uppercase"
                    >
                        Products
                    </span>
                    <div className="w-8 sm:w-12 h-0.5 bg-[var(--brand-color)] rounded-full"></div>
                </div>

                <h2
                    className="heading-text text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6"
                    data-aos="fade-up" data-aos-duration="1500" style={{ fontFamily: "Rajdhani, sans-serif" }}
                >Our
                    <span className="heading-text text-[var(--brand-color)]" style={{ fontFamily: "Rajdhani, sans-serif" }}> Products</span>
                </h2>
            </div>

            {/* Products Grid */}
            <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-[50px]">
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
                                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[var(--brand-color)] transition-colors duration-300" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                                    {item.productName}
                                </h3>

                                {/* Animated underline */}
                                <div className="w-0 h-0.5 bg-[var(--brand-color)] group-hover:w-full transition-all duration-500 mb-4"></div>

                            </div>

                            <button onClick={() => handleProduct(item)} className="relative z-50 cursor-pointer group mt-[10px] overflow-hidden bg-[var(--brand-color)] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 group-hover:shadow-lg transform group-hover:scale-105">
                                {/* Button shine effect */}
                                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <span className="relative flex items-center justify-center gap-2">
                                    View More
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full transform group-hover:scale-150 group-hover:rotate-180 transition-all duration-700"></div>
                        <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-purple-400/10 to-blue-400/10 rounded-full transform group-hover:scale-125 group-hover:-rotate-90 transition-all duration-500"></div>


                    </div>

                ))}

            </div>
        </div>
    )
}
