export function hslaToRgba(hsla: string) {
  const [h, s, le, a] = hsla.match(/\d+\.?\d*/g)?.map(Number) || [];
  const l = le / 100;
  const sk = (s * Math.min(l, 1 - l)) / 100;

  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - sk * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(10);
  };

  return `rgba(${f(0)}, ${f(8)}, ${f(4)}, ${a})`;
}

export function hslToRgba(hsl: string) {
  const [h, s, le] = hsl.match(/\d+/g)?.map(Number) || [];
  const l = le / 100;
  const a = (s * Math.min(l, 1 - l)) / 100;

  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(10);
  };

  return `rgba(${f(0)}, ${f(8)}, ${f(4)}, 1)`;
}

export function rgbToRgba(rgb: string) {
  return rgb.replace("rgb", "rgba").replace(")", ", 1)");
}

export function hexaToRgba(hexa: string) {
  const r = parseInt(hexa.slice(0, 2), 16);
  const g = parseInt(hexa.slice(2, 4), 16);
  const b = parseInt(hexa.slice(4, 6), 16);
  const a = parseInt(hexa.slice(6, 8), 16) / 255;

  // Convert to RGBA string, rounding alpha to at most 3 decimal places
  return `rgba(${r}, ${g}, ${b}, ${a.toFixed(3)})`;
}

export function hexToRgba(hex: string) {
  let r = 0,
    g = 0,
    b = 0,
    a = 1;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  } else if (hex.length === 9) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
    a = parseFloat((parseInt(hex[7] + hex[8], 16) / 255).toFixed(3));
  }
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
