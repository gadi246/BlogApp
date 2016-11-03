import { FETCH_SINGLE_POST }  from '../actions/action-creators';
const DEFAULT_STATE = { all: [], visiblePost: null };
import _ from 'lodash';

export const posts = (state = DEFAULT_STATE, action) => {
   switch (action.type){
     case FETCH_SINGLE_POST :
         let newState = _.filter(state.all, function (o) { return o.title.replace(/[^0-9a-zA-Z ]/g,' ').split(' ').filter(word => word).join('-') === action.payload})[0];
           return Object.assign({}, state, {visiblePost:newState});
     default:
       return state;
   }

};
