import { IMG_CDN } from "../config";

const Restaurant = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
}) => {
  return (
    <div className="item">
      <img alt="RestaurantLogo" src={`${IMG_CDN}/${cloudinaryImageId}`} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{lastMileTravelString} minutes</h5>

      <div className="quick-view">
        <hr />
        <h4>Quick View</h4>
      </div>
    </div>
  );
};

export default Restaurant;
