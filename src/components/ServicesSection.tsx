import React, { useState } from 'react';
import { Code, ShoppingCart, BarChart3, Smartphone, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'LANDING PAGE',
    description: 'Páginas impactantes para captar clientes.',
    detailedDescription: 'Diseñamos landing pages profesionales y atractivas que convierten visitantes en clientes. Ideal para promociones, eventos o productos específicos.',
    icon: <Code size={48} className="text-teal-400" />,
  },
  {
    id: 2,
    title: 'E-COMMERCE',
    description: 'Tiendas online optimizadas para ventas.',
    detailedDescription: 'Desarrollamos tiendas virtuales completas con pasarelas de pago seguras, gestión de inventario y diseño optimizado para aumentar tus ventas.',
    icon: <ShoppingCart size={48} className="text-teal-400" />,
  },
  {
    id: 3,
    title: 'SISTEMA DE GESTIÓN',
    description: 'Soluciones para organizar tu negocio.',
    detailedDescription: 'Creamos sistemas a medida para administrar inventario, clientes, ventas y más. Automatiza procesos y centraliza la información de tu empresa.',
    icon: <BarChart3 size={48} className="text-teal-400" />,
  },
  {
    id: 4,
    title: 'APLICACIONES',
    description: 'Apps personalizadas para cualquier plataforma.',
    detailedDescription: 'Desarrollamos aplicaciones web y móviles personalizadas que resuelven problemas específicos de tu negocio y mejoran la experiencia de tus usuarios.',
    icon: <Smartphone size={48} className="text-teal-400" />,
  },
  {
    id: 5,
    title: 'PÁGINA WEB A MEDIDA',
    description: 'Sitios únicos adaptados a tus necesidades.',
    detailedDescription: 'Diseñamos y desarrollamos sitios web completamente personalizados que reflejan la identidad de tu marca y cumplen con tus objetivos de negocio.',
    icon: <Globe size={48} className="text-teal-400" />,
  },
];

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const toggleServiceDetails = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const phoneNumber = '5493512510118';
  const getWhatsAppLink = (service: string) => {
    const message = `Hola! Estoy interesado en el servicio de ${service}. ¿Podrías darme más información?`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };
  
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-['Pacifico',_cursive] text-teal-400">
          ¿Qué Ofrecemos?
        </h2>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="flex justify-center">
            <div className="w-full max-w-sm bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-xl">
              <div className="flex justify-center mb-6">
                {services[currentIndex].icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                {services[currentIndex].title}
              </h3>
              <p className="text-gray-300 text-center mb-4">
                {services[currentIndex].description}
              </p>
              
              {expandedService === services[currentIndex].id && (
                <div className="mb-6 p-4 bg-gray-800 rounded-lg">
                  <p className="text-gray-300 text-sm">
                    {services[currentIndex].detailedDescription}
                  </p>
                </div>
              )}
              
              <div className="flex flex-col space-y-3">
                <button 
                  className="bg-transparent hover:bg-teal-400/10 text-white px-6 py-2 rounded-full border-2 border-teal-400 shadow-lg shadow-teal-500/10 transition-all hover:shadow-teal-500/20"
                  onClick={() => toggleServiceDetails(services[currentIndex].id)}
                >
                  {expandedService === services[currentIndex].id ? 'Menos Información' : 'Saber Más'}
                </button>
                
                {expandedService === services[currentIndex].id && (
                  <a 
                    href={getWhatsAppLink(services[currentIndex].title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full border-2 border-green-400 shadow-lg shadow-green-500/10 transition-all hover:shadow-green-500/20 text-center"
                  >
                    Consultar por WhatsApp
                  </a>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-teal-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-gray-900 rounded-xl p-8 border border-gray-700 shadow-xl hover:shadow-2xl hover:border-teal-400/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-300 text-center mb-4">
                {service.description}
              </p>
              
              {expandedService === service.id && (
                <div className="mb-6 p-4 bg-gray-800 rounded-lg">
                  <p className="text-gray-300 text-sm">
                    {service.detailedDescription}
                  </p>
                </div>
              )}
              
              <div className="flex flex-col space-y-3">
                <button 
                  className="bg-transparent hover:bg-teal-400/10 text-white px-6 py-2 rounded-full border-2 border-teal-400 shadow-lg shadow-teal-500/10 transition-all hover:shadow-teal-500/20"
                  onClick={() => toggleServiceDetails(service.id)}
                >
                  {expandedService === service.id ? 'Menos Información' : 'Saber Más'}
                </button>
                
                {expandedService === service.id && (
                  <a 
                    href={getWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full border-2 border-green-400 shadow-lg shadow-green-500/10 transition-all hover:shadow-green-500/20 text-center"
                  >
                    Consultar por WhatsApp
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;