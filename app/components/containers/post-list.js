import React from 'react';
import  _  from 'lodash';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import * as fromStore from '../../store';
import Pager from '../pager';
import PostHeader from '../post-header';
import PostFooter from '../post-footer';
import { extractDate } from '../../utils';


class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  extractVisiblePosts(posts) {
    let orederedArr = _.orderBy(posts, ['date'], ['desc']);
    let newArr = _.chunk(orederedArr, 3);
    return newArr;
  }

  render() {
    let {posts, nextPage, query} = this.props;
    if (posts.length === 0) {
      return (
        <section className="col-md-8">
          <h2 className="page-header">No Results Found for "{query.search}" ...</h2>
        </section>
      );
    }
    let ChunkedVisiblePosts = this.extractVisiblePosts(posts);
    return (
      <section className="col-md-8">
        <h2 className="page-header">{`Showing ${posts.length} posts`}</h2>
        {/* Begin Post */}
        {  ChunkedVisiblePosts[nextPage - 1].map((post)=> {
          return (
            <article key={post.title}>
              <PostHeader extractDate={ extractDate } post={ post } />
              {/* Post Description */}
              <p>{post.description}</p>
              <br />
              <PostFooter post={ post } />
              <hr />
            </article>
          );
        })
        }
        {/* Pager */}
        <Pager nextPage={+nextPage} query={query}  postListLength={ChunkedVisiblePosts.length}/>
      </section>
    );
  }
}


const mapStateToProps = (state,{ params, location : { query } }) =>({
    posts : fromStore.getVisiblePosts(state,query),
    nextPage: params.page || 1,
    query
  });


export default withRouter( connect( mapStateToProps )(PostList));
