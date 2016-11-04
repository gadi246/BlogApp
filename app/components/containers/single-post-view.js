import React from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { Link, withRouter } from  'react-router';
import CodeBlock from '../../code-block';
import { _fetchSinglePost } from '../../actions/action-creators';
import  { _setSideBarVisibilityFilter } from '../../actions/action-creators';




class SinglePostView extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    this.props._fetchSinglePost(this.props.title);
  }
  extractDate(num) {                 {/*refactor suggestion2 get rid of this it's duplicated */}
    let [,month,day,year] = new Date(+num).toDateString().split(" ");
    day = day < 10 ? day % 10 : day;
    let fullDate = `${day} ${month}, ${year}`;
    let compareDate = `${month}-${year}`;
    return [fullDate, compareDate];
  }
  render(){
    if(!this.props.singlePost){
      return <h3>Loading...</h3>
    }
    const { _setSideBarVisibilityFilter } = this.props;
    const {mdPath, title, author, tags, date} = this.props.singlePost;

    var mardownFile = require(`raw!../../../${mdPath}`);

    return (
      <section className="col-md-8">
        {/* Begin Post */}
        <article>
          <header>
            <h1 className="page-header">{title}</h1>
            <p>
              <small className="glyphicon glyphicon-user"/>
              by <Link to={{pathname:'/posts', query: { author: author.toLowerCase().replace(/\s/g, '-')}}} onClick={() => _setSideBarVisibilityFilter(author)}>{author}</Link>
            </p>
            <p>
              <small className="glyphicon glyphicon-time"/>
              Posted on {this.extractDate(date)[0]}
            </p>
            <p>
              <b>Tags:&nbsp;</b>
              { tags.map(tag => {
                return(
                  <span key={tag}>
                   <Link to={{pathname:'/posts', query: { category: tag.toLowerCase()}}} className="label label-default" onClick={() => _setSideBarVisibilityFilter(tag)}>{ tag }</Link>
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

export default withRouter(connect(mapStateToProps, { _fetchSinglePost, _setSideBarVisibilityFilter })(SinglePostView));
