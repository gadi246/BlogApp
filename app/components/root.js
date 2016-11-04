import React from 'react';
import NavBar from './main-navbar';
import PageFooter from './page-footer';

const Root = (props) => {
    return (
      <div>
        <NavBar/>
        <div className="container">
          {props.children}
          <hr />
          <PageFooter />
        </div>
      </div>
    )
};

export default Root;
