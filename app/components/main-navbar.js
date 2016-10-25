import React from 'react';
import NavLinks from './nav-links';
import { Link } from 'react-router';

const NavBar = () => {
  return(
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="container">
        {/* Brand and toggle get grouped for better mobile display */}
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
        <input type="checkbox" id="toggle-nav-mobile" hidden />
        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <NavLinks to="/posts">
              Posts
            </NavLinks>
            <NavLinks to="/admin">
            Admin
            </NavLinks>
          </ul>
        </div>
        {/* /.navbar-collapse */}
      </div>
      {/* /.container */}
    </nav>

  );
};
export default NavBar;
