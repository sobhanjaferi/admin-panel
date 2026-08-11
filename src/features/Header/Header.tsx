import IconButton from "@/components/IconButton";
import { FaBell } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { ReactNode } from "react";

const Header = (): ReactNode => {
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

  return (
    <header className="w-ful p-5 flex justify-between items-center border-b border-gray-300">
      <section className="flex justify-center items-center gap-5">
        <h1 className="text-2xl font-bold text-black">Hello Sobhan</h1>

        <span>
          {">>"} {`${months[month]}, ${year}`}
        </span>
      </section>

      <section className="flex justify-center items-center gap-5">
        <IconButton className="relative">
          <FaBell size={25} />

          <div className="p-1 rounded-full bg-blue-500 absolute top-2 right-2 border border-white"></div>
        </IconButton>

        <SearchBar />
      </section>
    </header>
  );
};

export default Header;
