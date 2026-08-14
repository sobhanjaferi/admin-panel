"use client";

import Link from "next/link";
import FormInput from "./FormInput";
import { ReactNode, useContext } from "react";
import { authContext } from "@/contexts/Auth";

export interface IptValues {
  email: string;
  password: string;
}

const Form = (): ReactNode => {
  const { handleLogin } = useContext(authContext);

  const handleFormData = (formData: FormData): void => {
    const emailValue = formData.get("email") as string;
    const passwordValue = formData.get("password") as string;

    handleLogin({ email: emailValue, password: passwordValue });
  };

  return (
    <form
      className="flex flex-col justify-between items-center gap-7 w-full"
      action={handleFormData}
    >
      <FormInput
        title="Email"
        id="email"
        name="email"
        placeholder="username@gmail.com"
        type="email"
      />

      <FormInput
        title="Password"
        id="password"
        name="password"
        placeholder="Password"
        type="password"
      />

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
