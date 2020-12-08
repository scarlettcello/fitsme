import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="What did you eat?" 
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <h3>{term}</h3>
    </form>
  );
}

export default SearchBar;
