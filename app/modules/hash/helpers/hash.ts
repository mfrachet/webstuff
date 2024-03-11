import crypto from "node:crypto";

export const sha256 = (secretKey: string, toHash: string) => {
  return crypto.createHmac("sha256", secretKey).update(toHash).digest("hex");
};
