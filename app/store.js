import { createStore, combineReducers } from 'redux';
import data from '../data/posts.json';
import { posts } from  './reducers/posts';

const intialState = {
  posts: {
    all: data.posts,
    visiblePost: null
  }
};
const reducers = combineReducers({
  // Reducers go here
  posts
});

const store = createStore(reducers, intialState);
store.subscribe(() =>
  console.log( 'state:',store.getState())
);
console.log('init',store.getState());

export default store;
