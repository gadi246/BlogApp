import React from 'react';
import PostList from './containers/post-list';
import SideBar from  './containers/side-bar';



 class PostIndex extends React.Component {
   constructor(props){
     super(props);
   }

  render(){
    return (
        <div className="row">
          {this.props.children}
          <SideBar parentLink="posts"/>
        </div>

    );
  }
}

export default PostIndex;
