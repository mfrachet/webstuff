import clsx from "clsx";
import { ElementType, ReactNode } from "react";
import { keydown } from "~/utils/keydown";

export interface CardProps {
  children: ReactNode;
  onClick?: () => void;
}

export const Card = ({ children, onClick }: CardProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onKeyDown={keydown("Enter", onClick)}
      onClick={onClick}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={onClick ? 0 : undefined}
      className={clsx(
        "shadow-md rounded-lg border border-slate-200 px-4 py-2",
        onClick ? "hover:bg-slate-50 active:bg-slate-100 cursor-pointer" : ""
      )}
    >
      {children}
    </div>
  );
};

export interface CardTitleProps {
  children: ReactNode;
  as?: ElementType;
}

export const CardTitle = ({ children, as: Root = "h2" }: CardTitleProps) => {
  return (
    <Root className="text-lg font-semibold tracking-tight">{children}</Root>
  );
};
