import prettier from "prettier";

export const formatTs = (code: string) => {
  return prettier.format(code, { parser: "typescript" });
};
