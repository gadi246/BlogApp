import React from 'react';
import  { Link } from 'react-router';
import MobileNavBar from './mobile-navbar';

const NavBar = () => {
  const singlePostActiveClass = window.location.hash.slice(0,7) === "#/post/" ? "active-main-tab" : "";
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <MobileNavBar/>
          <input type="checkbox" id="toggle-nav-mobile" hidden />
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/posts" activeClassName="active-main-tab" className={singlePostActiveClass}>Posts</Link></li>
             <li><Link to="/admin" activeClassName="active-main-tab">Admin</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default NavBar;


