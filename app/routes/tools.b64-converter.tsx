import { Label } from "~/components/Label";
import { Form, useActionData } from "@remix-run/react";
import { Layout } from "~/layouts/Layout";
import { Button } from "~/components/Button";
import { ActionFunction } from "@remix-run/node";
import { encodeToBase64 } from "~/modules/b64-converter/helpers/encodeToBase64";
import { decodeFromBase64 } from "~/modules/b64-converter/helpers/decodeFromBase64";
import { formatJSON } from "~/utils/formatJSON";
import { isValidJson } from "~/utils/isValidJson";
import { Codeblock } from "~/components/Codeblock";
import { CopyButton } from "~/components/CopyButton";
import { Textarea } from "~/components/Textarea";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const action = formData.get("action")?.toString() || "encode";
  const source = formData.get("source")?.toString() || "";

  const result =
    action === "encode" ? encodeToBase64(source) : decodeFromBase64(source);

  if (isValidJson(result)) {
    const formatted = await formatJSON(result);

    return { result: formatted, isHighlighted: true };
  }

  return { result, isHighlighted: false };
};

export default function B64Converter() {
  const actionData = useActionData<typeof action>();

  return (
    <Layout title="Base64 encoder/decoder">
      <Form className="" method="post">
        <div className="grid lg:grid-cols-2 gap-4 pb-4">
          <div>
            <Label htmlFor="source">Source</Label>
            <div className="h-96">
              <Textarea id="source" name={"source"} className="h-full" />
            </div>

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
            <div className="h-96">
              {actionData?.isHighlighted ? (
                <Codeblock
                  code={actionData?.result || ""}
                  name="result"
                  lang="JSON"
                />
              ) : (
                <div className="h-full relative">
                  <div className="absolute top-2 right-2 z-10">
                    <CopyButton
                      toCopy={actionData?.result || ""}
                      toast="Content"
                    />
                  </div>
                  <Textarea
                    id="encoded-decoded"
                    name={"encoded-decoded"}
                    disabled
                    value={actionData?.result || ""}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </Form>
    </Layout>
  );
}
