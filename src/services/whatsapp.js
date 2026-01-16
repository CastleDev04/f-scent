// WhatsApp service for perfume store
const DEFAULT_PHONE_NUMBER = '+595994104001'; // Cambiar por el número real

/**
 * Formatea un número de teléfono para usar en WhatsApp
 */
const formatPhoneNumber = (phoneNumber) => {
  // Eliminar todos los caracteres no numéricos excepto el +
  return phoneNumber.replace(/[^\d+]/g, '');
};

/**
 * Formatea el precio con separador de miles y decimales
 */
const formatPrice = (price) => {
  return new Intl.NumberFormat('es-ES', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price);
};

/**
 * Genera el mensaje del pedido
 */
const generateOrderMessage = (cartItems, total) => {
  const itemsList = cartItems.map(item => {
    const subtotal = item.price * item.quantity;
    return `• ${item.quantity}x ${item.name} - $${formatPrice(subtotal)}`;
  }).join('\n');

  return `¡Hola! Me gustaría hacer el siguiente pedido:

📦 **PEDIDO DE PERFUMES**

${itemsList}

━━━━━━━━━━━━━━━━━━━━
💰 **Total: $${formatPrice(total)}**

📋 **Datos de envío:**
Nombre: 
Teléfono: 
Dirección: 
Ciudad: 

💳 **Método de pago:**
○ Transferencia bancaria
○ Tarjeta de crédito/débito
○ Efectivo al recibir

¿Podrían confirmarme la disponibilidad y tiempo de entrega?
¡Gracias!`;
};

/**
 * Envía el carrito a WhatsApp
 * @param {Array} cartItems - Array de productos en el carrito
 * @param {string} customPhone - Número de teléfono personalizado (opcional)
 */
export const sendCartToWhatsApp = (cartItems, customPhone = null) => {
  if (!cartItems || cartItems.length === 0) {
    console.error('El carrito está vacío');
    return;
  }

  // Calcular total
  const total = cartItems.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);

  // Generar mensaje
  const message = generateOrderMessage(cartItems, total);
  
  // Codificar el mensaje para URL
  const encodedMessage = encodeURIComponent(message);
  
  // Usar número personalizado o el por defecto
  const phoneNumber = customPhone || DEFAULT_PHONE_NUMBER;
  const formattedPhone = formatPhoneNumber(phoneNumber);
  
  // Crear URL de WhatsApp
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
  
  // Abrir WhatsApp en nueva pestaña
  window.open(whatsappUrl, '_blank');
};

/**
 * Envía un mensaje simple a WhatsApp (para consultas generales)
 */
export const sendSimpleMessage = (message, customPhone = null) => {
  const phoneNumber = customPhone || DEFAULT_PHONE_NUMBER;
  const formattedPhone = formatPhoneNumber(phoneNumber);
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};

/**
 * Configura un nuevo número de teléfono (útil para múltiples vendedores)
 */
export const setWhatsAppNumber = (newNumber) => {
  const formatted = formatPhoneNumber(newNumber);
  if (formatted) {
    DEFAULT_PHONE_NUMBER = formatted;
    return true;
  }
  return false;
};

/**
 * Obtiene el número actual configurado
 */
export const getCurrentWhatsAppNumber = () => {
  return DEFAULT_PHONE_NUMBER;
};

/**
 * Función para enviar consulta de un solo producto
 */
export const sendProductInquiry = (product, quantity = 1) => {
  const phoneNumber = DEFAULT_PHONE_NUMBER;
  const formattedPhone = formatPhoneNumber(phoneNumber);
  const total = product.price * quantity;
  
  const message = `¡Hola! Me interesa el siguiente producto:

🎁 **CONSULTA DE PRODUCTO**
Producto: ${product.name}
Cantidad: ${quantity}
Precio unitario: $${formatPrice(product.price)}
Total: $${formatPrice(total)}

¿Podrían darme más información sobre disponibilidad y envío?
¡Gracias!`;
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};