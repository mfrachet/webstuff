export function rgbaToHex(rgba: string) {
  const [r, g, b] = rgba.match(/\d+/g)?.map(Number) || [];

  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

export function rgbaToHexa(rgba: string) {
  const [r, g, b, a] = rgba.match(/\d+\.?\d*/g)?.map(Number) || [];
  const alpha = Math.round(a * 255)
    .toString(16)
    .padStart(2, "0");

  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("") +
    alpha
  );
}

export function rgbaToHsl(rgba: string) {
  const [ra, ga, ba] = rgba.match(/\d+/g)!.map(Number);
  const r = ra / 255;
  const g = ga / 255;
  const b = ba / 255;

  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  h = Math.round(360 * h);
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  return `hsl(${h}, ${s}%, ${l}%)`;
}

export function rgbaToHsla(rgba: string) {
  const [ra, ga, ba, a] = rgba.match(/\d+\.?\d*/g)!;
  const r = Number(ra) / 255;
  const g = Number(ga) / 255;
  const b = Number(ba) / 255;

  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  h = Math.round(360 * h);
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  return `hsla(${h}, ${s}%, ${l}%, ${a})`;
}
