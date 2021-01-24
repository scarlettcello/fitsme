import React, { useState, useEffect } from "react";
import useFatsecret from "../hooks/useFatsecret";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import { setFoods } from "../actions/foods";
import axios from "axios";

const SearchFood = () => {
  const [foods, search] = useFatsecret();
  const [term, setTerm] = useState("");
  const [isFoodSearched, setIsFoodSearched] = useState(false);

  // useEffect(() => {
  //   axios.get("/auth");
  // }, [foods]);

  const handleSubmit = (e) => {
    e.preventDefault();
    search(term);
    setFoods(foods);
    setIsFoodSearched(true);
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <>
      <SearchBar
        term={term}
        onFormSubmit={handleSubmit}
        onTermChange={handleTermChange}
      />
      <SearchResult isFoodSearched={isFoodSearched} foods={foods} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setFoods: (foods) => dispatch(setFoods(foods)),
});

export default connect(undefined, mapDispatchToProps)(SearchFood);
