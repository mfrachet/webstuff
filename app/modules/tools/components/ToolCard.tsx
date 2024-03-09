import { Card, CardTitle } from "~/components/Card";
import { ToolMetadata } from "../type";
import { Link } from "@remix-run/react";
import { useRef } from "react";

export interface ToolCardProps {
  toolmetadata: ToolMetadata;
}

export const ToolCard = ({ toolmetadata }: ToolCardProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  return (
    <Card onClick={() => linkRef.current?.click()}>
      <CardTitle>
        <Link ref={linkRef} to={toolmetadata.link}>
          {toolmetadata.label}
        </Link>
      </CardTitle>
    </Card>
  );
};
