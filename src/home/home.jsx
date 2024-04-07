import AdminPopUp from "../components/AdminPopUp";
import Navbar from "../components/Navbar";
import Pizzas from "../components/Pizzas";
import { useAdminContext } from "../context/AdminContext";

const home = () => {
  const { AdminMod } = useAdminContext();

  return (
    <div className="relative">
      <Navbar />
      <Pizzas />
      <AdminPopUp />
    </div>
  );
};

export default home;
