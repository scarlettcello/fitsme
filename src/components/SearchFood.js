import React from 'react';
import useFatsecret from '../hooks/useFatsecret';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

const SearchFood = () => {
  const [foods, search] = useFatsecret();

  return (
    <div>
      <SearchBar onFormSubmit={search} />
      <SearchResult foods={foods} />
    </div>
  )
}

export default SearchFood;