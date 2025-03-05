import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce de Moda',
    description: 'Tienda online completa con pasarela de pagos y gestión de inventario.',
    image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Sistema de Reservas',
    description: 'Aplicación web para gestión de citas y reservas en tiempo real.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Landing Page Corporativa',
    description: 'Página de aterrizaje para empresa de servicios financieros.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-teal-400">
          Portafolio
        </h2>

        {/* Mobile Portfolio Carousel */}
        <div className="md:hidden">
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl">
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{projects[currentIndex].title}</h3>
              <p className="text-gray-300">{projects[currentIndex].description}</p>
            </div>
          </div>
          
          {/* Carousel Controls */}
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
        </div>
        
        {/* Desktop Portfolio Grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;