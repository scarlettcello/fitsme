import React, { useState } from "react";
import DatePicker from "react-datepicker";

const FoodForm = ({
  caloriesAmount,
  carbsAmount,
  fatAmount,
  proteinAmount,
  onSubmit,
}) => {
  const [date, setDate] = useState("");
  const [mealTime, setMealTime] = useState("");
  const [takenCalories, setTakenCalories] = useState(0);
  const [takenCarbs, setTakenCarbs] = useState(0);
  const [takenFat, setTakenFat] = useState(0);
  const [takenProtein, setTakenProtein] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  const onDateChange = (date) => {
    console.log(date);
    setDate(date);
    console.log(date);
  };

  const onPortionChange = (e) => {
    const portion = parseFloat(e.target.value);
    setTakenCalories(caloriesAmount * portion);
    setTakenCarbs(carbsAmount * portion);
    setTakenFat(fatAmount * portion);
    setTakenProtein(proteinAmount * portion);
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
    } else if (!takenCalories || takenCalories === 0) {
      setErrorMsg("Insert the portion");
    } else {
      setErrorMsg("");
      onSubmit({
        date,
        mealTime,
        takenCalories,
        takenCarbs,
        takenFat,
        takenProtein,
      });
    }
  };

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
      <input type="number" onChange={onPortionChange} step="0.01" />

      <h4>Calories taken: {isNaN(takenCalories) ? null : takenCalories}</h4>

      <p>{errorMsg !== "" ? errorMsg : null}</p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FoodForm;
