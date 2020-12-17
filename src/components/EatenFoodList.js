import React from "react";
import { connect } from "react-redux";
import EatenFood from "./EatenFood";
import selectEatenFoods from "../selectors/eatenFoods";

export const eatenFoodList = (props) => {
  console.log(props);
  return (
    <div>
      {props.eatenFoods.length === 0 ? (
        <div>No record</div>
      ) : (
        props.eatenFoods.map((food) => {
          return <EatenFood key={food.id} {...food} />;
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    eatenFoods: selectEatenFoods(state.foodsDiary, state.filters),
  };
};

export default connect(mapStateToProps)(eatenFoodList);
