import React from "react";
import { connect } from "react-redux";
import EatenFood from "./EatenFood";
import selectEatenFoods from "../selectors/eatenFoods";

const EatenFoodList = (props) => {
  return (
    <div className="content-container">
      <div className="list-header">
        <div className="list-item__text container">
          <div className="column-a">Meal Time</div>
          <div className="column-b">Food Name</div>
          <div className="column-c">Taken Calories</div>
        </div>
      </div>
      {props.eatenFoods === undefined || props.eatenFoods.length === 0 ? (
        <div className="list-item">No record</div>
      ) : (
        <div className="list-body">
          {props.eatenFoods.map((food) => {
            return <EatenFood key={food.id} {...food} />;
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    eatenFoods: selectEatenFoods(state.foodsDiary, state.filters),
  };
};

export default connect(mapStateToProps)(EatenFoodList);
