import { Trash2 } from "lucide-react";
import React from "react";
import { useCart } from "../../context/CartContext";

const CartItem = ({ name, price }) => {
  const { cartItem } = useCart();

  return (
    <div>
      <div>
        <p>{name}</p>
        <p>{price}€</p>
      </div>
      <Trash2 />
    </div>
  );
};

export default CartItem;
