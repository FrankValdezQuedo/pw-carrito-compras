import React from 'react';

const ProductList = () => {
  // Datos de ejemplo para los productos
  const productos = [
    {
      id: 1,
      nombre: "Smartwatch Pro",
      precio: 129.99,
      descripcion: "Reloj inteligente con monitor de ritmo cardíaco y notificaciones",
      imagen: "/api/placeholder/300/300"
    },
    {
      id: 2,
      nombre: "Auriculares Bluetooth",
      precio: 79.99,
      descripcion: "Auriculares inalámbricos con cancelación de ruido",
      imagen: "/api/placeholder/300/300"
    },
    {
      id: 3,
      nombre: "Cámara Digital 4K",
      precio: 349.99,
      descripcion: "Cámara de alta resolución con estabilización de imagen",
      imagen: "/api/placeholder/300/300"
    },
    {
      id: 4,
      nombre: "Tablet Premium",
      precio: 299.99,
      descripcion: "Tablet de 10 pulgadas con pantalla retina y procesador rápido",
      imagen: "/api/placeholder/300/300"
    },
    {
      id: 5,
      nombre: "Altavoz Portátil",
      precio: 59.99,
      descripcion: "Altavoz inalámbrico resistente al agua con 20 horas de batería",
      imagen: "/api/placeholder/300/300"
    },
    {
      id: 6,
      nombre: "Teclado Mecánico",
      precio: 89.99,
      descripcion: "Teclado gaming con retroiluminación RGB y switches mecánicos",
      imagen: "/api/placeholder/300/300"
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Nuestros Productos</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map(producto => (
          <div key={producto.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105">
            <div className="h-48 overflow-hidden">
              <img 
                src={producto.imagen} 
                alt={producto.nombre}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold text-gray-800">{producto.nombre}</h2>
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">${producto.precio}</span>
              </div>
              
              <p className="text-gray-600 mb-4">{producto.descripcion}</p>
              
              <div className="flex justify-between items-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-300">
                  Añadir al carrito
                </button>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Ver detalles
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;