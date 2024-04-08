import React from "react";

const SearchBar = () => {
  return (
    <>
      <input
        className="bg-gray-100 py-2 px-8 rounded-md min-w-72 outline-none"
        type="search"
        placeholder="Rechercher"
        autoComplete="none"
      />
    </>
  );
};

export default SearchBar;
