import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { ShieldX } from "lucide-react";
import { ReactNode } from "react";

export interface ErrorBoxProps {
  children: ReactNode;
  title: ReactNode;
}
export const ErrorBox = ({ title, children }: ErrorBoxProps) => {
  return (
    <Alert variant="destructive">
      <ShieldX className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};
