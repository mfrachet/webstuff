import { Card, CardText, CardTitle } from "~/components/Card";
import { SnippetMetadata } from "../type";
import { Link } from "@remix-run/react";
import { useRef } from "react";

export interface SnippetCardProps {
  snippetMetadata: SnippetMetadata;
}

export const SnippetCard = ({ snippetMetadata }: SnippetCardProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  return (
    <Card onClick={() => linkRef.current?.click()}>
      <div className="flex flex-row gap-2">
        <div className="pt-1">{snippetMetadata.icon}</div>

        <div>
          <CardTitle>
            <Link ref={linkRef} to={`/snippets${snippetMetadata.link}`}>
              {snippetMetadata.label}
            </Link>
          </CardTitle>
          <CardText>{snippetMetadata.description}</CardText>
        </div>
      </div>
    </Card>
  );
};
