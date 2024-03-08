import { codeToHtml as shikiCodeToHtml } from "shiki";

export const codeToHtml = async (code: string) => {
  const html = await shikiCodeToHtml(code, {
    lang: "javascript",
    theme: "vitesse-dark",
  });

  return html;
};
