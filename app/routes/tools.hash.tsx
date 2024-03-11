import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { Layout } from "~/layouts/Layout";
import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { ErrorBox } from "~/components/ErrorBox";
import { Label } from "~/components/Label";
import { Select } from "~/components/Select";
import { Button } from "~/components/Button";
import { sha256 } from "~/modules/hash/helpers/hash";
import { Textarea } from "~/components/Textarea";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const hashAlgorithm = formData.get("hashAlgorithm")?.toString() || "";
  const toHash = formData.get("toHash")?.toString() || "sha256";
  const secret = formData.get("secret")?.toString() || "";

  console.log({ hashAlgorithm, toHash, secret });

  let result = "";

  if (hashAlgorithm === "sha256") result = await sha256(secret, toHash);

  return { result };
};

export const loader: LoaderFunction = () => {
  return { hashingAlgorithms: ["sha256"] };
};

export default function Hash() {
  const { hashingAlgorithms } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <Layout title="Hash">
      {actionData?.error ? (
        <ErrorBox title="An error occured">{actionData.error}</ErrorBox>
      ) : null}

      <Form method="post">
        <div className="flex flex-row gap-4 pb-4">
          <div className="shrink-0 w-96">
            <Label htmlFor="toHash">Content</Label>
            <Textarea className="min-h-32" id="toHash" name={"toHash"} />
          </div>

          <div className="shrink-0 w-96">
            <Label htmlFor="secret">Secret</Label>
            <Textarea className="min-h-32" id="secret" name={"secret"} />
          </div>

          <div>
            <Label htmlFor={"does-not-exist-sorry"}>Hashing algorithm</Label>
            <Select
              label={"Hashing algorithm"}
              name={"hashAlgorithm"}
              options={hashingAlgorithms.map((h: string) => ({
                label: h,
                value: h,
              }))}
            />
          </div>
        </div>
        <Button type="submit">Generate</Button>
      </Form>

      {actionData?.result && (
        <Textarea readOnly value={actionData.result}></Textarea>
      )}
    </Layout>
  );
}
