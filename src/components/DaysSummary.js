import React from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import selectEatenFoods from "../selectors/eatenFoods";
import daysTotal from "../selectors/daysTotal";
import dayjs from "dayjs";

const DaysSummary = ({ totalCalories, date }) => {
  let location = useLocation();

  return (
    <div className="content-container">
      <div className="summary">
        <h2 className="summary-title">
          {date}
          <br />
          Total: <span>{totalCalories.toFixed(2)}</span> Kcal
        </h2>
        <Link
          className={location.pathname === "/calendar" ? "is-hidden" : ""}
          to="/calendar"
        >
          <img src="../images/icon_calendar.png" alt="calendar icon" />
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const todaysFoods = selectEatenFoods(state.foodsDiary, state.filters);
  return {
    totalCalories: daysTotal(todaysFoods),
    date:
      todaysFoods.length > 0
        ? todaysFoods[0].createdDate
        : dayjs(state.filters.selectedDate).format("ddd MMM DD YYYY"),
  };
};

export default connect(mapStateToProps)(DaysSummary);
