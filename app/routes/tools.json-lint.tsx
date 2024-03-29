import { Form, useActionData } from "@remix-run/react";
import { Layout } from "~/layouts/Layout";
import { Button } from "~/components/Button";
import { ActionFunction } from "@remix-run/node";
import { formatJSON } from "~/utils/formatJSON";
import { Codeblock } from "~/components/Codeblock";
import { ErrorBox } from "~/components/ErrorBox";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const code = formData.get("code")?.toString() || "";

  try {
    const formatted = await formatJSON(code);

    return { result: formatted };
  } catch {
    return { error: "Invalid JSON." };
  }
};

export default function JsonLint() {
  const actionData = useActionData<typeof action>();

  return (
    <Layout title="JSON lint">
      {actionData?.error ? (
        <ErrorBox title="An error occured">{actionData.error}</ErrorBox>
      ) : null}

      <Form className="" method="post">
        <div className="h-96">
          <Codeblock code={actionData?.result || ""} name="code" lang="JSON" />
        </div>

        <div className="pt-4 ">
          <Button type="submit">Lint</Button>
        </div>
      </Form>
    </Layout>
  );
}
