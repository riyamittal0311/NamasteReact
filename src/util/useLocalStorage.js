import { useCallback, useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [val, setVal] = useState(() => {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : defaultValue;
  });

  useEffect(() => {
    setValue(val);
  }, [val, key]);

  const setValue = () =>
    useCallback(
      (val) => {
        localStorage.setItem(key, val);
      },
      [val, setValue]
    );

  return [val, setVal];
};

export default useLocalStorage;
