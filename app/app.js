// CSS libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'assets/css/main.scss';

import React    from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, useRouterHistory, Route, IndexRedirect, IndexRoute} from 'react-router';
import {createHashHistory} from 'history';
import store from './store';

import Root from './components/root';
import PostIndex from './components/post-index';
import PostList from  './components/containers/post-list';
import SinglePostView from './components/containers/single-post-view';
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});


const Indie = ()=> {
  return (
    <h2>List of posts</h2>
  )
};

const Admina = ()=> {
  const func = (a, b) => a + b;
  return (
    <h2>Create Post,{func(3, 4)}</h2>
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
        <Route path="admin" component={Admina}/>
      </Route>
    </Router>
  </Provider>,
  document.querySelector('#root'));
