export function decodeFromBase64(base64Str: string) {
  return Buffer.from(base64Str, "base64").toString("ascii");
}
