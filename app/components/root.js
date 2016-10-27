import React from 'react';
import NavBar from './main-navbar';

class Root extends React.Component {
  render() {
    return (
      <div>
        <NavBar pager={this.props.params.page}/>
        {this.props.children}
      </div>
    )
  }
}

export default Root;
