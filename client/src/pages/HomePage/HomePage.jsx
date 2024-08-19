import SearchBar from "../../components/SearchBar/SearchBar";
import InfoBox from "../../components/InfoBox/InfoBox";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum nisi
            tempus eget pulvinar quisque tempor. Nulla class a et nibh mauris
            risus. Lorem ipsum odor amet, consectetuer adipiscing elit.
          </p>
          <SearchBar />
          <div className="boxes">
            <InfoBox stat="20+" description="Years of experience" />
            <InfoBox stat="154" description="Award gained" />
            <InfoBox stat="3000+" description="Property ready" />
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="../../../public/bg.png" />
      </div>
    </div>
  );
};

export default HomePage;
