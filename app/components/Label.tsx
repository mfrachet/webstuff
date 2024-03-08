import { ReactNode } from "react";

export interface LabelProps {
  htmlFor: string;
  children: ReactNode;
}

export const Label = ({ htmlFor, children }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className="text-slate-700 pb-2 block">
      {children}
    </label>
  );
};
