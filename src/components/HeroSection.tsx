import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Digital background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Programación <span className="text-teal-400">WEB</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Convertimos tus ideas en soluciones digitales innovadoras
          </p>
          
          {/* Promotion Banner */}
          <div className="bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-700 mb-10 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 bg-orange-500 w-32 h-32 rounded-full flex items-center justify-center transform rotate-12">
              <div className="transform -rotate-12 text-center">
                <p className="text-white font-bold text-xl">50%</p>
                <p className="text-white font-bold text-xl">OFF</p>
              </div>
            </div>
            <p className="text-lg md:text-xl font-medium">
              50% OFF en todos los servicios hasta el 15 de marzo
            </p>
          </div>
          
          <a 
            href="#services" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-medium border-2 border-teal-400 shadow-lg shadow-teal-500/20 transition-all hover:shadow-teal-500/30 hover:scale-105"
          >
            Descubre Nuestros Servicios
          </a>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,213.2,141.14c62.5,0,125.91-16.88,186.64-32.31C443.45,93.81,486,78.43,528,69.78c47-9.66,94.85-17.61,140.37-11.32,67,9.22,128,33.14,190.61,49.19,52.73,13.4,113.28,20.61,175.2,10.94,58-9.09,112.48-30.38,167.51-48.83,49.1-16.43,98.42-32.72,152.68-31.16,57.63,1.67,110,25.85,162.53,44.05,18.28,6.23,36.79,12.29,55.52,17.28V120Z" fill="#111827"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;