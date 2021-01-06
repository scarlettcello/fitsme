const foodsDiaryReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FOOD":
      return [...state, action.eatenFood];
    case "REMOVE_FOOD":
      return state.filter(({ id }) => id !== action.id);
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
