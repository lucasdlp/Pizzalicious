import { useAdminContext } from "../context/AdminContext";
import Cart from "./Cart/Cart";
import SearchBar from "./SearchBar";

const Navbar = ({ setClose, setSearchFood }) => {
  const { AdminMod, setAdminMod } = useAdminContext();

  const handleCheckbox = (e) => {
    setAdminMod(e.target.checked);
    close ? setClose(false) : setClose(true);
  };

  return (
    <nav className="w-full bg-white h-[13vh] flex items-center justify-between px-10 select-none mb-12 ">
      <div className="logo">
        <img className="w-20" src="./logo.svg" alt="logo" />
      </div>
      <div className="search-bar flex items-center gap-4">
        <SearchBar setSearchFood={setSearchFood} />
        <Cart />
      </div>
      <div className="admin-bar border-2 border-gray-100 w-48 p-2 rounded flex items-center justify-between">
        <label
          htmlFor="check-admin"
          className=" w-full cursor-pointer flex items-center justify-between"
        >
          <p>Mode ADMIN</p>
          <div
            className={
              AdminMod
                ? "relative w-12 bg-gradient-to-tr from-[#ff930f] to-[#ff1b6b] rounded-xl "
                : "relative w-12 bg-gray-200 rounded-xl "
            }
          >
            <input
              type="checkbox"
              name=""
              id="check-admin"
              onChange={handleCheckbox}
              className="cursor-pointer opacity-0 before:content-[''] before:block before:w-5 before:h-5 before:bg-black before:absolute top-0 left-0"
            />
            <span
              className={
                AdminMod
                  ? "cursor-pointer  absolute w-4 h-4 bg-white top-1/2 left-0 translate-y-[-50%] rounded-xl mx-1 translate-x-[150%] ease-out duration-300"
                  : "cursor-pointer  absolute w-4 h-4 bg-white top-1/2 left-0 translate-y-[-50%] rounded-xl mx-1 ease-out duration-300"
              }
            ></span>
          </div>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
