import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="../public/favicon.png" alt="logo" />
          <span>KonutPazar</span>
        </a>
        <Link to={"/"}>Home</Link>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Agents</a>
      </div>
      <div className="right">
        <a href="#">Login</a>
        <a href="#" className="register">
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
