import { Format } from "../types";
import {
  hexToRgba,
  hexaToRgba,
  hslToRgba,
  hslaToRgba,
  rgbToRgba,
} from "./toRgba";

export const getRgba = (color: string, format: Format) => {
  if (format === "hex") return hexToRgba(color);
  if (format === "hexa") return hexaToRgba(color);
  if (format === "hsl") return hslToRgba(color);
  if (format === "hsla") return hslaToRgba(color);
  if (format === "rgb") return rgbToRgba(color);

  return color;
};
