import React from "react";
import DateFilter from "./DateFilter";
import EatenFoodList from "./EatenFoodList";

const Dashboard = () => {
  return (
    <div>
      Choose the date: <DateFilter />
      <EatenFoodList />
    </div>
  );
};

export default Dashboard;
