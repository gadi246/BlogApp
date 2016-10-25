// CSS libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'assets/css/main.scss';

import React    from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, hashHistory, Redirect, Route} from 'react-router';
import store from './store';

import Root from './components/root';
import PostIndex from './components/post-index';


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

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route component={Root}>
        <Route path="/posts" component={PostIndex} />
        <Route path="/admin" component={Admina} />
      </Route>
      <Redirect from="/" to="/posts"></Redirect>
  </Router>
  </Provider>,
  document.querySelector('#root'));
