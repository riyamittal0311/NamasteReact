import { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  function success(success) {
    setLocation({
      lat: success?.coords?.latitude,
      long: success?.coords?.longitude,
    });
  }
  function error(err) {
    setLocation({
      err: err?.message,
    });
  }

  return location;
};
export default useLocation;
