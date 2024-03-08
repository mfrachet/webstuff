import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Layout } from "~/layouts/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "Webstuff | Color converter" },
    {
      name: "description",
      content: "Convert RGB, HEX, HSL colors",
    },
  ];
};

export default function ColorConverter() {
  return (
    <Layout title="Color converter">
      <Form></Form>
    </Layout>
  );
}
