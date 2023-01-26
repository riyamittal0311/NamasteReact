import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const onlineFn = () => {
      setIsOnline(true);
    };

    const offline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", onlineFn);
    window.addEventListener("offline", offline);
    return () => {
      window.removeEventListener("online", onlineFn);
      window.removeEventListener("offline", offline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
