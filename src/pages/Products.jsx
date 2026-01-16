import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import ProductFilter from '../components/products/ProductFilter';
import { Link } from 'react-router-dom';
import ProductList from '../components/products/ProductList';
import productsData from '../data/products';
import { Tag, Sparkles } from 'lucide-react';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const { addToCart } = useCart();

  // Inicializar productos
  useEffect(() => {
    setAllProducts(productsData);
    setFilteredProducts(productsData);
  }, []);

  const handleFilterChange = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-beige-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Colección Exclusiva</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Nuestros Perfumes
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Descubre nuestra selección de fragancias premium, cuidadosamente 
              curadas para cada ocasión y personalidad.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Banner */}
        

        {/* Filter Section */}
        <ProductFilter 
          products={allProducts}
          onFilterChange={handleFilterChange}
        />

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'producto encontrado' : 'productos encontrados'}
            </h2>
            <p className="text-gray-600 mt-1">
              {allProducts.length === filteredProducts.length 
                ? 'Mostrando todos los productos' 
                : `Filtrado de ${allProducts.length} productos totales`}
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-sm text-gray-600">
            <span className="px-3 py-1 bg-beige-100 rounded-full">100% Original</span>
            <span className="px-3 py-1 bg-beige-100 rounded-full">Garantía 30 días</span>
          </div>
        </div>

        {/* Products Grid */}
        <ProductList 
          products={filteredProducts}
          title=""
          description=""
          onAddToCart={handleAddToCart}
        />

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-beige-100 mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              No encontramos productos
            </h3>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
              Intenta con otros términos de búsqueda o elimina los filtros aplicados.
            </p>
            <button
              onClick={() => {
                setFilteredProducts(allProducts);
              }}
              className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Ver todos los productos
            </button>
          </div>
        )}

        {/* Categories Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Explorar por categorías
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Fragancias Florales', 'Perfumes Amaderados', 'Esencias Cítricas'].map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-beige-50 rounded-2xl p-8 border border-beige-100 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-xl">
                      {index === 0 ? '🌸' : index === 1 ? '🌲' : '🍊'}
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{category}</h4>
                <p className="text-gray-600 mb-4">
                  {index === 0 
                    ? 'Delicadas y femeninas, perfectas para el día a día.' 
                    : index === 1 
                    ? 'Intensas y masculinas, ideales para ocasiones especiales.' 
                    : 'Frescas y energizantes, para un toque de vitalidad.'}
                </p>
                <span className="text-sm font-medium text-gray-700 hover:text-black transition-colors inline-flex items-center gap-1">
                  Ver colección
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;