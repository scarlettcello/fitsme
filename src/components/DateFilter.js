import React from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import { setSelectedDate } from "../actions/filters";

export const DateFilter = (props) => {
  const handleChange = (selectedDate) => {
    props.setSelectedDate(selectedDate);
  };

  return (
    <div>
      <DatePicker selected={props.selectedDate} onChange={handleChange} />
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
