import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Pager from '../pager';
import PostHeader from '../post-header';
import PostFooter from '../post-footer';



class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.renderDate = this.renderDate.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState){
    return Math.ceil(this.props.posts.length / 3 ) - nextProps.nextPage  >= 0&&
      nextProps.nextPage > 0;
  }

  renderDate(num) {
    let [,month,day,year] = new Date(+num).toDateString().split(" ");
    day = day < 10 ? day % 10 : day;
    let date = `${day} ${month}, ${year}`;
    return date;
  }
  extractVisiblePosts(posts, nextPage){
    const length = posts.length;
    let start = nextPage === 1 ? 0 : nextPage * 3 - 3;
    let end = length % 3 === length - start ?  length  : start + 3;
    console.log(start, end);
    return posts.slice(start, end);
  }

  render() {
    let { posts, nextPage } = this.props;
    const visiblePosts = this.extractVisiblePosts(posts, nextPage);
    return (
      <section className="col-md-8">
        <h2 className="page-header">{`Showing ${posts.length} posts`}</h2>
        {/* Begin Post */}
        {  visiblePosts.map((post)=> {
          return (
            <article key={post.title}>
              <PostHeader renderDate={ this.renderDate } post={ post }/>
              {/* Post Description */}
              <p>{post.description}</p>
              <br />
              <PostFooter post={ post }/>
              <hr />
            </article>
          );
        })
        }
        {/* Pager */}
        <Pager nextPage={+nextPage} postsLength={posts.length}/>
      </section>
    );
  }
}


function mapStateToProps(state) {
  return {
    posts: state.posts.all
  }
}

export default connect(mapStateToProps)(PostList);
