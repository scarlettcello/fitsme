import React from "react";
import { Link } from "react-router-dom";

const EatenFood = ({ id, foodName, mealTime, caloriesPerAmount, portion }) => {
  return (
    <Link className="list-item container" to={`/edit/${id}`}>
      <div className="column-a">
        <p>{mealTime}</p>
      </div>
      <div className="column-b">
        <p>{foodName}</p>
      </div>
      <div className="column-c">
        <p>{(caloriesPerAmount * portion).toFixed(2)}kcal</p>
      </div>
    </Link>
  );
};

export default EatenFood;
