import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import "./layout.scss";

const App = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
};

export default App;
