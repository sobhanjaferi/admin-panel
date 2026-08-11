"use client";

import { MdOutlineLogin } from "react-icons/md";
import Button from "@/components/Button";
import Profile from "./Profile";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Aside = () => {
  const [logout, setLogout] = useState<boolean>(false);
  const route = useRouter();

  useEffect(() => {
    if (logout) {
      cookieStore.delete("auth_token");
      route.push("/auth");
    }
  }, [logout , route]);

  return (
    <section className="fixed left-0 top-0 bottom-0 w-96 bg-black/90 text-white -z-10 py-10 px-11 rounded-l-2xl flex flex-col justify-between items-center">
      <Navbar />

      <section className="flex flex-col justify-between items-center gap-15 w-full mb-10">
        <Button
          onClick={(): void => {
            setLogout(true);
          }}
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
