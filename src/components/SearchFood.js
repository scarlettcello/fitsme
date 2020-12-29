import React, { useState } from "react";
import useFatsecret from "../hooks/useFatsecret";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import history from "../history";
import { Redirect } from "react-router-dom";

const SearchFood = () => {
  const [foods, search] = useFatsecret();
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(term);
    search(term);
  };

  const handleTermChange = (e) => {
    console.log(e.target.value);
    setTerm(e.target.value);
  };

  return (
    <div>
      <SearchBar
        term={term}
        onFormSubmit={handleSubmit}
        onTermChange={handleTermChange}
      />
      {/* {foods.length > 0 ? (
        <Redirect to={{ pathname: "/searchResult", state: { foods: foods } }} />
      ) : (
        console.log(foods)
      )} */}
      <SearchResult foods={foods} />
    </div>
  );
};

export default SearchFood;

// const mapDispatchToProps = (dispatch) => ({
//   setFoods: (foods) => console.log(dispatch(setFoods(foods))),
// });

// export default connect(undefined, mapDispatchToProps)(SearchFood);
