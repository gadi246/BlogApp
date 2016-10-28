import React from 'react';
import {Link} from  'react-router';

const PostFooter = ({post}) => {
  return (
    <footer className="clearfix">
      <p className="pull-left">
        <b>Tags:&nbsp;</b>
        { post.tags.map(tag => {
          return (
                  <span key={tag}>
                    <Link to="" className="label label-default">{ tag }</Link>
                  </span>
          );
        })
        }

      </p>
      <a className="btn btn-primary pull-right" href="#">
        Read More <i className="glyphicon glyphicon-chevron-right"/>
      </a>
    </footer>
  );
};
export default PostFooter;
