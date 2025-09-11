import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Header from '../../Common Components/Header';
import Whatsapp from '../../Common Components/Whatsapp';
import SteelFooter from '../../Common Components/Footer';

export default function DetailProducts() {
    const { state } = useLocation();
    console.log("data", state);

    return (
        <div>
            <Header />
            <Whatsapp />

            <div className="min-h-screen relative overflow-hidden">
                {/* Hero Section with Advanced Animations */}
                <div className="relative overflow-hidden pt-16 sm:pt-20">
                    <div className="relative z-10 w-[90%] sm:w-[85%] mx-auto py-10 sm:py-16 md:py-20">
                        <div className="text-center">
                            {/* Animated Badge */}
                            <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 group" data-aos="fade-up" data-aos-duration="1500">
                                <div className="w-8 sm:w-16 h-0.5 bg-black rounded-full group-hover:via-white/80 transition-all duration-500"></div>
                                <div className="inline-block">
                                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[var(--brand-color)] text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg">
                                        Product Details
                                    </span>
                                </div>
                                <div className="w-8 sm:w-16 h-0.5 bg-black rounded-full group-hover:via-white/80 transition-all duration-500"></div>
                            </div>

                            {/* Animated Title */}
                            <div className="relative mb-4 sm:mb-6" data-aos="fade-up" data-aos-duration="1500">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[var(--brand-color)] mb-3 sm:mb-4 relative z-10" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                                    {state?.productName}
                                </h1>
                                {/* Title Glow Effect */}
                                <div className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white/30 blur-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                                    {state?.productName}
                                </div>
                            </div>

                            <p className="text-sm sm:text-base md:text-lg text-black max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0" data-aos="fade-up" data-aos-duration="1500">
                                Premium Quality Steel Products Engineered for Excellence and Built for Your Industry Requirements
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content with Staggered Animations */}
                <div className="mainDiv grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 w-[90%] mx-auto py-10 sm:py-16 md:py-20 relative z-10">
                    {/* Enhanced Image Section */}
                    <div className="relative group" data-aos="fade-right" data-aos-duration="1500">
                        {/* Multiple Shadow Layers */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2b325e]/30 to-[#4a5568]/20 rounded-2xl sm:rounded-3xl blur-2xl transform group-hover:scale-110 transition-all duration-700 opacity-60"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#2b325e]/20 to-transparent rounded-2xl sm:rounded-3xl blur-xl transform group-hover:scale-105 transition-all duration-500 delay-100"></div>

                        <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transform hover:scale-[1.03] transition-all duration-500 border border-gray-100">
                            {/* Animated Border Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2b325e]/20 via-transparent to-[#2b325e]/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>

                            {/* Dynamic Overlay Effects */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2b325e]/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                            {/* Premium Badge with Animation */}
                            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-30 bg-gradient-to-r from-[#2b325e] to-[#4a5568] text-white px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                    <span>✨ Premium Quality</span>
                                </div>
                            </div>

                            <img
                                src={state?.image}
                                alt={state?.productName}
                                className="w-full h-64 sm:h-80 md:h-96 lg:h-[550px] object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                            />

                            {/* Corner Decorations */}
                            <div className="absolute top-0 left-0 w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-br from-[#2b325e]/10 to-transparent rounded-br-2xl sm:rounded-br-3xl"></div>
                            <div className="absolute bottom-0 right-0 w-10 sm:w-16 h-10 sm:h-16 bg-gradient-to-tl from-[#2b325e]/10 to-transparent rounded-tl-2xl sm:rounded-tl-3xl"></div>
                        </div>

                        {/* Floating Elements Around Image */}
                        <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-[#2b325e] to-[#4a5568] rounded-full opacity-80 animate-pulse"></div>
                        <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-tl from-[#2b325e]/60 to-transparent rounded-full animate-pulse delay-500"></div>
                    </div>

                    {/* Enhanced Content Section */}
                    <div className="space-y-6 sm:space-y-8 lg:space-y-10 flex items-center" data-aos="fade-left" data-aos-duration="1500">
                        <div>
                            {/* Enhanced Product Info Card */}
                            <div className="relative overflow-hidden transition-all duration-500">
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                                        {/* Animated Accent Bar */}
                                        <div className="w-1.5 sm:w-2 h-12 sm:h-16 md:h-20 bg-gradient-to-b from-[#2b325e] via-[#4a5568] to-[#2b325e] rounded-full relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse"></div>
                                        </div>
                                        <div>
                                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 leading-tight group-hover:text-[#2b325e] transition-colors duration-300" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                                                {state?.productName}
                                            </h1>
                                            <div className="w-24 sm:w-28 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-[#2b325e] to-[#4a5568] rounded-full mt-2 sm:mt-3 group-hover:w-32 sm:group-hover:w-36 md:group-hover:w-40 transition-all duration-500"></div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300 px-2 sm:px-0">
                                        {state?.description || "High-quality steel product manufactured with precision and excellence. Engineered to meet the most demanding industry standards and deliver superior performance for your critical projects and applications."}
                                    </p>
                                </div>
                            </div>

                            {/* Premium Action Buttons */}
                            <div className="flex flex-row gap-4 sm:gap-6 mt-6 sm:mt-8">
                                <Link to="/contactUs">
                                    <button className="group relative flex-1 bg-gradient-to-r from-[#2b325e] via-[#3d4574] to-[#2b325e] hover:from-[#1e2347] hover:to-[#1e2347] text-white font-bold py-3 sm:py-4 px-4 sm:px-6 md:px-10 rounded-xl sm:rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
                                        {/* Multiple Glow Effects */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#2b325e]/50 to-[#4a5568]/50 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                                        <span className="relative flex items-center justify-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base md:text-lg font-black">
                                            <svg className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                            Inquiry Now
                                        </span>
                                    </button>
                                </Link>

                                <a href="tel:+919876543210">
                                    <button className="group relative flex-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-700 hover:to-emerald-700 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 md:px-10 rounded-xl sm:rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
                                        {/* Button Effects */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/50 to-teal-400/50 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                                        <span className="relative flex items-center justify-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base md:text-lg font-black">
                                            <svg className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            Call Now
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ultra-Enhanced Specifications Table */}
            <div className="bg-white rounded-xl sm:rounded-2xl w-[90%] mb-16 sm:mb-20 md:mb-24 mx-auto shadow-xl sm:shadow-2xl overflow-hidden border border-gray-100 group hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500">
                {/* Gradient Header with Animation */}
                <div className="bg-gradient-to-r from-[#2b325e] via-[#3d4574] to-[#2b325e] p-6 sm:p-8 relative overflow-hidden">
                    {/* Animated Header Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>

                    <h2 className="relative text-xl sm:text-2xl md:text-3xl font-black text-white flex items-center gap-3 sm:gap-4" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                        <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-xl md:text-2xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                            📋
                        </div>
                        Product Specifications
                        <div className="ml-auto w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 bg-white/10 rounded-md sm:rounded-lg animate-pulse"></div>
                    </h2>
                </div>

                <div className="p-6 sm:p-8">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b-2 sm:border-b-3 border-[#2b325e]/20">
                                <td className="py-4 sm:py-6 px-2 sm:px-4 text-[#2b325e] font-black text-base sm:text-lg md:text-xl">Specification</td>
                                <td className="py-4 sm:py-6 px-2 sm:px-4 text-[#2b325e] font-black text-base sm:text-lg md:text-xl">Details</td>
                            </tr>
                        </thead>
                        <tbody>
                            {state?.thickness && (
                                <tr className="border-b border-gray-100 hover:bg-[#2b325e]/5 hover:scale-[1.01] sm:hover:scale-[1.02] transition-all duration-300 group">
                                    <td className="py-4 sm:py-6 px-2 sm:px-4 font-bold text-gray-700 text-sm sm:text-base group-hover:text-[#2b325e] transition-colors duration-300">
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-[#2b325e] to-[#4a5568] rounded-full group-hover:scale-125 group-hover:rotate-180 transition-all duration-300"></div>
                                            <span>Thickness Range</span>
                                        </div>
                                    </td>
                                    <td className="py-4 sm:py-6 px-2 sm:px-4 text-gray-600 font-semibold text-sm sm:text-base group-hover:text-gray-800 transition-colors duration-300">{state.thickness}</td>
                                </tr>
                            )}
                            {state?.width && (
                                <tr className="border-b border-gray-100 hover:bg-[#2b325e]/5 hover:scale-[1.01] sm:hover:scale-[1.02] transition-all duration-300 group">
                                    <td className="py-4 sm:py-6 px-2 sm:px-4 font-bold text-gray-700 text-sm sm:text-base group-hover:text-[#2b325e] transition-colors duration-300">
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-[#4a5568] to-[#2b325e] rounded-full group-hover:scale-125 group-hover:rotate-180 transition-all duration-300"></div>
                                            <span>Width Options (mm)</span>
                                        </div>
                                    </td>
                                    <td className="py-4 sm:py-6 px-2 sm:px-4 text-gray-600 font-semibold text-sm sm:text-base group-hover:text-gray-800 transition-colors duration-300">{state.width}</td>
                                </tr>
                            )}
                            {state?.length && (
                                <tr className="border-b border-gray-100 hover:bg-[#2b325e]/5 hover:scale-[1.01] sm:hover:scale-[1.02] transition-all duration-300 group">
                                    <td className="py-4 sm:py-6 px-2 sm:px-4 font-bold text-gray-700 text-sm sm:text-base group-hover:text-[#2b325e] transition-colors duration-300">
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-[#2b325e] to-[#6366f1] rounded-full group-hover:scale-125 group-hover:rotate-180 transition-all duration-300"></div>
                                            <span>Length Options (mm)</span>
                                        </div>
                                    </td>
                                    <td className="py-4 sm:py-6 px-2 sm:px-4 text-gray-600 font-semibold text-sm sm:text-base group-hover:text-gray-800 transition-colors duration-300">{state.length}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <SteelFooter />

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fade-in-left {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes fade-in-right {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                    opacity: 0;
                }
                
                .animate-fade-in-left {
                    animation: fade-in-left 0.8s ease-out forwards;
                    opacity: 0;
                }
                
                .animate-fade-in-right {
                    animation: fade-in-right 0.8s ease-out forwards;
                    opacity: 0;
                }

                @media (max-width: 640px) {
                    .mainDiv {
                        grid-template-columns: 1fr;
                    }
                    .group-hover\\:scale-110 {
                        transform: scale(1.05);
                    }
                    .group-hover\\:rotate-3 {
                        transform: rotate(1deg);
                    }
                    .group-hover\\:translate-x-2 {
                        transform: translateX(1px);
                    }
                }
            `}</style>
        </div>
    )
}