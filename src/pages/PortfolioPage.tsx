import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Eye, Filter, Mail, Phone, MapPin } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
}

const PortfolioPage = ({ onBack }: { onBack: () => void }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Identidad Visual Corporativa',
      category: 'branding',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Desarrollo completo de identidad visual para startup tecnológica, incluyendo logo, paleta de colores y manual de marca.',
      technologies: ['Illustrator', 'Photoshop', 'InDesign']
    },
    {
      id: 2,
      title: 'Aplicación Móvil de Fitness',
      category: 'ui-ux',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Diseño de interfaz y experiencia de usuario para aplicación de entrenamiento personal con seguimiento de rutinas.',
      technologies: ['Figma', 'Principle', 'Adobe XD']
    },
    {
      id: 3,
      title: 'Campaña Publicitaria Digital',
      category: 'marketing',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Estrategia visual completa para campaña de lanzamiento de producto, incluyendo redes sociales y publicidad digital.',
      technologies: ['Photoshop', 'After Effects', 'Canva']
    },
    {
      id: 4,
      title: 'Sitio Web E-commerce',
      category: 'web',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Diseño y desarrollo de tienda online con sistema de pagos integrado y panel administrativo.',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 5,
      title: 'Packaging de Producto',
      category: 'branding',
      image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Diseño de empaque para línea de productos orgánicos, enfocado en sostenibilidad y atractivo visual.',
      technologies: ['Illustrator', 'Photoshop', '3D Modeling']
    },
    {
      id: 6,
      title: 'Dashboard Analítico',
      category: 'ui-ux',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Interfaz de usuario para plataforma de análisis de datos con visualizaciones interactivas y reportes.',
      technologies: ['Figma', 'D3.js', 'React']
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'branding', name: 'Branding' },
    { id: 'ui-ux', name: 'UI/UX' },
    { id: 'web', name: 'Web' },
    { id: 'marketing', name: 'Marketing' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver al Portafolio
            </button>
            
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-gray-900">Ana Martínez</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#inicio" className="text-gray-700 hover:text-purple-600 transition-colors">Inicio</a>
                <a href="#proyectos" className="text-gray-700 hover:text-purple-600 transition-colors">Proyectos</a>
                <a href="#sobre-mi" className="text-gray-700 hover:text-purple-600 transition-colors">Sobre Mí</a>
                <a href="#contacto" className="text-gray-700 hover:text-purple-600 transition-colors">Contacto</a>
              </nav>
            </div>

            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Contratar
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Diseñadora
                <span className="text-purple-600"> Creativa</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Soy Ana Martínez, diseñadora gráfica y UX/UI con más de 5 años de experiencia 
                creando soluciones visuales impactantes. Me especializo en branding, diseño web 
                y experiencias digitales memorables.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Ver Proyectos
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Descargar CV
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Diseñadora trabajando"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-gray-600">Proyectos Completados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">30+</div>
              <div className="text-gray-600">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Premios Obtenidos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mis Proyectos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una selección de mis trabajos más destacados en diseño gráfico, branding y experiencia digital
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-2 shadow-lg">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ana Martínez"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre Mí</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Soy una diseñadora apasionada por crear experiencias visuales que conecten 
                con las personas. Mi enfoque combina creatividad, estrategia y tecnología 
                para desarrollar soluciones de diseño efectivas y memorables.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                He trabajado con startups, empresas consolidadas y organizaciones sin fines 
                de lucro, ayudándoles a comunicar su mensaje de manera clara y atractiva a 
                través del diseño.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Especialidades:</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Diseño Gráfico',
                    'Branding & Identidad',
                    'UI/UX Design',
                    'Diseño Web',
                    'Marketing Visual',
                    'Packaging Design'
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">¿Tienes un proyecto en mente?</h2>
              <p className="text-xl mb-8 opacity-90">
                Me encantaría conocer tu idea y ayudarte a hacerla realidad a través del diseño.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-4" />
                  <span>ana.martinez@email.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-4" />
                  <span>+57 300 123 4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-4" />
                  <span>Medellín, Colombia</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Hablemos de tu proyecto</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Asunto"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Cuéntame sobre tu proyecto"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Ana Martínez</h3>
              <p className="text-gray-400">
                Diseñadora creativa especializada en branding, UI/UX y experiencias digitales memorables.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Diseño Gráfico</li>
                <li>Branding & Identidad</li>
                <li>UI/UX Design</li>
                <li>Diseño Web</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>ana.martinez@email.com</li>
                <li>+57 300 123 4567</li>
                <li>Medellín, Colombia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ana Martínez. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <button className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver Proyecto
                </button>
                <button className="flex items-center border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <Github className="h-4 w-4 mr-2" />
                  Código
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;