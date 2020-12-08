import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import foodsDiaryReducer from '../reducers/foodsDiary';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    combineReducers({
      foodsDiary: foodsDiaryReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};

export default configureStore;