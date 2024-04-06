import { useAdminContext } from "../context/AdminContext";

const Navbar = () => {
  const { AdminMod, setAdminMod } = useAdminContext();

  const handleCheckbox = (e) => {
    setAdminMod(e.target.checked);
  };

  return (
    <nav className="w-full bg-white h-[13vh] flex items-center justify-between px-10 select-none ">
      <div className="logo">
        <img className="w-20" src="./logo.svg" alt="logo" />
      </div>
      <div className="search-bar">
        <input type="search" placeholder="Rechercher" autoComplete="none" />
      </div>
      <div className="admin-bar">
        <label htmlFor="check-admin">
          {AdminMod ? "Désactiver le mode ADMIN" : "Passer en mode ADMIN"}
        </label>
        <input
          type="checkbox"
          name=""
          id="check-admin"
          onChange={handleCheckbox}
        />
      </div>
    </nav>
  );
};

export default Navbar;
