import React from 'react';

class Search extends React.Component {
  constructor({props}) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.state = {
      inputVal: ''
    }
  }

  onInputChange(e) {
    this.setState({
      inputVal: e.target.value
    })
  }

  onSearchSubmit(e) {
    e.preventDefault();
    if (this.state.inputVal) {
      this.context.router.push(`/posts?search=${this.state.inputVal.toLowerCase().replace(/[^0-9a-zA-Z ]/g,'-').replace(/\s/g, '')}`);
      this.setState({
        inputVal: ''
      })
    }
    else {
      this.input.focus();
    }

  }

  render() {
    return (
      <div className="well">
        <h4>Search</h4>
        <form onSubmit={this.onSearchSubmit}>
          <div className="input-group">
            <input type="search"
                   name="search"
                   className="form-control"
                   ref={node => this.input = node}
                   value={this.state.inputVal}
                   onClick={() => this.props.setVisibility('')}
                   onChange={this.onInputChange}/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <span className="glyphicon glyphicon-search"/>
                </button>
              </span>
          </div>
        </form>
      </div>
    );
  }
}

Search.contextTypes = {
  router: React.PropTypes.object
};

export default Search;
