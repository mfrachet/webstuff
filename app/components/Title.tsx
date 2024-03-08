import { ReactNode } from "react";

export interface TitleProps {
  children: ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return <h1 className="text-6xl font-bold">{children}</h1>;
};
