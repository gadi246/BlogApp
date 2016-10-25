import React from 'react';
import PostList from './containers/post-list';


 class PostIndex extends React.Component {
  render(){
    return (
      <div className="container">
        <div className="row">
          {/* Blog Entries Column */}
          <PostList />
        </div>
      </div>
    );
  }
}

export default PostIndex;
