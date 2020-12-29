import React from "react";
import { Link } from "react-router-dom";

const EatenFood = ({ id, foodName, mealTime, caloriesPerAmount, portion }) => {
  return (
    <Link to={`/edit/${id}`}>
      <p>{mealTime}</p>
      <p>{foodName}</p>
      <p>{caloriesPerAmount * portion}kcal</p>
    </Link>
  );
};

export default EatenFood;
