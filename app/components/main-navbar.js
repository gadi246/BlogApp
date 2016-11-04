import React from 'react';
import NavLinks from './nav-links';
import MobileNavBar from './mobile-navbar';

const NavBar = () => {
  return(
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="container">
        <MobileNavBar/>
        <input type="checkbox" id="toggle-nav-mobile" hidden />
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
