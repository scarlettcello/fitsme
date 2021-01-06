import dayjs from "dayjs";

// eslint-disable-next-line import/no-anonymous-default-export
const eatenFoodsToday = (eatenFoods) => {
  const today = dayjs().format("ddd MMM DD YYYY");

  if (eatenFoods !== undefined && eatenFoods[0] !== undefined) {
    return eatenFoods
      .filter((food) => {
        const createdDate = food.createdDate;
        const dateMatch = createdDate ? today === createdDate : true;
        return dateMatch;
      })
      .sort((a, b) => {
        return sortByMealTime[a.mealTime] - sortByMealTime[b.mealTime];
      });
  }
  return;
};

const sortByMealTime = {
  Breakfast: 0,
  Lunch: 1,
  Snack: 2,
  Dinner: 3,
};

export default eatenFoodsToday;
