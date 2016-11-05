import React from 'react';
import { Link } from 'react-router';

const ShowAll = ({ posts , parentLink}) => {
  {/*Next line is to keep "Show All UNACTIVE when other links are active"*/}
  const activeShowAllClass = window.location.hash.indexOf('?') > -1 ? "" : "active";
  return(
    <div className="list-group">
      <Link to={`/${parentLink}`}   className={`list-group-item`} activeClassName={ activeShowAllClass } >
        <span className="badge">{posts.length}</span>
        Show All Posts
      </Link>
    </div>
  );
};

export default ShowAll;
