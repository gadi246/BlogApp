import React from 'react';

class AdminTheadColmun extends React.Component  {
  constructor(props){
    super(props);
  }
  
  renderArrow(selectedColumn, sortArrow, columnName){
    if(selectedColumn.name === columnName){
      if(sortArrow === 'asc'){
       return "glyphicon glyphicon-chevron-down";
      }
      else{
        return  "glyphicon glyphicon-chevron-up";
      }
    }
  }
  render(){
    const { columnName, sortPosts, selectedColumn, sortArrow} = this.props;
    return (
      <th onClick={() => sortPosts(columnName)} className="thead-column">
        {columnName}
                <span className="pull-right">
                   <i className={`${this.renderArrow(selectedColumn, sortArrow, columnName)}`}></i>

                </span>
      </th>
    )
  }

};

export default AdminTheadColmun;
