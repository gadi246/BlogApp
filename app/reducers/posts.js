import { FETCH_SINGLE_POST }  from '../actions/action-creators';
import { FETCH_POSTS_TITLES } from  '../actions/action-creators';
import _ from 'lodash';
import {extractDate} from '../utils';

const DEFAULT_STATE = { all: [], visiblePost: null, arrTitle: []};

 const posts = (state = DEFAULT_STATE, action) => {
   switch (action.type){
     case FETCH_SINGLE_POST :
         let newState = state.all.find((post) => post.title.replace(/[^0-9a-zA-Z ]/g,' ').split(' ').filter(word => word).join('-') === action.payload);
           return {...state, visiblePost: newState} ;
     case FETCH_POSTS_TITLES :
           return { ...state ,arrTitle: state.all.map(post => post.title)};
     default:
       return state;
   }

};

{/*****SELECTORS*****/}

 export const getVisiblePosts = (state, query) => {
   const queryKey = Object.keys(query)[0];
  switch (queryKey) {
    case 'author':
      return state.filter((post) => post.author.toLowerCase().replace(/\s/g, '-') === query.author);
    case 'category':
      return state.filter((post) => {
          for (let i = 0; i < post.tags.length; i++) {
            if (post.tags[i].toLowerCase() === query.category) {
              return post;
            }
          }
        }
      );
    case 'month':
      return state.filter((post) => extractDate(post.date).compareDate === query.month);
    case 'search':
      let term = query.search;
      let searchArr =_.filter(state, function (o) {
        return o.title.toLowerCase().indexOf(term) > -1 ||
               o.author.toLowerCase().indexOf(term) > -1 ||
               o.tags.toString().toLowerCase().indexOf(term) > -1 ||
               o.description.toLowerCase().indexOf(term) > -1
      });
      return searchArr;
    default :
      return state;
  }
};


export default posts;
