import dayjs from "dayjs";

// eslint-disable-next-line import/no-anonymous-default-export
const selectEatenFoods = (eatenFoods, { selectedDate }) => {
  const today = dayjs().format("ddd MMM DD YYYY");

  const selectedDateString =
    selectedDate === undefined
      ? today
      : dayjs(selectedDate).format("ddd MMM DD YYYY");

  if (eatenFoods !== undefined && eatenFoods[0] !== undefined) {
    return eatenFoods
      .filter((food) => {
        const createdDate = food.createdDate;
        const dateMatch = selectedDate
          ? selectedDateString === createdDate
          : true;
        return dateMatch;
      })
      .sort((a, b) => {
        return sortByMealTime[a.mealTime] - sortByMealTime[b.mealTime];
      });
  } else {
    return [];
  }
};

const sortByMealTime = {
  Breakfast: 0,
  Lunch: 1,
  Snack: 2,
  Dinner: 3,
};

export default selectEatenFoods;
