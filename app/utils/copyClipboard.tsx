import { toast } from "@/components/ui/use-toast";

export const copyClipboard = async (txt: string) => {
  await navigator.clipboard.writeText(txt);

  toast({
    title: "Copied!",
    description: (
      <span>
        <strong>{txt}</strong> has been copied to clipboard.
      </span>
    ),
  });
};
