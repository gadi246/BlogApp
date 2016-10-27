import React from 'react';
import PostList from './containers/post-list';


 class PostIndex extends React.Component {
   constructor(props){
     super(props);
   }
   
  render(){
    return (
      <div className="container">
        <h1>The Params {this.props.params.page || 'nothing passed'}</h1>
        <div className="row">
          {/* Blog Entries Column */}
          <PostList nextPage={this.props.params.page || 1}/>
        </div>
      </div>
    );
  }
}

export default PostIndex;
