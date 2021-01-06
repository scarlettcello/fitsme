// set the selected food to the add form
export const setFood = (selectedFood) => ({
  type: "SET_FOOD",
  selectedFood,
});

// set the list of selected food in the search result
export const setFoods = (foods) => ({
  type: "SET_FOODS",
  foods,
});
