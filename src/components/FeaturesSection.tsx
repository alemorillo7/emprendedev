import React from 'react';
import { Smartphone, Zap, HeadphonesIcon, CreditCard, Search } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Diseño moderno y responsivo',
    description: 'Sitios web que se adaptan perfectamente a cualquier dispositivo.',
    icon: <Smartphone className="w-12 h-12 text-teal-400" />,
  },
  {
    id: 2,
    title: 'Desarrollo con tecnologías actuales',
    description: 'Utilizamos las últimas tecnologías para un rendimiento óptimo.',
    icon: <Zap className="w-12 h-12 text-teal-400" />,
  },
  {
    id: 3,
    title: 'Soporte continuo',
    description: 'Asistencia técnica y mantenimiento para tu tranquilidad.',
    icon: <HeadphonesIcon className="w-12 h-12 text-teal-400" />,
  },
  {
    id: 4,
    title: 'Integración de pagos seguros',
    description: 'Implementamos pasarelas de pago confiables y seguras.',
    icon: <CreditCard className="w-12 h-12 text-teal-400" />,
  },
  {
    id: 5,
    title: 'Optimización SEO y velocidad',
    description: 'Mejoramos la visibilidad en buscadores y el tiempo de carga.',
    icon: <Search className="w-12 h-12 text-teal-400" />,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Características <span className="text-teal-400">Destacadas</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg hover:shadow-xl hover:border-teal-400/30 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;