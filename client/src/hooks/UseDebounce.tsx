import { useState, useEffect } from "react";

type debounceValueType = string | number;

export function useDebounce<debounceValueType>(
  value: debounceValueType,
  delay = 500
): debounceValueType {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
