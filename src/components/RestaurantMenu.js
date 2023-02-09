import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import useRestaurant from "../util/useRestaurant";
import FoodItem from "./FoodItem";
import { IMG_CDN } from "../config";

const Banner = ({
  cloudinaryImageId,
  name,
  cuisines,
  locality,
  descriptionList,
}) => {
  return (
    <div className="flex bg-black text-white h-52 justify-around mt-5  sticky top-16 z-10">
      <div className="flex items-center">
        <img
          className="h-40"
          src={`${IMG_CDN}/${cloudinaryImageId}`}
          alt="food"
        />
      </div>

      <div className="flex ml-5 mr-5 items-center flex-col justify-center">
        <h2>{name}</h2>
        <ul className="flex flex-col items-center">
          <li className="p-2">{cuisines.join(", ")}</li>
          <li className="p-2">{locality}</li>
        </ul>
      </div>

      <div className="flex items-center">
        <ul className="p-5 border-2">
          {descriptionList.map((item, idx) => (
            <li className="p-2 mr-1" key={idx}>
              <i className="fa fa-certificate pr-2" aria-hidden="true"></i>
              {item?.meta}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const SideMenu = ({ sideMenuCategory }) => {
  return (
    <div className="border-r p-2 m-2 mr-0 sticky ">
      <ul className="flex flex-col items-end sticky top-72">
        {sideMenuCategory.map((category) => (
          <li
            key={category}
            className="mb-2 text-sm font-semibold vi active:text-cyan-700"
          >
            <a className="active:text-cyan-700" href={`#cat-${category}`}>
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Menu = ({ items }) => {
  const [isVeg, setIsVeg] = useState(false);
  const [restaurantItems, setRestaurantItems] = useState({ ...items });

  // useEffect(() => {
  //   const filterItems = Object.values(items).filter((item) => {
  //     if (isVeg) {
  //       return item.isVeg === 1;
  //     }
  //     return item;
  //   });
  //   setRestaurantItems(filterItems);
  // }, [isVeg]);

  return (
    <div>
      <div className="flex p-4 sticky z-20 bg-white top-64 shadow-lg">
        <h2 className="ml-5 text-xl font-bold">Menu Items</h2>
        <div className="flex items-center ml-4">
          <input
            className="accent-green-700"
            type="checkbox"
            value={isVeg}
            onClick={() => setIsVeg(!isVeg)}
          />
          <i
            className={`fa fa-dot-circle-o text-green-600 pl-2 `}
            aria-hidden="true"
          ></i>
          <h5 className="pl-1 text-xs font-bold">Veg</h5>
        </div>
      </div>
      {items &&
        Object.keys(items).map((category) => (
          <div id={`cat-${category}`} key={category}>
            <h2 className="font-bold flex justify-center text-cyan-700 m-2 text-lg">
              {category}
            </h2>

            <FoodItem key={items[category]} items={items[category]} />

            <hr />
          </div>
        ))}
    </div>
  );
};
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant] = useRestaurant(resId);
  const [restaurantItems, setRestaurantItems] = useState(null);
  const [sideMenuCategory, setSideMenuCategory] = useState([]);

  useEffect(() => {
    if (restaurant && Object.values(restaurant?.menu?.items)?.length > 0) {
      let sideMenuCategory = [];
      const sortedByCategory = Object.values(restaurant?.menu?.items).reduce(
        (acc, next) => {
          if (acc[next.category]) {
            acc[next.category].push(next);
            return acc;
          }
          sideMenuCategory = [...sideMenuCategory, next.category];
          acc[next.category] = [next];
          return acc;
        },
        {}
      );
      console.log(sortedByCategory, "ITEMS!");
      setSideMenuCategory([...sideMenuCategory]);
      setRestaurantItems({ ...sortedByCategory });
    }
  }, [restaurant]);

  return restaurant ? (
    <div>
      <Banner
        cloudinaryImageId={restaurant?.cloudinaryImageId}
        name={restaurant?.name}
        cuisines={restaurant?.cuisines}
        locality={restaurant?.locality}
        descriptionList={restaurant?.aggregatedDiscountInfo?.descriptionList}
      />
      <div className="flex">
        <SideMenu sideMenuCategory={sideMenuCategory} />
        <Menu items={restaurantItems} />
      </div>
    </div>
  ) : null;
};

export default RestaurantMenu;
