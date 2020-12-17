import React from "react";
import { connect } from "react-redux";
import FoodForm from "./FoodForm";
import { editFood } from "../actions/foodsDiary";
import history from "../history";

const EditFood = (props) => {
  const onFormSubmit = (updatedFood) => {
    console.log(updatedFood);
    updatedFood.id = props.eatenFood.id;
    updatedFood.foodName = props.eatenFood.foodName;
    updatedFood.caloriesPerAmount = props.eatenFood.caloriesPerAmount;
    updatedFood.amount = props.eatenFood.amount;
    updatedFood.carbsAmount = props.eatenFood.carbsAmount;
    updatedFood.fatAmount = props.eatenFood.fatAmount;
    updatedFood.proteinAmount = props.eatenFood.proteinAmount;
    console.log(editFood(updatedFood.id, updatedFood));
    history.push("/dashboard");
  };

  return (
    <div>
      <h2>{props.eatenFood.foodName}</h2>
      <h3>Amount: {props.eatenFood.amount} </h3>
      <h3>Calories: {props.eatenFood.caloriesPerAmount}kcal</h3>
      <FoodForm onSubmit={onFormSubmit} eatenFood={props.eatenFood} />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  console.log(state);
  const subjectFood = state.foodsDiary.find(
    (food) => food.id === props.match.params.id
  );
  return { eatenFood: subjectFood };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editFood: (id, food) => dispatch(editFood(id, food)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditFood);
