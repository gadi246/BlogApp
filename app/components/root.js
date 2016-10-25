import React from 'react';
import NavBar from './main-navbar';

class Root extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Blog App</h1>
        {this.props.children}
      </div>
    )
  }
}

export default Root;
