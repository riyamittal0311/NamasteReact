import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";

import useOnline from "../util/useOnline";

const Title = () => {
  return (
    <div className="img">
      <img src={logo} alt="logo" />
    </div>
  );
};
const Header = () => {
  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">
              <i className="fa fa-home" aria-hidden="true"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <i className="fa fa-info" aria-hidden="true"></i> About Us
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <i className="fa fa-phone-square" aria-hidden="true"></i> Contact
              Us{" "}
            </Link>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart
            </a>
          </li>
          <li>
            <a href="#">
              <i
                className={`fa fa-user-circle-o ${
                  isOnline ? "online" : "offline"
                }`}
                aria-hidden="true"
              ></i>
              <h6 style={{padding:0,margin:0}}>{isOnline ? 'Online': 'Offline'}</h6>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
