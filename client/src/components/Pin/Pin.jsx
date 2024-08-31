import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "./Pin.scss";

const Pin = ({ item }) => {
  return (
    <Marker key={item.id} position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="img not found" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <div className="room-info">
              <span className="bed">
                {item.bedroom} bedroom{item.bedroom > 1 && "s"}
              </span>
              <b>$ {item.price}</b>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
