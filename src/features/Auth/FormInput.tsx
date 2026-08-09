import { ChangeEvent, ComponentProps } from "react";

type Props = ComponentProps<"label"> &
  ComponentProps<"input"> & {
    title: string;
    placeholder?: string;
    onChangeIpt: (e: ChangeEvent<HTMLInputElement>) => void;
  };

const FormInput = ({
  id,
  type,
  title,
  placeholder,
  onChangeIpt,
  className,
  value,
  children,
  ...otherProps
}: Props) => {
  return (
    <label
      htmlFor={id}
      className={`cursor-pointer w-full group ${className}`}
      {...otherProps}
    >
      <p className="mb-3">{title}</p>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="p-2 rounded-md outline-none bg-white placeholder:text-gray-400 text-gray-800 w-full group-hover:-translate-y-2 transition-all duration-300 ease-in-out"
        required
        onChange={onChangeIpt}
        value={value}
      />

      {children}
    </label>
  );
};

export default FormInput;
