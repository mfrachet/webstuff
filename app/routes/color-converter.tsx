import { Badge } from "@/components/ui/badge";
import type { ActionFunction, MetaFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { Button } from "~/components/Button";
import { ErrorBox } from "~/components/ErrorBox";
import { Label } from "~/components/Label";
import { Layout } from "~/layouts/Layout";
import { getRgba } from "~/modules/color-converter/helpers/getRgba";
import { getFormat } from "~/modules/color-converter/helpers/getFormat";
import {
  rgbaToHex,
  rgbaToHexa,
  rgbaToHsl,
  rgbaToHsla,
  rgbaToRgb,
} from "~/modules/color-converter/helpers/toOtherFormat";
import { ColorButton } from "~/modules/color-converter/components/ColorButton";
import { List, ListItem } from "~/components/List";
import { Input } from "@/components/ui/input";

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
      rgb: rgbaToRgb(rgba),
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
          <Input id="color" name={"color"} />
        </div>

        <Button type="submit">Convert</Button>
      </Form>

      {actionData?.format ? (
        <div className="pt-4">
          <Badge>Format found: {actionData.format}</Badge>
        </div>
      ) : null}

      {actionData?.hasResolved && (
        <List>
          <ListItem>
            <div className="flex flex-row items-center gap-2">
              <div className="w-12">Hex</div>
              <ColorButton color={actionData.hex}>{actionData.hex}</ColorButton>
            </div>
          </ListItem>

          <ListItem>
            <div className="flex flex-row items-center gap-2">
              <div className="w-12">Hexa</div>

              <ColorButton color={actionData.hexa}>
                {actionData.hexa}
              </ColorButton>
            </div>
          </ListItem>

          <ListItem>
            <div className="flex flex-row items-center gap-2">
              <div className="w-12">Rgb</div>

              <ColorButton color={actionData.rgb}>{actionData.rgb}</ColorButton>
            </div>
          </ListItem>

          <ListItem>
            <div className="flex flex-row items-center gap-2">
              <div className="w-12">Rgba</div>

              <ColorButton color={actionData.rgba}>
                {actionData.rgba}
              </ColorButton>
            </div>
          </ListItem>

          <ListItem>
            <div className="flex flex-row items-center gap-2">
              <div className="w-12">Hsl</div>

              <ColorButton color={actionData.hsl}>{actionData.hsl}</ColorButton>
            </div>
          </ListItem>
          <ListItem>
            <div className="flex flex-row items-center gap-2">
              <div className="w-12">Hsla</div>

              <ColorButton color={actionData.hsla}>
                {actionData.hsla}
              </ColorButton>
            </div>
          </ListItem>
        </List>
      )}
    </Layout>
  );
}
