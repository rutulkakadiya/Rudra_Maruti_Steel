import React, { useState, useEffect } from 'react';
import { Download, FileText, Eye, Star, Users, Award, Play, Pause, Volume2, VolumeX, ArrowRight, Sparkles, Zap, Shield, Target, ChevronDown, CheckCircle } from 'lucide-react';
import { div } from 'motion/react-client';
import Header from '../../Common Components/Header';
import Footer from '../../Common Components/Footer';
import Whatsapp from '../../Common Components/Whatsapp';

const EBrochure = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [downloadCount, setDownloadCount] = useState(1247);
  const [selectedFormat, setSelectedFormat] = useState('pdf');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "20+ Pages",
      description: "Comprehensive product showcase with detailed specifications",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "HD Images",
      description: "Crystal clear product photography in 4K resolution",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Latest Collection",
      description: "2024-25 newest products and innovations",
      color: "[from-emerald-500 to-teal-600]"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Reviews",
      description: "Authentic testimonials from satisfied clients",
      color: "from-orange-500 to-red-600"
    }
  ]

  const handleDownload = (format) => {
    setIsDownloading(true);
    setDownloadProgress(0);

    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          setDownloadCount(prev => prev + 1);
          const link = document.createElement('a');
          link.href = '/zanord_bath.pdf';
          link.download = `maruti-steel-brochure-${format}.${format === 'pdf' ? 'pdf' : format === 'ppt' ? 'pptx' : 'zip'}`;
          link.click();
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const handlePreview = () => {
    window.open('/zanord_bath.pdf', '_blank');
  };

  const handleEmailSubmit = () => {
    if (email && phone) {
      handleDownload(selectedFormat);
      setShowForm(false);
      setEmail('');
      setPhone('');
    }
  };

  return (
    <div>
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
                    E-Brochure
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
                  <FileText className="text-[var(--brand-color)] text-2xl" />
                  <span>E-Brochure</span>
                </div>

                <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-md">
                  Download our brochure to explore products, specifications, and services in detail.
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
            <div className="absolute right-[-50px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[var(--brand-color)]/10 rounded-full -z-10 animate-spin-slow"></div>
          </div>
        </div>
      </div>


      <div className="min-h-screen overflow-hidden">
        {/* Floating Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#2b325e]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-[#2b325e]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#2b325e]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="w-[95%] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">


                {/* Main Title */}
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-[#2b325e]/10 rounded-full">
                    <Sparkles className="w-4 h-4 text-[#2b325e] mr-2" />
                    <span className="text-[#2b325e] font-semibold text-sm">Premium Digital Catalog</span>
                  </div>

                  <h1 className="heading-text text-5xl font-black text-[var(--brand-color)] leading-tight" style={{fontFamily: "Rajdhani, sans-serif"}}>
                    Brochure
                    <span className="heading-text text-black" style={{fontFamily: "Rajdhani, sans-serif"}}> Preview</span>
                  </h1>

                  <div className="flex items-center gap-4 text-xl text-gray-700">
                    <div className="w-2 h-2 bg-[#2b325e] rounded-full animate-pulse"></div>
                    <span className="font-medium">Interactive E-Brochure</span>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                    Discover our complete range of premium steel products with detailed specifications, pricing, and technical documentation in our comprehensive digital catalog.
                  </p>
                </div>


                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setShowForm(true)}
                    disabled={isDownloading}
                    className="group relative px-8 py-4 bg-gradient-to-r from-[#2b325e] to-[#2b325e] text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#2b325e]/25 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <Download className="w-5 h-5" />
                      {isDownloading ? `Downloading... ${Math.round(downloadProgress)}%` : 'Download Brochure'}
                    </span>
                    {isDownloading && (
                      <div className="absolute bottom-0 left-0 h-1 bg-white/30 transition-all duration-300" style={{ width: `${downloadProgress}%` }}></div>
                    )}
                  </button>

                </div>
              </div>

              {/* Right Content - Interactive Preview */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  {/* Phone-like frame */}
                  <div className="bg-white rounded-2xl p-6 shadow-inner">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Preview Content */}
                    <div
                      className="h-80 bg-gradient-to-br from-[#2b325e]/10 to-[#0547ff]/10 rounded-xl p-6 cursor-pointer group relative overflow-hidden"
                      style={{
                        backgroundImage: "url('/Images/product1.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                      }}
                      onClick={handlePreview}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <div class="absolute inset-0 bg-black/30"></div>

                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2b325e]/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                        <div className="mb-6">
                          <h3 className="heading-text text-2xl font-bold text-white mb-2" style={{fontFamily: "Rajdhani, sans-serif"}}>Premium Steel Products</h3>
                          <div className="w-16 h-1 bg-[#2b325e] mx-auto rounded-full"></div>
                        </div>

                        <div className={`transition-all duration-500 ${isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                          <div className="bg-[#2b325e] text-white px-6 py-3 rounded-full font-bold flex items-center shadow-xl">
                            <Eye className="w-5 h-5 mr-2" />
                            Click to Preview
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer indicators */}
                    <div className="flex justify-center mt-4 gap-2">
                      {[0, 1, 2, 3].map(i => (
                        <div key={i} className={`w-2 h-2 rounded-full ${activeTab === i ? 'bg-[#2b325e]' : 'bg-gray-300'} transition-colors duration-300`}></div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="w-[95%] mx-auto">
            <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1500">
              <h2 className="heading-text text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: "Rajdhani, sans-serif"}}>
                What's Inside Our <span className="heading-text text-[#2b325e]" style={{fontFamily: "Rajdhani, sans-serif"}}>Brochure</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Explore comprehensive product information, technical specifications, and exclusive offers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white relative rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-transparent overflow-hidden"
                  data-aos="fade-up" data-aos-duration="1500"
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-[var(--brand-color)] opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-[var(--brand-color)] text-white rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="heading-text text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300" style={{fontFamily: "Rajdhani, sans-serif"}}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Animated border */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#2b325e] to-[#2b325e] group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-200 transform scale-100 animate-in fade-in duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2b325e] rounded-2xl mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Brochure</h3>
                <p className="text-gray-600">Enter your details to download instantly</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#2b325e] focus:ring-2 focus:ring-[#2b325e]/20 focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#2b325e] focus:ring-2 focus:ring-[#2b325e]/20 focus:outline-none transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setShowForm(false)}
                    className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleEmailSubmit}
                    disabled={!email || !phone}
                    className="flex-1 py-3 bg-gradient-to-r from-[#2b325e] to-[#0547ff] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Download Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-in {
          animation: animate-in 0.3s ease-out forwards;
        }
        
        .fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      
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

      </div>

      <Footer />
    </div>
  );
};

export default EBrochure;