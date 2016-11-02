import React from 'react';
import  _  from 'lodash';
import { connect } from 'react-redux';
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
  extractVisiblePosts(posts){
    let orederedArr = _.orderBy(posts,['date'],['desc']);
   let newArr =  _.chunk(orederedArr, 3);
    return newArr;
  }
  getVisibiltePosts(posts, queryKey, query) {
    switch(queryKey) {
      case 'author':
        return posts.filter((post) => post.author.toLowerCase().replace(/\s/g, '-') === query.author);
      case 'category':
        return posts.filter((post) => {
          for(let i = 0;i < post.tags.length;i++){
            if(post.tags[i].toLowerCase() === query.category){
              return post;
            }
          }
        }
        );
      case 'month':
        return posts.filter((post) => this.extractDate(post.date)[1] === query.month);
      case 'search':
            return this.props.query.search;
      default :
         return posts;
    }
  }

  render() {
    let { posts, nextPage,query } = this.props;
    let queryKey = Object.keys(query)[0];
    let visiblePosts = (this.getVisibiltePosts(posts, queryKey, query));
    let ChunkedVisiblePosts = this.extractVisiblePosts(visiblePosts);
    return (
      <section className="col-md-8">
        <h2 className="page-header">{`Showing ${visiblePosts.length} posts`}</h2>
        {/* Begin Post */}
        {  ChunkedVisiblePosts[nextPage - 1].map((post)=> {
          return (
            <article key={post.title}>
              <PostHeader extractDate={ this.extractDate } post={ post }/>
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
        <Pager nextPage={+nextPage} query={query} queryKey={queryKey} ChunkedVisiblePosts={ChunkedVisiblePosts.length}/>
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
