const daysTotal = (foods) => {
  const reducer = (total, amount) => total + amount;

  if (foods.length === 0) {
    return 0;
  } else {
    return foods
      .map((item) => item.caloriesPerAmount * item.portion)
      .reduce(reducer, 0);
  }
};

export default daysTotal;
