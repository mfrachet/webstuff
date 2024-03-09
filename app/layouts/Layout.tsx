import { ReactNode } from "react";
import { Nav } from "~/components/Nav";
import { Title } from "~/components/Title";

export interface LayoutProps {
  children: ReactNode;
  title: string;
}

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="container mx-auto py-8 px-4">
      <Nav />
      <div className="h-12" />

      <Title>{title}</Title>

      <div className="pt-8 flex flex-col gap-4">{children}</div>
    </div>
  );
};
