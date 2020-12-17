import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import foodsDiaryReducer from "../reducers/foodsDiary";
import filtersReducer from "../reducers/filters";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    combineReducers({
      foodsDiary: foodsDiaryReducer,
      filters: filtersReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};

export default configureStore;
