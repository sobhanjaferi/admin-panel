import { ComponentProps } from "react";

type Props = ComponentProps<"button">;

const IconButton = ({ children, className, onClick, ...otherProps }: Props) => {
  return (
    <button
      className={`flex justify-center items-center p-2 hover:bg-white/10 transition-all active:opacity-30 aspect-<ratio> rounded-full cursor-pointer ${className}`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default IconButton;
