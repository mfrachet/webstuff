import { basicSetup, EditorView } from "codemirror";
import { Compartment, EditorState } from "@codemirror/state";
import { json } from "@codemirror/lang-json";
import { useEffect, useRef, useState } from "react";

export interface CodeblockProps {
  code: string;
  name: string;
}

export const Codeblock = ({ code, name }: CodeblockProps) => {
  const root = useRef<HTMLDivElement>(null);
  const editorViewRef = useRef<EditorView>();
  const [content, setContent] = useState(code);

  useEffect(() => {
    if (!root.current) return;

    const language = new Compartment();

    const state = EditorState.create({
      doc: content,
      extensions: [
        basicSetup,
        language.of(json()),
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
  }, []);

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
    <div className="h-full border border-slate-200 rounded-lg ">
      <input type="hidden" name={name} value={content} />
      <div ref={root} className="overflow-y-scroll [&>*]:p-2 h-full text-sm" />
    </div>
  );
};
