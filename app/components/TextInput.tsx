import { HTMLAttributes } from "react";

export interface TextInputProps {
  id?: string;
  name: string;
}

export const TextInput = (
  props: HTMLAttributes<HTMLInputElement> & { name: string }
) => {
  return (
    <input
      {...props}
      className="h-10 rounded-lg border-slate-200 px-2 border w-60"
    />
  );
};
