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
        <input
          className="bg-gray-100 py-2 px-8 rounded-md min-w-72 outline-none"
          type="search"
          placeholder="Rechercher"
          autoComplete="none"
        />
      </div>
      <div className="admin-bar border-2 border-gray-100 w-48 p-2 rounded flex items-center justify-between">
        <label
          htmlFor="check-admin"
          className=" w-full cursor-pointer flex items-center justify-between"
        >
          <p>{AdminMod ? "Mode USER" : "Mode ADMIN"}</p>
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
