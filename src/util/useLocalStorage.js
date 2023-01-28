import { useCallback, useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [val, setVal] = useState(() => {
    console.log("callback", key, defaultValue);
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : defaultValue;
  });

  const setValue = useCallback(
    (val) => {
      console.log("setVal", key, val);
      localStorage.setItem(key, JSON.stringify(val));
    },
    [val, key]
  );

  useEffect(() => {
    console.log("useEffect", key, val);
    setValue(val);
  }, [val, setValue]);



  return [val, setVal];
};

export default useLocalStorage;
