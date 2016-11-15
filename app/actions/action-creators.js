
export const FETCH_POSTS = 'FETCH_POSTS';
export const SORT_ADMIN_COLUMNS = 'SORT_ADMIN_DATA';
export const CREATE_POST = 'CREATE_POST';
export const SAVE_EDIT_POST = 'SAVE_EDIT_POST';
export const DELETE_POST = 'DELETE_POST';



export const fetchPosts = () => {
  return {
    type: FETCH_POSTS
  }
};
export const sortAdminColumns = (column) => {
  return {
    type: SORT_ADMIN_COLUMNS,
    name: column
  }
};

export const createPost = (data)=> {
  return{
    type:CREATE_POST,
    payload: data
  }
};
export const saveEditPost = (data, originalTitle) => {
  return{
    type: SAVE_EDIT_POST,
    data,
    originalTitle
  }
};
export const deletePost = (title) => {
  return {
    type: DELETE_POST,
    title
  }
};

