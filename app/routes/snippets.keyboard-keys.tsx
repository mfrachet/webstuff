import { useLoaderData } from "@remix-run/react";
import { Layout } from "~/layouts/Layout";
import { Codeblock } from "~/components/Codeblock";
import { LoaderFunction } from "@remix-run/node";
import { formatTs } from "~/utils/formatTs";

export const loader: LoaderFunction = async () => {
  return {
    code: await formatTs(`export const KeyboardKeys = {
	DOWN: "ArrowDown",
	UP: "ArrowUp",
	RIGHT: "ArrowRight",
	LEFT: "ArrowLeft",
	ESCAPE: "Escape",
	ENTER: "Enter",
	SPACE: " ",
	TAB: "Tab",
	END: "End",
	HOME: "Home",
	DELETE: "Delete",
	PAGE_UP: "PageUp",
	PAGE_DOWN: "PageDown",
	BACKSPACE: "Backspace",
	CLEAR: "Clear",
  };`),
  };
};

export default function KeyboardKeys() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <Layout title="Base64 encoder/decoder">
      <Codeblock code={loaderData.code} name={"code"} lang="JS" />
    </Layout>
  );
}
