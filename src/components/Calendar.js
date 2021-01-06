import React from "react";
import DateFilter from "./DateFilter";
import DaysSummary from "./DaysSummary";
import EatenFoodList from "./EatenFoodList";

const Calendar = () => {
  return (
    <>
      <DateFilter />
      <DaysSummary />
      <EatenFoodList />
    </>
  );
};

export default Calendar;
