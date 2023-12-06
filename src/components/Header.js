import { LOGO } from "../constants";

const Title = (
  <a href="/">
    <img className="logo" alt="logo" src={LOGO} />
  </a>
);

const Header = () => (
  <div className="header">
    {Title}
    <div className="nav-list">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
