import Navbar from "../components/Navbar";
import { useAdminContext } from "../context/AdminContext";

const home = () => {
  const { AdminMod } = useAdminContext();

  return (
    <div>
      <Navbar />
      <p>{AdminMod && "Admin"}</p>
    </div>
  );
};

export default home;
