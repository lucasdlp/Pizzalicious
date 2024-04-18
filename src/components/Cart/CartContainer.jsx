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
      className={`cart-container w-80 h-2/4 max-h-[50%] bg-white border-2 border-gray-100 absolute top-[19vh]  
      right-8 rounded-lg shadow-md transition-transform duration-100 ease-linear p-3 overflow-y-auto ${
        cartOpened ? "opacity-100  " : `none opacity-0 translate-x-[10%] `
      }`}
    >
      <div className="flex items-center justify-between w-full mb-9 ">
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
        cartItems
          .filter((item) => item.deleted === false)
          .map((item, index) => {
            console.log(item);
            return (
              <CartItem
                key={index}
                name={item.name}
                price={item.price}
                url={item.url}
                deleted={item.deleted}
              />
            );
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
