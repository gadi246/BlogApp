import { SET_SIDE_BAR_VISIBILITY_FILTER } from '../actions/action-creators'; 
const DEFAULT_VALUE = 'show all';

export const sideBarVisibilityFilter = (state=DEFAULT_VALUE, action) => {
 switch (action.type) {
   case SET_SIDE_BAR_VISIBILITY_FILTER :
         return action.payload;
   default:
         return state;
 }
  
}; 
