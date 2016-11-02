import { createStore, combineReducers } from 'redux';
import data from '../data/posts.json';
import { posts } from  './reducers/posts';
import  { sideBarVisibilityFilter } from './reducers/side-bar-visibilit-filter';

const intialState = {
  posts: {
    all: data.posts,
    visiblePost: null
  }
};
const reducers = combineReducers({
  // Reducers go here
  posts,
  sideBarVisibilityFilter
});

const store = createStore(reducers, intialState);
store.subscribe(() =>
  console.log( 'state:',store.getState())
);
console.log('init',store.getState());

export default store;
