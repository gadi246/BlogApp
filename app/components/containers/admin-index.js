import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router';
import * as fromStore from '../../store';
import { sortAdminColumns } from '../../actions/action-creators';
import { extractDate } from '../../utils';

import SideBar from './side-bar';
import AdminTheadColmun from '../admin-thead-column';

class AdminIndex extends React.Component {
  constructor(props){
    super(props);
  }
  sortPostsByColumns(posts, column='date', sort='desc'){
   return _.orderBy(posts, [column], [sort]);
  }
  render(){
    const {  posts, columns, sortAdminColumns} = this.props;
    const selectedColumn = columns.filter(column => column.selected)[0];
    const sort = selectedColumn.descentSort ? 'desc' : 'asc';
    console.log('rendered', sort);
    return(
      <div className="row">
        <section className="col-md-8">
          <h2 className="page-header">Edit posts</h2>
          <table className="table table-bordered table-hover table-striped postsTable">
            <thead>
            <tr>
              <th>#
              </th>
              <AdminTheadColmun sortPosts={sortAdminColumns} columnName="title" sortArrow={sort} selectedColumn={selectedColumn}/>
              <AdminTheadColmun sortPosts={sortAdminColumns} columnName="author" sortArrow={sort} selectedColumn={selectedColumn}/>
              <AdminTheadColmun sortPosts={sortAdminColumns} columnName="date" sortArrow={sort} selectedColumn={selectedColumn}/>
            </tr>
            </thead>
            <tbody>
            {this.sortPostsByColumns(posts, selectedColumn.name, sort).map((post,i) => {
              return(
                <tr key={post.title} onClick={() => this.context.router.push(`/admin/edit/post/${post.title}`)}>
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
            <Link className="btn btn-primary" to="/admin/new/post">Add New Post</Link>
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
AdminIndex.contextTypes = {
  router: React.PropTypes.object
};

export default withRouter( connect( mapStateToProps, { sortAdminColumns })(AdminIndex));
