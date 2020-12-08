import React from "react";
import { connect } from "react-redux";
import { setFood } from "../actions/foodsDiary";
import history from "../history";

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

  const onSelectClick = () => {
    const food = { id, foodName, amount, calories, carbs, fat, protein };
    props.setFood(food);
    history.push(`/AddFood/${food.id}`);
  };

  return (
    <div>
      <div>
        <h3>{foodName}</h3>
        <p>
          {amount}, {calories}
        </p>
        <p>
          {carbs}, {fat}, {protein}
        </p>
      </div>
      <button onClick={onSelectClick}>Select</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setFood: (food) => console.log(dispatch(setFood(food))),
});

export default connect(undefined, mapDispatchToProps)(FoodItem);
