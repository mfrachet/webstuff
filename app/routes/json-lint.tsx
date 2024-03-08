import { Label } from "~/components/Label";
import { Form, useActionData } from "@remix-run/react";
import { Layout } from "~/layouts/Layout";
import { Button } from "~/components/Button";
import { Textarea } from "~/components/Textarea";
import { ActionFunction } from "@remix-run/node";
import { copyClipboard } from "~/utils/copyClipboard";
import { formatJSON } from "~/utils/formatJSON";
import { isValidJson } from "~/utils/isValidJson";
import { codeToHtml } from "~/utils/codeToHtml";
import { Codeblock } from "~/components/Codeblock";
import { ErrorBox } from "~/components/ErrorBox";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const source = formData.get("source")?.toString() || "";

  if (isValidJson(source)) {
    const formatted = await formatJSON(source);
    const html = await codeToHtml(formatted);

    return { result: html, isHighlighted: true, formatted };
  }

  return { error: "Invalid JSON." };
};

export default function JsonLint() {
  const actionData = useActionData<typeof action>();

  return (
    <Layout title="JSON lint">
      {actionData?.error ? (
        <ErrorBox title="An error occured">{actionData.error}</ErrorBox>
      ) : null}

      <Form className="" method="post">
        <div className="grid grid-cols-2 gap-4 pb-4">
          <div>
            <Label htmlFor="source">Source</Label>
            <div className="h-96">
              <Textarea id="source" name={"source"} />
            </div>

            <div className="pt-4">
              <Button type="submit">Lint</Button>
            </div>
          </div>

          <div>
            <Label htmlFor="linted">Linted</Label>
            <div className="h-96">
              {actionData?.isHighlighted ? (
                <Codeblock code={actionData?.result || ""} />
              ) : (
                <Textarea
                  id="linted"
                  name={"linted"}
                  disabled
                  value={actionData?.result || ""}
                />
              )}
            </div>

            <div className="pt-4">
              <Button
                type="button"
                onClick={
                  actionData
                    ? () => copyClipboard(actionData.formatted, "JSON")
                    : undefined
                }
              >
                Copy result to clipboard
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </Layout>
  );
}
