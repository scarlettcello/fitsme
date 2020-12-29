import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./firebase/firebase";
import configureStore from "./store/configureStore";
import AppRoute from "./routes/AppRoute";
import { startSetEatenFoods } from "./actions/foodsDiary";
//import { login, logout } from "./actions/auth";
import history from "./history";
//import eatenFoods from "./eatenFoods";

import "react-datepicker/dist/react-datepicker.css";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRoute />
  </Provider>
);

store.dispatch(startSetEatenFoods()).then(() => {
  renderApp();
});

ReactDOM.render(jsx, document.getElementById("root"));

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     store.dispatch(login(user.uid));
//     store.dispatch(startSetEatenFoods()).then(() => {
//       renderApp();
//       if (history.location.pathname === "/") {
//         history.push("/dashboard");
//       }
//     });
//   } else {
//     store.dispatch(logout());
//     renderApp();
//     history.push("/");
//   }
// });
