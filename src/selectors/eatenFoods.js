import dayjs from "dayjs";

// eslint-disable-next-line import/no-anonymous-default-export
const selectEatenFoods = (eatenFoods, { selectedDate }) => {
  const selectedDateString = dayjs(selectedDate).format("ddd MMM DD YYYY");
  console.log(eatenFoods);

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
};

const sortByMealTime = {
  Breakfast: 0,
  Lunch: 1,
  Snack: 2,
  Dinner: 3,
};

export default selectEatenFoods;
