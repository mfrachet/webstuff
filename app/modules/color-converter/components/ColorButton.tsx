import { toast } from "@/components/ui/use-toast";
import { ReactNode } from "react";

export interface ColorButtonProps {
  color: string;
  children: ReactNode;
}

export const ColorButton = ({ color, children }: ColorButtonProps) => {
  const handleClick = async () => {
    await navigator.clipboard.writeText(color);

    toast({
      title: "Copied!",
      description: (
        <span>
          <strong>{color}</strong> has been copied to clipboard.
        </span>
      ),
    });
  };
  return (
    <button
      onClick={handleClick}
      className="cursor-pointer h-10 rounded-lg border border-slate-200 pl-1 pr-4 flex flex-row items-center gap-2 hover:bg-slate-50 active:bg-slate-100"
    >
      <div className="h-8 w-8 rounded" style={{ background: color }} />
      {children}
    </button>
  );
};
