import { TextareaProps, Textarea as RTextarea } from "@/components/ui/textarea";
import { CopyButton } from "./CopyButton";
import { useEffect, useRef, useState } from "react";

export const Textarea = ({ defaultValue, ...props }: TextareaProps) => {
  const [v, setValue] = useState(defaultValue || props.value || "");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
  }, [props.value]);

  return (
    <div className="h-full relative">
      <div className="absolute top-2 right-2 z-10">
        <CopyButton toCopy={v} toast="Content" />
      </div>
      <RTextarea
        onChange={(e) => setValue(e.target.value)}
        value={v}
        ref={textareaRef}
        className="h-full"
        {...props}
      />
    </div>
  );
};
