import React from "react";

const SearchBar = ({ term, onTermChange, onFormSubmit }) => {
  return (
    <div className="content-container">
      <form className="form_search" onSubmit={onFormSubmit}>
        <input
          className="text-input"
          type="text"
          placeholder="What did you eat?"
          value={term}
          onChange={onTermChange}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
