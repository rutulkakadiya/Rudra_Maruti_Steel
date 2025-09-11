import React from 'react';
import Header from '../../Common Components/Header';
import { FaBuilding } from 'react-icons/fa';
import { Building } from 'lucide-react';
import About from './About';
import OurJourney from './OurJourney';
import OurMission from './OurMission';
import Footer from '../../Common Components/Footer'
import Whatsapp from '../../Common Components/Whatsapp';

const CompanyProfile = () => {
  return (
    <div className="overflow-hidden">

      <Header />
      <Whatsapp />

      <div className="mt-[100px] mx-auto px-4 sm:px-0 py-6">

        {/* Added items-center to grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-[50px]">

          {/* Left Content */}
          <div className="space-y-8 lg:pr-8 flex flex-col justify-center h-full">

            <div className='ps-[5%]'>
              <nav className="mb-8" data-aos="fade-right" data-aos-duration="1500">
                <div className="flex items-center space-x-2 text-sm font-medium text-gray-600">
                  <span className="transition-colors duration-300 hover:text-[var(--brand-color)] cursor-pointer">
                    Home
                  </span>
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-900 font-semibold cursor-pointer">
                    Company Profile
                  </span>
                </div>
              </nav>

              <div className="space-y-6" data-aos="fade-right" data-aos-duration="1500">
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="heading-text inline-block transform hover:scale-105 transition-transform duration-300" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                    <span className="heading-text bg-gradient-to-r from-[#2b325e] to-[#5a639c] bg-clip-text text-transparent" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                      Maruti
                    </span> Steel
                  </span>
                </h1>

                {/* Subtitle with Icon */}
                <div className="flex items-center gap-3 text-lg text-gray-700 font-medium">
                  <Building className="text-[var(--brand-color)] text-2xl" />
                  <span>Company Profile</span>
                </div>

                <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-md" data-aos="fade-up" data-aos-duration="1500">
                  Crafting excellence with precision and strength since 1996. Discover our legacy of quality and innovation.
                </p>
              </div>
            </div>

          </div>

          {/* Right Image */}
          <div className="relative flex justify-center items-center">

            <img
              className="custom-pulse h-[150px] absolute right-[-50px] md:h-[200px] opacity-70 transition-opacity duration-1000 hover:opacity-60"
              src="/Images/product2.png"
              alt="Product image"
              data-aos="slide-left"
              data-aos-duration="1500"
              data-aos-easing="ease-out"
            />

            <div className="absolute right-[-50px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[var(--brand-color)]/10 rounded-full -z-10 animate-spin-slow"></div>

          </div>
        </div>

      </div>

      <style jsx>{`

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

      <About />
      <OurJourney />
      <OurMission />
      <Footer />
    </div>
  );
};

export default CompanyProfile;

