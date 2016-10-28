import React from 'react';
import { Link } from  'react-router';

const PostHeader = ({ post, renderDate}) => {
  return(
    <header>
      <h2>
        <Link to={ `/posts/${post.title.replace(/[^0-9a-zA-Z ]/g,'-').replace(/\s/g, '')}`}>{post.title }</Link>
      </h2>
      <p>
        <small className="glyphicon glyphicon-user"/>
        by <Link to="">{post.author}</Link>
      </p>
      <p>
        <small className="glyphicon glyphicon-time"/>
        {`Posted on ${renderDate(post.date)}`}
      </p>
    </header>
  );
};

export default PostHeader;
