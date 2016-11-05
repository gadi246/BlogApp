import React from 'react';
import {Link} from 'react-router';

const Author = ({ authors , parentLink}) => {
  return (
    <div className="list-group">
      {authors.map((item) => {
        return (
          <Link key={item[0]}
                to={{pathname:`/${parentLink}` , query: { author: item[0].toLowerCase().replace(/\s/g, '-')}}}
                className={`list-group-item`} activeClassName="active">
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
