import { useState } from "react";

import Restaurant from "./Restaurant";
import { restaurantList } from "../config";

const debounce = (delay, fn) => {
  let timer;
  return function () {
    const context = this;
    const arg = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arg);
    }, delay);
  };
};

const Body = () => {
  const [searchTxt, setSearchTxt] = useState();
  const [restaurants, setRestaurants] = useState(restaurantList);

  const onSearchClick = (text) => {
    const updatedList = restaurantList.filter((restaurant) =>
      restaurant.data.cuisines.find((cuisine) =>
        cuisine.toLowerCase().includes(text.toLowerCase())
      )
    );
   
    setRestaurants(updatedList);
  };

  const findCuisine = (txt) => {
    debounce(2000, onSearchClick)(txt);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Search cuisines..."
        value={searchTxt}
        onChange={(e) => {
          setSearchTxt(e.target.value);
          findCuisine(e.target.value);
        }}
      />
      {/* <button
        type="button"
        onClick={() => {
          const updatedList = onSearchClick(searchTxt, restaurantList);
          setRestaurants(updatedList);
        }}
      >
        Search
      </button> */}
      <div className="list">
        {restaurants.map((restaurant) => {
          return <Restaurant {...restaurant.data} />;
        })}
      </div>
    </>
  );
};

export default Body;
