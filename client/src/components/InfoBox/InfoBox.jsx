import "./InfoBox.scss";

const InfoBox = () => {
  const boxes = [
    { number: "16+", text: "Years of Experience" },
    { number: "7", text: "Awards Gained" },
    { number: "3000+", text: "Property Ready" },
  ];

  return (
    <div className="boxes-container">
      <div className="boxes">
        {[...boxes, ...boxes].map((box, index) => (
          <div className="box" key={index}>
            <h1>{box.number}</h1>
            <h2>{box.text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBox;