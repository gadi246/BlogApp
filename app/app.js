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
import NewPost from  './components/containers/new-post';
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

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
