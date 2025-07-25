import React from 'react';
import { ExternalLink, Github, Globe, Eye } from 'lucide-react';
import EcommercePage from '../pages/EcommercePage';
import CorporatePage from '../pages/CorporatePage';
import RestaurantPage from '../pages/RestaurantPage';
import PortfolioPage from '../pages/PortfolioPage';
import ServicesPage from '../pages/ServicesPage';
import EducationalPage from '../pages/EducationalPage';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = React.useState<string | null>(null);

  const handleViewProject = (projectType: string) => {
    setCurrentPage(projectType);
  };

  const handleBackToPortfolio = () => {
    setCurrentPage(null);
  };

  // Render individual pages
  if (currentPage === 'ecommerce') {
    return <EcommercePage onBack={handleBackToPortfolio} />;
  }
  if (currentPage === 'corporativa') {
    return <CorporatePage onBack={handleBackToPortfolio} />;
  }
  if (currentPage === 'restaurante') {
    return <RestaurantPage onBack={handleBackToPortfolio} />;
  }
  if (currentPage === 'portfolio') {
    return <PortfolioPage onBack={handleBackToPortfolio} />;
  }
  if (currentPage === 'servicios') {
    return <ServicesPage onBack={handleBackToPortfolio} />;
  }
  if (currentPage === 'educativa') {
    return <EducationalPage onBack={handleBackToPortfolio} />;
  }

  const projects = [
    {
      title: 'Página Web E-commerce',
      description: 'Tienda online moderna con catálogo de productos, carrito de compras y diseño atractivo.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      category: 'E-commerce',
      type: 'ecommerce'
    },
    {
      title: 'Página Web Corporativa',
      description: 'Sitio web profesional para empresa con secciones informativas y formulario de contacto.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      category: 'Corporativa',
      type: 'corporativa'
    },
    {
      title: 'Página Web Restaurante',
      description: 'Sitio web elegante para restaurante con menú digital y información de contacto.',
      image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress'],
      category: 'Restaurante',
      type: 'restaurante'
    },
    {
      title: 'Página Web Portfolio',
      description: 'Sitio web portfolio para profesional creativo con galería de trabajos.',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'CSS3', 'JavaScript'],
      category: 'Portfolio',
      type: 'portfolio'
    },
    {
      title: 'Página Web Servicios',
      description: 'Sitio web para empresa de servicios con información detallada y formularios.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML5', 'Bootstrap', 'JavaScript'],
      category: 'Servicios',
      type: 'servicios'
    },
    {
      title: 'Página Web Educativa',
      description: 'Sitio web para institución educativa con información de cursos y contacto.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WordPress', 'CSS3', 'JavaScript'],
      category: 'Educativa',
      type: 'educativa'
    }
  ];

  return (
    <section id="portafolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Páginas Web Creadas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Algunos ejemplos de páginas web que he desarrollado para clientes satisfechos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-2">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => handleViewProject(project.type)}
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Globe className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button 
                  onClick={() => handleViewProject(project.type)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Ver Página Web
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            ¿Te gusta lo que ves? Estos son solo algunos ejemplos de páginas web que he creado.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Crear Mi Página Web
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;