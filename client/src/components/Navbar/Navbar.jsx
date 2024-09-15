import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const user = true;

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
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="user img not found"
            />
            <span>John Doe</span>
            <Link to={"/profile"} className="profile-button">
              <div className="notification">5</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <span>
            <Link to={"#"} className="login">
              Login
            </Link>
            <Link to={"#"} className="register">
              Register
            </Link>
          </span>
        )}
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
