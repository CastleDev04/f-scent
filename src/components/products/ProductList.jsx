import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({
  products = [],
  title = "Nuestra Colección",
  description,
  onAddToCart
}) => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-beige-100 mb-4">
            <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            {title}
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            {description || "Descubre nuestras exclusivas fragancias, cuidadosamente seleccionadas para ofrecerte una experiencia sensorial única. Cada perfume cuenta una historia."}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">10+</div>
              <div className="text-sm text-gray-600">Fragancias Únicas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Ingredientes Naturales</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">24h</div>
              <div className="text-sm text-gray-600">Duración Garantizada</div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {products.map((product, index) => (
                <ProductCard
                  key={product.id ?? index}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>

            {/* View More */}
            <div className="text-center mt-12 lg:mt-16">
              <div className="inline-flex items-center text-gray-700 hover:text-black transition-colors font-medium group cursor-pointer">
                <span className="mr-2">Ver colección completa</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-beige-100 mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No hay productos disponibles
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Pronto añadiremos nuevas fragancias a nuestra colección.
            </p>
          </div>
        )}

        {/* Decorative Elements */}
        <div className="hidden lg:block absolute right-0 -translate-y-40 opacity-10">
          <svg width="400" height="400" viewBox="0 0 200 200" className="text-black">
            <path fill="currentColor" d="M43.8,-58.1C56.6,-50.1,66.3,-36.5,70.4,-21.8C74.5,-7,73,8.9,67.2,22.9C61.4,36.9,51.2,49,38.3,56.1C25.4,63.3,9.8,65.6,-4.6,71.5C-19,77.4,-37.3,87,-50.7,81C-64.1,75,-72.5,53.4,-75.1,32.8C-77.8,12.2,-74.6,-7.5,-67.7,-24.1C-60.7,-40.8,-49.9,-54.5,-36.1,-62.1C-22.3,-69.7,-5.6,-71.2,9.7,-68.8C25,-66.5,50.1,-60.4,43.8,-58.1Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
