import { useState } from "react";
import AdminPopUp from "../components/AdminPopUp";
import CartContainer from "../components/Cart/CartContainer";
import Navbar from "../components/Navbar";
import Pizzas from "../components/Pizzas";
import { useAdminContext } from "../context/AdminContext";
import { useCart } from "../context/CartContext";

const home = () => {
  const { AdminMod } = useAdminContext();
  const { cartOpened } = useCart();
  const [close, setClose] = useState(false);
  const [searchFood, setSearchFood] = useState("");

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center">
      <Navbar close={close} setClose={setClose} setSearchFood={setSearchFood} />

      <Pizzas searchFood={searchFood} />
      <CartContainer />

      <AdminPopUp close={close} setClose={setClose} />
    </div>
  );
};

export default home;
