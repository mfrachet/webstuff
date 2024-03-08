import { useEffect } from "react";
import { KeyboardKeys } from "~/utils/KeyboardKeys";

export const useKeydown = (
  ref: React.RefObject<HTMLElement>,
  key: KeyboardKeys,
  cb?: () => void
) => {
  useEffect(() => {
    const el = ref.current;

    if (!cb) return;
    if (!el) return;

    el.addEventListener("keydown", (e) => {
      if (e.key === key) {
        cb();
      }
    });

    return () => {
      el.removeEventListener("keydown", cb);
    };
  }, [cb, key, ref]);
};
