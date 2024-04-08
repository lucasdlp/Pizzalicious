import React from "react";
import AddToCart from "./AddToCart";

const Card = ({ name, url, price }) => {
  return (
    <div className="card cursor-pointer w-56 h-80 bg-white border-[1px] border-gray-200 mb-6 rounded-xl active:scale-[0.98] ease-out duration-150  ">
      <img
        src={url}
        alt={name}
        className="rounded-xl border-b-1 border-gray-100 w-full"
      />
      <div className="flex items-center justify-between p-1 px-2 ">
        <h3 className="font-bold  mt-1">{name}</h3>
        <p className="text-gray-500">{price}€</p>
      </div>
      <AddToCart />
      {/* <CircleX /> */}
    </div>
  );
};

export default Card;
