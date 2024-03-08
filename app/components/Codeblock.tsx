export interface CodeblockProps {
  code: string;
}

export const Codeblock = ({ code }: CodeblockProps) => {
  return (
    <div className="h-full overflow-hidden rounded-lg ">
      <div
        dangerouslySetInnerHTML={{ __html: code }}
        className="overflow-y-scroll [&>*]:p-2 h-full"
      />
    </div>
  );
};
