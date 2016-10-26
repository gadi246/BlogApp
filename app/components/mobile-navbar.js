import  React from 'react';
import { Link } from 'react-router';

const MobileNavBar = () => {
  return(
  <div className="navbar-header">
    <button type="button" className="navbar-toggle">
      <span className="sr-only">Toggle navigation</span>
      <label htmlFor="toggle-nav-mobile">
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </label>
    </button>
    <Link className="navbar-brand" to="/">Netcraft Academy</Link>
  </div>
  );
};

export default MobileNavBar;
