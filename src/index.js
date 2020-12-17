import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import AppRoute from "./routes/AppRoute";

import "react-datepicker/dist/react-datepicker.css";
import eatenFoods from "./eatenFoods";
import { setEatenFoods } from "./actions/foodsDiary";

const store = configureStore();

store.dispatch(setEatenFoods(eatenFoods));

ReactDOM.render(
  <Provider store={store}>
    <AppRoute />
  </Provider>,
  document.getElementById("root")
);
