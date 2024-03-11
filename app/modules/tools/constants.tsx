import {
  CaseSensitive,
  FileCode2,
  FileJson2,
  Hash,
  Palette,
} from "lucide-react";
import { ToolMetadata } from "./type";

export const toolsMetadata: Array<ToolMetadata> = [
  {
    label: "Color converter",
    description: "Convert color between Hex, Hexa, Rgb, Rgba, HSL and HSLA.",
    link: "/color-converter",
    icon: <Palette />,
  },
  {
    label: "Base64 encoder/decoder",
    description: "Simple base 64 encoder and decoder for testing payload.",
    link: "/b64-converter",
    icon: <FileCode2 />,
  },
  {
    label: "JSON lint",
    description: "Lint nested JSON into something readable.",
    link: "/json-lint",
    icon: <FileJson2 />,
  },
  {
    label: "String generator",
    description:
      "Generate random strings, ideal for secrets and env variables.",
    link: "/string-generator",
    icon: <CaseSensitive />,
  },
  {
    label: "Hash",
    description: "Generate hashes from strings",
    link: "/hash",
    icon: <Hash />,
  },
];
