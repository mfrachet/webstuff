import { basicSetup, EditorView } from "codemirror";
import { Compartment, EditorState } from "@codemirror/state";
import { json } from "@codemirror/lang-json";
import { javascript } from "@codemirror/lang-javascript";
import { useEffect, useRef, useState } from "react";
import { CopyButton } from "./CopyButton";

export interface CodeblockProps {
  code: string;
  name: string;
  lang: "JSON" | "JS";
}

export const Codeblock = ({ code, name, lang }: CodeblockProps) => {
  const root = useRef<HTMLDivElement>(null);
  const editorViewRef = useRef<EditorView>();
  const [content, setContent] = useState(code);

  useEffect(() => {
    if (!root.current) return;

    const language = new Compartment();
    const ext =
      lang === "JSON"
        ? language.of(json())
        : language.of(javascript({ jsx: true, typescript: true }));

    const state = EditorState.create({
      doc: content,
      extensions: [
        basicSetup,
        ext,

        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            const currentContent = update.state.doc.toString();
            setContent(currentContent);
          }
        }),
      ],
    });

    const view = new EditorView({
      state,
      parent: root.current,
    });

    editorViewRef.current = view;

    return () => {
      view.destroy();
    };
  }, [lang]);

  useEffect(() => {
    if (!editorViewRef.current) return;

    const transaction = editorViewRef.current.state.update({
      changes: {
        from: 0,
        to: editorViewRef.current.state.doc.length,
        insert: code,
      },
    });

    editorViewRef.current.dispatch(transaction);
  }, [code]);

  return (
    <div className="h-full border border-slate-200 rounded-lg relative">
      <div className="absolute top-2 right-2 z-10">
        <CopyButton toCopy={content} toast="Code" />
      </div>

      <input type="hidden" name={name} value={content} />
      <div ref={root} className="overflow-y-scroll [&>*]:p-2 h-full text-sm" />
    </div>
  );
};
