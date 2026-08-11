"use client";

import { ChangeEvent, useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChangeIpt = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  return (
    <section className="relative">
      <input
        type="search"
        placeholder="    Search here"
        className="Shadow shadow-gray-500 p-3 rounded-lg w-85 outline-0 active:opacity-50 bg-white"
        onChange={handleChangeIpt}
      />

      {searchValue === "" && (
        <IoSearch className="absolute top-3 right-4" size={25} />
      )}
    </section>
  );
};

export default SearchBar;
