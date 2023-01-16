import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IMG_CDN } from "../config";

const Banner = ({
  cloudinaryImageId,
  name,
  cuisines,
  locality,
  descriptionList,
}) => {
  return (
    <div className="banner">
      <div className="banner-img">
        <img src={`${IMG_CDN}/${cloudinaryImageId}`} alt="food" />
      </div>

      <div className="list-items">
        <h2>{name}</h2>
        <ul>
          <li>{cuisines.join(", ")}</li>
          <li>{locality}</li>
        </ul>
      </div>

      <div className="offer">
        <ul>
          {descriptionList.map((item) => (
            <li>
              <i class="fa fa-certificate" aria-hidden="true"></i> {item?.meta}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Menu = ({ items }) => {
  return (
    <div className="menu">
      <h2>Menu Items</h2>
      {Object.values(items).map((item) => (
        <div key={item?.id} className="item">
          <div className="bestseller">
            <span>
              <i
                className={`fa fa-dot-circle-o ${
                  item.isVeg === 1 ? "veg" : "non-veg"
                }`}
                aria-hidden="true"
              ></i>
            </span>
            {item.isBestSeller ? <span>Bestseller</span> : null}
          </div>
          <div className="card">
            <div>
              <h3>{item?.name}</h3>
              <h3>Price:</h3>
              <p>{item?.description}</p>
            </div>
            <div className="img-card">
              <img src={`${IMG_CDN}/${item?.cloudinaryImageId}`} />
              <button type="button">Add</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  async function fetchRestaurantMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=28.7330075&lng=77.1093233&menuId=${resId}`
    );
    const json = await data.json();
    setRestaurant(json?.data);
  }
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
