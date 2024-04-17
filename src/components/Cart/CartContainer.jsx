import { ShoppingCart, X } from "lucide-react";
import React from "react";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cartOpened, setCartOpened, cartItems } = useCart();

  const handleClick = () => {
    setCartOpened(false);
  };

  return (
    <div
      className={`w-80 h-2/4 bg-white border-2 border-gray-100 absolute top-[19vh]  
      right-8 rounded-lg shadow-md transition-transform duration-100 ease-linear p-3 ${
        cartOpened ? "opacity-100  " : `none opacity-0 translate-x-[10%] `
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <X
          className={`cursor-pointer transition-transform duration-700 ${
            cartOpened ? "rotate-90" : ""
          }`}
          onClick={handleClick}
        />
        <p className="font-bold text-lg">Total : 20€</p>
        <div className="w-7"></div>
      </div>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => {
          return <CartItem key={index} name={item.name} price={item.price} />;
        })
      ) : (
        <div className="flex flex-col justify-center items-center mt-28">
          <ShoppingCart color="#c3c4c5" size={100} strokeWidth={3} />
          <p className="text-[#c3c4c5]">Le panier est vide !</p>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
