import React from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Moderno',
      description: 'Tienda online completa con carrito de compras, pagos integrados y panel administrativo.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'E-commerce'
    },
    {
      title: 'Dashboard Corporativo',
      description: 'Panel de control para gestión empresarial con analytics en tiempo real y reportes.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'TypeScript', 'D3.js', 'PostgreSQL'],
      category: 'Web App'
    },
    {
      title: 'Sitio Web Restaurante',
      description: 'Página web elegante para restaurante con menú digital y sistema de reservas.',
      image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
      category: 'Website'
    },
    {
      title: 'Portfolio Creativo',
      description: 'Sitio web portfolio para artista con galería interactiva y animaciones avanzadas.',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      category: 'Portfolio'
    },
    {
      title: 'App de Fitness',
      description: 'Aplicación web para seguimiento de ejercicios con planes personalizados.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Redux'],
      category: 'Mobile App'
    },
    {
      title: 'Plataforma Educativa',
      description: 'Sistema de aprendizaje online con cursos, exámenes y seguimiento de progreso.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Prisma', 'TailwindCSS'],
      category: 'Education'
    }
  ];

  return (
    <section id="portafolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mi Portafolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Algunos ejemplos de proyectos que he desarrollado para clientes satisfechos.
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
                      <ExternalLink className="h-4 w-4" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                      <Github className="h-4 w-4" />
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
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            ¿Te gusta lo que ves? Estos son solo algunos ejemplos de mi trabajo.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Hablemos de tu Proyecto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;