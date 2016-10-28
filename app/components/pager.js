import React from 'react';
import {Link} from 'react-router';

class Pager extends React.Component {

  renderOlderBtn(nextPage) {
    if (nextPage > 2) {
      return <Link to={`/posts/${ nextPage - 1}`}>← Older</Link>
    }
    else if (nextPage === 2) {
      return <Link to="/">← Older</Link>
    }
    else {
      return null;
    }
  }

  render() {
    let {nextPage, postsLength} = this.props;
    return (
      <ul className="pager">
        <li className="previous">
          {this.renderOlderBtn(nextPage)}
        </li>
        {nextPage < Math.ceil(postsLength / 3) ? <li className="next">
          <Link to={`/posts/${ nextPage + 1}`}>Newer →</Link>
        </li> : null}
      </ul>
    );
  }
}
export default Pager;
