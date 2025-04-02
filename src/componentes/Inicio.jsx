import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Truck, CreditCard, LifeBuoy, Star } from 'lucide-react';

const Home = () => {
  // Productos destacados
  const productosDestacados = [
    {
      id: 1,
      nombre: "Smartwatch Pro",
      precio: 129.99,
      descuento: 159.99,
      imagen: "/api/placeholder/300/300",
      puntuacion: 4.5
    },
    {
      id: 2,
      nombre: "Auriculares Bluetooth",
      precio: 79.99,
      descuento: 99.99,
      imagen: "/api/placeholder/300/300",
      puntuacion: 4.7
    },
    {
      id: 3,
      nombre: "Cámara Digital 4K",
      precio: 349.99,
      descuento: null,
      imagen: "/api/placeholder/300/300",
      puntuacion: 4.8
    },
    {
      id: 4,
      nombre: "Tablet Premium",
      precio: 299.99,
      descuento: 349.99,
      imagen: "/api/placeholder/300/300",
      puntuacion: 4.2
    }
  ];

  // Categorías principales
  const categorias = [
    { id: 1, nombre: "Smartphones", imagen: "/api/placeholder/200/200" },
    { id: 2, nombre: "Laptops", imagen: "/api/placeholder/200/200" },
    { id: 3, nombre: "Audio", imagen: "/api/placeholder/200/200" },
    { id: 4, nombre: "Accesorios", imagen: "/api/placeholder/200/200" },
    { id: 5, nombre: "Cámaras", imagen: "/api/placeholder/200/200" },
    { id: 6, nombre: "Smart Home", imagen: "/api/placeholder/200/200" }
  ];

  // Banners de promoción
  const banners = [
    {
      id: 1,
      titulo: "Ofertas de Verano",
      descripcion: "Hasta 40% de descuento en productos seleccionados",
      color: "bg-blue-600"
    },
    {
      id: 2,
      titulo: "Envío Gratis",
      descripcion: "En compras superiores a $50",
      color: "bg-green-600"
    },
    {
      id: 3,
      titulo: "Garantía Extendida",
      descripcion: "1 año adicional en todos los productos",
      color: "bg-purple-600"
    }
  ];

  // Renderizar estrellas para puntuación
  const renderEstrellas = (puntuacion) => {
    const estrellas = [];
    const puntuacionRedondeada = Math.round(puntuacion * 2) / 2; // Redondear a 0.5 más cercano
    
    for (let i = 1; i <= 5; i++) {
      if (i <= puntuacionRedondeada) {
        estrellas.push(<Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />);
      } else if (i - 0.5 === puntuacionRedondeada) {
        estrellas.push(<Star key={i} size={16} className="fill-yellow-400 text-yellow-400 opacity-50" />);
      } else {
        estrellas.push(<Star key={i} size={16} className="text-gray-300" />);
      }
    }
    
    return <div className="flex">{estrellas}</div>;
  };

  return (
    <div className="pb-12">
      {/* Hero Banner Principal */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 px-4 mb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Tecnología de última generación</h1>
              <p className="text-lg mb-6 text-blue-100">Descubre los productos más innovadores y a los mejores precios.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/productos" className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Ver productos
                </Link>
                <Link to="/ofertas" className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition">
                  Ofertas especiales
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/api/placeholder/600/400" alt="Productos tecnológicos destacados" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="mb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Categorías Populares</h2>
            <Link to="/categorias" className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
              Ver todas <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categorias.map(categoria => (
              <Link 
                to={`/categorias/${categoria.id}`} 
                key={categoria.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 text-center group"
              >
                <div className="w-24 h-24 mx-auto mb-3 overflow-hidden rounded-lg">
                  <img 
                    src={categoria.imagen} 
                    alt={categoria.nombre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-gray-800">{categoria.nombre}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Banners de promoción */}
      <section className="mb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-4">
            {banners.map(banner => (
              <div 
                key={banner.id} 
                className={`${banner.color} text-white rounded-lg p-6 shadow-md`}
              >
                <h3 className="text-xl font-bold mb-2">{banner.titulo}</h3>
                <p className="mb-4">{banner.descripcion}</p>
                <Link to="/ofertas" className="inline-block bg-white text-gray-800 px-4 py-2 rounded font-medium hover:bg-opacity-90 transition">
                  Ver más
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="mb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Productos Destacados</h2>
            <Link to="/productos" className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
              Ver todos <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productosDestacados.map(producto => (
              <div 
                key={producto.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <div className="relative">
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre}
                    className="w-full h-48 object-cover"
                  />
                  
                  {producto.descuento && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {Math.round(((producto.descuento - producto.precio) / producto.descuento) * 100)}% OFF
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="mb-2">
                    {renderEstrellas(producto.puntuacion)}
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{producto.nombre}</h3>
                  <div className="flex items-center mb-3">
                    <span className="font-bold text-lg">${producto.precio}</span>
                    {producto.descuento && (
                      <span className="text-gray-500 line-through ml-2 text-sm">${producto.descuento}</span>
                    )}
                  </div>
                  <Link 
                    to={`/productos/${producto.id}`}
                    className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="mb-16 px-4 bg-gray-50 py-12">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">¿Por qué comprar con nosotros?</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck size={28} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Envío Rápido</h3>
              <p className="text-gray-600">Entrega en 24/48 horas a todo el país.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard size={28} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Pago Seguro</h3>
              <p className="text-gray-600">Múltiples métodos de pago seguros.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LifeBuoy size={28} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Soporte 24/7</h3>
              <p className="text-gray-600">Atención al cliente todos los días.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={28} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Garantía</h3>
              <p className="text-gray-600">Garantía extendida en todos los productos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Suscripción al newsletter */}
      <section className="px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-blue-800 rounded-xl text-white p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Suscríbete a nuestro newsletter</h2>
              <p className="mb-6 text-blue-100">Recibe las últimas novedades y ofertas exclusivas directamente en tu correo.</p>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Suscribirse
                </button>
              </form>
              <p className="mt-4 text-sm text-blue-200">Puedes darte de baja en cualquier momento. Ver política de privacidad.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;