import React from 'react';
import { User, Award, Coffee, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Páginas Web Creadas', value: '50+' },
    { icon: Coffee, label: 'Cafés Consumidos', value: '1000+' },
    { icon: Heart, label: 'Clientes Satisfechos', value: '40+' },
    { icon: User, label: 'Años de Experiencia', value: '3+' }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre Mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mi Historia
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Soy Danilo Lobato, un desarrollador web freelancer especializado en crear 
                páginas web excepcionales desde cero. Mi pasión es transformar ideas en 
                sitios web funcionales, atractivos y optimizados que ayuden a mis clientes 
                a destacar en el mundo digital.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Mi enfoque se centra en entender las necesidades específicas de cada cliente 
                y crear páginas web personalizadas que reflejen su identidad y objetivos. 
                Trabajo de manera independiente, lo que me permite ofrecer atención 
                personalizada y flexibilidad en cada proyecto.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Cada página web que desarrollo está optimizada para velocidad, SEO y 
                experiencia de usuario, asegurando que mis clientes obtengan resultados 
                reales y una presencia web profesional.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100"
              >
                <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Tecnologías que Uso para Crear Páginas Web
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'TypeScript',
              'Tailwind CSS', 'Git', 'Figma', 'WordPress', 'Bootstrap', 'Sass'
            ].map((skill, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center hover:from-blue-50 hover:to-green-50 transition-all duration-300 hover:scale-105"
              >
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;