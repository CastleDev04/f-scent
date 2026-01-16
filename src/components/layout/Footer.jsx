import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Heart, MessageCircle } from 'lucide-react';
import  Logo  from "../../assets/image/perfumes/Logo.jpg"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const phoneNumber = '+595994104001';
    const message = 'Hola, tengo una consulta sobre sus productos.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const footerLinks = {
    'Tienda': [
      { label: 'Todos los productos', path: '/productos' },
      { label: 'Novedades', path: '/productos' },
      { label: 'Más vendidos', path: '/productos' },
      { label: 'Ofertas especiales', path: '/productos' }
    ],
    'Ayuda': [
      { label: 'Contacto', path: '/contacto' },
    ],
    'Legal': [
      { label: 'Términos y condiciones', path: '#' },
      { label: 'Política de privacidad', path: '#' },
      { label: 'Aviso legal', path: '#' },
      { label: 'Cookies', path: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', url: '#' },
    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', url: '#' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', url: '#' }
  ];

  const contactInfo = [
    { icon: <Phone className="w-4 h-4" />, text: '+595994104001' },
    { icon: <Mail className="w-4 h-4" />, text: 'hola@essenceperfumes.com' },
    { icon: <MapPin className="w-4 h-4" />, text: 'Calle Perfume 123, Ciudad Elegante' }
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                  <img src={Logo} alt="Logo F-Scent" />
                </div>
              </div>
              <span className="text-2xl font-serif font-semibold">F-Scent</span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Especialistas en fragancias exclusivas que cuentan historias. 
              Cada perfume es una obra de arte diseñada para destacar tu esencia única.
            </p>
            
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-400">
                  {info.icon}
                  <span className="text-sm">{info.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-6 text-gray-200">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    {link.path.startsWith('/') ? (
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.path}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} F-Scent Perfumes. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <span>WhatsApp Directo</span>
              </button>
              
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>Los mejores perfumes del pais.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;