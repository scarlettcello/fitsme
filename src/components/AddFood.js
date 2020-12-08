import React from "react";
import { connect } from "react-redux";
import { addFood } from "../actions/foodsDiary";
import FoodForm from "./FoodForm";
import history from "../history";

const AddFood = ({ foodName, amount, calories, carbs, fat, protein }) => {
  const caloriesAmount = parseInt(calories.match(/\d+/)[0]);
  const carbsAmount = parseInt(carbs.match(/\d+/)[0]);
  const fatAmount = parseInt(fat.match(/\d+/)[0]);
  const proteinAmount = parseInt(protein.match(/\d+/)[0]);

  const onFormSubmit = (eatenFood) => {
    eatenFood.foodName = foodName;
    console.log(addFood(eatenFood));
    history.push("/");
  };

  return (
    <div>
      <h2>{foodName}</h2>
      <h3>Amount: {amount} </h3>
      <h3>Calories: {caloriesAmount} kcal</h3>
      <FoodForm
        caloriesAmount={caloriesAmount}
        carbsAmount={carbsAmount}
        fatAmount={fatAmount}
        proteinAmount={proteinAmount}
        onSubmit={onFormSubmit}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
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
