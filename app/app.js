// CSS libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'assets/css/main.scss';

import React    from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, useRouterHistory , Route, Redirect} from 'react-router';
import { createHashHistory } from 'history';
import store from './store';

import Root from './components/root';
import PostIndex from './components/post-index';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });


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
const SinglePostView = (props) => {
  return (
    <div>
      <h1>Single Post View</h1>
      <h2>props.params.singlePost</h2>
    </div>
  )
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={appHistory}>
      <Route component={Root}>
        <Route path="/posts(/:page)" component={PostIndex}/>
        <Route path="/admin" component={Admina}/>
      </Route>
      <Redirect from="/" to="/posts"/>
    </Router>
  </Provider>,
  document.querySelector('#root'));
