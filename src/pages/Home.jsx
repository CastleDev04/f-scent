import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Hero from '../components/home/Hero';
import ProductList from '../components/products/ProductList';
import productsData from '../data/products';
import { Award, Truck, Shield, Star } from 'lucide-react';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // Obtener productos destacados (primeros 8 o aquellos marcados como featured)
    const featured = productsData
      .filter(product => product.isFeatured || product.rating >= 4.5)
      .slice(0, 8);
    
    // Si no hay suficientes productos con featured, tomar los primeros 8
    if (featured.length < 4) {
      setFeaturedProducts(productsData.slice(0, 8));
    } else {
      setFeaturedProducts(featured);
    }
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <ProductList
        products={featuredProducts}
        title="Destacados"
        description="Las fragancias más solicitadas por nuestros clientes"
        onAddToCart={handleAddToCart}
      />

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              ¿Por qué elegir F-Scent?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprometidos con la calidad y tu satisfacción
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-beige-100 mb-6">
                <Award className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Calidad Premium
              </h3>
              <p className="text-gray-600">
                Ingredientes 100% naturales y que garantizan fragancias únicas y duraderas.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-beige-100 mb-6">
                <Truck className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Envío Express
              </h3>
              <p className="text-gray-600">
                Recibe tu pedido en 24-48 horas.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-beige-100 mb-6">
                <Shield className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Compra Segura
              </h3>
              <p className="text-gray-600">
                Pago seguro y protección de datos.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-beige-100 mb-6">
                <Star className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Atención Personalizada
              </h3>
              <p className="text-gray-600">
                Asesoramiento experto para encontrar la fragancia perfecta para cada ocasión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            ¿Necesitas ayuda para elegir?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nuestros expertos en fragancias están listos para asesorarte y recomendarte el perfume ideal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/productos"
              className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explorar toda la colección
            </Link>
            <button
              onClick={() => {
                const phoneNumber = '+1234567890';
                const message = 'Hola, necesito asesoramiento para elegir un perfume.';
                const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-green-600"
            >
              💬 Chat con un experto
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Historias de satisfacción y experiencias memorables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                comment: "El mejor perfume que he tenido. Dura todo el día y recibo cumplidos constantemente.",
                rating: 5
              },
              {
                name: "Carlos Rodríguez",
                comment: "Excelente atención y productos de primera calidad. Mi fragancia favorita para el trabajo.",
                rating: 5
              },
              {
                name: "Ana Martínez",
                comment: "Envío super rápido y el perfume llegó perfectamente empaquetado. Volveré a comprar.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-beige-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-200 to-beige-300 flex items-center justify-center mr-3">
                    <span className="font-semibold text-gray-800">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">Cliente satisfecho</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      {/* Newsletter 
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-beige-50 to-white rounded-2xl p-8 lg:p-12 border border-beige-100">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Únete a nuestra comunidad
            </h3>
            <p className="text-gray-600 mb-8">
              Suscríbete para recibir novedades, ofertas exclusivas y consejos sobre fragancias.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-grow px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/30"
              />
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap"
              >
                Suscribirme
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Prometemos no spamear. Puedes darte de baja en cualquier momento.
            </p>
          </div>
        </div>
      </section>*/}
    </div>
  );
};

export default Home;