import { copyClipboard } from "~/utils/copyClipboard";
import { Button } from "./Button";
import { Copy } from "lucide-react";

export interface CopyButtonProps {
  toCopy: string;
  toast?: string;
}

export const CopyButton = ({ toCopy, toast }: CopyButtonProps) => {
  return (
    <Button
      type={"button"}
      variant="secondary"
      onClick={() => copyClipboard(toCopy, toast)}
      aria-label="Copy to clipboard"
    >
      <Copy />
    </Button>
  );
};
