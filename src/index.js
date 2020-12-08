import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import AppRoute from "./routes/AppRoute";

import "react-datepicker/dist/react-datepicker.css";

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState().lastAction);
});

ReactDOM.render(
  <Provider store={store}>
    <AppRoute />
  </Provider>,
  document.getElementById("root")
);
