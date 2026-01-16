import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Heart } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+1234567890';
    const message = 'Hola, me gustaría contactar con ustedes para más información.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Teléfono',
      details: ['+595994104001'],
      action: 'Llamar ahora'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Correo',
      details: ['hola@essenceperfumes.com', 'ventas@essenceperfumes.com'],
      action: 'Enviar email'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Ubicación',
      details: ['Calle Perfume 123', 'Ciudad Elegante, CP 12345'],
      action: 'Ver en mapa'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horario',
      details: ['Lunes a Viernes: 9am - 7pm', 'Sábados: 10am - 2pm'],
      action: ''
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-beige-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estamos aquí para ayudarte a encontrar la fragancia perfecta
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-beige-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-beige-100 text-gray-800 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
              <div className="space-y-1 mb-4">
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">{detail}</p>
                ))}
              </div>
              {item.action && (
                <button className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
                  {item.action} →
                </button>
              )}
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl overflow-hidden mb-16">
          <div className="p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between">
            <div className="text-white mb-8 lg:mb-0 lg:mr-8">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-8 h-8" />
                <h2 className="text-2xl font-serif font-bold">WhatsApp Directo</h2>
              </div>
              <p className="text-green-100 max-w-xl">
                ¿Prefieres chatear? Escríbenos directamente por WhatsApp. 
                Te responderemos en minutos, incluso fuera del horario de atención.
              </p>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
            >
              <MessageCircle className="w-6 h-6" />
              Abrir WhatsApp
            </button>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Preguntas frecuentes
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                question: "¿Cuánto tiempo dura el envío?",
                answer: "Los envíos estándar tardan 1-3 días hábiles. Express en 24 horas para pedidos antes de las 12pm."
              },
              {
                question: "¿Hacen envíos internacionales?",
                answer: "Sí, enviamos a todo el pais. Los tiempos y costos varían según el destino."
              },
              {
                question: "¿Cómo elijo mi fragancia ideal?",
                answer: "Puedes consultar nuestras guías en línea o contactar a un experto por WhatsApp para asesoramiento personalizado."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-beige-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-beige-100 mb-6">
            <Heart className="w-8 h-8 text-amber-700" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Gracias por elegir Essence
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Nos apasiona ayudarte a encontrar la fragancia que mejor refleje tu esencia. 
            Cada perfume cuenta una historia, y queremos ser parte de la tuya.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => window.location.href = '/productos'}
              className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Ver productos
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors"
            >
              Contactar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;