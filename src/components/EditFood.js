import React, { useState } from "react";
import { connect } from "react-redux";
import FoodForm from "./FoodForm";
import { startEditFood, startRemoveFood } from "../actions/foodsDiary";
import history from "../history";
import RemoveModal from "./RemoveModal";

const EditFood = (props) => {
  const [isOpen, setIsOpen] = useState(undefined);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleRemove = () => {
    console.log(props.eatenFood.id);
    props.startRemoveFood({ id: props.eatenFood.id });
    props.history.push("/dashboard");
  };

  const onFormSubmit = (updatedFood) => {
    updatedFood.id = props.eatenFood.id;
    updatedFood.foodName = props.eatenFood.foodName;
    updatedFood.caloriesPerAmount = props.eatenFood.caloriesPerAmount;
    updatedFood.amount = props.eatenFood.amount;
    updatedFood.carbsAmount = props.eatenFood.carbsAmount;
    updatedFood.fatAmount = props.eatenFood.fatAmount;
    updatedFood.proteinAmount = props.eatenFood.proteinAmount;
    props.startEditFood(updatedFood.id, updatedFood);
    console.log(updatedFood);
    history.push("/dashboard");
  };

  return (
    <div>
      <h2>{props.eatenFood.foodName}</h2>
      <h3>Amount: {props.eatenFood.amount} </h3>
      <h3>Calories: {props.eatenFood.caloriesPerAmount}kcal</h3>
      <FoodForm onSubmit={onFormSubmit} eatenFood={props.eatenFood} />
      <RemoveModal
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        onClickRemove={handleRemove}
      />
      <button onClick={handleOpenModal}>Remove</button>
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
    startEditFood: (id, food) => dispatch(startEditFood(id, food)),
    startRemoveFood: (food) => dispatch(startRemoveFood(food)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditFood);
