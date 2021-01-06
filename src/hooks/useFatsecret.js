import { useState } from "react";
import fatsecret from "../apis/fatsecret";

const useFatsecret = () => {
  const [foods, setFoods] = useState([]);

  const search = async (term) => {
    const response = await fatsecret.get("/proxy/server.api", {
      params: {
        search_expression: term,
        method: "foods.search",
        format: "json",
      },
    });

    setFoods(response.data.foods.food);
  };
  return [foods, search];
};

export default useFatsecret;
