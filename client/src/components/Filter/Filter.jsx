import { useState } from "react";
import "./Filter.scss";

const Filter = () => {
  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    propertyType: "",
    transactionType: "",
    bedroom: ""
  });
  const [titleLocation, setTitleLocation] = useState("Istanbul");


  const handleChange = (e) => {
    const {name, value} = e.target
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }))
  }

  return (
    <div className="filter">
      <h1>
        Search results for <b>{titleLocation}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={location}
            onChange={handleChange}
            placeholder="e.g. Istanbul"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Location</label>
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
            value={filters.minPrice}
            onChange={handleChange}
            placeholder="min. price"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            placeholder="max. price"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="text" id="bedroom" name="bedroom" placeholder="any" />
        </div>
        <button onClick={() => console.log('Search button has been clicked.')}>
          <img src="/search.png" alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Filter;