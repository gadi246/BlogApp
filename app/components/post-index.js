import React from 'react';
import PostList from './containers/post-list';



 class PostIndex extends React.Component {
   constructor(props){
     super(props);
   }

  render(){
    console.log('The Params ',this.props.params.page || 'nothing passed');
    return (
        <div className="row">
          {/* Blog Entries Column */}
          <PostList nextPage={this.props.params.page || 1}/>
        </div>

    );
  }
}

export default PostIndex;
