import React from "react";
import ReactDom from "react-dom/client";

import logo from "./images/logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="search">
        <div>
          <input type="text" />
          <div className="search_icon">
            <i className="fa fa-regular fa-user"></i>
          </div>
        </div>
      </div>
      <div className="user_icon">
        <i className="fa fa-regular fa-user"></i>
      </div>
    </header>
  );
};

const App = () => {
  return <Header />;
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />);
