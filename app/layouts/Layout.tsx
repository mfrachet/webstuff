import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <div className="container mx-auto py-8">{children}</div>;
};
