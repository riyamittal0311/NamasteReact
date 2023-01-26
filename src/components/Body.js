import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import { debounce } from "../util/helper";
import useOnline from "../util/useOnline";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  const isOnline = useOnline();

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7330075&lng=77.1093233&page_type=DESKTOP_WEB_LISTING"
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
  // console.log( useState(""),'useState console',useEffect())

  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search">
        <input
          type="text"
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
      <div className="list">
        {restaurants.length === 0 ? (
          <h3>No Restaurant found for your search...!!!</h3>
        ) : (
          restaurants.map((restaurant) => {
            return (
              <div
                onMouseEnter={(e) => console.log(e.target)}
                onMouseLeave={(e) => console.log(e.target)}
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
