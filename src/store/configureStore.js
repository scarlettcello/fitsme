import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import foodsDiaryReducer from "../reducers/foodsDiary";
import filtersReducer from "../reducers/filters";
import authReducer from "../reducers/auth";
import foodsReducer from "../reducers/foods";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    combineReducers({
      foods: foodsReducer,
      foodsDiary: foodsDiaryReducer,
      filters: filtersReducer,
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};

export default configureStore;
