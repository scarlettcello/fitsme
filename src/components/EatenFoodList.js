import React from "react";
import { connect } from "react-redux";
import EatenFood from "./EatenFood";
import selectEatenFoods from "../selectors/eatenFoods";

const EatenFoodList = (props) => {
  console.log(props);
  return (
    <div>
      {props.eatenFoods.length === 0 ? (
        <div>No record</div>
      ) : (
        <>
          <h3>{props.eatenFoods[0].date}</h3>
          <div>
            {props.eatenFoods.map((food) => {
              return <EatenFood key={food.id} {...food} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.foodsDiary);
  return {
    eatenFoods: selectEatenFoods(state.foodsDiary, state.filters),
  };
};

export default connect(mapStateToProps)(EatenFoodList);
