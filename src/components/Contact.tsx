import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configuración de EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        project_type: formData.project,
        budget: formData.budget,
        message: formData.message,
        to_email: 'danilolobato02@gmail.com'
      };

      // Enviar email usando EmailJS
      await emailjs.send(
        'service_portfolio', // Service ID
        'template_contact', // Template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Public Key
      );

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      console.error('Error al enviar email:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctame directamente a danilolobato02@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contacto" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ¡Mensaje Enviado!
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Gracias por contactarme. Te responderé lo antes posible para discutir tu proyecto de página web.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300"
            >
              Enviar Otro Mensaje
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contáctame
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Necesitas una página web? Me encantaría escuchar tu proyecto y ayudarte a crear la página web perfecta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">danilolobato02@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Teléfono</p>
                    <p className="text-gray-600">Disponible por WhatsApp</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ubicación</p>
                    <p className="text-gray-600">Trabajo remoto globalmente</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                ¿Por qué elegir mis servicios?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 opacity-80" />
                  Páginas web personalizadas y únicas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 opacity-80" />
                  Entregas puntuales y código de calidad
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 opacity-80" />
                  Soporte post-lanzamiento incluido
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 opacity-80" />
                  Precios competitivos y transparentes
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+57 300 123 4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Página Web *
                  </label>
                  <select
                    id="project"
                    name="project"
                    required
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="corporativa">Página Web Corporativa</option>
                    <option value="ecommerce">Tienda Online</option>
                    <option value="portfolio">Página Web Portfolio</option>
                    <option value="restaurante">Página Web Restaurante</option>
                    <option value="servicios">Página Web de Servicios</option>
                    <option value="personal">Página Web Personal</option>
                    <option value="other">Otro tipo</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Presupuesto Estimado (COP)
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecciona un rango</option>
                  <option value="150k-200k">$150,000 - $200,000</option>
                  <option value="200k-250k">$200,000 - $250,000</option>
                  <option value="250k-300k">$250,000 - $300,000</option>
                  <option value="300k-400k">$300,000 - $400,000</option>
                  <option value="400k+">Más de $400,000</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto de página web, qué tipo de negocio tienes, qué funcionalidades necesitas, y cualquier detalle específico que consideres importante..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;