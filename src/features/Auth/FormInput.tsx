"use client";

import { ChangeEvent, ComponentProps, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

type Props = ComponentProps<"label"> &
  ComponentProps<"input"> & {
    title: string;
    placeholder?: string;
  };

const FormInput = ({
  id,
  type,
  title,
  placeholder,
  className,
  name,
  value,
  ...otherProps
}: Props) => {
  const [isShowPass, setIsShowPass] = useState<boolean>(false);

  const handleChangeIcon = (): void => {
    setIsShowPass(!isShowPass);
  };

  return (
    <label
      htmlFor={id}
      className={`cursor-pointer w-full group relative ${className}`}
      {...otherProps}
    >
      <p className="mb-3">{title}</p>
      <input
        type={isShowPass ? "text" : type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="p-2 rounded-md outline-none bg-white placeholder:text-gray-400 text-gray-800 w-full group-hover:-translate-y-2 transition-all duration-300 ease-in-out"
        required
        value={value}
      />

      {isShowPass ? (
        <FaRegEye
          className={`text-gray-600 absolute right-2 top-11.5 text-xl active:opacity-30 group-hover:-translate-y-2 transition-all duration-300 ease-in-out ${type !== "password" && "hidden"}`}
          onClick={handleChangeIcon}
        />
      ) : (
        <FaRegEyeSlash
          className={`text-gray-600 absolute right-2 top-11.5 text-xl active:opacity-30 group-hover:-translate-y-2 transition-all duration-300 ease-in-out ${type !== "password" && "hidden"}`}
          onClick={handleChangeIcon}
        />
      )}
    </label>
  );
};

export default FormInput;
