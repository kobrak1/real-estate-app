import { useState } from "react";
import "./Filter.scss";

const Filter = () => {
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [titleLocation, setTitleLocation] = useState("Istanbul");

  return (
    <div className="filter">
      <h1>
        Search results for <b>{titleLocation}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="location">location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Istanbul"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">location</label>
          <select name="type" id="type">
            <option value={""}>any</option>
            <option value={"buy"}>buy</option>
            <option value={"rent"}>rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="text"
            id="minPrice"
            name="minPrice"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="min. price"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="max. price"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="text" id="bedroom" name="bedroom" placeholder="any" />
        </div>
        <button>
          <img src="../../public/search.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
