const Restaurant = ({
    name,
    cloudinaryImageId,
    cuisines,
    lastMileTravelString,
  }) => {
    return (
      <div className="item">
        <img
          alt="RestaurantLogo"
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{lastMileTravelString} minutes</h5>
      </div>
    );
  };

  export default Restaurant