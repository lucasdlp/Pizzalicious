import { Trash2 } from "lucide-react";
import React from "react";

const Trash = () => {
  return (
    <div className="cursor-pointer hover: ">
      <Trash2
        strokeWidth={1}
        size={20}
        className="hover:scale-110 transition-transform duration-100 "
      />
    </div>
  );
};

export default Trash;
