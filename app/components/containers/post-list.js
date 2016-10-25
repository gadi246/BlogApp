import React from 'react';
import {connect} from 'react-redux';


class PostList extends React.Component {
  constructor(props){
    super(props);
  }

  renderDate(num){
    let [,month,day,year] = new Date(+num).toDateString().split(" ");
    day = day < 10 ? day % 10 : day;
    let date = `${day} ${month}, ${year}`;
    return date;
  }
  render() {
    const {posts} = this.props;
    return (
      <section className="col-md-8">
      <h2 className="page-header">Showing 8 posts</h2>
      {/* Begin Post */}
        {  posts.map((post)=> {
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
    </section>
    );



  }
}


function mapStateToProps(state) {
  return {posts: state.posts.all}
}

export default connect(mapStateToProps)(PostList);
