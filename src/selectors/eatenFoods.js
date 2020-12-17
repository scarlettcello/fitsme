import dayjs from "dayjs";

// eslint-disable-next-line import/no-anonymous-default-export
export default (eatenFoods, { selectedDate }) => {
  return eatenFoods
    .filter((food) => {
      const createdDate = food.date;
      const dateMatch = selectedDate
        ? dayjs(selectedDate).isSame(createdDate)
        : true;
      return dateMatch;
    })
    .sort((a, b) => {
      return sortByMealTime[a.mealTime] - sortByMealTime[b.mealTime];
    });
};

const sortByMealTime = {
  Breakfast: 0,
  Lunch: 1,
  Snack: 2,
  Dinner: 3,
};
