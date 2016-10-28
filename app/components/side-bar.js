import React from 'react';

const SideBar = (props) => {
  return (
  <aside className="col-md-4">
    {/* Blog Search Well */}
    <div className="well">
      <h4>Search</h4>
      <form>
        <div className="input-group">
          <input type="search" name="search" className="form-control"/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <span className="glyphicon glyphicon-search"/>
                </button>
              </span>
        </div>
        {/* /.input-group */}
      </form>
    </div>
    {/* Blog Categories Well */}
    <div className="well">
      <h3>Filter Posts</h3>
      <div className="list-group">
        <a href="#" className="list-group-item active">
          <span className="badge">8</span>
          Show All Posts
        </a>
      </div>
      <h4>
        <small className="glyphicon glyphicon-tag"/>
        Category
      </h4>
      <div className="list-group">
        <a href="#" className="list-group-item">
          <span className="badge">4</span>
          AngularJS
        </a>
        <a href="#" className="list-group-item">
          <span className="badge">2</span>
          Grunt
        </a>
        <a href="#" className="list-group-item">
          <span className="badge">6</span>
          JavaScript
        </a>
        <a href="#" className="list-group-item">
          <span className="badge">2</span>
          jQuery
        </a>
        <a href="#" className="list-group-item">
          <span className="badge">2</span>
          Tools
        </a>
      </div>
      <h4>
        <small className="glyphicon glyphicon-user"/>
        Author
      </h4>
      <div className="list-group">
        <a href="#" className="list-group-item">
          <span className="badge">2</span>
          Alex Ilyaev
        </a>
        <a href="#" className="list-group-item">
          <span className="badge">2</span>
          Amit Choukroun
        </a>
        <a href="#" className="list-group-item">
          <span className="badge">4</span>
          Ilan Cohen
        </a>
      </div>
      <h4>
        <small className="glyphicon glyphicon-time"/>
        Month
      </h4>
      <div className="list-group">
        <div>
              <span className="list-group-item disabled">
                2015
              </span>
          <a href="#" className="list-group-item">
            <span className="badge">4</span>
            January
          </a>
        </div>
        <div>
              <span className="list-group-item disabled">
                2014
              </span>
          <a href="#" className="list-group-item">
            <span className="badge">4</span>
            December
          </a>
        </div>
      </div>
    </div>
  </aside>
  );
};

export default SideBar;
