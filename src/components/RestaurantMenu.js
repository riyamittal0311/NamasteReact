import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useRestaurant from "../util/useRestaurant";
import { IMG_CDN } from "../config";

const Banner = ({
  cloudinaryImageId,
  name,
  cuisines,
  locality,
  descriptionList,
}) => {
  return (
    <div className="flex bg-black text-white h-52 justify-around mt-5">
      <div className="flex items-center">
        <img className="h-40" src={`${IMG_CDN}/${cloudinaryImageId}`} alt="food" />
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
            <li className="p-2 mr-1"  key={idx}>
              <i className="fa fa-certificate pr-2" aria-hidden="true"></i>
              {item?.meta}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Menu = ({ items }) => {
  const [isVeg, setIsVeg] = useState(false);
  const [restaurantItems, setRestaurantItems] = useState(
    ...Object.values(items)
  );

  useEffect(() => {
    const filterItems = Object.values(items).filter((item) => {
      if (isVeg) {
        return item.isVeg === 1;
      }
      return item;
    });
    setRestaurantItems(filterItems);
  }, [isVeg]);

  return (
    <div>
      <div className="flex m-4 ">
        <h2 className="ml-5 text-xl font-bold">Menu Items</h2>
        <div className="flex items-center ml-4">
          <input
          className="accent-green-700"
            type="checkbox"
            value={isVeg}
            onClick={() => setIsVeg(!isVeg)}
          />
          <i className={`fa fa-dot-circle-o text-green-600 pl-2 `} aria-hidden="true"></i>
          <h5 className="pl-1 text-xs font-bold">Veg</h5>
        </div>
      </div>

      <hr />
      {Object.values(restaurantItems).map((item) => (
        <div key={item?.id} className="m-4 p-2 shadow-md rounded-md border-2 hover:bg-blue-50">
          <div className="flex">
            <span >
              <i
                className={`fa fa-dot-circle-o ${
                  item.isVeg === 1 ? "text-green-700" : "text-red-700"
                }`}
                aria-hidden="true"
              ></i>
            </span>
            {item.isBestSeller ? <span className="flex items-center ml-3 text-red-600 font-bold text-xs">Bestseller</span> : null}
          </div>
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">{item?.name}</h3>
              <h3 className="text-sm mt-2 mb-2">Price: <span className="font-bold">₹{parseInt(+item?.price / 100)}</span></h3>
              <p className="text-gray-500 text-xs ">{item?.description}</p>
            </div>
            <div className="flex justify-center flex-col w-28">
              <img src={`${IMG_CDN}/${item?.cloudinaryImageId}`} />
              <button className="text-sm p-1 font-bold border-2 hover:bg-gray-100" type="button">Add</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);

  return restaurant ? (
    <div>
      <Banner
        cloudinaryImageId={restaurant?.cloudinaryImageId}
        name={restaurant?.name}
        cuisines={restaurant?.cuisines}
        locality={restaurant?.locality}
        descriptionList={restaurant?.aggregatedDiscountInfo?.descriptionList}
      />
      <Menu items={restaurant?.menu?.items} />
    </div>
  ) : null;
};

export default RestaurantMenu;
