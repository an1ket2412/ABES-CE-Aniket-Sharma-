import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add or update items in cart
  const addToCart = (book) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.title === book.title);
      if (existing) {
        return prev.map((item) =>
          item.title === book.title
            ? { ...item, quantity: item.quantity + book.quantity }
            : item
        );
      } else {
        return [...prev, book];
      }
    });
  };

  const removeFromCart = (title) => {
    setCartItems((prev) => prev.filter((item) => item.title !== title));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
