import React from 'react';
import { Link } from 'react-router';

const Author = (props) => {
  return(
    <div className="list-group">
      {props.authors.map((item) => {
        return(
          <Link key={item[0]} to={{pathname:`/posts${item[1] > 3 ? `/${Math.ceil(item[1] / 3)}` : ''}`, query: { author: item[0].replace(/\s/g, '-')}}}  activeClassName="active" className="list-group-item">
            <span className="badge">{item[1]}</span>
            {item[0]}
          </Link>
        );
      })
      }
    </div>
  );
};

export default Author;
