const foodsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FOOD":
      return action.selectedFood;
    case "SET_FOODS":
      return action.foods;
    default:
      return state;
  }
};

export default foodsReducer;
