import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        setContentVisible(false);
        setTimeout(() => {
          setContentVisible(true);
        }, 400);
        return (prev + 1) % slides.length;
      });
    }, 8000); // Slower auto-slide: 8 seconds

    return () => clearInterval(interval);
  }, []);

  // Trigger content animation when slide changes
  useEffect(() => {
    setContentVisible(false);
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const slides = [

    {
      id: 1,
      title: "Excellence in Every Product",
      subtitle: "Quality is our Habit",
      description: "Uncompromising quality standards in H.R., C.R.C.A., and G.P. sheets",
      bgImage: "/Images/slide2.jpg",
      redirectUrl: "/products",
      accentColor: 'yellow-400',
    },
    {
      id: 2,
      title: "Where Quality Serves",
      subtitle: "Premium Steel Solutions",
      description: "Delivering excellence in steel manufacturing since 1994",
      bgImage: "/Images/slide1.jpg",
      redirectUrl: "/products",
      accentColor: 'blue-400',
    },
    {
      id: 3,
      title: "Trusted by Industry Leaders",
      subtitle: "Your Reliable Partner",
      description: "Serving customers with integrity and transparency for over 25 years",
      bgImage: "/Images/slide3.jpg",
      redirectUrl: "/products",
      accentColor: 'green-400',
    },
  ];

  const nextSlide = () => {
    setContentVisible(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 400);
  };

  const prevSlide = () => {
    setContentVisible(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, 400);
  };

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      setContentVisible(false);
      setTimeout(() => {
        setCurrentSlide(index);
      }, 1000);
    }
  };

  const handleExploreClick = (url) => {
    window.location.href = url;
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[70vh] overflow-hidden"
    >
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
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

        .heading-animate {
          animation: slideInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .content-animate {
          animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .button-animate {
          animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          animation-delay: 0.8s;
          opacity: 0;
        }

        .content-hidden {
          opacity: 0;
        }
      `}</style>

      <div className="relative w-full h-[65vh] sm:h-[80vh] md:h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide
              ? 'opacity-100 scale-100 z-10'
              : 'opacity-0 scale-105 pointer-events-none'
              }`}
          >
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-5000 ease-in-out"
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                  transform: index === currentSlide ? 'scale(1.03)' : 'scale(1.0)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <div className="relative z-30 flex items-center justify-start h-full px-4 sm:px-6 md:px-8 lg:px-12 pt-12 sm:pt-16">
              <div className="text-left text-white">
                <div className="mb-4 sm:mb-6">
                  <h1 className={`text-xl xs:text-3xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-2 sm:mb-4 leading-tight tracking-tight ${contentVisible && index === currentSlide ? 'heading-animate' : 'content-hidden'
                    }`}>
                    <span
                      className="heading-text block bg-gradient-to-r from-[#c3c4d5] via-[#8e90a6] to-[#2b325e] bg-clip-text text-transparent"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    >
                      {slide.title}
                    </span>


                  </h1>
                  <h2 className={`text-sm xs:text-lg sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-4 text-white tracking-wide ${contentVisible && index === currentSlide ? 'content-animate' : 'content-hidden'
                    }`}>
                    {slide.subtitle}
                  </h2>
                  <div className={`w-12 sm:w-16 h-0.5 bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)] rounded-full mb-2 sm:mb-4 mx-0 ${contentVisible && index === currentSlide ? 'content-animate' : 'content-hidden'
                    }`}></div>
                  <p className={`text-xs text-[16px] sm:text-sm md:text-base lg:text-lg text-white mb-4 sm:mb-6 leading-relaxed ${contentVisible && index === currentSlide ? 'content-animate' : 'content-hidden'
                    }`}>
                    {slide.description}
                  </p>
                </div>

                {index === currentSlide && (
                  <div className={`flex justify-start gap-2 sm:gap-3 button-animate ${contentVisible ? '' : 'content-hidden'
                    }`}>
                    <button
                      onClick={() => handleExploreClick(slide.redirectUrl)}
                      className="group bg-[var(--brand-color)] text-white px-4 xs:px-6 py-2 xs:py-3 rounded-lg font-semibold text-xs sm:text-sm flex items-center space-x-2 transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    >
                      <span>Explore Products</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 z-20 border border-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 z-20 border border-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
        </button>

        <div className="absolute bottom-2 sm:bottom-4
    left-1/2 sm:left-auto sm:right-4
    transform -translate-x-1/2 sm:translate-x-0
    flex flex-row justify-center space-x-2 z-20">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-16 xs:w-20 h-10 xs:h-14 rounded-lg overflow-hidden transition-all duration-300 ${index === currentSlide
                ? 'ring-1 ring-blue-400 shadow-md scale-105'
                : 'ring-1 ring-white/30 hover:ring-white/50 hover:scale-105'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-60"></div>
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 ${index === currentSlide
                  ? `bg-[var(--brand-color)]`
                  : 'bg-white/30'
                  }`}
              ></div>
            </button>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-black/30 to-black/10 z-20">
          <div
            className="h-full bg-[var(--brand-color)] transition-all duration-500 ease-linear"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;