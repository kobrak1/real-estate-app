import { useCallback, useState } from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    // Sanitize input
    const sanitizedValue = name === 'location'
    ? value.replace(/[<>]/g, '')
    : Math.max(0, Math.min(Number(value), 100000))

    // Set sanitizedValue to query
    setQuery((prevQuery) => ({ ...prevQuery, [name]: sanitizedValue }))
  }, [])

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    try {
      console.log("Form Submitted Successfully");
    } catch (error) {
      console.error("Form Submission Failed:", error);
    }
  }, [])

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
