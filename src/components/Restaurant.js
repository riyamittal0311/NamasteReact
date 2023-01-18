import { IMG_CDN } from "../config";

const MenuCard = () => {
  return (
    <div className="menu-card">
      <h3>Menu</h3>
      <ul>
        <li>Item1</li>
        <li>Item3</li>
        <li>Item2</li>
        <li>Item14</li>
      </ul>
    </div>
  );
};

const Restaurant = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
}) => {
  return (
    <>
      <div className="item">
        <img alt="RestaurantLogo" src={`${IMG_CDN}/${cloudinaryImageId}`} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{lastMileTravelString}</h5>

        <div className="quick-view">
          <hr />
          <h4>Quick View</h4>
        </div>
      </div>
      {/* <MenuCard /> */}
    </>
  );
};

export default Restaurant;
