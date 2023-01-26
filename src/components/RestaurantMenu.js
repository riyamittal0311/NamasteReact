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
          {descriptionList.map((item, idx) => (
            <li key={idx}>
              <i className="fa fa-certificate" aria-hidden="true"></i>{" "}
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
    <div className="menu">
      <div className="heading">
        <h2>Menu Items</h2>
        <div className="filter">
          <input
            type="checkbox"
            value={isVeg}
            onClick={() => setIsVeg(!isVeg)}
          />
          <i className={`fa fa-dot-circle-o veg `} aria-hidden="true"></i>
          <h5>Veg</h5>
        </div>
      </div>

      <hr />
      {Object.values(restaurantItems).map((item) => (
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
              <h3>Price: ₹{parseInt(+item?.price / 100)}</h3>
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
