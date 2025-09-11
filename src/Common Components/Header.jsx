import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Company Profile', href: '/companyProfile' },
    { name: 'Products', href: '/products' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'E-Brochure', href: '/ebrochure' },
    { name: 'Contact Us', href: '/contactUs' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white backdrop-blur-sm py-4'
      }`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo Section */}
          <div className="flex items-center space-x-3">
            <div className={`flex items-center space-x-3 transition-all duration-300 ${scrolled ? 'transform scale-90' : 'transform scale-100'
              }`}>
              {/* Logo with better visibility */}
              <div className={`relative p-2 rounded-lg transition-all duration-300`}>
                <a href="/">
                  <img
                    className='h-[50px] w-auto object-contain filter'
                    src="/Images/logo.png"
                    alt="Maruti Steel Logo"
                  />
                </a>
              </div>

            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 md:space-x-3 lg:space-x-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-bold transition-all duration-300 hover:scale-105 relative group ${isActive
                    ? 'text-[var(--brand-color)] scale-105 font-semibold'
                    : scrolled
                    ? 'text-gray-700 hover:text-[var(--brand-color)]'
                    : 'text-black hover:text-[var(--brand-color)] drop-shadow-sm'
                    }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-[var(--brand-color)]' : 'bg-[var(--brand-color)]'
                    } ${isActive ? 'w-full' : ''}`}></span>
                </a>
              );
            })}
          </div>

          {/* Enhanced Contact Info */}
          <div className="hidden xl:flex items-center space-x-4">
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${scrolled
                ? 'text-gray-700 hover:text-[var(--brand-color)] bg-gray-100 hover:bg-gray-200'
                : 'text-white hover:text-blue-300 bg-white/10 hover:bg-white/20'
                }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-white/20 overflow-hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-gray-700 hover:text-[var(--brand-color)] hover:bg-blue-50 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${location.pathname === item.href ? 'text-[var(--brand-color)] bg-blue-50 font-semibold' : ''}`}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+91 98242 40010</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">steel_maruti@yahoo.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;