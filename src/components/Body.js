import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import { debounce } from "../util/helper";
import useOnline from "../util/useOnline";
import useLocation from "../util/useLocation";
import useLocalStorage from "../util/useLocalStorage";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [isLocationAllowed, setIsLocationAllowed] = useState(true);
  const [val, setVal] = useLocalStorage("userLocation", null);

  const isOnline = useOnline();
  const userLocation = useLocation();

  useEffect(() => {
    if (userLocation?.lat) {
      setIsLocationAllowed(true);
      fetchRestaurants();
      setVal(userLocation);
      console.log("print val", val);
    } else {
      setIsLocationAllowed(false);
    }
  }, [userLocation]);

  const fetchRestaurants = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${userLocation.lat}&lng=${userLocation.long}&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await data.json();
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (err) {
      console.log("Error while fetching data", err);
    }
  };

  const onSearchClick = (text) => {
    const updatedList = allRestaurants.filter((restaurant) =>
      restaurant.data.cuisines.find((cuisine) =>
        cuisine.toLowerCase().includes(text.toLowerCase())
      )
    );

    setRestaurants(updatedList);
  };

  const findCuisine = (txt) => {
    debounce(2000, onSearchClick)(txt);
  };
  if (!isLocationAllowed) {
    return (
      <h2>
        Please allow your location and then reload the page to fetch menu items
      </h2>
    );
  }

  return isLocationAllowed && allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center mt-3 mb-2">
        <input
          type="text"
          className="p-2 border-2 border-gray-200 shadow-lg w-1/2 rounded-md"
          placeholder="Search cuisines..."
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
            findCuisine(e.target.value);
          }}
        />
      </div>
      {/* <button
        type="button"
        onClick={() => {
          const updatedList = onSearchClick(searchTxt, restaurantList);
          setRestaurants(updatedList);
        }}
      >
        Search
      </button> */}
      <div className="flex  justify-center flex-wrap">
        {restaurants?.length === 0 ? (
          <h3>No Restaurant found for your search...!!!</h3>
        ) : (
          restaurants && restaurants.map((restaurant) => {
            return (
              <div
                // onMouseEnter={(e) => console.log(e.target)}
                // onMouseLeave={(e) => console.log(e.target)}
                key={restaurant.data.id}
              >
                <Link
                  key={restaurant.data.id}
                  to={`${isOnline ? `/restaurant/${restaurant.data.id}` : ""} `}
                >
                  <Restaurant {...restaurant.data} />
                </Link>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
