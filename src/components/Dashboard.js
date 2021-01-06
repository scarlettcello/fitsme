import React from "react";
import EatenFoodList from "./EatenFoodList";
import SearchFood from "./SearchFood";
import DaysSummary from "./DaysSummary";

const Dashboard = () => {
  return (
    <div>
      <SearchFood />
      <DaysSummary />
      <EatenFoodList />
    </div>
  );
};

export default Dashboard;
