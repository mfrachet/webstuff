import prettier from "prettier";

export const formatJSON = async (code: string) => {
  const formatted = await prettier.format(code, {
    semi: false,
    parser: "json",
    printWidth: 80,
    tabWidth: 2,
  });

  console.log("lol", formatted);

  return formatted;
};
