import { Trash2 } from "lucide-react";
import React from "react";
import { useCart } from "../../context/CartContext";

const Trash = ({ index }) => {
  const { deleteItem } = useCart();

  return (
    <div className="cursor-pointer">
      <Trash2
        strokeWidth={1}
        size={20}
        className="hover:scale-110 transition-transform duration-100"
      />
    </div>
  );
};

export default Trash;
