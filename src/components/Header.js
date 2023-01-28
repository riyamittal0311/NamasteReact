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
const Header = () => {
  const isOnline = useOnline();
  return (
    <div className="flex justify-between m-2 mt-0 ml-0 mr-0 border-1 shadow-lg">
      <Title />
      <div>
        <ul className="flex  items-center">
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

export default Header;
