import React from 'react';

const AdminTheadColmun = ({ columnName, sortPosts}) => {
  return (
    <th>
      {columnName}
                <span className="pull-right">
                  {/* <i class="glyphicon glyphicon-chevron-down"></i> */}
                  {/* <i class="glyphicon glyphicon-chevron-up"></i> */}
                </span>
    </th>
  )
};

export default AdminTheadColmun;
