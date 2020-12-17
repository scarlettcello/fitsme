import React from "react";
import { Link } from "react-router-dom";

const EatenFood = ({ id, date, foodName, mealTime, takenCalories }) => {
  return (
    <Link to={`/edit/${id}`}>
      <p>{date}</p>
      <p>{mealTime}</p>
      <p>{foodName}</p>
      <p>{takenCalories}kcal</p>
    </Link>
  );
};

export default EatenFood;
