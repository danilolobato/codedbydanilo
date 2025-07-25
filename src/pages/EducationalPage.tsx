import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Users, Award, Clock, Star, Play, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

const EducationalPage = ({ onBack }: { onBack: () => void }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: 'Desarrollo Web Full Stack',
      duration: '6 meses',
      level: 'Intermedio',
      students: 1250,
      rating: 4.9,
      price: 450000,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Aprende a crear aplicaciones web completas desde cero con las tecnologías más demandadas.',
      modules: [
        'HTML, CSS y JavaScript',
        'React y Node.js',
        'Bases de datos',
        'Despliegue y hosting'
      ]
    },
    {
      id: 2,
      title: 'Marketing Digital Avanzado',
      duration: '4 meses',
      level: 'Principiante',
      students: 890,
      rating: 4.8,
      price: 320000,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Domina las estrategias de marketing digital para hacer crecer tu negocio online.',
      modules: [
        'Fundamentos del marketing digital',
        'Redes sociales y contenido',
        'Publicidad online',
        'Analítica y métricas'
      ]
    },
    {
      id: 3,
      title: 'Diseño UX/UI Profesional',
      duration: '5 meses',
      level: 'Intermedio',
      students: 670,
      rating: 4.9,
      price: 380000,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Conviértete en un diseñador UX/UI profesional y crea experiencias digitales excepcionales.',
      modules: [
        'Principios de diseño UX',
        'Herramientas de diseño',
        'Prototipado y testing',
        'Portfolio profesional'
      ]
    },
    {
      id: 4,
      title: 'Data Science y Analytics',
      duration: '8 meses',
      level: 'Avanzado',
      students: 420,
      rating: 4.7,
      price: 580000,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Aprende a analizar datos y crear modelos predictivos para tomar decisiones basadas en datos.',
      modules: [
        'Python para Data Science',
        'Estadística y probabilidad',
        'Machine Learning',
        'Visualización de datos'
      ]
    }
  ];

  const instructors = [
    {
      name: 'Dr. Carlos Rodríguez',
      specialty: 'Desarrollo Web',
      experience: '10+ años',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Ana Martínez',
      specialty: 'Marketing Digital',
      experience: '8+ años',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Luis García',
      specialty: 'UX/UI Design',
      experience: '12+ años',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const testimonials = [
    {
      name: 'María González',
      course: 'Desarrollo Web Full Stack',
      rating: 5,
      comment: 'Excelente curso, muy completo y con instructores de primera calidad. Conseguí trabajo antes de terminar.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Roberto Silva',
      course: 'Marketing Digital',
      rating: 5,
      comment: 'Las estrategias aprendidas me ayudaron a triplicar las ventas de mi negocio. Totalmente recomendado.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver al Portafolio
            </button>
            
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-gray-900">EduTech Academy</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#inicio" className="text-gray-700 hover:text-indigo-600 transition-colors">Inicio</a>
                <a href="#cursos" className="text-gray-700 hover:text-indigo-600 transition-colors">Cursos</a>
                <a href="#instructores" className="text-gray-700 hover:text-indigo-600 transition-colors">Instructores</a>
                <a href="#contacto" className="text-gray-700 hover:text-indigo-600 transition-colors">Contacto</a>
              </nav>
            </div>

            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Inscribirse
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Aprende las
                <span className="text-indigo-600"> Habilidades</span>
                <br />del Futuro
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Cursos online de alta calidad en tecnología, marketing digital y diseño. 
                Aprende de expertos de la industria y transforma tu carrera profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Explorar Cursos
                </button>
                <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center justify-center">
                  <Play className="h-5 w-5 mr-2" />
                  Ver Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Estudiantes aprendiendo"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-indigo-600">3,000+</div>
                <div className="text-gray-600">Estudiantes Activos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600">Cursos Disponibles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">3,000+</div>
              <div className="text-gray-600">Estudiantes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-600">Tasa de Satisfacción</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-600">Soporte Disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cursos Destacados</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aprende con los mejores cursos online diseñados por expertos de la industria
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-indigo-600">
                      ${course.price.toLocaleString()}
                    </span>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                      Inscribirse
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Por qué elegir EduTech Academy?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contenido de Calidad</h3>
              <p className="text-gray-600">
                Cursos actualizados con las últimas tendencias y tecnologías del mercado.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Instructores Expertos</h3>
              <p className="text-gray-600">
                Aprende de profesionales con años de experiencia en la industria.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certificación</h3>
              <p className="text-gray-600">
                Obtén certificados reconocidos que validen tus nuevas habilidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructores" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Instructores</h2>
            <p className="text-xl text-gray-600">Expertos de la industria comprometidos con tu aprendizaje</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
                <p className="text-indigo-600 font-semibold mb-2">{instructor.specialty}</p>
                <p className="text-gray-600">{instructor.experience} de experiencia</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros estudiantes</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
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
                    <div className="text-gray-500">{testimonial.course}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para transformar tu carrera?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a miles de estudiantes que ya están aprendiendo las habilidades del futuro
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Comenzar Ahora
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Contáctanos</h2>
              <p className="text-lg text-gray-600 mb-8">
                ¿Tienes preguntas sobre nuestros cursos? Estamos aquí para ayudarte.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-indigo-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Teléfono</div>
                    <div className="text-gray-600">+57 (1) 234-5678</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-indigo-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">info@edutechacademy.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-indigo-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Oficina</div>
                    <div className="text-gray-600">Bogotá, Colombia</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicita información</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                  <option>Curso de interés</option>
                  <option>Desarrollo Web Full Stack</option>
                  <option>Marketing Digital Avanzado</option>
                  <option>Diseño UX/UI Profesional</option>
                  <option>Data Science y Analytics</option>
                </select>
                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Enviar Consulta
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
              <h3 className="text-xl font-bold mb-4">EduTech Academy</h3>
              <p className="text-gray-400">
                Transformando vidas a través de la educación online de calidad.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Cursos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Desarrollo Web</li>
                <li>Marketing Digital</li>
                <li>Diseño UX/UI</li>
                <li>Data Science</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Academia</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Nosotros</li>
                <li>Instructores</li>
                <li>Metodología</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+57 (1) 234-5678</li>
                <li>info@edutechacademy.com</li>
                <li>Bogotá, Colombia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduTech Academy. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EducationalPage;