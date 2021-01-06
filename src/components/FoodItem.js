import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setFood } from "../actions/foods";

const FoodItem = (props) => {
  let id = props.food.food_id;
  let foodName = props.food.food_name;
  let description = props.food.food_description.split("- ");
  let amount = description[0];
  let nutrition = description[1].split(" | ");
  let calories = nutrition[0];
  let fat = nutrition[1];
  let carbs = nutrition[2];
  let protein = nutrition[3];

  const selectedFood = {
    id,
    foodName,
    amount,
    calories,
    carbs,
    fat,
    protein,
  };

  const onSelectClick = () => {
    props.setFood(selectedFood);
  };

  return (
    <Link
      className="list-item container"
      to={`/add/${selectedFood.id}`}
      onClick={onSelectClick}
    >
      <div className="column-a">
        <h3>{foodName}</h3>
      </div>
      <div className="column-b">
        <h4>
          {amount}, {calories}
        </h4>
      </div>
      <div className="column-c">
        <p>
          {carbs}, {fat}, {protein}
        </p>
      </div>
    </Link>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setFood: (selectedFood) => dispatch(setFood(selectedFood)),
});

export default connect(null, mapDispatchToProps)(FoodItem);
