import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import FeaturesSection from './components/FeaturesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PortfolioSection from './components/PortfolioSection';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              Emprende<span className="text-teal-400">.dev</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-teal-400 transition-colors">Servicios</a>
            <a href="#features" className="hover:text-teal-400 transition-colors">Características</a>
            <a href="#portfolio" className="hover:text-teal-400 transition-colors">Portafolio</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contacto</a>
          </nav>
          
          {/* CTA Button */}
          <a 
            href="#contact" 
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full border-2 border-teal-400 shadow-lg shadow-teal-500/20 transition-all hover:shadow-teal-500/30"
          >
            Contáctanos
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a 
                href="#services" 
                className="block py-2 hover:text-teal-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </a>
              <a 
                href="#features" 
                className="block py-2 hover:text-teal-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Características
              </a>
              <a 
                href="#portfolio" 
                className="block py-2 hover:text-teal-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portafolio
              </a>
              <a 
                href="#contact" 
                className="block py-2 hover:text-teal-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </a>
              <a 
                href="#contact" 
                className="block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full border-2 border-teal-400 text-center shadow-lg shadow-teal-500/20 transition-all hover:shadow-teal-500/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contáctanos
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;