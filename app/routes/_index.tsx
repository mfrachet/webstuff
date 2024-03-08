import { Button } from "@/components/ui/button";
import type { MetaFunction } from "@remix-run/node";
import { Card, CardTitle } from "~/components/Card";
import { Title } from "~/components/Title";
import { Layout } from "~/layouts/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Layout>
      <Title>Hello world!</Title>

      <Button>Click me</Button>

      <div className="grid grid-cols-4 gap-4">
        <Card onClick={() => null}>
          <CardTitle>Hello world</CardTitle>
        </Card>
      </div>
    </Layout>
  );
}
