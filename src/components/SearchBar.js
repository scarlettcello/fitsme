import React from "react";

const SearchBar = ({ term, onTermChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="What did you eat?"
        value={term}
        onChange={onTermChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
