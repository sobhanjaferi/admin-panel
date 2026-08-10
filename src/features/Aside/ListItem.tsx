import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"li"> & {
  icon: ReactNode;
  title: string;
};

const Li = ({ icon, title, className, ...otherProps }: Props) => {
  return (
    <li
      className={`cursor-pointer w-full p-3 rounded-md hover:bg-cyan-600 active:opacity-30 ${className}`}
      {...otherProps}
    >
      <Link href={""} className="flex gap-2 justify-start items-center">
        {icon} <span>{title}</span>
      </Link>
    </li>
  );
};

export default Li;
