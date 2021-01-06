import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { firebase } from "./firebase/firebase";
import configureStore from "./store/configureStore";
import AppRoute from "./routes/AppRoute";
import { startSetEatenFoods } from "./actions/foodsDiary";
import { login, logout } from "./actions/auth";
import history from "./history";
import Loading from "./components/Loading";

import "react-datepicker/dist/react-datepicker.css";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRoute />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<Loading />, document.getElementById("root"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetEatenFoods()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
