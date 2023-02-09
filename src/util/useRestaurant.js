import { useEffect, useState } from "react";

const useRestaurant = (id) => {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  async function fetchRestaurantMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=28.7330075&lng=77.1093233&menuId=${id}`
    );
    const json = await data.json();
    setRestaurantData(json?.data);
  }

  return [restaurantData];
};

export default useRestaurant;
