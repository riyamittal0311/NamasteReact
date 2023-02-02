import React, { useState } from "react";

import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";

import useOnline from "../util/useOnline";

const Title = () => {
  return (
    <div className="w-28">
      <img src={logo} alt="logo" />
    </div>
  );
};

const SideBar = ({ isOnline ,click}) => {
  return (
    <div onClick={(e)=>click(e)} className="w-1/4 bg-blue-50 z-10  h-full fixed left-0 lg:hidden md:hidden  block motion-reduce:animate-pulse">
      <div className="flex items-center">
        <ul className="flex flex-col mt-14  items-start  ml-2">
          <li className="p-2 mr-10 hover:text-cyan-700">
            <Link to="/">
              <i className="fa fa-home" aria-hidden="true"></i> Home
            </Link>
          </li>
          <li className="p-2 mr-10 hover:text-cyan-700">
            <Link to="/about">
              <i className="fa fa-info" aria-hidden="true"></i> About Us
            </Link>
          </li>
          <li className="p-2 mr-10 hover:text-cyan-700">
            <Link to="/contact">
              <i className="fa fa-phone-square" aria-hidden="true"></i> Contact
              Us
            </Link>
          </li>
          <li className="p-2 mr-10 hover:text-cyan-700">
            <a href="#">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart
            </a>
          </li>
          <li className="p-2 mr-10 hover:text-cyan-700">
            <a href="#">
              <i
                className={`fa fa-user-circle-o ${
                  isOnline ? "text-green-700" : "text-red-700"
                }`}
                aria-hidden="true"
              ></i>
              <h6 className="text-xs font-medium">
                {isOnline ? "Online" : "Offline"}
              </h6>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
const Header = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const isOnline = useOnline();
  return (
    <div className="flex justify-between m-2 mt-0 ml-0 mr-0 border-1 shadow-lg lg:flex-row md:flex-row flex-row-reverse sticky z-10 bg-white top-0 ">
      <Title />
      <div className="flex items-center">
        <ul className="lg:flex  lg:items-center  md:flex md:items-center hidden">
          <li className="p-2 mr-10 hover:text-cyan-700">
            <Link to="/">
              <i className="fa fa-home" aria-hidden="true"></i> Home
            </Link>
          </li>
          <li className="p-2 mr-10 hover:text-cyan-700">
            <Link to="/about">
              <i className="fa fa-info" aria-hidden="true"></i> About Us
            </Link>
          </li>
          <li className="p-2 mr-10 hover:text-cyan-700">
            <Link to="/contact">
              <i className="fa fa-phone-square" aria-hidden="true"></i> Contact
              Us
            </Link>
          </li>
          <li className="p-2 mr-10 hover:text-cyan-700">
            <a href="#">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart
            </a>
          </li>
          <li className="p-2 mr-10 hover:text-cyan-700">
            <a href="#">
              <i
                className={`fa fa-user-circle-o ${
                  isOnline ? "text-green-700" : "text-red-700"
                }`}
                aria-hidden="true"
              ></i>
              <h6 className="text-xs font-medium">
                {isOnline ? "Online" : "Offline"}
              </h6>
            </a>
          </li>
        </ul>
        <div
          onClick={() => setOpenSideBar(!openSideBar)}
          className="lg:hidden md:hidden   z-20 block ml-2"
        >
          <span className="h-1 w-5 mt-1  bg-black block"></span>
          <span className="h-1 w-5 mt-1 mb-1 bg-black block"></span>
          <span className="h-1 w-5 mb-1 bg-black block"></span>
        </div>
      </div>
      {openSideBar && <SideBar click={(e)=>setOpenSideBar(!openSideBar)} isOnline={isOnline} />}
    </div>
  );
};

export default Header;
