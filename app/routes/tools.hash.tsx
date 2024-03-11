import { useActionData, useLoaderData } from "@remix-run/react";
import { Layout } from "~/layouts/Layout";
import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { ErrorBox } from "~/components/ErrorBox";
import { Label } from "~/components/Label";
import { Select } from "~/components/Select";
import { sha256 } from "~/modules/hash/helpers/hash";
import { Textarea } from "~/components/Textarea";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Sha256Form } from "~/modules/hash/components/Sha256Form";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const _type = formData.get("_type");
  const toHash = formData.get("toHash")?.toString() || "sha256";
  const secret = formData.get("secret")?.toString() || "";

  let result = "";

  if (_type === "sha256") result = await sha256(secret, toHash);

  return { result };
};

export const loader: LoaderFunction = () => {
  return { hashingAlgorithms: ["sha256"] };
};

export default function Hash() {
  const { hashingAlgorithms } = useLoaderData<typeof loader>();
  const [currentAlgo, setCurrentAlgo] = useState("sha256");
  const actionData = useActionData<typeof action>();

  return (
    <Layout title="Hash">
      {actionData?.error ? (
        <ErrorBox title="An error occured">{actionData.error}</ErrorBox>
      ) : null}

      <div>
        <Label htmlFor={"does-not-exist-sorry"}>Hashing algorithm</Label>
        <Select
          value={currentAlgo}
          onValueChange={setCurrentAlgo}
          label={"Hashing algorithm"}
          name={"hashAlgorithm"}
          options={hashingAlgorithms.map((h: string) => ({
            label: h,
            value: h,
          }))}
        />
      </div>

      <div>
        <Badge>Current algo: {currentAlgo}</Badge>
      </div>

      {currentAlgo === "sha256" && <Sha256Form />}

      {actionData?.result && (
        <Textarea readOnly value={actionData.result}></Textarea>
      )}
    </Layout>
  );
}
