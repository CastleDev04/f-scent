import React from 'react';
import { MessageCircle, Shield } from 'lucide-react';

const CartSummary = ({ cartItems, onCheckout }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + ((item.selectedDecant?.price || 0) * item.quantity),
    0
  );
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-beige-100 p-6 lg:p-8">
      <h2 className="text-xl font-serif font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-100">
        Resumen del pedido
      </h2>

      {/* Product Count */}
      <div className="mb-6 flex justify-between">
        <span className="text-gray-600">Productos ({itemCount})</span>
        <span className="font-medium text-gray-900">${total.toFixed(2)}</span>
      </div>

      {/* Total */}
      <div className="py-4 border-y border-gray-100 mb-6 flex justify-between">
        <span className="text-lg font-semibold text-gray-900">Total</span>
        <div className="text-2xl font-bold text-gray-900">
          ${total.toFixed(2)}
        </div>
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={onCheckout}
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

      {/* Security Info */}
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
