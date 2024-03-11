import { copyClipboard } from "~/utils/copyClipboard";
import { Button } from "./Button";
import { Copy } from "lucide-react";

export interface CopyButtonProps {
  toCopy: string | number;
  toast?: string;
}

export const CopyButton = ({ toCopy, toast }: CopyButtonProps) => {
  return (
    <Button
      type={"button"}
      variant="secondary"
      onClick={() => {
        console.log("lol", toCopy);
        copyClipboard(toCopy, toast);
      }}
      aria-label="Copy to clipboard"
      size="S"
    >
      <Copy className="h-3" />
    </Button>
  );
};
