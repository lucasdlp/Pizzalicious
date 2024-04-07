import Navbar from "../components/Navbar";
import Pizzas from "../components/Pizzas";
import { useAdminContext } from "../context/AdminContext";

const home = () => {
  const { AdminMod } = useAdminContext();

  return (
    <>
      <Navbar />
      <Pizzas />
    </>
  );
};

export default home;
