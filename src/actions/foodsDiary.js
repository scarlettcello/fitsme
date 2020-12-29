import database from "../firebase/firebase";

// set the selected food item in the form to add or edit
export const setFood = (food) => ({
  type: "SET_FOOD",
  food,
});

// set the list of selected food in the search result
export const setFoods = (foods) => ({
  type: "SET_FOODS",
  foods,
});

// add the eaten food item
export const addFood = (eatenFood) => ({
  type: "ADD_FOOD",
  eatenFood,
});

export const startAddFood = (eatenFoodData = {}) => {
  return (dispatch, getState) => {
    //const uid = getState().auth.uid;
    const {
      amount = 0,
      caloriesPerAmount = 0,
      carbsAmount = 0,
      createdDate = "",
      fatAmount = 0,
      foodName = "",
      mealTime = "",
      portion = 0,
      proteinAmount = 0,
    } = eatenFoodData;
    const eatenFood = {
      amount,
      caloriesPerAmount,
      carbsAmount,
      createdDate,
      fatAmount,
      foodName,
      mealTime,
      portion,
      proteinAmount,
    };
    return database
      .ref(`eatenFoods`)
      .push(eatenFood)
      .then((ref) => {
        dispatch(addFood({ id: ref.key, ...eatenFood }));
      });
  };
};

export const editFood = (id, updates) => ({
  type: "EDIT_FOOD",
  id,
  updates,
});

export const startEditFood = (id, updates) => {
  return (dispatch, getState) => {
    //const uid = getState().auth.uid;
    return database
      .ref(`eatenFoods/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editFood(id, updates));
      });
  };
};

// set all eaten food items filtered by certain date
export const setEatenFoods = (eatenFoods) => {
  console.log(eatenFoods);
  return {
    type: "SET_EATEN_FOODS",
    eatenFoods,
  };
};

export const startSetEatenFoods = () => {
  return (dispatch, getState) => {
    //const uid = getState().auth.uid;
    return database
      .ref(`eatenFoods`)
      .once("value")
      .then((snapshot) => {
        const eatenFoods = [];

        snapshot.forEach((childSnapshot) => {
          eatenFoods.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });

        dispatch(setEatenFoods(eatenFoods));
      });
  };
};

export const removeFood = ({ id } = {}) => ({
  type: "REMOVE_FOOD",
  id,
});

export const startRemoveFood = ({ id } = {}) => {
  return (dispatch, getState) => {
    //const uid = getState().auth.uid;
    return database
      .ref(`eatenFoods/${id}`)
      .remove()
      .then(() => {
        dispatch(removeFood({ id }));
      });
  };
};
