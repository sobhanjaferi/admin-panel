import { ComponentProps } from "react";

type Props = ComponentProps<"button">;

const Button = ({ children, className, onClick, ...otherProps }: Props) => {
  return (
    <button
      className={`p-3 rounded-lg cursor-pointer active:opacity-30 w-full text-white ${className}`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
