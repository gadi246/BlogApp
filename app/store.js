import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  // Reducers go here
});

const store = createStore(reducers);

export default store;
