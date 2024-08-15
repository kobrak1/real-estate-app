import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <Link to={"/"} className="logo">
          <img src="../public/favicon.png" alt="logo" />
          <span>KonutPazar</span>
        </Link>
        <ul>
          <li>
            <Link to={"#"}>Home</Link>
          </li>
          <li>
            <Link to={"#"}>About</Link>
          </li>
          <li>
            <Link to={"#"}>Contact</Link>
          </li>
          <li>
            <Link to={"#"}>Agents</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <Link to={"#"}>Login</Link>
        <Link to={"#"} className="register">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
