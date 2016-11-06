// CSS libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'assets/css/main.scss';

import React    from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, useRouterHistory, Route, IndexRedirect, IndexRoute, Link} from 'react-router';
import {createHashHistory} from 'history';
import store from './store';

import Root from './components/root';
import PostIndex from './components/post-index';
import PostList from  './components/containers/post-list';
import SinglePostView from './components/containers/single-post-view';
import AdminContainer from  './components/admin-container';
import AdminIndex from  './components/containers/admin-index';
import NewPost from  './components/new-post';
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});


const AdminContainer1 = (props)=> {
  return (
    <div>
      {props.children}
    </div>
  )
};
const Admin1 = ({params})=> {
  return (
    <div>
      <h2>Admin</h2>
      <h2>side bar</h2>
      <p>{params.sort}</p>
      <ul>
        <li><Link to="/admin/new/post">New</Link></li>
        <li><Link to="/admin/edit/post/post to be edit">Edit</Link></li>
      </ul>
    </div>
  )
};


const New1 = ()=> {
  return (
    <h2>New post here</h2>
  )
};

const Edit1 = ({params})=> {
  return (
    <div>
      <h2>Edit post</h2>
      <p>{params.title}</p>
    </div>
  )
};


ReactDOM.render(
  <Provider store={store}>
    <Router history={appHistory}>
      <Route path="/" component={Root}>
        {/*  Redirect "/" to "/posts"  */}
        <IndexRedirect to="/posts"/>
        <Route path="posts" component={PostIndex}>
          <IndexRoute component={PostList}/>
          <Route path=":page" component={PostList}/>
        </Route>
        {/* Use "/post/:title" instead of "/posts/post/:title"  */}
        <Route component={PostIndex}>
          <Route path="post/:title" component={SinglePostView}/>
        </Route>
        <Route path="admin" component={AdminContainer}>
          <IndexRoute component={AdminIndex}/>
          <Route path=":sort" component={AdminIndex}/>
          <Route path="new/post" component={NewPost}/>
          <Route path="edit/post/:title" component={NewPost}/>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.querySelector('#root'));
