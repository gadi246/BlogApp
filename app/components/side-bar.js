import React from 'react';
import { connect } from  'react-redux';
import { Link } from  'react-router';

class SideBar extends React.Component {
  extractArray(arr, filter){
    let extracted = arr.map(item => {
      return item[filter];
    });
    return extracted;
  }
  flattenDeep(arr){
    let spread = arr.reduce((acc,item) => {
      return [...acc,...item];
    },[]);
    return spread;
  }
  dateToMonthYear(arr){
    let monthYear = arr.map(item => {
      let [,month,,year] = new Date(+item).toDateString().split(" ");
      return [month , year];
    });
    return monthYear;
  }
  toPairs(arr){
    var reduced = arr.reduce((acc, el) => {
      !acc[el] ? acc[el] = 1 : acc[el] += 1;
      return acc
    },{});
    let values = Object.values(reduced);
   return Object.keys(reduced).map((item,ind) => {
      return [item,values[ind]]
    });
  }
  render(){
    const { posts } = this.props;
    return (
      <aside className="col-md-4">
        {/* Blog Search Well */}
        <div className="well">
          <h4>Search</h4>
          <form>
            <div className="input-group">
              <input type="search" name="search" className="form-control"/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <span className="glyphicon glyphicon-search"/>
                </button>
              </span>
            </div>
            {/* /.input-group */}
          </form>
        </div>
        {/* Blog Categories Well */}
        <div className="well">
          <h3>Filter Posts</h3>
          <div className="list-group">
            <Link to="/posts"  activeClassName="active" className="list-group-item active">
              <span className="badge">{posts.length}</span>
              Show All Posts
            </Link>
          </div>
          <h4>
            <small className="glyphicon glyphicon-tag"/>
            Category
          </h4>
          <div className="list-group">
            {this.toPairs(this.flattenDeep(this.extractArray(posts, 'tags'))).map((item) => {
              return(
                <Link key={item[0]} to="/"  activeClassName="active" className="list-group-item">
                  <span className="badge">{item[1]}</span>
                  {item[0]}
                </Link>
              );
            })
            }
          </div>
          <h4>
            <small className="glyphicon glyphicon-user"/>
            Author
          </h4>
          <div className="list-group">
            {this.toPairs(this.extractArray(posts, 'author')).map((item) => {
              return(
                <Link key={item[0]} to="/" activeClassName="active" className="list-group-item">
                  <span className="badge">{item[1]}</span>
                  {item[0]}
                </Link>
              );
            })
            }
          </div>
          <h4>
            <small className="glyphicon glyphicon-time"/>
            Month
          </h4>
          <div className="list-group">
            {this.toPairs(this.dateToMonthYear(this.extractArray(posts, 'date'))).map((item) => {
              return(
                <div key={item[0].slice(item[0].indexOf(',') + 1)}>
              <span className="list-group-item disabled">
                {item[0].slice(item[0].indexOf(',') + 1)}
              </span>
                  <Link to="/"  activeClassName="active" className="list-group-item">
                    <span className="badge">{item[1]}</span>
                    {item[0].slice(0, item[0].indexOf(',') )}
                  </Link>
                </div>
              )
            })
            }
          </div>
        </div>
      </aside>
    );
  }

}

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  }
}

export default connect(mapStateToProps)(SideBar);
