import React from 'react';
import { Phone, HardHat, Wrench, ArrowRight, Calendar, Users } from 'lucide-react';
import TiltedCard from '../../Common Components/TiltedCard';

export default function About() {
    return (
        <div className="min-h-screen">

            
            {/* Main Content */}
            <main className="w-[95%] mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8" data-aos="fade-right" data-aos-duration="1500">
                        {/* About Section Header */}
                        <div>
                            <p className="text-[var(--brand-color)] font-semibold mb-2">About Maruti Steel</p>
                            <h1 className="heading-text text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#2b325e] to-[#5a639c] bg-clip-text text-transparent leading-tight mb-3" style={{fontFamily: "Rajdhani, sans-serif"}}>
                                Where Quality Serve
                            </h1>
                            <div className="w-16 h-1 bg-[var(--brand-color)] mb-3"></div>
                        </div>

                        {/* Company Description */}
                        <p className="text-[16px] text-gray-600 leading-relaxed">
                            Maruti Steel is a trusted name in the steel industry, offering a wide range of
                            high-quality steel products. With years of experience, we specialize in supplying
                            H.R. Sheet/Coil, C.R.C.A Sheet/Coil, G.P. Sheet/Coil, and Cut-to-Length Coil.
                            Our commitment towards quality, reliability, and customer satisfaction makes us
                            a preferred choice for businesses across India.
                        </p>

                        {/* Legacy Section */}
                        <div className="space-y-6">
                            <div className="flex items-start space-x-3">
                                <Calendar className="h-8 w-8 text-[var(--brand-color)] flex-shrink-0" />
                                <div>
                                    <h3 className="heading-text font-bold text-gray-900 text-lg" style={{fontFamily: "Rajdhani, sans-serif"}}>Foundation Year</h3>
                                    <p className="text-gray-600">Established in <strong>1994</strong> with a vision for quality and sustainable growth.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Users className="h-8 w-8 text-[var(--brand-color)] flex-shrink-0" />
                                <div>
                                    <h3 className="heading-text font-bold text-gray-900 text-lg" style={{fontFamily: "Rajdhani, sans-serif"}}>Leadership</h3>
                                    <p className="text-gray-600">
                                        Founded by <strong>Mr. Dilipbhai M Patel</strong> and Co-Founded by <strong>Mr. Kashyap D Patel</strong>.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <HardHat className="h-8 w-8 text-[var(--brand-color)] flex-shrink-0" />
                                <div>
                                    <h3 className="heading-text font-bold text-gray-900 text-lg" style={{fontFamily: "Rajdhani, sans-serif"}}>30+ Years Experience</h3>
                                    <p className="text-gray-600">Three decades of excellence and innovation in the steel industry.</p>
                                </div>
                            </div>
                        </div>


                        {/* CTA and Contact */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-8">


                            <button className="relative z-50 group overflow-hidden bg-[var(--brand-color)] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 group-hover:shadow-lg transform group-hover:scale-105">
                                {/* Button shine effect */}
                                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <span className="relative flex items-center justify-center gap-2">
                                    Contact Us
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </button>

                            <div className="flex items-center space-x-3">
                                <Phone className="h-6 w-6 text-[var(--brand-color)]" />
                                <div>
                                    <p className="text-sm text-gray-600">Call us for help</p>
                                    <p className="font-bold text-gray-900 text-lg">+91 98242 40010</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="relative flex justify-center" data-aos="fade-left" data-aos-duration="1500">
                        {/* <img className='rounded-[15px] shadow-2xl' src="/Images/about.jpeg" alt="Maruti Steel" /> */}


                        <TiltedCard
                            imageSrc="/Images/about.jpeg"
                            altText=""
                            captionText="About Us"
                            containerHeight="400px"
                            containerWidth="100%"
                            imageHeight="100%"
                            imageWidth="100%"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                        />

                    </div>
                </div>
            </main>
        </div>
    );
}
