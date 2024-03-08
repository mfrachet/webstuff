import { HTMLAttributes } from "react";

export interface Textarea {
  id?: string;
  name: string;
}

export const Textarea = (
  props: HTMLAttributes<HTMLTextAreaElement> & {
    name: string;
    disabled?: boolean;
    value?: string;
  }
) => {
  return (
    <textarea
      {...props}
      className="rounded-lg border-slate-200 px-2 border h-full py-1 block w-full bg-white"
    />
  );
};
