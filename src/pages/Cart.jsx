import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, ArrowLeft, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import { sendCartToWhatsApp } from "../services/whatsapp";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
    getTotalItems,
  } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    sendCartToWhatsApp(cartItems);
  };

  const handleClearCart = () => {
    if (window.confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
      clearCart();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-beige-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
                Tu Carrito
              </h1>
              <p className="text-gray-300">
                {getTotalItems()}{" "}
                {getTotalItems() === 1 ? "producto" : "productos"} en tu
                selección
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {cartItems.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {/* Cart Header */}
              <div className="flex items-center justify-between mb-6">
                <Link
                  to="/productos"
                  className="flex items-center text-gray-600 hover:text-black transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Continuar comprando
                </Link>

                <button
                  onClick={handleClearCart}
                  className="flex items-center text-red-600 hover:text-red-700 transition-colors text-sm"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Vaciar carrito
                </button>
              </div>

              {/* Cart Items List */}
              <div className="bg-white rounded-2xl shadow-sm border border-beige-100 p-6 max-h-[600px] overflow-y-auto">
                <div className="hidden md:grid grid-cols-12 gap-4 pb-4 mb-4 border-b border-gray-100 text-sm text-gray-600 uppercase tracking-wide">
                  <div className="col-span-5">Producto</div>
                  <div className="col-span-3 text-center">Cantidad</div>
                  <div className="col-span-3 text-center">Precio</div>
                  <div className="col-span-1"></div>
                </div>

                <div className="space-y-2">
                  {cartItems.map((item) => (
                    <CartItem key={item.cartId} item={item} />
                  ))}
                </div>
              </div>

              {/* Shipping Notice */}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <CartSummary
                cartItems={cartItems}
                getTotal={getTotal}
                onCheckout={handleCheckout}
              />

              {/* Payment Methods */}
              <div className="mt-6 bg-white rounded-2xl shadow-sm border border-beige-100 p-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  ¿Cómo completar tu pedido?
                </h4>
                <ol className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-beige-100 flex items-center justify-center">
                      <span className="text-xs font-medium">1</span>
                    </div>
                    <span className="text-gray-700">
                      Haz clic en "Enviar pedido por WhatsApp"
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-beige-100 flex items-center justify-center">
                      <span className="text-xs font-medium">2</span>
                    </div>
                    <span className="text-gray-700">
                      Revisa el resumen del pedido en WhatsApp
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-beige-100 flex items-center justify-center">
                      <span className="text-xs font-medium">3</span>
                    </div>
                    <span className="text-gray-700">
                      Proporciona tus datos de envío y pago
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-beige-100 flex items-center justify-center">
                      <span className="text-xs font-medium">4</span>
                    </div>
                    <span className="text-gray-700">
                      ¡Recibe tus perfumes en 24-48 horas!
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        ) : (
          /* Empty Cart */
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-beige-100 mb-8">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Tu carrito está vacío
            </h2>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
              Aún no has añadido productos a tu carrito. Explora nuestra
              colección y descubre las fragancias perfectas para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/productos"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center justify-center"
              >
                Explorar productos
              </Link>
              <Link
                to="/"
                className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center justify-center border border-gray-200"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        )}

        {/* Recommended Products */}
        {/*cartItems.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Podría interesarte
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Muestra de 3 fragancias', price: 9.99, desc: 'Descubre nuestras novedades' },
                { name: 'Set de viaje', price: 24.99, desc: 'Perfecto para llevar contigo' },
                { name: 'Difusor ambiente', price: 19.99, desc: 'Aroma para tu hogar' },
                { name: 'Crema corporal', price: 14.99, desc: 'Complemento perfecto' }
              ].map((product, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-beige-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-beige-100 flex items-center justify-center mb-4">
                    <span className="text-xl">✨</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{product.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{product.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">${product.price}</span>
                    <button className="text-sm text-gray-700 hover:text-black transition-colors">
                      + Añadir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}*/}
      </div>
    </div>
  );
};

export default Cart;
