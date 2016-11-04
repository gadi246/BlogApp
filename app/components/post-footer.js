import React from 'react';
import {Link} from  'react-router';

const PostFooter = ({post, setVisibility}) => {
  return (
    <footer className="clearfix">
      <p className="pull-left">
        <b>Tags:&nbsp;</b>
        { post.tags.map(tag => {
          return (
                  <span key={tag}>
                    <Link to={{pathname:'/posts', query: { category: tag.toLowerCase()}}} className="label label-default" onClick={() => setVisibility(tag)}>{ tag }</Link>
                  </span>
          );
        })
        }

      </p>
      <Link className="btn btn-primary pull-right" to={ `/post/${post.title.replace(/[^0-9a-zA-Z ]/g,' ').split(' ').filter(word => word).join('-')}`}>
        Read More <i className="glyphicon glyphicon-chevron-right"/>
      </Link>
    </footer>
  );
};
export default PostFooter;
