import React from 'react'
import FoodItem from './FoodItem';

const SearchResult = ({foods}) => {
  const renderedList = foods.map(item => {
    return (
      <FoodItem
        key={item.food_id}
        food={item}
      />
    )
  });
  return <div>{renderedList}</div>
}

export default SearchResult;
