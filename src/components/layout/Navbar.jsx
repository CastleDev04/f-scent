import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, MessageCircle, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import  Logo  from "../../assets/image/perfumes/Logo.jpg"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();

  const navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Productos', path: '/productos' },
    { label: 'Contacto', path: '/contacto' },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '+1234567890';
    const message = 'Hola, me gustaría hacer un pedido de perfumes.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <nav className="bg-white border-b border-beige-100 shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <img src={Logo} alt="Logo F-Scent" />
                </div>
                <span className="text-xl rounded-full font-serif font-semibold text-black tracking-wide">
                  F-Scent
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`transition-colors duration-200 font-medium text-sm uppercase tracking-wide ${
                    isActive(link.path)
                      ? 'text-black border-b-2 border-black'
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Cart Icon with Badge */}
              <Link
                to="/carrito"
                className="relative p-2 text-gray-700 hover:text-black transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center">
                    {getTotalItems() > 9 ? '9+' : getTotalItems()}
                  </span>
                )}
              </Link>
              
              {/* WhatsApp Button Desktop */}
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full flex items-center space-x-2 transition-all duration-200 shadow-md hover:shadow-lg ml-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="font-medium text-sm">Pedir por WhatsApp</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Cart Icon with Badge */}
              <Link
                to="/carrito"
                className="relative p-2 text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="w-6 h-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center">
                    {getTotalItems() > 9 ? '9+' : getTotalItems()}
                  </span>
                )}
              </Link>
              
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-all duration-200 shadow-md"
                aria-label="Pedir por WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-black p-1 rounded-md"
                aria-label="Abrir menú"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-beige-50 shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`block py-3 px-4 rounded-md transition-colors duration-200 font-medium uppercase tracking-wide ${
                    isActive(link.path)
                      ? 'text-black bg-beige-50'
                      : 'text-gray-700 hover:text-black hover:bg-beige-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Cart Link */}
              <Link
                to="/carrito"
                className="flex items-center justify-between py-3 px-4 text-gray-700 hover:text-black hover:bg-beige-50 rounded-md transition-colors duration-200 font-medium uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Carrito</span>
                {getTotalItems() > 0 && (
                  <span className="bg-black text-white text-xs rounded-full px-2 py-1">
                    {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
                  </span>
                )}
              </Link>
              
              <div className="pt-4 px-4">
                <button
                  onClick={() => {
                    handleWhatsAppClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full flex items-center justify-center space-x-2 transition-all duration-200 shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">Pedir por WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;