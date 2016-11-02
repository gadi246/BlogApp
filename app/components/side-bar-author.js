import React from 'react';
import {Link} from 'react-router';

const Author = (props) => {
  return (
    <div className="list-group">
      {props.authors.map((item) => {
        return (
          <Link key={item[0]}
                to={{pathname:'/posts', query: { author: item[0].toLowerCase().replace(/\s/g, '-')}}}
                activeClassName="active" className="list-group-item">
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
