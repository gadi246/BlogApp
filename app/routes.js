import React from 'react'
import { Route, IndexRoute } from 'react-router';
import Root from './components/root';

const Indie = ()=>{
  return(
    <h2>List of posts</h2>
  )
};

const Admina = ()=>{
  return(
    <h2>Create Post</h2>
  )
};

export default(
  <Route path="/posts" component={Root}>
    <IndexRoute  component={Indie}/>
    <Route path="admin" component={Admina} />
  </Route>
 )
