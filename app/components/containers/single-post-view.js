import React from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { Link, withRouter } from  'react-router';
import CodeBlock from '../../code-block';
import { _fetchSinglePost } from '../../actions/action-creators';
import { extractDate } from  '../../utils';



class SinglePostView extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    this.props._fetchSinglePost(this.props.title);
  }
  componentWillUnmount(){
    this.props._fetchSinglePost(null);
  }
  render(){
    if(!this.props.singlePost){
      console.log('empty');
      return <h3>Loading...</h3>
    }

    const {mdPath, title, author, tags, date, coco} = this.props.singlePost;
    console.log('content', title );

    var mardownFile = require(`raw!../../../${mdPath}`);

    return (
      <section className="col-md-8">
        {/* Begin Post */}
        <article>
          <header>
            <h1 className="page-header">{title}</h1>
            <p>
              <small className="glyphicon glyphicon-user"/>
              by <Link to={{pathname:'/posts', query: { author: author.toLowerCase().replace(/\s/g, '-')}}} >{author}</Link>
            </p>
            <p>
              <small className="glyphicon glyphicon-time"/>
              Posted on {extractDate(date).fullDate}
            </p>
            <p>
              <b>Tags:&nbsp;</b>
              { tags.map(tag => {
                return(
                  <span key={tag}>
                   <Link to={{pathname:'/posts', query: { category: tag.toLowerCase()}}} className="label label-default" >{ tag }</Link>
                  </span>
                  );
              })
              }
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

function mapStateToProps(state, { params }) {
  return {
    singlePost: state.posts.visiblePost,
    title: params.title
  }
}

export default withRouter(connect(mapStateToProps, { _fetchSinglePost })(SinglePostView));
