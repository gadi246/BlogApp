import { createStore, combineReducers } from 'redux';
import data from '../data/posts.json';
import { posts } from  './reducers/posts';
import { pager } from  './reducers/pager';

const intialState = {
  posts: {
    all: data.posts,
    visiblePost:null
  }
};
const reducers = combineReducers({
  // Reducers go here
  posts,
  pager
});

const store = createStore(reducers, intialState);

  console.log(store.getState());


export default store;
