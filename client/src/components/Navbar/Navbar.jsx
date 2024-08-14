import "./navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="../public/favicon.png" alt="logo" />
          <span>KonutPazar</span>
        </a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Agents</a>
      </div>
      <div className="right">
        <a href="#">Login</a>
        <a href="#">Register</a>
      </div>
    </nav>
  );
};

export default Navbar;
