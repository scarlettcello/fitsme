import React from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import { setSelectedDate } from "../actions/filters";

const DateFilter = ({ setSelectedDate }) => {
  const handleChange = (selectedDate) => {
    setSelectedDate(selectedDate);
    console.log(selectedDate);
  };

  return (
    <div className="content-container">
      <div className="form-search">
        <DatePicker placeholderText={"Select a date"} onChange={handleChange} />
      </div>
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
