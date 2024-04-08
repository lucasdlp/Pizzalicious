import React from "react";

const SearchBar = ({ setSearchFood }) => {
  const handleInput = () => {
    setSearchFood(inputSearch.value);
  };

  return (
    <>
      <input
        className="bg-gray-100 py-2 px-8 rounded-md min-w-72 outline-none"
        type="search"
        id="inputSearch"
        placeholder="Rechercher"
        autoComplete="none"
        onInput={handleInput}
      />
    </>
  );
};

export default SearchBar;
