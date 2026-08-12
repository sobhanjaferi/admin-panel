import IconButton from "@/components/IconButton";
import Image from "next/image";
import { ReactNode } from "react";
import { CiMenuKebab } from "react-icons/ci";

const Profile = (): ReactNode => {
  return (
    <section className="w-full flex justify-between items-center">
      <section className="flex justify-between items-center gap-5 hover:cursor-pointer">
        <Image
          src={"/profile.png"}
          alt="profile image"
          width={1080}
          height={1080}
          className="rounded-full w-10 h-10"
        />

        <section className="flex flex-col justify-between items-start">
          <span className="font-bold">Sobhan Jafari</span>
          <span className="text-sm text-gray-300">View profile</span>
        </section>
      </section>

      <IconButton>
        <CiMenuKebab />
      </IconButton>
    </section>
  );
};

export default Profile;
