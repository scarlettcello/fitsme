import { useState } from "react";
import axios from "axios";

//let token = localStorage.getItem("token");

const useFatsecret = () => {
  const [foods, setFoods] = useState([]);

  const search = async (term) => {
    const response = await axios.get("/api", {
      // headers: {
      //   "Content-Type": "application/json",
      //   Authorization: `Bearer ${token}`,
      // },
      params: {
        search_expression: term,
        method: "foods.search",
        format: "json",
      },
    });
    console.log(response.data);
    setFoods(response.data.foods.food);
  };

  return [foods, search];
};

export default useFatsecret;
