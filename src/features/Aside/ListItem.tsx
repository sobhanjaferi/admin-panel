"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"li"> & {
  icon: ReactNode;
  title: string;
  link: string;
};

const Li = ({ icon, title, link, className, ...otherProps }: Props) => {
  const url: string = usePathname();
  return (
    <li {...otherProps} className="w-full">
      <Link
        href={link}

        className={`cursor-pointer w-full p-3 rounded-md hover:bg-cyan-600 active:opacity-30 flex gap-2 justify-start items-center outline-0 ${url === link && "bg-cyan-600"} ${className}`}
      >
        {icon} <span>{title}</span>
      </Link>
    </li>
  );
};

export default Li;
