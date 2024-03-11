import { Form } from "@remix-run/react";
import { Button } from "~/components/Button";
import { Label } from "~/components/Label";
import { Textarea } from "~/components/Textarea";

export const Sha256Form = () => {
  return (
    <Form method="post">
      <input type="hidden" name="_type" value="sha256" />
      <div className="flex flex-row gap-4 pb-4">
        <div className="shrink-0 w-96">
          <Label htmlFor="toHash">Content</Label>
          <Textarea className="min-h-32" id="toHash" name={"toHash"} />
        </div>

        <div className="shrink-0 w-96">
          <Label htmlFor="secret">Secret</Label>
          <Textarea className="min-h-32" id="secret" name={"secret"} />
        </div>
      </div>

      <Button type="submit">Generate</Button>
    </Form>
  );
};
