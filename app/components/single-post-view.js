import React from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import CodeBlock from '../code-block.js';
import { _fetchSinglePost } from '../actions/action-creators';

{/*We use the raw loader here*/
}


class SinglePostView extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    this.props._fetchSinglePost(this.props.title);
  }
  render(){
    if(!this.props.singlePost){
      return <h3>Loading...</h3>
    }

    var mardownFile = require(`raw!../../${this.props.singlePost.mdPath}`);

    return (
      <section className="col-md-8">
        {/* Begin Post */}
        <article>
          <header>
            <h1 className="page-header">AngularJS - Controllers</h1>
            <p>
              <small className="glyphicon glyphicon-user"/>
              by <a href="#">Ilan Cohen</a>
            </p>
            <p>
              <small className="glyphicon glyphicon-time"/>
              Posted on 14 Jan, 2015
            </p>
            <p>
              <b>Tags:&nbsp;</b>
              <span>
                <a href="#" className="label label-default">JavaScript</a>
              </span>
              <span>
                <a href="#" className="label label-default">AngularJS</a>
              </span>
            </p>
          </header>
          <hr />
          <div className="ui reading segmentpadding">
            <ReactMarkdown source={mardownFile} renderers={Object.assign({}, ReactMarkdown.renderers, {
                            CodeBlock: CodeBlock })}/>
          </div>
        </article>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    singlePost: state.posts.visiblePost
  }
}

export default connect(mapStateToProps, { _fetchSinglePost })(SinglePostView);
