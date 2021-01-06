import React from "react";
import SearchFood from "./SearchFood";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="page-header">
        <h1 className="page-header__title">Check the food's calories.</h1>
      </div>
      <SearchFood />
    </>
  );
};

export default Home;
