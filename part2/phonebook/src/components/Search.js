import React from "react";

const Search = ({ search, handleSearchChange }) => {
  return (
    <div>
      search for <input value={search} onChange={handleSearchChange} />
    </div>
  );
};

export default Search;
