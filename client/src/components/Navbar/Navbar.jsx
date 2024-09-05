import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [opened, setOpened] = useState(false);

  return (
    <nav>
      <div className="left">
        <Link to={"/"} className="logo">
          <img src="/favicon2.png" alt="logo" />
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
        <span>
          <Link to={"#"} className="login">
            Login
          </Link>
          <Link to={"#"} className="register">
            Register
          </Link>
        </span>
        <div className="menu-icon">
          <button
            onClick={() => setOpened(!opened)}
            aria-label={opened ? "Close menu" : "Open menu"}
          >
            <img src="/menu.png" alt="" />
          </button>
        </div>
        <ul className={opened ? "menu active" : "menu"}>
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
          <li>
            <Link to={"#"}>Login</Link>
          </li>
          <li>
            <Link to={"#"}>Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
