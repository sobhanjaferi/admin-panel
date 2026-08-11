"use client";

import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import FormInput from "./FormInput";
import {
  ChangeEvent,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import { AdminData, adminData } from "./AdminData";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface IptValues {
  email: string;
  password: string;
}

const Form = (): ReactElement => {
  const [isShowPass, setIsShowPass] = useState<boolean>(false);
  const [iptValues, setIptValues] = useState<IptValues>({
    email: "",
    password: "",
  });
  const [validate, setValidate] = useState<boolean>(false);

  const route = useRouter();

  const handleChangeIcon = (): void => {
    setIsShowPass(!isShowPass);
  };

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.type === "email") {
      setIptValues((old) => {
        return { ...old, email: e.target.value };
      });
    } else {
      setIptValues((old) => {
        return { ...old, password: e.target.value };
      });
    }
  };

  useEffect(() => {
    if (validate) route.push("/");
  }, [validate, route]);

  const handleValidation = useCallback((): void => {
    const data: AdminData | undefined = adminData.find(
      (admin) =>
        admin.email === iptValues.email &&
        admin.password === iptValues.password,
    );

    if (data !== undefined) {
      cookieStore.set("auth_token", v4());

      toast.success("Wellcome to Admin Panel!", {
        onClose: () => {
          setValidate(true);
        },
      });
    } else {
      toast.error("Data is Fake!");

      setIptValues({ email: "", password: "" });
    }
  }, [iptValues]);

  useEffect(() => {
    const handleClickEnterKey = (e: KeyboardEvent): void => {
      if (e.key === "Enter") {
        handleValidation();
      }
    };

    window.addEventListener("keydown", handleClickEnterKey);

    return () => {
      window.removeEventListener("keydown", handleClickEnterKey);
    };
  }, [handleValidation]);

  return (
    <form className="flex flex-col justify-between items-center gap-7 w-full">
      <FormInput
        title="Email"
        onChangeIpt={handleChangeValue}
        value={iptValues.email}
        id="email"
        placeholder="username@gmail.com"
        type="email"
      />

      <FormInput
        title="Password"
        id="password"
        value={iptValues.password}
        placeholder="Password"
        type={isShowPass ? "text" : "password"}
        className="relative"
        onChangeIpt={handleChangeValue}
      >
        <FaRegEye
          className={`absolute right-2 top-11.5 text-gray-600 text-xl active:opacity-30 group-hover:-translate-y-2 transition-all duration-300 ease-in-out ${isShowPass ? "block" : "hidden"}`}
          onClick={handleChangeIcon}
        />
        <FaRegEyeSlash
          className={`absolute right-2 top-11.5 text-gray-600 text-xl active:opacity-30 group-hover:-translate-y-2 transition-all duration-300 ease-in-out ${isShowPass ? "hidden" : "block"}`}
          onClick={handleChangeIcon}
        />
      </FormInput>

      <Link href={""} className="text-left w-full">
        Forgot Password?
      </Link>

      <button
        type="button"
        onClick={handleValidation}
        className="p-3 bg-blue-950 rounded-lg active:opacity-30 w-full cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 shadow-2xl text-shadow-blue-950"
      >
        Login
      </button>
    </form>
  );
};

export default Form;
