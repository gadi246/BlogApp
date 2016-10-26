import { NEXT_POSTS, OLDER_POSTS } from '../actions/action-creators';

export const pager = (state = 0, action) => {
  switch (action.type){
    case NEXT_POSTS:
          return state + 3;
    case OLDER_POSTS:
          return state - 3;
    default:
          return state;
  }
};
