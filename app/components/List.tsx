import { ReactNode } from "react";

export interface ListProps {
  children: ReactNode;
}

export const List = ({ children }: ListProps) => {
  return <ul>{children}</ul>;
};

export interface ListItemProps {
  children: ReactNode;
}

export const ListItem = ({ children }: ListItemProps) => {
  return (
    <li className="py-2 border-b border-slate-200 last:border-none text-slate-700">
      {children}
    </li>
  );
};
