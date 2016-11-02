import React from 'react';
import PostList from './containers/post-list';
import SideBar from  './containers/side-bar';



 class PostIndex extends React.Component {
   constructor(props){
     super(props);
   }

  render(){
    console.log('postindex',this.props.location.query)
    return (
        <div className="row">
          {/* Blog Entries Column */}
          <PostList nextPage={this.props.params.page || 1} query={this.props.location.query}/>
          <SideBar nextPage={this.props.params.page}/>
        </div>

    );
  }
}

export default PostIndex;
