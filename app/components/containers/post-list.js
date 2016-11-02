import React from 'react';
import  _  from 'lodash';
import {connect} from 'react-redux';
import  { _setSideBarVisibilityFilter } from '../../actions/action-creators';
import Pager from '../pager';
import PostHeader from '../post-header';
import PostFooter from '../post-footer';


class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.extractDate = this.extractDate.bind(this);
  }

  extractDate(num) {
    let [,month,day,year] = new Date(+num).toDateString().split(" ");
    day = day < 10 ? day % 10 : day;
    let fullDate = `${day} ${month}, ${year}`;
    let compareDate = `${month}-${year}`
    return [fullDate, compareDate];
  }

  extractVisiblePosts(posts) {
    let orederedArr = _.orderBy(posts, ['date'], ['desc']);
    let newArr = _.chunk(orederedArr, 3);
    return newArr;
  }

  getVisibiltePosts(posts, queryKey, query) {
    switch (queryKey) {
      case 'author':
        return posts.filter((post) => post.author.toLowerCase().replace(/\s/g, '-') === query.author);
      case 'category':
        return posts.filter((post) => {
            for (let i = 0; i < post.tags.length; i++) {
              if (post.tags[i].toLowerCase() === query.category) {
                return post;
              }
            }
          }
        );
      case 'month':
        return posts.filter((post) => this.extractDate(post.date)[1] === query.month);
      case 'search':
        let term = query.search;
        let searchArr =_.filter(posts, function (o) {
          return o.title.toLowerCase().indexOf(term) > -1 || o.author.toLowerCase().indexOf(term) > -1 || o.tags.toString().toLowerCase().indexOf(term) > -1 ||
            o.description.toLowerCase().indexOf(term) > -1
        });
            return searchArr;
      default :
        return posts;
    }
  }

  render() {
    let {posts, nextPage, query, _setSideBarVisibilityFilter} = this.props;
    let queryKey = Object.keys(query)[0];
    let visiblePosts = (this.getVisibiltePosts(posts, queryKey, query));

    if (visiblePosts.length === 0) {
      return (
        <section className="col-md-8">
          <h2 className="page-header">No Results Found for "{query.search}" ...</h2>
        </section>
      );
    }
    let ChunkedVisiblePosts = this.extractVisiblePosts(visiblePosts);
    return (
      <section className="col-md-8">
        <h2 className="page-header">{`Showing ${visiblePosts.length} posts`}</h2>
        {/* Begin Post */}
        {  ChunkedVisiblePosts[nextPage - 1].map((post)=> {
          return (
            <article key={post.title}>
              <PostHeader extractDate={ this.extractDate } post={ post } setVisibility={_setSideBarVisibilityFilter}/>
              {/* Post Description */}
              <p>{post.description}</p>
              <br />
              <PostFooter post={ post } setVisibility={_setSideBarVisibilityFilter}/>
              <hr />
            </article>
          );
        })
        }
        {/* Pager */}
        <Pager nextPage={+nextPage} query={query} queryKey={queryKey} ChunkedVisiblePosts={ChunkedVisiblePosts.length}/>
      </section>
    );
  }
}


function mapStateToProps(state) {
  return {
    posts: state.posts.all,
  }
}

export default connect(mapStateToProps, { _setSideBarVisibilityFilter })(PostList);
