import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const CartContext = createContext();

// Hook personalizado
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
};

// Proveedor
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('perfumeCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Persistencia
  useEffect(() => {
    localStorage.setItem('perfumeCart', JSON.stringify(cartItems));
  }, [cartItems]);

  // 🟢 AGREGAR AL CARRITO (CLAVE)
  const addToCart = (product, selectedDecant) => {
  const cartId = `${product.id}-${selectedDecant.size}`;

  setCartItems((prev) => {
    const existing = prev.find((item) => item.cartId === cartId);

    if (existing) {
      return prev.map((item) =>
        item.cartId === cartId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [
      ...prev,
      {
        cartId,
        id: product.id,
        name: product.name,
        image: product.image,
        selectedDecant,
        quantity: 1,
      },
    ];
  });
};

  // 🟢 ELIMINAR
  const removeFromCart = (cartId) => {
    setCartItems((prev) =>
      prev.filter((item) => item.cartId !== cartId)
    );
  };

  // 🟢 ACTUALIZAR CANTIDAD
  const updateQuantity = (cartId, newQuantity) => {
  if (newQuantity < 1) {
    removeFromCart(cartId);
    return;
  }

  setCartItems((prev) =>
    prev.map((item) =>
      item.cartId === cartId
        ? { ...item, quantity: newQuantity }
        : item
    )
  );
};


  // 🟢 INCREMENTAR
  const incrementQuantity = (cartId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartId === cartId
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.price,
            }
          : item
      )
    );
  };

  // 🟢 DECREMENTAR
  const decrementQuantity = (cartId) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.cartId === cartId) {
            const newQty = item.quantity - 1;
            if (newQty < 1) return null;
            return {
              ...item,
              quantity: newQty,
              totalPrice: newQty * item.price,
            };
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Vaciar
  const clearCart = () => setCartItems([]);

  // Totales
  const getTotal = () =>
  cartItems.reduce(
    (total, item) =>
      total + item.quantity * item.selectedDecant.price,
    0
  );

  const getTotalItems = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  // Verificar si variante existe
  const isInCart = (cartId) =>
    cartItems.some((item) => item.cartId === cartId);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        incrementQuantity,
        decrementQuantity,
        clearCart,
        getTotal,
        getTotalItems,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
