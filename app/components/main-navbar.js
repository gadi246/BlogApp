import React from 'react';
import NavLinks from './nav-links';
import MobileNavBar from './mobile-navbar';

const NavBar = ({ pager }) => {
  const nextPage = pager ? `/${pager}` : "";
  return(
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="container">
        {/* Brand and toggle get grouped for better mobile display */}
        <MobileNavBar/>
        <input type="checkbox" id="toggle-nav-mobile" hidden />
        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <NavLinks to={`/posts${nextPage}`}>
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
