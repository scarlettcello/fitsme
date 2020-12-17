import dayjs from "dayjs";

const defaultState = {
  selectedDate: dayjs(),
  startDate: dayjs().startOf("month"),
  endDate: dayjs().startOf("month"),
};

const filtersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_SELECTED_DATE":
      return {
        ...state,
        selectedDate: action.selectedDate,
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

export default filtersReducer;
