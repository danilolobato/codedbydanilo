import React, { useState } from 'react';
import { ArrowLeft, Clock, MapPin, Phone, Star, ShoppingCart, Plus, Minus } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const RestaurantPage = ({ onBack }: { onBack: () => void }) => {
  const [selectedCategory, setSelectedCategory] = useState('entradas');
  const [cart, setCart] = useState<{[key: number]: number}>({});

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Bruschetta Italiana',
      description: 'Pan tostado con tomate fresco, albahaca y aceite de oliva',
      price: 12000,
      image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'entradas'
    },
    {
      id: 2,
      name: 'Carpaccio de Res',
      description: 'Finas láminas de res con rúcula, parmesano y aceite de trufa',
      price: 18000,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'entradas'
    },
    {
      id: 3,
      name: 'Pasta Carbonara',
      description: 'Espaguetis con panceta, huevo, parmesano y pimienta negra',
      price: 25000,
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'principales'
    },
    {
      id: 4,
      name: 'Risotto de Hongos',
      description: 'Arroz arborio con hongos porcini y trufa blanca',
      price: 28000,
      image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'principales'
    },
    {
      id: 5,
      name: 'Salmón a la Plancha',
      description: 'Filete de salmón con vegetales asados y salsa de limón',
      price: 32000,
      image: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'principales'
    },
    {
      id: 6,
      name: 'Tiramisu',
      description: 'Postre tradicional italiano con café y mascarpone',
      price: 15000,
      image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'postres'
    },
    {
      id: 7,
      name: 'Panna Cotta',
      description: 'Crema italiana con frutos rojos',
      price: 14000,
      image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'postres'
    }
  ];

  const categories = [
    { id: 'entradas', name: 'Entradas' },
    { id: 'principales', name: 'Platos Principales' },
    { id: 'postres', name: 'Postres' }
  ];

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
    }));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver al Portafolio
            </button>
            
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-gray-900">Bella Vista</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#inicio" className="text-gray-700 hover:text-red-600 transition-colors">Inicio</a>
                <a href="#menu" className="text-gray-700 hover:text-red-600 transition-colors">Menú</a>
                <a href="#nosotros" className="text-gray-700 hover:text-red-600 transition-colors">Nosotros</a>
                <a href="#contacto" className="text-gray-700 hover:text-red-600 transition-colors">Contacto</a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-red-600 transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Reservar Mesa
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200)'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Bella Vista</h1>
            <p className="text-xl mb-8">Auténtica cocina italiana en el corazón de la ciudad</p>
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>Lun-Dom: 12:00 - 23:00</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Zona Rosa, Bogotá</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>(1) 234-5678</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Desde 1985, Bella Vista ha sido sinónimo de auténtica cocina italiana en Bogotá. 
                Nuestro chef, formado en las mejores escuelas culinarias de Italia, trae los 
                sabores tradicionales de la Toscana a tu mesa.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Utilizamos únicamente ingredientes frescos y de la más alta calidad, importados 
                directamente de Italia, para garantizar una experiencia gastronómica auténtica 
                e inolvidable.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">4.8/5 en Google Reviews</span>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Interior del restaurante"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Menú</h2>
            <p className="text-xl text-gray-600">Sabores auténticos de Italia</p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-2 shadow-lg">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white'
                      : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-600">
                      ${item.price.toLocaleString()}
                    </span>
                    <div className="flex items-center space-x-2">
                      {cart[item.id] > 0 && (
                        <>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-gray-200 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="font-semibold">{cart[item.id]}</span>
                        </>
                      )}
                      <button
                        onClick={() => addToCart(item.id)}
                        className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para una experiencia única?</h2>
          <p className="text-xl mb-8 opacity-90">
            Reserva tu mesa y disfruta de la mejor cocina italiana de la ciudad
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Reservar Ahora
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Visítanos</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Dirección</h3>
                    <p className="text-gray-600">Carrera 13 #85-32, Zona Rosa<br />Bogotá, Colombia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Horarios</h3>
                    <p className="text-gray-600">
                      Lunes a Domingo<br />
                      12:00 PM - 11:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Teléfono</h3>
                    <p className="text-gray-600">(1) 234-5678</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Reserva tu Mesa</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <input
                    type="time"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option>Número de personas</option>
                  <option>1 persona</option>
                  <option>2 personas</option>
                  <option>3 personas</option>
                  <option>4 personas</option>
                  <option>5+ personas</option>
                </select>
                <textarea
                  placeholder="Comentarios especiales"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Confirmar Reserva
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
              <h3 className="text-xl font-bold mb-4">Bella Vista</h3>
              <p className="text-gray-400">
                Auténtica cocina italiana desde 1985. Una experiencia gastronómica única en Bogotá.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horarios</h4>
              <p className="text-gray-400">
                Lunes a Domingo<br />
                12:00 PM - 11:00 PM
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <p className="text-gray-400">
                Carrera 13 #85-32, Zona Rosa<br />
                Bogotá, Colombia<br />
                (1) 234-5678
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bella Vista. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantPage;