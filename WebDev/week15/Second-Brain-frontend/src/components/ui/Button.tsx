import { ShareIcon } from "../icon/ShareIcon";

type Variant = "primary" | "secondary";

interface ButtonProps {
  variant: Variant;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: any;
  endIcon?: any;
  onClick?: () => void;
}

const variantStyle: Record<Variant, string> = {
  primary: "bg-purple-300 text-purple-600",
  secondary: "bg-purple-500 text-white",
};

const sizeStyles = {
  sm: "px-2",
  md: "px-4",
  lg: "px-6",
};

const defaultStyles = "rounded-md py-2 hover:cursor-pointer flex items-center";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyle[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}
    >
      {props.startIcon ? <div className="">{props.startIcon}</div> : null} {props.text}{" "}
      {props.endIcon ? <div>{props.endIcon}</div> : null}
    </button>
  );
};
