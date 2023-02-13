import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


export const FilterSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy" || ""));
  const [category, setCategory] = useState(searchParams.getAll("genre") || []);

  const handleFilter = (e) => {
    const option = e.target.value;
    let newCategory = [...category];
    if (newCategory.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    const params = {};
    category && (params.genre = category);
    sortBy && (params.sortBy = sortBy)
    setSearchParams(params);
  }, [category, setSearchParams, sortBy]);

  return (
    <div>
      <h2>Filter</h2>
      <div>
        <input
          type="checkbox"
          value="K-Pop"
          defaultChecked={category.includes("K-Pop")}
          onChange={handleFilter}
        />
        <label>K-Pop</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Country"
          defaultChecked={category.includes("Country")}
          onChange={handleFilter}
        />
        <label>Country</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Pop"
          defaultChecked={category.includes("Pop")}
          onChange={handleFilter}
        />
        <label>Pop</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Heavy Metal"
          defaultChecked={category.includes("Heavy Metal")}
          onChange={handleFilter}
        />
        <label>Heavy Metal</label>
      </div>
      <h2>Sort</h2>
      <div onChange={handleSortBy}>
        <div>
          <input
            type="radio"
            value="asc"
            defaultChecked={sortBy === "asc"}
            name="sortBy"
          />
          <label>Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            value="desc"
            defaultChecked={sortBy === "desc"}
            name="sortBy"
          />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};