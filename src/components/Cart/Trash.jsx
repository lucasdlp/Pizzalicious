import { Trash2 } from "lucide-react";
import React from "react";
import { useCart } from "../../context/CartContext";

const Trash = ({ deleted }) => {
  const { deleteItem } = useCart();

  return (
    <div className="cursor-pointer " onClick={() => deleteItem({ deleted })}>
      <Trash2
        strokeWidth={1}
        size={20}
        className="hover:scale-110 transition-transform duration-100 "
      />
    </div>
  );
};

export default Trash;
