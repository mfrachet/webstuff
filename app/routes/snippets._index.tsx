import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/layouts/Layout";
import { SnippetCard } from "~/modules/snippets/components/SnippetCard";
import { snippetsMetadata } from "~/modules/snippets/constants";

export const meta: MetaFunction = () => {
  return [
    { title: "Webstuff | Snippets" },
    {
      name: "description",
      content: "A list of small snippets to facilitate my life",
    },
  ];
};

export default function Index() {
  return (
    <Layout title="Snippets">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {snippetsMetadata.map((snippetMetada) => (
          <SnippetCard
            snippetMetadata={snippetMetada}
            key={snippetMetada.label}
          />
        ))}
      </div>
    </Layout>
  );
}
