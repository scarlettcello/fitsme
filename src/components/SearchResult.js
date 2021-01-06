import React from "react";
import FoodItem from "./FoodItem";

const SearchResult = ({ foods, isFoodSearched }) => {
  const renderedList = foods.map((item) => {
    return <FoodItem key={item.food_id} food={item} />;
  });

  return (
    <div className="content-container">
      <div className={isFoodSearched ? "list-header" : "is-hidden"}>
        <div className="list-item__text container">
          <div className="column-a">Food Name</div>
          <div className="column-b">Amount/Calories</div>
          <div className="column-c">Nutrition</div>
        </div>
      </div>
      <div className="list-body">{renderedList}</div>
    </div>
  );
};

export default SearchResult;
