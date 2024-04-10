import { ShoppingCart } from "lucide-react";
import React from "react";
import { useCart } from "../../context/CartOpened";

const Cart = () => {
  const { cartOpened, setCartOpened } = useCart();
  const handleClick = () => {
    cartOpened ? setCartOpened(false) : setCartOpened(true);
  };

  return (
    <div className="cursor-pointer relative " onClick={handleClick}>
      <span className="absolute w-4 h-4 bg-secondary text-white right-0 top-0 text-xs  rounded-xl translate-x-[40%] translate-y-[-30%] flex items-center justify-center ">
        0
      </span>
      <ShoppingCart />
    </div>
  );
};

export default Cart;
