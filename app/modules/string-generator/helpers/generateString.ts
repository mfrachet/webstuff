const alphabet =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export const generateString = (length: number) => {
  let result = "";

  for (let i = 0; i < length; i++) {
    const charIndex = Math.floor(Math.random() * alphabet.length);
    result += alphabet.charAt(charIndex);
  }

  return result;
};
