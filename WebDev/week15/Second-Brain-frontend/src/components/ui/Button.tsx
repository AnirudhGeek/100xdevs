import type { ReactElement } from "react";

type Variant = "primary" | "secondary";

interface ButtonProps {
  variant: Variant;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  loading ?: boolean
}

const variantStyle: Record<Variant, string> = {
  primary: "bg-purple-300 text-purple-600 hover:bg-purple-400 hover:text-pruple-800",
  secondary: "bg-purple-500 text-white hover:bg-purple-800",
};

const sizeStyles = {
  sm: "px-2",
  md: "px-4",
  lg: "px-0",
};

const defaultStyles = "rounded-md py-2 hover:cursor-pointer flex items-center justify-center";

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props?.onClick}
      className={`${props.loading ? "bg-slate-400" : ""} ${variantStyle[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} `} disabled={props.loading}
    >
      {props.startIcon ? <div className="">{props.startIcon}</div> : null} {props.text}{" "}
      {props.endIcon ? <div>{props.endIcon}</div> : null}
    </button>
  );
};
