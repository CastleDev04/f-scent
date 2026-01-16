import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+1234567890';
    const message = 'Hola, me gustaría información sobre sus perfumes.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-beige-50 via-white to-beige-100 min-h-[85vh] flex items-center">
      {/* Patrón decorativo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-black rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-beige-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-beige-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-amber-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Colección Exclusiva 2026</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Fragancias que
              <span className="block text-amber-700 mt-2">Definen Tu Esencia</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Descubre nuestra exclusiva colección de perfumes. 
              Cada fragancia cuenta una historia única, creada con las más finas esencias 
              para acompañarte en cada momento especial.
            </p>
            
            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/productos"
                className="group bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="mr-2">Explorar Colección</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button
                onClick={handleWhatsAppClick}
                className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-green-600"
              >
                <span>Consulta Personalizada</span>
                <span className="ml-2 text-lg">💬</span>
              </button>
            </div>
            
            {/* Texto de confianza */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-700">clientes satisfechos</span> 
              • Garantía de calidad
              </p>
            </div>
          </div>
          
          {/* Imagen/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Marco decorativo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-200 to-beige-300 rounded-3xl transform rotate-3"></div>
              
              {/* Contenedor de imagen */}
              <div className="relative bg-gradient-to-br from-white to-beige-50 rounded-2xl p-8 shadow-2xl overflow-hidden">
                {/* Imagen de perfume (reemplazar con imagen real) */}
                <div className="aspect-square bg-gradient-to-br from-amber-50 to-beige-100 rounded-xl flex items-center justify-center relative">
                  <div className="absolute w-48 h-64 bg-gradient-to-t from-black/20 to-transparent rounded-full blur-2xl"></div>
                  
                  {/* Representación de frasco de perfume */}
                  <div className="relative w-40 h-64">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-800 rounded-t-full"></div>
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-48 bg-gradient-to-t from-amber-900/80 to-amber-700/60 rounded-lg shadow-inner">
                      <div className="absolute inset-2 bg-gradient-to-t from-amber-600/30 to-amber-400/20 rounded"></div>
                    </div>
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-gray-900 rounded-full"></div>
                  </div>
                </div>
                
                {/* Detalles decorativos */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🌸</span>
                </div>
                <div className="absolute bottom-6 left-6 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <span className="text-xl">✨</span>
                </div>
              </div>
              
              {/* Elementos flotantes */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-100 rounded-full opacity-70"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-beige-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;