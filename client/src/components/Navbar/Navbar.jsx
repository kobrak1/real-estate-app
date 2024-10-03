import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const user = true;
  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/", label: "About" },
    { to: "/profile", label: "Contact" },
    { to: "/list", label: "Agents" },
  ];

  const renderMenuItems = useMemo(() => (
    menuItems.map(item => (
      <li key={item.label}>
        <Link to={item.to}>{item.label}</Link>
      </li>
    ))
  ), [])

  return (
    <nav>
      <div className="left">
        <Link to={"/"} className="logo">
          <img src="/favicon2.png" alt="logo" />
          <span>KonutPazar</span>
        </Link>
        <ul>{renderMenuItems}</ul>
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
            <Link to={"/login"} className="login">
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
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"#"}>About</Link>
          </li>
          <li>
            <Link to={"/profile"}>Contact</Link>
          </li>
          <li>
            <Link to={"/list"}>Agents</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
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
