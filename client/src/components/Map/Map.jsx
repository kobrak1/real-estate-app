import { MapContainer, TileLayer } from "react-leaflet";
import Pin from "../Pin/Pin";
import "leaflet/dist/leaflet.css";
import "./Map.scss";

const Map = ({ items }) => {
  return (
    <MapContainer
      center={[51.5072, 0.1276]}
      zoom={6}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
};

export default Map;
