import React from "react";
import { connect } from "react-redux";
import { startAddFood } from "../actions/foodsDiary";
import FoodForm from "./FoodForm";
import history from "../history";

const AddFood = (props) => {
  console.log(props);
  const caloriesPerAmount = parseInt(props.calories.match(/\d+/)[0]);
  const carbsAmount = parseInt(props.carbs.match(/\d+/)[0]);
  const fatAmount = parseInt(props.fat.match(/\d+/)[0]);
  const proteinAmount = parseInt(props.protein.match(/\d+/)[0]);

  const onFormSubmit = (eatenFood) => {
    eatenFood.id = props.id;
    eatenFood.foodName = props.foodName;
    eatenFood.amount = props.amount;
    eatenFood.carbsAmount = carbsAmount;
    eatenFood.fatAmount = fatAmount;
    eatenFood.proteinAmount = proteinAmount;
    console.log(eatenFood);
    props.startAddFood(eatenFood);
    history.push("/");
  };

  return (
    <div>
      <h2>{props.foodName}</h2>
      <h3>Amount: {props.amount} </h3>
      <h3>Calories: {caloriesPerAmount} kcal</h3>
      <FoodForm caloriesPerAmount={caloriesPerAmount} onSubmit={onFormSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  id: state.foodsDiary.id,
  foodName: state.foodsDiary.foodName,
  amount: state.foodsDiary.amount,
  calories: state.foodsDiary.calories,
  carbs: state.foodsDiary.carbs,
  fat: state.foodsDiary.fat,
  protein: state.foodsDiary.protein,
});

const mapDispatchToProps = (dispatch) => ({
  startAddFood: (food) => dispatch(startAddFood(food)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFood);
