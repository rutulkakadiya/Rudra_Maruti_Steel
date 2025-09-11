import { ChevronUp } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function SteelFooter() {
  const [currentYear] = useState(new Date().getFullYear());
  const [hoveredSocial, setHoveredSocial] = useState(null);

  // Animate on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const footerElements = document.querySelectorAll('.footer-animate');
    footerElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const quickLinks = [
    { name: 'Home', href: '#about' },
    { name: 'Company Profile', href: '#products' },
    { name: 'Products', href: '#services' },
    { name: 'Gallery', href: '#quality' },
    { name: 'E-Brochure', href: '#projects' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const products = [
    { name: 'H.R. Coils and Sheets', href: '#sheets' },
    { name: 'Chequered Plate', href: '#coils' },
    { name: 'CRCA Coils and Sheets', href: '#cut-length' },
    { name: 'G.P. Coils and Sheets', href: '#galvanized' },
    { name: 'GP Chequered Plate', href: '#stainless' },
    { name: 'Galvalume Coils and Sheets', href: '#custom' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: '#linkedin',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#instagram',
      icon: (
        <svg className="w-6 h-6 text-white opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r="1.2" />
        </svg>

      )
    }
  ];

  return (
    <>
      <footer className="relative text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--brand-color)] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1d4ed8] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[var(--brand-color)] rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Steel Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        rgba(255,255,255,0.1) 2px,
                        rgba(255,255,255,0.1) 4px
                    ), repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 2px,
                        rgba(255,255,255,0.1) 2px,
                        rgba(255,255,255,0.1) 4px
                    )`
          }}></div>
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 pt-20 pb-8">
          <div className="w-[95%] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

              {/* Company Info */}
              <div className="footer-animate lg:col-span-1">
                <div className="mb-8">
                  <div className="mb-8">
                    <img className="h-[50px] w-[200px]" src="/Images/logo.png" alt="" />
                  </div>
                  <p className="text-black mb-6 leading-relaxed">
                    Leading steel trader with 30+ years of excellence in delivering premium quality steel products and solutions nationwide.                  </p>
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-black text-sm mb-4 mt-5">Follow Us</p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="group relative w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[var(--brand-color)] transition-all duration-300 transform hover:scale-110"
                        onMouseEnter={() => setHoveredSocial(index)}
                        onMouseLeave={() => setHoveredSocial(null)}
                      >
                        <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {social.icon}
                        </div>
                        {hoveredSocial === index && (
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
                            {social.name}
                          </div>
                        )}
                      </a>
                    ))}
                  </div>
                </div>

              </div>

              {/* Quick Links */}
              <div className="footer-animate">
                <h4 className="heading-text text-lg font-bold text-black mb-6 relative">
                  Quick Links
                  <div className="absolute bottom-[-8px] left-0 w-12 h-0.5 bg-gradient-to-r from-[var(--brand-color)] to-[#1d4ed8] rounded-full"></div>
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-black hover:text-[var(--brand-color)] transition-all duration-300 flex items-center group"
                      >
                        <div className="w-0 h-0.5 bg-[var(--brand-color)] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300 rounded-full"></div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products */}
              <div className="footer-animate">
                <h4 className="heading-text text-lg font-bold text-black mb-6 relative">
                  Products
                  <div className="absolute bottom-[-8px] left-0 w-12 h-0.5 bg-gradient-to-r from-[var(--brand-color)] to-[#1d4ed8] rounded-full"></div>
                </h4>
                <ul className="space-y-3">
                  {products.map((product, index) => (
                    <li key={index}>
                      <a
                        href={product.href}
                        className="text-black hover:text-[var(--brand-color)] transition-all duration-300 flex items-center group"
                      >
                        <div className="w-0 h-0.5 bg-[var(--brand-color)] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300 rounded-full"></div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{product.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter & Social */}
              <div className="footer-animate">
                <h4 className="heading-text text-lg font-bold text-black mb-6 relative">
                  Address
                  <div className="absolute bottom-[-8px] left-0 w-12 h-0.5 bg-gradient-to-r from-[var(--brand-color)] to-[#1d4ed8] rounded-full"></div>
                </h4>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center group cursor-pointer">
                    <div className="w-10 h-10 px-3 bg-[var(--brand-color)]/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[var(--brand-color)]/30 transition-colors duration-300">
                      <svg className="w-5 h-5 text-[var(--brand-color)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-black text-sm">Maruti Steel Plot. No.-1, 3-Rani industrial area, Sarvay no.17, B/h. Purine furniture, Sahjanand marble`s street, Rajkot-Gondal highway, VAVDI (RAJKOT) 360004.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center group cursor-pointer">
                    <div className="w-10 h-10 bg-[var(--brand-color)]/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[var(--brand-color)]/30 transition-colors duration-300">
                      <svg className="w-5 h-5 text-[var(--brand-color)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-black text-sm">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-center group cursor-pointer">
                    <div className="w-10 h-10 px-3 bg-[var(--brand-color)]/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[var(--brand-color)]/30 transition-colors duration-300">
                      <svg className="w-5 h-5 text-[var(--brand-color)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-black text-sm">steel_maruti@yahoo.com</p>
                    </div>
                  </div>
                </div>


              </div>
            </div>

            <div className="footer-animate border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <p className="text-black text-sm">
                    © 2025 Maruti Steel. All rights reserved.
                  </p>
                </div>
                <div className="flex space-x-6">
                  <p className="text-black text-sm">
                    Developed and Designed By <a className="text-[var(--brand-color)] font-bold" href="https://www.rudrabranding.com">Rudra Branding</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-4 h-4 bg-[var(--brand-color)]/20 rounded-full animate-ping"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-[#1d4ed8]/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-10 w-3 h-3 bg-[var(--brand-color)]/15 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>

        {/* Custom Styles */}
        <style>{`
                .footer-animate {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .footer-animate.animate-fade-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .footer-animate:nth-child(1) { transition-delay: 0.1s; }
                .footer-animate:nth-child(2) { transition-delay: 0.2s; }
                .footer-animate:nth-child(3) { transition-delay: 0.3s; }
                .footer-animate:nth-child(4) { transition-delay: 0.4s; }
                .footer-animate:nth-child(5) { transition-delay: 0.5s; }

                .heading-text {
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    letter-spacing: -0.025em;
                }

                /* Custom scrollbar for newsletter input */
                input:focus {
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }

                /* Gradient animation for floating elements */
                @keyframes gradient-shift {
                    0%, 100% { 
                        background: var(--brand-color); 
                    }
                    50% { 
                        background: #1d4ed8; 
                    }
                }

                .animate-gradient {
                    animation: gradient-shift 3s ease-in-out infinite;
                }
            `}</style>


      </footer>
      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-[13%] right-4 w-14 h-14 bg-[var(--brand-color)] text-white rounded-full flex items-center justify-center shadow-2xl z-50`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </>
  );
}