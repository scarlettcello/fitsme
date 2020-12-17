import React from "react";
import { connect } from "react-redux";
import { addFood } from "../actions/foodsDiary";
import FoodForm from "./FoodForm";
import history from "../history";

const AddFood = ({ id, foodName, amount, calories, carbs, fat, protein }) => {
  const caloriesPerAmount = parseInt(calories.match(/\d+/)[0]);
  const carbsAmount = parseInt(carbs.match(/\d+/)[0]);
  const fatAmount = parseInt(fat.match(/\d+/)[0]);
  const proteinAmount = parseInt(protein.match(/\d+/)[0]);

  const onFormSubmit = (eatenFood) => {
    eatenFood.id = id;
    eatenFood.foodName = foodName;
    eatenFood.caloriesPerAmount = caloriesPerAmount;
    eatenFood.amount = amount;
    eatenFood.carbsAmount = carbsAmount;
    eatenFood.fatAmount = fatAmount;
    eatenFood.proteinAmount = proteinAmount;
    console.log(addFood(eatenFood));
    history.push("/");
  };

  return (
    <div>
      <h2>{foodName}</h2>
      <h3>Amount: {amount} </h3>
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
  addFood: (eatenFood) => dispatch(addFood(eatenFood)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFood);
