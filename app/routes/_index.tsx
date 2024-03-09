import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/layouts/Layout";
import { ToolCard } from "~/modules/tools/components/ToolCard";
import { toolsMetadata } from "~/modules/tools/constants";

export const meta: MetaFunction = () => {
  return [
    { title: "Webstuff" },
    {
      name: "description",
      content: "A list of small tools to facilitate my life",
    },
  ];
};

export default function Index() {
  return (
    <Layout title="Webstuff">
      <div className="grid grid-cols-4 gap-4">
        {toolsMetadata.map((toolmetadata) => (
          <ToolCard toolmetadata={toolmetadata} key={toolmetadata.label} />
        ))}
      </div>
    </Layout>
  );
}
