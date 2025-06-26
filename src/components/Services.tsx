import React from 'react';
import { Globe, Smartphone, Zap, Search, Palette, Code2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Páginas Web Corporativas',
      description: 'Sitios web profesionales para empresas, optimizados para conversión y SEO.',
      features: ['Diseño Responsivo', 'Optimización SEO', 'Velocidad Optimizada', 'Código Limpio']
    },
    {
      icon: Smartphone,
      title: 'Páginas Web Responsivas',
      description: 'Sitios web que se adaptan perfectamente a móviles, tablets y escritorio.',
      features: ['Mobile First', 'Diseño Adaptativo', 'Touch Friendly', 'Cross Browser']
    },
    {
      icon: Palette,
      title: 'Diseño Web Personalizado',
      description: 'Diseños únicos y atractivos que reflejan la identidad de tu marca.',
      features: ['Diseño Original', 'Paleta de Colores', 'Tipografía', 'Elementos Visuales']
    },
    {
      icon: Zap,
      title: 'Páginas Web Rápidas',
      description: 'Sitios web optimizados para carga rápida y mejor experiencia de usuario.',
      features: ['Optimización de Imágenes', 'Código Minificado', 'CDN Setup', 'Performance']
    },
    {
      icon: Search,
      title: 'SEO Integrado',
      description: 'Páginas web optimizadas para aparecer en los primeros resultados de Google.',
      features: ['Meta Tags', 'Schema Markup', 'Sitemap XML', 'Google Analytics']
    },
    {
      icon: Code2,
      title: 'Mantenimiento Web',
      description: 'Soporte continuo, actualizaciones y mantenimiento de tu página web.',
      features: ['Actualizaciones', 'Backups', 'Monitoreo', 'Soporte Técnico']
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Servicios de Páginas Web
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creo páginas web profesionales y personalizadas que ayudan a tu negocio a destacar online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para tener tu página web?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Conversemos sobre cómo puedo crear la página web perfecta para tu negocio.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Solicitar Cotización
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;