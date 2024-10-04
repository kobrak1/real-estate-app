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

  // Handle the change of the filter
  const handleChange = (e) => {
    const {name, value} = e.target
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }))
  }

  // Handle the first letter capitalization
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="filter">
      <h1>
        Search results for <b>{capitalize(titleLocation)}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={filters.location}
            onChange={handleChange}
            placeholder="e.g. Istanbul"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select 
            name="transactionType" 
            id="transactionType"
            onChange={handleChange}
          >
            <option value={""}>any</option>
            <option value={"buy"}>buy</option>
            <option value={"rent"}>rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select 
            name="propertyType" 
            id="propertyType"
            onChange={handleChange}
          >
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
          <input 
            type="number" 
            id="bedroom" 
            name="bedroom" 
            value={filters.bedroom}
            onChange={handleChange}
            placeholder="any" 
          />
        </div>
        <button onClick={() => setTitleLocation(filters.location)}>
          <img src="/search.png" alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Filter;