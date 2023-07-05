import { useCallback, useEffect, useState } from "react";

export function useClipboard(defaultValue: string) {
  const [hasCopied, setHasCopied] = useState(false);
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => setHasCopied(false), 1500);
    return () => clearTimeout(timeoutId);
  }, [hasCopied, setHasCopied]);

  const copy = useCallback(
    (copyValue?: string) => {
      navigator.clipboard.writeText(copyValue ?? value);
      setHasCopied(true);
    },
    [value],
  );

  return { copy, hasCopied, value, setValue };
}
