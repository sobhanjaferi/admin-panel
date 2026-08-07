"use client";

import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import FormInput from "./FormInput";
import { ReactElement, useState } from "react";

const Form = (): ReactElement => {
  const [isShowPass, setIsShowPass] = useState<boolean>(false);

  const handleChangeIpt = (): void => {
    setIsShowPass(!isShowPass);
  };

  return (
    <form className="flex flex-col justify-between items-center gap-7 w-full">
      <FormInput
        title="Email"
        id="email"
        placeholder="username@gmail.com"
        type="email"
      />

      <FormInput
        title="Password"
        id="password"
        placeholder="Password"
        type={isShowPass ? "text" : "password"}
        className="relative"
      >
        <FaRegEye
          className={`absolute right-2 top-11.5 text-gray-600 text-xl active:opacity-30 group-hover:-translate-y-2 transition-all duration-300 ease-in-out ${isShowPass ? "hidden" : "block"}`}
          onClick={handleChangeIpt}
        />
        <FaRegEyeSlash
          className={`absolute right-2 top-11.5 text-gray-600 text-xl active:opacity-30 group-hover:-translate-y-2 transition-all duration-300 ease-in-out ${isShowPass ? "block" : "hidden"}`}
          onClick={handleChangeIpt}
        />
      </FormInput>

      <Link href={""} className="text-left w-full">
        Forgot Password?
      </Link>

      <button
        type="submit"
        className="p-3 bg-blue-950 rounded-lg active:opacity-30 w-full cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 shadow-2xl text-shadow-blue-950"
      >
        Login
      </button>
    </form>
  );
};

export default Form;
