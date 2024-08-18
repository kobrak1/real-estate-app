import "./InfoBox.scss";

const InfoBox = ({ stat, description }) => {
  return (
    <div className="info-box">
      <h1>{stat}</h1>
      <h2>{description}</h2>
    </div>
  );
};

export default InfoBox;
