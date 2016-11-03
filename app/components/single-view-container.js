import React from 'react';
import SinglePostView from './single-post-view';
import  SideBar from  './containers/side-bar';

const SingleViewContainer = ({params}) => {
  return(
   <div>
     <SinglePostView title={params.title}/>
     <SideBar/>
   </div>
  )
};
export default SingleViewContainer
