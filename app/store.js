import {createStore, combineReducers} from 'redux';
import data from '../data/posts.json';
import  posts, * as fromPosts  from  './reducers/posts';
import columns from './reducers/sort-admin-columns';

const intialState = {
  posts: {
    all: data.posts,
    visiblePost: null,
    arrTitles: []
  },
  columns: [{name: 'title', descentSort: true, selected: false}, { name: 'author', descentSort: true, selected: false}, {name: 'date', descentSort: true, selected: true}]
};
const reducers = combineReducers({
  // Reducers go here
  posts,
  columns
});
export const getVisiblePosts = (state, query) =>
  fromPosts.getVisiblePosts(state.posts.all, query);

const store = createStore(reducers, intialState);
store.subscribe(() =>
  console.log('state:', store.getState())
);
console.log('init', store.getState());

export default store;
