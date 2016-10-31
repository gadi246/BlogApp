import React from 'react';
import { Link } from 'react-router';

const ShowAll = (props) => {
  return(
    <div className="list-group">
      <Link to="/posts"  activeClassName="active" className="list-group-item">
        <span className="badge">{props.posts.length}</span>
        Show All Posts
      </Link>
    </div>
  );
};

export default ShowAll;
