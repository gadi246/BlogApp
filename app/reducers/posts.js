import {CREATE_POST,  FETCH_POSTS_TITLES, SAVE_EDIT_POST, DELETE_POST}  from '../actions/action-creators';
import _ from 'lodash';
import {extractDate, toFixedKey} from '../utils';

const DEFAULT_STATE = { all: [], arrTitles: []};

 const posts = (state = DEFAULT_STATE, action) => {
   switch (action.type){
     case CREATE_POST:
           let newPost = {
             date: Date.now(),
             mdPath: `data/posts/md/${action.payload.get('postTitle')}.md`
           };
       for (var pair of action.payload.entries()) {
           newPost[toFixedKey(pair[0])] = pair[1];
         if(pair[0] === 'postTags'){
           newPost[toFixedKey(pair[0])] = pair[1] ? pair[1].split(',') : '';
         }
         if(pair[0] === 'postMd'){
           newPost[`${toFixedKey(pair[0])}Source`] = `${pair[1]}`
         }
       }
           return {...state,all:[...state.all,newPost]};
     case SAVE_EDIT_POST:
       let editPost = {};
       for (var pair of action.data.entries()) {
         editPost[toFixedKey(pair[0])] = pair[1];
         if(pair[0] === 'postTags' && pair[0] !== 'postMd'){
           editPost[toFixedKey(pair[0])] = pair[1].split(',');
         }
         if(pair[0] === 'postMd'){
           editPost[`${toFixedKey(pair[0])}Source`] = `${pair[1]}`
         }
       }
       return {...state,all:[...state.all.map(post => post.title === action.originalTitle ? {...post,...editPost} : post)]};
     case DELETE_POST:
           return {...state,all:[...state.all.filter(post => post.title !== action.title)]};
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

export const getSinglePost = (state, title) => {
 return state.find((post) => post.title.replace(/[^0-9a-zA-Z ]/g,' ').split(' ').filter(word => word).join('-') === title);
};

export const getPostsTitles = (state) => {
  return state.map(post => post.title);
};


export default posts;
