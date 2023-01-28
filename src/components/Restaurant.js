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
  costForTwoString,
  ribbon,
}) => {
  return (
    <>
      <div className="p-3 m-3 relative w-52  border-2 border-white hover:border-2 hover:border-gray-100 hover:shadow-lg">
        {ribbon && (
          <div className="absolute bg-zinc-700 text-white pt-1 pb-1 pl-2 pr-2 text-xs left-0 font-serif">
            {ribbon.map((el) => el.type)}
          </div>
        )}
        <img alt="RestaurantLogo" src={`${IMG_CDN}/${cloudinaryImageId}`} />
        <h3 className="pt-2 font-bold">{name}</h3>
        <h4 className="pt-2 text-sm">{cuisines.join(", ")}</h4>

        <h5 className="pt-2 text-sm">{lastMileTravelString}</h5>
        <h5 className="pt-2 text-xs text-gray-500">{costForTwoString}</h5>

        {/* <div className="quick-view">
          <hr />
          <h4 className="opacity-0 hover:opacity-100">Quick View</h4>
        </div> */}
      </div>
      {/* <MenuCard /> */}
    </>
  );
};

export default Restaurant;
