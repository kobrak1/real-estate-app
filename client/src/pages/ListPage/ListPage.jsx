import { listData } from "../../lib/dummyData";
import "./ListPage.scss";

const ListPage = () => {
  const data = listData;

  return (
    <div className="listPage">
      <div className="listContainer">Burak</div>
      <div className="mapContainer">Turkey</div>
    </div>
  );
};

export default ListPage;
