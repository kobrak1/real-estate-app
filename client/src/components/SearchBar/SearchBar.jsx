import { useState } from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery({ ...query, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log("Form Submitted Successfully");
    } catch (error) {
      console.error("Form Submission Failed:", error);
    }
  };

  return (
    <div className="searchBar">
      <div className="type">
        <button
          onClick={() => setQuery({ ...query, type: "buy" })}
          className={query.type === "buy" ? "active" : ""}
        >
          Buy
        </button>
        <button
          onClick={() => setQuery({ ...query, type: "rent" })}
          className={query.type === "rent" ? "active" : ""}
        >
          Rent
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          value={query.location}
          onChange={handleChange}
          placeholder="City location"
        />
        <input
          type="number"
          name="minPrice"
          value={query.minPrice}
          onChange={handleChange}
          min={0}
          max={100000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          value={query.maxPrice}
          onChange={handleChange}
          min={0}
          max={100000}
          placeholder="Max Price"
        />
        <button type="submit">
          <img src="/search.png" alt="search_icon_not_found" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
