import { useState } from "react";
import AdminPopUp from "../components/AdminPopUp";
import Navbar from "../components/Navbar";
import Pizzas from "../components/Pizzas";
import { useAdminContext } from "../context/AdminContext";

const home = () => {
  const { AdminMod } = useAdminContext();
  const [close, setClose] = useState(false);

  return (
    <div className="relative">
      <Navbar close={close} setClose={setClose} />
      <Pizzas />
      <AdminPopUp close={close} setClose={setClose} />
    </div>
  );
};

export default home;
