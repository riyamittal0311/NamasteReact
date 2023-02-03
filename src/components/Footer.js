import { useContext } from "react";
import { UserContext } from "../util/UserContext";
import { FooterContext } from "../util/FooterContext";

const Footer = () => {
  const {user} = useContext(UserContext)
  const {footer} = useContext(FooterContext)
  return <h4 className="footer border p-2 m-2">{user.name} {footer} </h4>;
};

export default Footer;
