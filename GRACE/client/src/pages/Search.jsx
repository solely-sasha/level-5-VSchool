import React, { useState } from "react";
import PantryDetails from "../components/PantryDetails";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const encodedCity = encodeURIComponent(searchTerm);
      const response = await fetch(`/api/pantries?city=${encodedCity}`);
      const pantries = await response.json();
      setSearchResults(pantries);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="search-container">
      <h2>Find a location near you</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by city"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {handleSearch && (
        <div className="search-results">
          {searchResults.map(
            (pantry) =>
              pantry.location.toLowerCase() === searchTerm.toLowerCase() && (
                <PantryDetails key={pantry._id} pantry={pantry} />
              )
          )}
        </div>
      )}
    </div>
  );
}
