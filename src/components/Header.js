import logo from "../../images/logo.jpg";

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

export default Header;
