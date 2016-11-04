import React from 'react';
import { Link } from 'react-router';

const ShowAll = ({posts}) => {
  const activeShowAllClass = window.location.hash.indexOf('?') > -1 ? "" : "active";
  console.log('showall',activeShowAllClass)
  return(
    <div className="list-group">
      <Link to="/posts"   className={`list-group-item`} activeClassName={ activeShowAllClass } >
        <span className="badge">{posts.length}</span>
        Show All Posts
      </Link>
    </div>
  );
};

export default ShowAll;
