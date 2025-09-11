import React, { useEffect, useState } from 'react'
import Header from "../../Common Components/Header"
import Footer from "../../Common Components/Footer"
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import Whatsapp from '../../Common Components/Whatsapp';
import { Images } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Sample gallery data with titles and descriptions
  const galleryImages = [
    {
      id: 1,
      src: "/Images/gallery1.webp",
      title: "Maruti Steel – Trusted Supplier of HR Coils",
      description: "At Maruti Steel, we provide high-quality Hot Rolled (HR) Coils designed for various industrial applications. With modern infrastructure and efficient logistics, we ensure reliable supply and superior product standards.",
    },
    {
      id: 2,
      src: "/Images/product1.png",
      title: "HR Coils",
      description: "High-quality Hot Rolled Coils for industrial applications.",
    },
    {
      id: 3,
      src: "/Images/product2.png",
      title: "CR Sheets",
      description: "Cold Rolled Sheets with superior surface finish.",
    },
    {
      id: 4,
      src: "/Images/product3.png",
      title: "GP Sheets",
      description: "Galvanized Plain Sheets for corrosion resistance.",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Whatsapp />
      <div className="pt-[100px] mx-auto px-4 sm:px-6 lg:px-8 py-6 overflow-hidden">
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
                    Gallery
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

                <div className="flex items-center gap-3 text-lg text-gray-700 font-medium">
                  <Images className="text-[var(--brand-color)] text-2xl" />
                  <span>Gallery</span>
                </div>

                <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-md">
                  Explore our gallery to see the wide range of products and projects we’ve delivered with quality and precision.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center items-center">
            <img
              className="custom-pulse h-[150px] md:h-[200px] absolute right-[-50px] object-contain opacity-70 transition-opacity duration-1000 hover:opacity-60"
              src="/Images/product2.png"
              alt="Featured steel product"
              data-aos="slide-left"
              data-aos-duration="1500"
              data-aos-easing="ease-out"
            />
            <div className="absolute right-[-50px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#2b325e]/10 rounded-full -z-10 animate-spin-slow"></div>
          </div>
        </div>
      </div>

      <div className="w-[95%] px-4 mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer aspect-[4/3]`}
              onClick={() => openModal(image, index)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative w-full h-full p-2">
                {isLoading ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 animate-pulse rounded-xl">
                    <span>Loading...</span>
                  </div>
                ) : (
                  <div className="relative w-full h-full overflow-hidden rounded-xl border border-gray-100">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-[var(--brand-color)] text-white px-4 py-2 rounded-full font-bold flex items-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-4 h-4 mr-2" />
                    View
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[var(--brand-color)] transition-colors duration-300">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-60 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-60 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-60 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[90vh] w-full">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-[70vh] bg-gray-100 flex items-center justify-center">
                {isLoading ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 animate-pulse">
                    <span>Loading...</span>
                  </div>
                ) : (
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-900">{selectedImage.title}</h3>
                <p className="text-gray-600 text-sm">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
      <style jsx>{`
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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}