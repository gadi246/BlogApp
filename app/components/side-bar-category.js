import React from 'react';
import { Link } from 'react-router';

const Category = (props) => {
  return(
    <div className="list-group">
      {props.categories.map((item) => {
        return(
          <Link key={item[0]} to={{pathname:`/posts${item[1] > 3 ? `/${Math.ceil(item[1] / 3)}` : ''}`, query: { category: item[0]}}} activeClassName="active" className="list-group-item">
            <span className="badge">{item[1]}</span>
            {item[0]}
          </Link>
        );
      })
      }
    </div>
  );
};

export default Category;
