import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Header'; 
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header con Navbar */}
      <Navbar />
      
      {/* Contenido principal con Outlet para las rutas anidadas */}
      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>
    
      <Footer />
    </div>
  );
};

export default Layout;