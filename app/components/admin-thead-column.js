import React from 'react';

class AdminTheadColmun extends React.Component  {
  renderArrow(selectedColumn, sortArrow, columnName){
    if(selectedColumn.name === columnName){
      if(sortArrow === 'asc'){
        console.log('up');
       return <i className="glyphicon glyphicon-chevron-down"></i>
      }
      else{
        console.log('down');
        return  <i className="glyphicon glyphicon-chevron-up"></i>
      }
    }
  }
  render(){
    const { columnName, sortPosts, selectedColumn, sortArrow} = this.props;
    return (
      <th onClick={() => sortPosts(columnName)} className="thead-column">
        {columnName}
                <span className="pull-right">
                  {this.renderArrow(selectedColumn, sortArrow, columnName)}
                </span>
      </th>
    )
  }

};

export default AdminTheadColmun;
