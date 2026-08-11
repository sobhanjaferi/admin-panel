"use client";

import IconButton from "@/components/IconButton";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { ChangeEvent, useState } from "react";

const Header = () => {
  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: number = date.getMonth();
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [searchValue, setSearchValue] = useState<string>("");

  const handleChangeIpt = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  return (
    <header className="w-ful p-5 flex justify-between items-center border-b border-gray-300">
      <section className="flex justify-center items-center gap-5">
        <h1 className="text-2xl font-bold">Hello Sobhan</h1>

        <span className="text-gray-600">
          {">>"} {`${months[month]}, ${year}`}
        </span>
      </section>

      <section className="flex justify-center items-center gap-5">
        <IconButton className="relative">
          <FaBell className="text-gray-600" size={25} />

          <div className="p-1 rounded-full bg-blue-500 absolute top-2 right-2 border border-white"></div>
        </IconButton>

        <section className="relative">
          <input
            type="search"
            placeholder="    Search here"
            className="Shadow shadow-gray-500 p-3 rounded-lg w-85 outline-0 active:opacity-50"
            onChange={handleChangeIpt}
          />

          {searchValue === "" && (
            <IoSearch
              className="absolute top-3 right-4 text-gray-600"
              size={25}
            />
          )}
        </section>
      </section>
    </header>
  );
};

export default Header;
