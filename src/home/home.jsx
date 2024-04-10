import { useState } from "react";
import AdminPopUp from "../components/AdminPopUp";
import CartContainer from "../components/Cart/CartContainer";
import Navbar from "../components/Navbar";
import Pizzas from "../components/Pizzas";
import { useAdminContext } from "../context/AdminContext";
import { useCart } from "../context/CartOpened";

const home = () => {
  const { AdminMod } = useAdminContext();
  const { cartOpened } = useCart();
  const [close, setClose] = useState(false);
  const [searchFood, setSearchFood] = useState("");

  return (
    <div className="relative">
      <Navbar close={close} setClose={setClose} setSearchFood={setSearchFood} />
      <Pizzas searchFood={searchFood} />
      <AdminPopUp close={close} setClose={setClose} />
      {cartOpened && <CartContainer />}
    </div>
  );
};

export default home;
