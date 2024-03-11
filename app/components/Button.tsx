import clsx from "clsx";
import { HTMLAttributes } from "react";

const variantClass = {
  primary: "text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-700",
  secondary:
    "text-slate-900 bg-white border border-slate-900 hover:bg-slate-50 active:bg-slate-100",
};

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: "submit" | "button";
  name?: string;
  value?: string;
  variant?: "primary" | "secondary";
  size?: "S" | "M";
}

const sizeStyles = {
  S: "h-6 px-2",
  M: "h-10 px-4",
};

export const Button = ({
  variant = "primary",
  size = "M",
  ...props
}: ButtonProps) => {
  const sizeClass = sizeStyles[size];
  const v = variantClass[variant];
  return (
    <button
      {...props}
      className={clsx("rounded-lg inline-block  cursor-pointer", v, sizeClass)}
    />
  );
};
