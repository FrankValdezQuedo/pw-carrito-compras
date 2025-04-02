import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, Home, Tag, Heart, User, Shirt} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  // Estilos separados para texto e iconos
  const activeTextStyle = "text-blue-600 font-semibold"; 
  const normalTextStyle = "text-gray-700 hover:text-blue-600 font-medium";
  // El icono siempre mantiene su tamaño y alineación
  const iconStyle = "mr-1";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">TiendaVirtual</Link>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-2 text-gray-500">
                <Search size={20} />
              </button>
            </form>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => `flex items-center ${isActive ? activeTextStyle : normalTextStyle}`}
              end
            >
              <Home size={18} className={iconStyle} />
              <span>Inicio</span>
            </NavLink>
            <NavLink 
              to="/categorias" 
              className={({ isActive }) => `flex items-center ${isActive ? activeTextStyle : normalTextStyle}`}
            >
              <Tag size={18} className={iconStyle} />
              <span>Categorías</span>
            </NavLink>
            <NavLink 
              to="/productos" 
              className={({ isActive }) => `flex items-center ${isActive ? activeTextStyle : normalTextStyle}`}
            >
              <Shirt size={18} className={iconStyle} />
              <span>Productos</span>
            </NavLink>
            <NavLink 
              to="/ofertas" 
              className={({ isActive }) => `flex items-center ${isActive ? activeTextStyle : normalTextStyle}`}
            >
              <Heart size={18} className={iconStyle} />
              <span>Ofertas</span>
            </NavLink>
            <NavLink 
              to="/cuenta" 
              className={({ isActive }) => `flex items-center ${isActive ? activeTextStyle : normalTextStyle}`}
            >
              <User size={18} className={iconStyle} />
              <span>Mi Cuenta</span>
            </NavLink>
          </nav>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center">
            <Link to="/carrito" className="relative p-2 text-gray-700 hover:text-blue-600 mr-2">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search - Only visible on mobile */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearch} className="relative w-full">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-2 text-gray-500">
              <Search size={20} />
            </button>
          </form>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <NavLink 
                to="/"
                className={({ isActive }) => `flex items-center py-2 ${isActive ? activeTextStyle : normalTextStyle}`}
                onClick={() => setIsMenuOpen(false)}
                end
              >
                <Home size={18} className="mr-2" />
                <span>Inicio</span>
              </NavLink>
              <NavLink 
                to="/categorias"
                className={({ isActive }) => `flex items-center py-2 ${isActive ? activeTextStyle : normalTextStyle}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Tag size={18} className="mr-2" />
                <span>Categorías</span>
              </NavLink>
              <NavLink 
                to="/categorias"
                className={({ isActive }) => `flex items-center py-2 ${isActive ? activeTextStyle : normalTextStyle}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Tag size={18} className="mr-2" />
                <span>Productos</span>
              </NavLink>
              <NavLink 
                to="/ofertas"
                className={({ isActive }) => `flex items-center py-2 ${isActive ? activeTextStyle : normalTextStyle}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart size={18} className="mr-2" />
                <span>Ofertas</span>
              </NavLink>
              <NavLink 
                to="/cuenta"
                className={({ isActive }) => `flex items-center py-2 ${isActive ? activeTextStyle : normalTextStyle}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={18} className="mr-2" />
                <span>Mi Cuenta</span>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;