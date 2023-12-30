import LOGO from "../assets/img/food-villa.png";
import { Link } from "react-router-dom";

const Title = (
  <Link to="/">
    <img className="logo" alt="logo" src={LOGO} />
  </Link>
);

const Header = () => (
  <div className="header">
    {Title}
    <div className="nav-list">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/instamart">
          <li>Instamart</li>
        </Link>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
