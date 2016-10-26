
export const FETCH_POSTS = 'FETCH_POSTS';
export const NEXT_POSTS = 'NEXT_POSTS';
export const OLDER_POSTS = 'OLDER_POST';

export const fetchPosts = () => {
  return {
    type: FETCH_POSTS
  }
};

export const nextPosts = () => {
  return {
    type: NEXT_POSTS
  }
};

export const olderPosts = () => {
  return {
    type: OLDER_POSTS
  }
};
