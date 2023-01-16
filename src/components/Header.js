import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";

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
          <li><Link to='/'><i class="fa fa-home" aria-hidden="true"></i> Home</Link></li>
          <li><Link to='/about'><i class="fa fa-info" aria-hidden="true"></i> About Us</Link></li>
          <li><Link  to='/contact'><i class="fa fa-phone-square" aria-hidden="true"></i> Contact Us </Link></li>
          <li><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
