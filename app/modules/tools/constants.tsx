import { FileCode2, FileJson2, Palette } from "lucide-react";
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
];
