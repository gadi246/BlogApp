import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';


class PostList extends React.Component {
  constructor(props) {
    super(props);
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
  extractPage(posts, nextPage){
    const length = posts.length;
    let start = nextPage === 1 ? 0 : nextPage * 3 - 3;
    let end = length % 3 === length - start ?  length  : start + 3;
    console.log(start, end);
    return posts.slice(start, end);
  }

  render() {
    let { posts, nextPage } = this.props;
    const visiblePosts = this.extractPage(posts, nextPage);
    return (
      <section className="col-md-8">
        <h2 className="page-header">Showing 8 posts</h2>
        {/* Begin Post */}
        {  visiblePosts.map((post)=> {
          return (
            <article key={post.title}>
              <header>
                <h2>
                  <a href="#">{post.title}</a>
                </h2>
                <p>
                  <small className="glyphicon glyphicon-user"/>
                  by <a href="#">{post.author}</a>
                </p>
                <p>
                  <small className="glyphicon glyphicon-time"/>
                  {`Posted on ${this.renderDate(post.date)}`}
                </p>
              </header>
              {/* Post Description */}
              <p>{post.description}</p>
              <br />
              <footer className="clearfix">
                <p className="pull-left">
                  <b>Tags:&nbsp;</b>
                  <span>
                    <a href="#" className="label label-default">{post.tags[0]}</a>
                  </span>
                  <span>
                    <a href="#" className="label label-default">{post.tags[1]}</a>
                  </span>
                </p>
                <a className="btn btn-primary pull-right" href="#">
                  Read More <i className="glyphicon glyphicon-chevron-right"/>
                </a>
              </footer>
              <hr />
            </article>

          );
        })
        }
        <ul className="pager">
          {+nextPage > 1 ? <li className="previous">
                             <Link to={`/posts/${ +nextPage - 1}`}>← Older</Link>
                          </li> : null}
          {+nextPage < Math.ceil(posts.length / 3 )? <li className="next">
                            <Link to={`/posts/${ +nextPage + 1}`}>Newer →</Link>
                           </li> : null}
        </ul>
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
