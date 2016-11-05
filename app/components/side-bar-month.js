import React from 'react';
import { Link } from 'react-router';

const Month = ({ months, parentLink }) => {
  return(
    <div className="list-group">
      {months.map((item) => {
        return(
          <div key={item[0].slice(item[0].indexOf(',') + 1)}>
              <span className="list-group-item disabled">
                {item[0].slice(item[0].indexOf(',') + 1)}
              </span>
            <Link to={{pathname:`/${parentLink}`, query: { month: item[0].replace(/[^0-9a-zA-Z ]/g,'-')}}}  className={`list-group-item`} activeClassName="active">
              <span className="badge">{item[1]}</span>
              {item[0].slice(0, item[0].indexOf(',') )}
            </Link>
          </div>
        )
      })
      }
    </div>
  );
};

export default Month;
