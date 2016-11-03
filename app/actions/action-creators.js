
export const FETCH_POSTS = 'FETCH_POSTS';
export const SET_SIDE_BAR_VISIBILITY_FILTER = 'SET_SIDE_BAR_VISIBILITY_FILTER';
export const FETCH_SINGLE_POST  = 'FETCH_SINGLE_POST';


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
export const _fetchSinglePost = (title) => {
  return {
    type: FETCH_SINGLE_POST,
    payload: title
  }
};

