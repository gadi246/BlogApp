import React from 'react';
import {Link} from 'react-router';

class Pager extends React.Component {

  renderOlderBtn(nextPage, linkToNext, linkToNextDecrement) {
    if (nextPage > 2) {
      return <Link to={linkToNextDecrement}>Newer →</Link>
    }
    else if (nextPage === 2) {
      return <Link to={linkToNext}>Newer →</Link>
    }
    else {
      return null;
    }
  }

  render() {
    let {nextPage, ChunkedVisiblePosts, query, queryKey} = this.props;

    let linkToPrev = queryKey ? {pathname:`/posts/${ nextPage + 1}`, query: query} : `/posts/${ nextPage + 1}`;
    let linkToNextDecrement = queryKey ? {pathname:`/posts/${ nextPage - 1}`, query: query} : `/posts/${ nextPage - 1}`;
    let linkToNext = queryKey ? {pathname:'/posts', query: query} : '/posts';
    
    return (
      <ul className="pager">
        <li className="next">
          {this.renderOlderBtn(nextPage,linkToNext, linkToNextDecrement)}
        </li>
        { nextPage < ChunkedVisiblePosts ? <li className="previous">
          <Link to={linkToPrev}>← Older</Link>
        </li> : null}
      </ul>
    );
  }
}
export default Pager;
