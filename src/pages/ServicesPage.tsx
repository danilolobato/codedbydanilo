import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Star, Users, Award, Clock, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const ServicesPage = ({ onBack }: { onBack: () => void }) => {
  const [selectedService, setSelectedService] = useState('consultoria');

  const services = [
    {
      id: 'consultoria',
      name: 'Consultoría IT',
      icon: '💻',
      price: 'Desde $150/hora',
      description: 'Asesoría especializada en tecnología para optimizar tus procesos empresariales.',
      features: [
        'Análisis de infraestructura tecnológica',
        'Recomendaciones de mejora',
        'Planificación estratégica IT',
        'Implementación de soluciones',
        'Soporte continuo'
      ]
    },
    {
      id: 'desarrollo',
      name: 'Desarrollo Web',
      icon: '🌐',
      price: 'Desde $2,000',
      description: 'Creación de sitios web y aplicaciones personalizadas con tecnología moderna.',
      features: [
        'Sitios web responsivos',
        'Aplicaciones web complejas',
        'E-commerce personalizado',
        'Integración de APIs',
        'Optimización SEO'
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing Digital',
      icon: '📱',
      price: 'Desde $800/mes',
      description: 'Estrategias digitales para aumentar tu presencia online y generar más ventas.',
      features: [
        'Gestión de redes sociales',
        'Campañas publicitarias',
        'Email marketing',
        'Análisis de métricas',
        'Optimización de conversiones'
      ]
    },
    {
      id: 'diseno',
      name: 'Diseño Gráfico',
      icon: '🎨',
      price: 'Desde $50/diseño',
      description: 'Diseños creativos y profesionales para fortalecer tu identidad de marca.',
      features: [
        'Diseño de logos',
        'Material publicitario',
        'Branding completo',
        'Diseño para redes sociales',
        'Presentaciones corporativas'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Mendoza',
      company: 'TechStart',
      rating: 5,
      comment: 'Excelente servicio de consultoría. Nos ayudaron a modernizar toda nuestra infraestructura IT.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'María González',
      company: 'Fashion Store',
      rating: 5,
      comment: 'El desarrollo de nuestro e-commerce superó todas nuestras expectativas. Muy profesionales.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Roberto Silva',
      company: 'Local Business',
      rating: 5,
      comment: 'La estrategia de marketing digital aumentó nuestras ventas en un 200%. Altamente recomendados.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const stats = [
    { number: '200+', label: 'Proyectos Completados' },
    { number: '150+', label: 'Clientes Satisfechos' },
    { number: '5+', label: 'Años de Experiencia' },
    { number: '24/7', label: 'Soporte Disponible' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver al Portafolio
            </button>
            
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-gray-900">ProServices</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Inicio</a>
                <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors">Servicios</a>
                <a href="#testimonios" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonios</a>
                <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
              </nav>
            </div>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Cotizar Proyecto
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Servicios
                <span className="text-blue-600"> Profesionales</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ofrecemos soluciones integrales en tecnología, marketing digital y diseño 
                para impulsar el crecimiento de tu negocio. Nuestro equipo de expertos 
                está listo para transformar tus ideas en resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Ver Servicios
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Solicitar Cotización
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipo profesional"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones profesionales adaptadas a las necesidades específicas de tu negocio
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`bg-white rounded-xl p-6 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    selectedService === service.id ? 'ring-2 ring-blue-500 transform scale-105' : ''
                  }`}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                </div>
              ))}
            </div>

            {/* Service Details */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              {services.find(s => s.id === selectedService) && (
                <div>
                  <div className="text-4xl mb-4">
                    {services.find(s => s.id === selectedService)?.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {services.find(s => s.id === selectedService)?.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {services.find(s => s.id === selectedService)?.description}
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 mb-4">Incluye:</h4>
                  <ul className="space-y-3 mb-6">
                    {services.find(s => s.id === selectedService)?.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-2xl font-bold text-blue-600 mb-6">
                    {services.find(s => s.id === selectedService)?.price}
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                    Solicitar Servicio
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Proceso</h2>
            <p className="text-xl text-gray-600">Metodología probada para garantizar resultados exitosos</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Análisis', description: 'Evaluamos tus necesidades y objetivos específicos' },
              { step: '02', title: 'Planificación', description: 'Desarrollamos una estrategia personalizada' },
              { step: '03', title: 'Ejecución', description: 'Implementamos la solución con los más altos estándares' },
              { step: '04', title: 'Seguimiento', description: 'Monitoreamos resultados y optimizamos continuamente' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-gray-600">Testimonios reales de empresas que han confiado en nosotros</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para impulsar tu negocio?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Solicitar Cotización Gratuita
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Agendar Consulta
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Contáctanos</h2>
              <p className="text-lg text-gray-600 mb-8">
                Estamos aquí para ayudarte. Contáctanos y conversemos sobre tu proyecto.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Teléfono</div>
                    <div className="text-gray-600">+57 (1) 234-5678</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">contacto@proservices.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Oficina</div>
                    <div className="text-gray-600">Bogotá, Colombia</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicita una cotización</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Empresa"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Selecciona un servicio</option>
                  <option>Consultoría IT</option>
                  <option>Desarrollo Web</option>
                  <option>Marketing Digital</option>
                  <option>Diseño Gráfico</option>
                </select>
                <textarea
                  placeholder="Describe tu proyecto"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ProServices</h3>
              <p className="text-gray-400">
                Soluciones profesionales en tecnología, marketing y diseño para impulsar tu negocio.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Consultoría IT</li>
                <li>Desarrollo Web</li>
                <li>Marketing Digital</li>
                <li>Diseño Gráfico</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Nosotros</li>
                <li>Equipo</li>
                <li>Carreras</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+57 (1) 234-5678</li>
                <li>contacto@proservices.com</li>
                <li>Bogotá, Colombia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ProServices. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;