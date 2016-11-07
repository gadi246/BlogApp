
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_SINGLE_POST  = 'FETCH_SINGLE_POST';
export const SORT_ADMIN_COLUMNS = 'SORT_ADMIN_DATA';
export const FETCH_POSTS_TITLES = 'FETCH_POSTS_TITLES';
export const CREATE_POST = 'CREATE_POST';



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
export const sortAdminColumns = (column) => {
  return {
    type: SORT_ADMIN_COLUMNS,
    name: column
  }
};
export const _fetchPostTitles = () => {
  return {
    type: FETCH_POSTS_TITLES
  }
};
export const createPost = (data)=> {
  return{
    type:CREATE_POST,
    payload: data
  }
};


