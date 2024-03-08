import { HTMLAttributes } from "react";

export const Button = (
  props: HTMLAttributes<HTMLButtonElement> & { type: "submit" | "button" }
) => {
  return (
    <button
      {...props}
      className="h-10 rounded-lg px-4 inline-block text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-700 cursor-pointer"
    />
  );
};
