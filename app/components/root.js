import React from 'react';
import NavBar from './main-navbar';
import PageFooter from './page-footer';

class Root extends React.Component {
  render() {
    return (
      <div>
        <NavBar pager={this.props.params.page}/>
        <div className="container">
          {this.props.children}
          <hr />
          <PageFooter />
        </div>
      </div>
    )
  }
}

export default Root;
