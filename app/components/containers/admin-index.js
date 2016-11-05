import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as fromStore from '../../store';
import { sortAdminColumns } from '../../actions/action-creators';
import { extractDate } from '../../utils';

import SideBar from './side-bar';
import AdminTheadColmun from '../admin-thead-column';

class AdminIndex extends React.Component {
  constructor(props){
    super(props);
  }
  sortPosts(posts, column='date', sort='desc'){
   return _.orderBy(posts, [column], [sort]);
  }
  render(){
    const { query, posts, columns, sortAdminColumns} = this.props;
    console.log('adminindex', sortAdminColumns);
    return(
      <div className="row">
        <section className="col-md-8">
          <h2 className="page-header">Edit posts</h2>
          <table className="table table-bordered table-hover table-striped postsTable">
            <thead>
            <tr>
              <th>#</th>
              <AdminTheadColmun sortPosts={sortAdminColumns} columnName="title" />
              <AdminTheadColmun sortPosts={sortAdminColumns} columnName="author" />
              <AdminTheadColmun sortPosts={sortAdminColumns} columnName="date" />
            </tr>
            </thead>
            <tbody>
            {posts.map((post,i) => {
              return(
                <tr key={post.title}>
                  <th scope="row">{i + 1}</th>
                  <td>{post.title}</td>
                  <td>{post.author}</td>
                  <td>{extractDate(post.date).fullDate}</td>
                </tr>
              );
            })
            }
            </tbody>
          </table>
          <footer>
            <a className="btn btn-primary" href="#">Add New Post</a>
          </footer>
        </section>

        <SideBar parentLink="admin"/>
      </div>

    )
  }
}

const mapStateToProps = (state,{ params, location : { query } }) =>({
  posts : fromStore.getVisiblePosts(state,query),
  query,
  columns : state.columns
});

export default withRouter( connect( mapStateToProps, { sortAdminColumns })(AdminIndex));
