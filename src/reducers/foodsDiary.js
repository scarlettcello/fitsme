const foodsDiaryReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FOOD":
      return action.food;
    case "ADD_FOOD":
      return [...state, action.food];
    case "REMOVE_FOOD":
      return state.filter(({ id }) => action.id);
    case "EDIT_FOOD":
      return state.map((food) => {
        if (food.id === action.id) {
          return { ...food, ...action.updates };
        } else {
          return food;
        }
      });
    case "SET_EATEN_FOODS":
      return action.eatenFoods;
    default:
      return state;
  }
};

export default foodsDiaryReducer;
