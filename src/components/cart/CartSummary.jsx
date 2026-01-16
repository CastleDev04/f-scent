import React, { useState } from 'react';
import { MessageCircle, Shield } from 'lucide-react';
import { sendCartToWhatsApp } from '../../services/whatsapp';

const CartSummary = ({ cartItems }) => {
  const [customerData, setCustomerData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('Efectivo');

  const total = cartItems.reduce(
    (sum, item) => sum + ((item.selectedDecant?.price || 0) * item.quantity),
    0
  );
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    sendCartToWhatsApp(cartItems, customerData, paymentMethod);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-beige-100 p-6 lg:p-8">
      <h2 className="text-xl font-serif font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-100">
        Resumen del pedido
      </h2>

      {/* Productos */}
      <div className="mb-6 flex justify-between">
        <span className="text-gray-600">Productos ({itemCount})</span>
        <span className="font-medium text-gray-900">Gs. {total.toLocaleString()}</span>
      </div>

      {/* Cliente */}
      <div className="mb-6 space-y-2">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={customerData.name}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          value={customerData.phone}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={customerData.address}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="city"
          placeholder="Ciudad"
          value={customerData.city}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      {/* Método de pago */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">Método de pago:</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="Efectivo">Efectivo</option>
          <option value="Transferencia">Transferencia bancaria</option>
          <option value="Tarjeta">Tarjeta de crédito/débito</option>
        </select>
      </div>

      {/* Botón WhatsApp */}
      <button
        onClick={handleCheckout}
        disabled={cartItems.length === 0}
        className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-3 transition-all duration-300 ${
          cartItems.length === 0
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
        }`}
      >
        <MessageCircle className="w-5 h-5" />
        {cartItems.length === 0 ? 'Carrito vacío' : 'Enviar pedido por WhatsApp'}
      </button>

      {/* Seguridad */}
      <div className="mt-6 pt-6 border-t border-gray-100 flex items-start gap-3">
        <div className="p-2 bg-beige-50 rounded-lg">
          <Shield className="w-5 h-5 text-gray-700" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">Compra segura</p>
          <p className="text-xs text-gray-600">Tu información está protegida</p>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
