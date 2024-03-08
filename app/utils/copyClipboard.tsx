import { toast } from "@/components/ui/use-toast";

export const copyClipboard = async (txt: string, textLabel?: string) => {
  await navigator.clipboard.writeText(txt);

  toast({
    title: "Copied!",
    description: (
      <span>
        <strong>{textLabel || txt}</strong> has been copied to clipboard.
      </span>
    ),
  });
};
