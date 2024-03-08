import { ReactNode } from "react";
import { copyClipboard } from "~/utils/copyClipboard";

export interface ColorButtonProps {
  color: string;
  children: ReactNode;
}

export const ColorButton = ({ color, children }: ColorButtonProps) => {
  return (
    <button
      onClick={() => copyClipboard(color)}
      className="cursor-pointer h-10 rounded-lg border border-slate-200 pl-1 pr-4 flex flex-row items-center gap-2 hover:bg-slate-50 active:bg-slate-100"
    >
      <div className="h-8 w-8 rounded" style={{ background: color }} />
      {children}
    </button>
  );
};
