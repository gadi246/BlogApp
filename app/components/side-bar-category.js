import React from 'react';
import {Link} from 'react-router';

const Category = ({ categories }) => {
  return (
    <div className="list-group">
      {categories.map((item) => {
        return (
          <Link key={item[0]}
                to={{pathname:'/posts', query: { category: item[0].toLowerCase()}}}
                 className={`list-group-item `} activeClassName="active">
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
