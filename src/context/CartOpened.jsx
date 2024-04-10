import { React, createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartOpened, setCartOpened] = useState(false);

  return (
    <CartContext.Provider value={{ cartOpened, setCartOpened }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
