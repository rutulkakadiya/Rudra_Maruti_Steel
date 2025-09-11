import React, { useEffect, useRef, useState } from 'react';
import { Users, Calendar, Building2, ArrowRight, Factory, Shield } from 'lucide-react';

const About = () => {
  const aboutRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            if (index) {
              setVisibleItems(prev => new Set([...prev, parseInt(index)]));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20 relative overflow-hidden">

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          data-index="0"
          className={`text-center mb-16 transition-all duration-1000`} data-aos="fade-up" data-aos-duration="1000"
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-[var(--brand-color)] text-white text-sm font-semibold rounded-full shadow-lg">
              About Our Company
            </span>
          </div>
          <h2 className="heading-text text-5xl md:text-6xl font-bold text-black mb-6 leading-tight" style={{ fontFamily: "Rajdhani, sans-serif" }}>
            About <span className="heading-text bg-gradient-to-r from-[#2b325e] to-[#5a639c] bg-clip-text text-transparent" style={{ fontFamily: "Rajdhani, sans-serif" }}>Maruti Steel</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Three decades of excellence, innovation, and unwavering commitment to quality steel solutions
          </p>
        </div>

      

        {/* Main Content - Image & Content Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[600px]">
          {/* Left Side - Creative Image Design */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700"
                data-aos="fade-right"
                data-aos-duration="1500">
                <img
                  src="/Images/about_us.jpeg"
                  alt="Steel Manufacturing Industry"
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-bold mb-1">Steel Excellence</h4>
                  <p className="text-sm opacity-90">Quality Manufacturing Since 1994</p>
                </div>
              </div>

              <div className="absolute top-3 -right-8 bg-white rounded-full p-3 shadow-lg animate-bounce">
                <Factory className="w-6 h-6 text-[var(--brand-color)]" />
              </div>
              <div className="absolute bottom-3 -left-8 bg-white rounded-full p-3 shadow-lg animate-bounce delay-300">
                <Shield className="w-6 h-6 text-[var(--brand-color)]" />
              </div>
            </div>


          </div>

          {/* Right Side - Content */}
          <div
            data-index="2"
            className={`flex flex-col justify-center`}
            data-aos="fade-left" data-aos-duration="1000"
          >
            {/* Company Story Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-[var(--brand-color)] rounded-full flex items-center justify-center shadow-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "Rajdhani, sans-serif" }}>Our Legacy</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong>Established in 1994</strong>, we are committed to providing <strong>quality steel solutions</strong> and building <strong>lasting relationships</strong> with our customers.
              </p>
            </div>

            {/* Timeline Cards */}
            <div className="space-y-6">
              {/* Foundation */}
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-[var(--brand-color)] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    1994
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--brand-color)] transition-colors" style={{ fontFamily: "Rajdhani, sans-serif" }}>Foundation Year</h4>
                    <p className="text-gray leading-relaxed">
                      <strong>Maruti Steel was established</strong> with a vision for <strong>quality</strong> and <strong>sustainable growth</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Leadership */}
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-100">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-[var(--brand-color)] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--brand-color)] transition-colors" style={{ fontFamily: "Rajdhani, sans-serif" }}>Leadership</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Founded by <strong className="font-semibold text-[var(--brand-color)]">Mr. Dilipbhai M Patel</strong> and Co-Founded by <strong className="font-semibold text-[var(--brand-color)]">Mr. Kashyap D Patel</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 text-black">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-[var(--brand-color)] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-[var(--brand-color)] transition-colors" style={{ fontFamily: "Rajdhani, sans-serif" }}>30+ Years Experience</h4>
                    <p className="leading-relaxed">
                      <strong>Three decades</strong> of <strong>excellence</strong> and <strong>innovation</strong> in the steel industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group bg-[var(--brand-color)] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;