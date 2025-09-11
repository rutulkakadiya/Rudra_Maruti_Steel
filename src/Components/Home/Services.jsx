import React, { useEffect, useRef } from 'react';
import { Shield, Truck, Clock, Users, Award, Zap } from 'lucide-react';

const Services = () => {
  const servicesRef = useRef(null);

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

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Shield,
      title: 'Excise MODVAT Facility',
      description: 'Available excise MODVAT facility to help you save on taxes and reduce your overall costs.',
      features: ['Tax benefits', 'Cost savings', 'Compliance support', 'Documentation assistance'],
      highlight: true
    },
    {
      icon: Truck,
      title: 'Timely Delivery',
      description: 'Reliable and on-time delivery services to ensure your projects stay on schedule.',
      features: ['Fast delivery', 'Real-time tracking', 'Nationwide coverage', 'Flexible scheduling'],
      highlight: false
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to address your queries and concerns anytime.',
      features: ['Always available', 'Expert assistance', 'Quick response', 'Multiple channels'],
      highlight: false
    },
    {
      icon: Users,
      title: 'Custom Solutions',
      description: 'Tailored steel solutions designed to meet your specific requirements and applications.',
      features: ['Custom sizing', 'Special alloys', 'Technical consultation', 'Quality assurance'],
      highlight: false
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes to ensure every product meets the highest standards.',
      features: ['ISO certified', 'Testing facilities', 'Quality reports', 'Warranty coverage'],
      highlight: false
    },
    {
      icon: Zap,
      title: 'Technical Support',
      description: 'Expert technical guidance and support for all your steel-related queries and applications.',
      features: ['Expert consultation', 'Application guidance', 'Problem solving', 'Training support'],
      highlight: false
    }
  ];

  return (
    <section id="services" ref={servicesRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive steel solutions and value-added services to support your business needs and ensure complete satisfaction.
          </p>
        </div>

        {/* Featured Service */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Excise MODVAT Facility</h3>
                  <p className="text-blue-100 text-lg">Special Tax Benefit Service</p>
                </div>
              </div>
              
              <p className="text-xl text-blue-100 mb-8 max-w-3xl">
                Take advantage of our available excise MODVAT facility to optimize your tax benefits and reduce overall costs. 
                Our expert team ensures proper documentation and compliance for maximum savings.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-semibold mb-3">Benefits</h4>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Significant tax savings</li>
                    <li>• Proper documentation support</li>
                    <li>• Compliance assistance</li>
                    <li>• Expert guidance</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-semibold mb-3">Process</h4>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Initial consultation</li>
                    <li>• Documentation review</li>
                    <li>• Application processing</li>
                    <li>• Ongoing support</li>
                  </ul>
                </div>
              </div>
              
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                Learn More About MODVAT
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(1).map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Additional Value-Added Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h4 className="font-semibold text-gray-900">Quality Testing</h4>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h4 className="font-semibold text-gray-900">Custom Cutting</h4>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h4 className="font-semibold text-gray-900">Warehousing</h4>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h4 className="font-semibold text-gray-900">Consultation</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Custom Solutions?</h3>
            <p className="text-gray-300 mb-6">
              Our team of experts is ready to help you find the perfect steel solution for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                Get Expert Consultation
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 border border-white/30">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

