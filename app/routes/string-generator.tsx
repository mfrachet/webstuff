import { Label } from "~/components/Label";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { Layout } from "~/layouts/Layout";
import { Button } from "~/components/Button";
import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { TextInput } from "~/components/TextInput";
import { List, ListItem } from "~/components/List";
import { generateString } from "~/modules/string-generator/helpers/generateString";
import { CopyButton } from "~/components/CopyButton";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const n = Number(formData.get("number")?.toString() || "10");
  const charCount = Number(formData.get("count")?.toString() || "10");

  const strings = [];
  for (let i = 0; i < n; i++) {
    strings.push(generateString(charCount));
  }

  return { strings };
};

export const loader: LoaderFunction = () => {
  const strings = [];
  for (let i = 0; i < 10; i++) {
    strings.push(generateString(20));
  }

  return { strings };
};

export default function B64Converter() {
  const loaderData = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  const strings = actionData?.strings || loaderData?.strings || [];

  return (
    <Layout title="String generator">
      <Form className="" method="post">
        <div className="flex flex-row gap-4">
          <div>
            <Label htmlFor="number">Number of string to generate</Label>
            <TextInput
              type="number"
              id="number"
              name={"number"}
              defaultValue={10}
            />
          </div>

          <div>
            <Label htmlFor="count">Length of the strings</Label>
            <TextInput
              type="number"
              id="count"
              name={"count"}
              defaultValue={20}
            />
          </div>
        </div>

        <div className="pt-4">
          <Button type="submit" name="action" value="encode">
            Generate
          </Button>
        </div>
      </Form>

      {strings.length > 0 && (
        <List>
          {strings.map((str: string, idx: number) => (
            <ListItem key={idx}>
              <div className="flex flex-row gap-2 items-center">
                <CopyButton toCopy={str}></CopyButton>
                {str}
              </div>
            </ListItem>
          ))}
        </List>
      )}
    </Layout>
  );
}
