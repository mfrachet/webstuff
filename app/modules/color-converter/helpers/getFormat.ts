import { Format } from "../types";

export const getFormat = (colorString: string): Format => {
  // Regular expressions for different color formats
  const hexRegex = /^#(?:[0-9a-f]{3}){1,2}$/i;
  const hexaRegex = /^#(?:[0-9a-f]{4}){1,2}$/i;
  const rgbRegex = /^rgb\(\s*(?:\d{1,3}\s*,\s*){2}\d{1,3}\s*\)$/i;
  const rgbaRegex = /^rgba\(\s*(?:\d{1,3}\s*,\s*){3}(?:0|1|0?\.\d+)\s*\)$/i;
  const hslRegex = /^hsl\(\s*\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%\s*\)$/i;
  const hslaRegex =
    /^hsla\(\s*\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%\s*,\s*(?:0|1|0?\.\d+)\s*\)$/i;

  if (hexRegex.test(colorString)) return "hex";
  if (hexaRegex.test(colorString)) return "hexa";
  if (rgbRegex.test(colorString)) return "rgb";
  if (rgbaRegex.test(colorString)) return "rgba";
  if (hslRegex.test(colorString)) return "hsl";
  if (hslaRegex.test(colorString)) return "hsla";

  throw new Error("The input string is not a recognized color format.");
};
