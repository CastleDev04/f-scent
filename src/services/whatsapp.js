// whatsapp.js
const DEFAULT_PHONE_NUMBER = '+595994104001';

export const formatPhoneNumber = (phoneNumber) =>
  phoneNumber.replace(/[^\d+]/g, '');

export const formatPrice = (price) =>
  new Intl.NumberFormat('es-ES', { minimumFractionDigits: 0 }).format(price);

export const generateOrderMessage = (cartItems, customerData, paymentMethod) => {
  const itemsList = cartItems.map(item => {
    const price = item.selectedDecant?.price || 0;
    const subtotal = price * item.quantity;
    const decant = item.selectedDecant?.size || '';
    return `• ${item.quantity} x ${item.name} (${decant}) - Gs. ${formatPrice(subtotal)}`;
  }).join('\n');

  const total = cartItems.reduce(
    (sum, item) => sum + ((item.selectedDecant?.price || 0) * item.quantity),
    0
  );

  return `¡Hola! Me gustaría hacer el siguiente pedido:

📦 PEDIDO DE PERFUMES

${itemsList}

━━━━━━━━━━━━━━━━━━━━
💰 Total: Gs. ${formatPrice(total)}

📋 Datos de envío:
Nombre: ${customerData.name}
Teléfono: ${customerData.phone}
Dirección: ${customerData.address}
Ciudad: ${customerData.city}

💳 Método de pago: ${paymentMethod}

¿Podrían confirmarme la disponibilidad y tiempo de entrega?
¡Gracias!`;
};

export const sendCartToWhatsApp = (cartItems, customerData, paymentMethod, customPhone = null) => {
  if (!cartItems || cartItems.length === 0) return;

  const message = generateOrderMessage(cartItems, customerData, paymentMethod);
  const encodedMessage = encodeURIComponent(message);
  const phone = formatPhoneNumber(customPhone || DEFAULT_PHONE_NUMBER);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
};
