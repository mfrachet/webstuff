import { Badge } from "@/components/ui/badge";
import type { ActionFunction, MetaFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { Button } from "~/components/Button";
import { Card, CardTitle } from "~/components/Card";
import { ErrorBox } from "~/components/ErrorBox";
import { Label } from "~/components/Label";
import { TextInput } from "~/components/TextInput";
import { Layout } from "~/layouts/Layout";
import { getRgba } from "~/modules/color-converter/helpers/getRgba";
import { getFormat } from "~/modules/color-converter/helpers/getFormat";
import {
  rgbaToHex,
  rgbaToHexa,
  rgbaToHsl,
  rgbaToHsla,
} from "~/modules/color-converter/helpers/toOtherFormat";
import { ColorButton } from "~/modules/color-converter/components/ColorButton";

export const meta: MetaFunction = () => {
  return [
    { title: "Webstuff | Color converter" },
    {
      name: "description",
      content: "Convert RGB, HEX, HSL colors",
    },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const color = formData.get("color")?.toString() || "";

  try {
    const format = getFormat(color);
    const rgba = getRgba(color, format);

    return {
      hasResolved: true,
      format,
      hex: rgbaToHex(rgba),
      hexa: rgbaToHexa(rgba),
      rgb: rgba.replace(",1)", ")"),
      rgba: rgba,
      hsl: rgbaToHsl(rgba),
      hsla: rgbaToHsla(rgba),
    };
  } catch {
    return {
      error: "The color is not a valid color. Make sure it's a correct one!",
    };
  }
};

export default function ColorConverter() {
  const actionData = useActionData<typeof action>();

  return (
    <Layout title="Color converter">
      {actionData?.error ? (
        <ErrorBox title="Missing information">{actionData.error}</ErrorBox>
      ) : null}

      <Form className="flex flex-row gap-2 items-end" method="post">
        <div>
          <Label htmlFor="color">Color</Label>
          <TextInput id="color" name={"color"} />
        </div>

        <Button type="submit">Convert</Button>
      </Form>

      {actionData?.format ? (
        <div>
          <Badge>Format found: {actionData.format}</Badge>
        </div>
      ) : null}

      {actionData?.hasResolved && (
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardTitle>Hex</CardTitle>
            <ColorButton color={actionData.hex}>{actionData.hex}</ColorButton>
          </Card>
          <Card>
            <CardTitle>Hexa</CardTitle>
            <ColorButton color={actionData.hexa}>{actionData.hexa}</ColorButton>
          </Card>
          <Card>
            <CardTitle>Rgb</CardTitle>
            <ColorButton color={actionData.rgb}>{actionData.rgb}</ColorButton>
          </Card>
          <Card>
            <CardTitle>Rgba</CardTitle>
            <ColorButton color={actionData.rgba}>{actionData.rgba}</ColorButton>
          </Card>
          <Card>
            <CardTitle>HSL</CardTitle>
            <ColorButton color={actionData.hsl}>{actionData.hsl}</ColorButton>
          </Card>
          <Card>
            <CardTitle>HSLA</CardTitle>
            <ColorButton color={actionData.hsla}>{actionData.hsla}</ColorButton>
          </Card>
        </div>
      )}
    </Layout>
  );
}
