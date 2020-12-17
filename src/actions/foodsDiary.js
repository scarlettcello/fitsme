export const setFood = (food) => ({
  type: "SET_FOOD",
  food,
});

export const addFood = (food) => ({
  type: "ADD_FOOD",
  food,
});

export const editFood = (id, updates) => ({
  type: "EDIT_FOOD",
  id,
  updates,
});

export const setEatenFoods = (eatenFoods) => {
  console.log(eatenFoods);
  return {
    type: "SET_EATEN_FOODS",
    eatenFoods,
  };
};
