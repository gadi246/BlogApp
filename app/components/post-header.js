import React from 'react';
import { Link } from  'react-router';

const PostHeader = ({ post, extractDate, setVisibility}) => {
  return(
    <header>
      <h2>
        {/*using RegExp to remove whitespace and non character or numbers*/}
        <Link to={ `/post/${post.title.replace(/[^0-9a-zA-Z ]/g,' ').split(' ').filter(word => word).join('-')}`}>{post.title }</Link>
      </h2>
      <p>
        <small className="glyphicon glyphicon-user"/>
        by <Link to={{pathname:'/posts', query: { author: post.author.toLowerCase().replace(/\s/g, '-')}}} onClick={() => setVisibility(post.author)}>{post.author}</Link>
      </p>
      <p>
        <small className="glyphicon glyphicon-time"/>
        {`Posted on ${extractDate(post.date)[0]}`}
      </p>
    </header>
  );
};

export default PostHeader;
