import React from 'react';
import { Link } from 'react-router';

class NavLinks extends React.Component {
  render() {
    let isActive = this.context.router.isActive(this.props.to, true),
      className = isActive ? "active" : "";

    return (
      <li className={className}>
        <Link {...this.props}>
          {this.props.children}
        </Link>
      </li>
    );
  }
}

NavLinks.contextTypes = {
  router: React.PropTypes.object
};

export default NavLinks;
