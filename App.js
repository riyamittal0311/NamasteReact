import React from "react";
import ReactDom from "react-dom/client";

import logo from "./images/logo.jpg";
import { restaurantList } from "./data";

const Title = () => {
  return (
    <div className="img">
      <img src={logo} alt="logo" />
    </div>
  );
};
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
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
    <div className="item">
      <img
        alt="RestaurantLogo"
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h5>{lastMileTravelString} minutes</h5>
    </div>
  );
};
const Body = () => {
  return (
    <div className="list">
      {restaurantList.map((restaurant) => {
        return <Restaurant {...restaurant.data} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};
const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />);
