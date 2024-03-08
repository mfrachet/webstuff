import { Label } from "~/components/Label";
import { Form, useActionData } from "@remix-run/react";
import { Layout } from "~/layouts/Layout";
import { Button } from "~/components/Button";
import { Textarea } from "~/components/Textarea";
import { ActionFunction } from "@remix-run/node";
import { encodeToBase64 } from "~/modules/b64-converter/helpers/encodeToBase64";
import { decodeFromBase64 } from "~/modules/b64-converter/helpers/decodeFromBase64";
import { copyClipboard } from "~/utils/copyClipboard";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const action = formData.get("action")?.toString() || "encode";
  const source = formData.get("source")?.toString() || "";

  if (action === "encode") {
    return { result: encodeToBase64(source) };
  }

  return { result: decodeFromBase64(source) };
};

export default function B64Converter() {
  const actionData = useActionData<typeof action>();

  return (
    <Layout title="Base64 encoder/decoder">
      <Form className="" method="post">
        <div className="grid grid-cols-2 gap-4 pb-4">
          <div>
            <Label htmlFor="source">Source</Label>
            <Textarea id="source" name={"source"} />

            <div className="flex flex-row gap-4 pt-4">
              <Button type="submit" name="action" value="encode">
                Encode
              </Button>
              <Button type="submit" name="action" value="decode">
                Decode
              </Button>
            </div>
          </div>

          <div>
            <Label htmlFor="encoded-decoded">Encoded/Decoded</Label>
            <Textarea
              id="encoded-decoded"
              name={"encoded-decoded"}
              disabled
              value={actionData?.result || ""}
            />

            <div className="pt-4">
              <Button
                type="button"
                onClick={
                  actionData
                    ? () => copyClipboard(actionData.result)
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