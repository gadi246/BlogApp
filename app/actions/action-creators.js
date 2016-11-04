
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_SINGLE_POST  = 'FETCH_SINGLE_POST';



export const fetchPosts = () => {
  return {
    type: FETCH_POSTS
  }
};

export const _fetchSinglePost = (title) => {
  return {
    type: FETCH_SINGLE_POST,
    payload: title
  }
};

