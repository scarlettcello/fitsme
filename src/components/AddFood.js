import React from "react";
import { connect } from "react-redux";
import { startAddFood, startSetEatenFoods } from "../actions/foodsDiary";
import { setFood } from "../actions/foods";
import FoodForm from "./FoodForm";
import history from "../history";

const AddFood = (props) => {
  const caloriesPerAmount = parseInt(props.calories.match(/\d+/)[0]);
  const carbsAmount = parseInt(props.carbs.match(/\d+/)[0]);
  const fatAmount = parseInt(props.fat.match(/\d+/)[0]);
  const proteinAmount = parseInt(props.protein.match(/\d+/)[0]);

  const onFormSubmit = (food) => {
    food.foodName = props.foodName;
    food.amount = props.amount;
    food.carbsAmount = carbsAmount;
    food.fatAmount = fatAmount;
    food.proteinAmount = proteinAmount;
    props.startAddFood(food);
    props.startSetEatenFoods();
    history.push("/dashboard");
  };

  const onCancelClick = () => {
    const food = {
      id: "",
      foodName: "",
      amount: "",
      calories: "",
      carbs: "",
      fat: "",
      protein: "",
    };
    props.setFood(food);
    history.push("/dashboard");
  };

  return (
    <div className="content-container">
      <h2>{props.foodName}</h2>
      <h3>
        Amount: <span>{props.amount}</span>
      </h3>
      <h3>
        Calories: <span>{caloriesPerAmount}</span> kcal
      </h3>
      <FoodForm
        caloriesPerAmount={caloriesPerAmount}
        onSubmit={onFormSubmit}
        onCancelClick={onCancelClick}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.foods.id,
    foodName: state.foods.foodName,
    amount: state.foods.amount,
    calories: state.foods.calories,
    carbs: state.foods.carbs,
    fat: state.foods.fat,
    protein: state.foods.protein,
  };
};

const mapDispatchToProps = (dispatch) => ({
  startAddFood: (food) => dispatch(startAddFood(food)),
  startSetEatenFoods: () => dispatch(startSetEatenFoods()),
  setFood: (food) => dispatch(setFood(food)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFood);
