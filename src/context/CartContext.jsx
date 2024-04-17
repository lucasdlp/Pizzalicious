import { React, createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartOpened, setCartOpened] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartOpened, setCartOpened, addToCart, setCartItems, cartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
