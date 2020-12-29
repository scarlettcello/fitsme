import React, { useEffect } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import { setSelectedDate } from "../actions/filters";
import dayjs from "dayjs";

export const DateFilter = ({ setSelectedDate }) => {
  useEffect(() => {
    const today = dayjs().format("ddd MMM DD YYYY");
    setSelectedDate(today);
  }, [setSelectedDate]);

  const handleChange = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

  return (
    <div>
      <DatePicker onChange={handleChange} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setSelectedDate: (selectedDate) => dispatch(setSelectedDate(selectedDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DateFilter);
