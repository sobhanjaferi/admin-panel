"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const path: string = usePathname();
  const splitPath: string[] = path.split("");
  const filterSplitPath: string[] = splitPath.filter((item) => item !== "/");
  const currentPath: string = filterSplitPath.join("");

  return (
    <section className="w-screen h-screen flex flex-col justify-center-safe items-center gap-10">
      <h1 className="text-red-500 text-3xl font-bold">
        Not Found <span className="border-b">{currentPath}</span> page . 404
      </h1>

      <Link
        href={"/"}
        className="text-blue-500 font-bold text-2xl border-b-2 pb-1"
      >
        back to main page.
      </Link>
    </section>
  );
};

export default NotFound;
