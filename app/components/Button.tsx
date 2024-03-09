import clsx from "clsx";
import { HTMLAttributes } from "react";

const variantClass = {
  primary: "text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-700",
  secondary:
    "text-slate-900 bg-white border border-slate-900 hover:bg-slate-50 active:bg-slate-100",
};

export const Button = ({
  variant = "primary",
  ...props
}: HTMLAttributes<HTMLButtonElement> & {
  type: "submit" | "button";
  name?: string;
  value?: string;
  variant?: "primary" | "secondary";
}) => {
  const v = variantClass[variant];
  return (
    <button
      {...props}
      className={clsx("h-10 rounded-lg px-4 inline-block  cursor-pointer", v)}
    />
  );
};
