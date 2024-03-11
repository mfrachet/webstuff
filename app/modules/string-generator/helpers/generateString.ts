export const generateString = (alphabet: string, length: number) => {
  let result = "";

  for (let i = 0; i < length; i++) {
    const charIndex = Math.floor(Math.random() * alphabet.length);
    result += alphabet.charAt(charIndex);
  }

  return result;
};
