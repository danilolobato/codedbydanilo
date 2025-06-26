import React from 'react';
import { Globe, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Danilo Lobato</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Desarrollador web freelancer especializado en crear experiencias 
              digitales excepcionales. Transformo ideas en realidad con código 
              limpio y diseño moderno.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {['Inicio', 'Sobre Mí', 'Servicios', 'Portafolio', 'Contacto'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase().replace(' ', '-'));
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Desarrollo Web Completo</li>
              <li>Aplicaciones Web</li>
              <li>Diseño UI/UX</li>
              <li>Optimización SEO</li>
              <li>Mantenimiento Web</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-gray-400">Hecho con</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span className="text-gray-400">por Danilo Lobato</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">
              © 2024 Danilo Lobato. Todos los derechos reservados.
            </span>
            <button 
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-200"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;