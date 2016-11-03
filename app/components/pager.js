import React from 'react';
import {Link} from 'react-router';

class Pager extends React.Component {

  renderOlderBtn(nextPage, linkToPrev, linkToPrevDecrement) {
    if (nextPage > 2) {
      return <Link to={linkToPrevDecrement}>← Newer</Link>
    }
    else if (nextPage === 2) {
      return <Link to={linkToPrev}>← Newer</Link>
    }
    else {
      return null;
    }
  }

  render() {
    let {nextPage, ChunkedVisiblePosts, query, queryKey} = this.props;
    let linkToNext = queryKey ? {pathname:`/posts/${ nextPage + 1}`, query: query} : `/posts/${ nextPage + 1}`;
    let linkToPrevDecrement = queryKey ? {pathname:`/posts/${ nextPage - 1}`, query: query} : `/posts/${ nextPage - 1}`;
    let linkToPrev = queryKey ? {pathname:'/posts', query: query} : '/posts';
    return (
      <ul className="pager">
        <li className="previous">
          {this.renderOlderBtn(nextPage,linkToPrev, linkToPrevDecrement)}
        </li>
        { nextPage < ChunkedVisiblePosts ? <li className="next">
          <Link to={linkToNext}>Older →</Link>
        </li> : null}
      </ul>
    );
  }
}
export default Pager;
