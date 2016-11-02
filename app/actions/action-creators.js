
export const FETCH_POSTS = 'FETCH_POSTS';
export const SET_SIDE_BAR_VISIBILITY_FILTER = 'SET_SIDE_BAR_VISIBILITY_FILTER';


export const fetchPosts = () => {
  return {
    type: FETCH_POSTS
  }
};

export const _setSideBarVisibilityFilter = (filter) => {
  return {
    type: SET_SIDE_BAR_VISIBILITY_FILTER,
    payload: filter
  }
};

