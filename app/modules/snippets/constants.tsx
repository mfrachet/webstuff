import { Keyboard } from "lucide-react";
import { SnippetMetadata } from "./type";

export const snippetsMetadata: Array<SnippetMetadata> = [
  {
    label: "Keyboard events",
    description:
      "You can use this object to compare against the e.key value of the KeyboardEvent",
    link: "/keyboard-keys",
    icon: <Keyboard />,
  },
];
