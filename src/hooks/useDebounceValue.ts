import { useCallback, useEffect, useRef } from "react";

export function useDebounceValue<T>(defaultValue: T, timeout: number) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const debounceValue = useRef<null | T>(defaultValue);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const setDebounceValue = useCallback(
    (value: T, onDebounce?: (value: T) => void) => {
      if (debounceValue.current === null) debounceValue.current = value;

      if (timer.current) clearTimeout(timer.current);

      timer.current = setTimeout(() => {
        if (debounceValue.current !== null && onDebounce)
          onDebounce(debounceValue.current);
        debounceValue.current = null;
      }, timeout);
    },
    [timeout],
  );

  return { setDebounceValue, debounceValue: debounceValue.current };
}
