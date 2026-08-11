"use client";

import { MdOutlineLogin } from "react-icons/md";
import Button from "@/components/Button";
import Profile from "./Profile";
import Navbar from "./Navbar";
import { useContext } from "react";
import { authContext } from "@/contexts/Auth";

const Aside = () => {
  const { handleLogout } = useContext(authContext);

  return (
    <section className="fixed left-0 top-0 bottom-0 w-96 bg-black/90 text-white -z-10 py-10 px-11 rounded-l-2xl flex flex-col justify-between items-center">
      <Navbar />

      <section className="flex flex-col justify-between items-center gap-15 w-full mb-10">
        <Button
          onClick={handleLogout}
          className="bg-white/10 flex gap-4 justify-start items-center"
        >
          <MdOutlineLogin size={20} /> Logout
        </Button>

        <hr className="text-white/20 w-full" />

        <Profile />
      </section>
    </section>
  );
};

export default Aside;
