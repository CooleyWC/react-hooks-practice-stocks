import { useState } from "react";
import React from "react";

function SearchBar({filteredData, setFilteredData, sortBy, setSortBy}) {



  function handleSelectChange(e){
    setFilteredData(e.target.value)
  }

  function sortByFunction(e){
    setSortBy(e.target.value)
  }

  // console.log(dropdown)
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortBy==="Alphabetically"}
          onChange={sortByFunction}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortBy==="Price"}
          onChange={sortByFunction}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleSelectChange} value={filteredData}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
