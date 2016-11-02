import React from 'react';
import { Link } from 'react-router';

const ShowAll = ({posts, setVisibility, currentFilter}) => {
  const active = currentFilter === 'show all' ? 'active' : '';
  return(
    <div className="list-group">
      <Link to="/posts"   className={`list-group-item ${active}`} onClick={() => setVisibility('show all')}>
        <span className="badge">{posts.length}</span>
        Show All Posts
      </Link>
    </div>
  );
};

export default ShowAll;
