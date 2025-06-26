import React from 'react';
import { ArrowDown, Code, Palette, Rocket } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <Code className="h-8 w-8 text-blue-400 opacity-60" />
      </div>
      <div className="absolute top-40 right-16 animate-pulse">
        <Palette className="h-6 w-6 text-green-400 opacity-60" />
      </div>
      <div className="absolute bottom-32 left-20 animate-bounce" style={{ animationDelay: '1s' }}>
        <Rocket className="h-7 w-7 text-orange-400 opacity-60" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Hola, soy{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Danilo
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
            Creador de Páginas Web
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Creo páginas web únicas y funcionales desde cero. Desde sitios corporativos hasta tiendas online, 
            transformo tu idea en una página web profesional con diseño moderno y código limpio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('portafolio')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Ver Páginas Web
            </button>
            
            <button
              onClick={() => scrollToSection('contacto')}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              Crear Mi Página Web
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('sobre-mi')}
            className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;