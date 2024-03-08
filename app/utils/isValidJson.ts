export function isValidJson(str: string) {
  try {
    // Attempt to parse the string as JSON
    const obj = JSON.parse(str);

    // Additionally check if the parsed result is an object
    return !!obj && typeof obj === "object";
  } catch (e) {
    // If parsing throws an error, it's not valid JSON
    return false;
  }
}
