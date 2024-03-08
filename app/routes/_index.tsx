import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useRef } from "react";
import { Card, CardTitle } from "~/components/Card";
import { Layout } from "~/layouts/Layout";

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
  const colorConverterLink = useRef<HTMLAnchorElement>(null);
  const b64ConverterLink = useRef<HTMLAnchorElement>(null);
  const jsonLintLink = useRef<HTMLAnchorElement>(null);

  return (
    <Layout title="Webstuff">
      <div className="grid grid-cols-4 gap-4">
        <Card onClick={() => colorConverterLink.current?.click()}>
          <CardTitle>
            <Link ref={colorConverterLink} to="/color-converter">
              Color converter
            </Link>
          </CardTitle>
        </Card>

        <Card onClick={() => b64ConverterLink.current?.click()}>
          <CardTitle>
            <Link ref={b64ConverterLink} to="/b64-converter">
              Base64 encoder/decoder
            </Link>
          </CardTitle>
        </Card>

        <Card onClick={() => jsonLintLink.current?.click()}>
          <CardTitle>
            <Link ref={jsonLintLink} to="/json-lint">
              JSON lint
            </Link>
          </CardTitle>
        </Card>
      </div>
    </Layout>
  );
}
