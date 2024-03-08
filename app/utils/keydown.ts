import { KeyboardKeys } from "./KeyboardKeys";

export const keydown =
  (key: KeyboardKeys, cb?: () => void) => (e: { key: string }) => {
    if (cb && e.key === String(key)) {
      cb();
    }
  };
