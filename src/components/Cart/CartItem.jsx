import React from "react";
import { useCart } from "../../context/CartContext";
import Trash from "./Trash";

const CartItem = ({ name, price }) => {
  const { cartItem } = useCart();

  return (
    <div className="item flex justify-between w-full h-16  items-center bg-white mb-2 rounded-md px-3 ">
      <div className=" gap-6">
        <p className="select-none font-bold">{name}</p>
        <p className="text-sm select-none text-gray-500">{price}€</p>
      </div>

      <Trash />
    </div>
  );
};

export default CartItem;
