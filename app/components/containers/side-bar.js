import React from 'react';
import {connect} from  'react-redux';
import ShowAll from './../side-bar-show-all';
import Category from './../side-bar-category';
import Author from './../side-bar-author';
import Month from './../side-bar-month';
import Search from './../side-bar-search';

class SideBar extends React.Component {
  extractArray(arr, filter) {
    let extracted = arr.map(item => {
      return item[filter];
    });
    return extracted;
  }

  flattenDeep(arr) {
    let spread = arr.reduce((acc, item) => {
      return [...acc, ...item];
    }, []);
    return spread;
  }

  dateToMonthYear(arr) {
    let monthYear = arr.map(item => {
      let [,month,,year] = new Date(+item).toDateString().split(" ");
      return [month, year];
    });
    return monthYear;
  }

  toPairs(arr) {
    var reduced = arr.reduce((acc, el) => {
      !acc[el] ? acc[el] = 1 : acc[el] += 1;
      return acc
    }, {});
    let values = Object.values(reduced);
    return Object.keys(reduced).map((item, ind) => {
      return [item, values[ind]]
    });
  }
  render() {
    const { posts, parentLink} = this.props;
    return (
      <aside className="col-md-4">
        {/* Blog Search Well */}
        <Search parentLink={ parentLink } />
        <div className="well">
          <h3>Filter Posts</h3>
          <ShowAll posts={posts} parentLink={ parentLink }/>
          <h4>
            <small className="glyphicon glyphicon-tag"/>
            Category
          </h4>
          <Category categories={this.toPairs(this.flattenDeep(this.extractArray(posts, 'tags')))} parentLink={ parentLink } />
          <h4>
            <small className="glyphicon glyphicon-user"/>
            Author
          </h4>
          <Author authors={this.toPairs(this.extractArray(posts, 'author'))} parentLink={ parentLink } />
          <h4>
            <small className="glyphicon glyphicon-time"/>
            Month
          </h4>
          <Month months={this.toPairs(this.dateToMonthYear(this.extractArray(posts, 'date')))} parentLink={ parentLink }/>
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

export default connect(mapStateToProps, null, null, {
  pure: false
})(SideBar);
