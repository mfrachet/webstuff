import { Card, CardText, CardTitle } from "~/components/Card";
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
      <div className="flex flex-row gap-2">
        <div className="pt-1">{toolmetadata.icon}</div>

        <div>
          <CardTitle>
            <Link ref={linkRef} to={`/tools${toolmetadata.link}`}>
              {toolmetadata.label}
            </Link>
          </CardTitle>
          <CardText>{toolmetadata.description}</CardText>
        </div>
      </div>
    </Card>
  );
};
