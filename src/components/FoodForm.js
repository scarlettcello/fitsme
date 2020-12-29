import React, { useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";

const FoodForm = ({ eatenFood, caloriesPerAmount, onSubmit }) => {
  const [date, setDate] = useState(
    eatenFood !== undefined ? new Date(eatenFood.createdDate) : ""
  );
  const [mealTime, setMealTime] = useState(
    eatenFood !== undefined ? eatenFood.mealTime : ""
  );

  const [portion, setPortion] = useState(
    eatenFood !== undefined ? eatenFood.portion : 0
  );

  const [errorMsg, setErrorMsg] = useState("");

  const onDateChange = (date) => {
    setDate(date);
  };

  const onPortionChange = (e) => {
    const inputPortion = parseFloat(e.target.value);
    setPortion(inputPortion);
  };

  const onMealTimeChange = (e) => {
    setMealTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (date === "") {
      setErrorMsg("Select the date");
    } else if (mealTime === "") {
      setErrorMsg("Select the meal time");
    } else if (!portion || portion === 0) {
      setErrorMsg("Insert the portion");
    } else {
      setErrorMsg("");
      let createdDate = dayjs(date).format("ddd MMM DD YYYY");
      onSubmit({
        caloriesPerAmount,
        createdDate,
        mealTime,
        portion,
      });
    }
  };

  const takenCalories =
    eatenFood !== undefined
      ? eatenFood.caloriesPerAmount * portion
      : caloriesPerAmount * portion;

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <DatePicker selected={date} onChange={onDateChange} />

      <label>Meal time</label>
      <select onChange={onMealTimeChange} value={mealTime}>
        <option value="">Select when you ate it</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Snack">Snack</option>
        <option value="Dinner">Dinner</option>
      </select>

      <label>Portions:</label>
      <input
        type="number"
        onChange={onPortionChange}
        step="0.01"
        value={portion}
      />

      <h4>Calories taken: {isNaN(takenCalories) ? null : takenCalories}</h4>

      <p>{errorMsg !== "" ? errorMsg : null}</p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FoodForm;
