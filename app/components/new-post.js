import React from 'react';
import {connect} from 'react-redux';
import marked from 'marked';
import HTMLPreview from './HTMLPreview';
import {_fetchPostTitles, createPost} from '../actions/action-creators';
import FormInput from './form-input';

marked.setOptions({
  // GitHub Flavored Markdown
  gfm: true,
  // GFM tables
  tables: true,
  // GFM line breaks
  breaks: true,
  // Better lists handling
  smartLists: true,
  // Better punctuation handling
  smartypants: true,
  // Code blocks language prefix (reset default)
  langPrefix: '',
  // Prefix for headings ID's
  headerPrefix: 'hid-',
  highlight: false
});


{/*TASKS:  save md file, */}
class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUniqTitle: true,
      isInputFilled : true,
      valid: {
        postDescription:true,
        postAuthor: true,
        postMd: true,
        postTitle: true
      },
      pending: false,
      mdValue:''
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onMdChange = this.onMdChange.bind(this);
  }
  componentWillMount() {
    this.props._fetchPostTitles();
  }
  onMdChange(e){
    this.setState({
      mdValue: marked(e.target.value)
    })
  }
  formIsValid(data){
    var promise = new Promise((resolve, reject) => {
      setTimeout( () => {
        resolve(this.props.createPost(data));
      },2000);
    });
    promise.then( () => {
      console.log('back to admin');
      this.context.router.push('/admin');
    });
    console.log('Loader...');
    this.setState({
      pending: true
    })
  }
  validate(data){
    {/* this one is for "has error" classes for each one of the input */}
    let valid = {};
    {/*this one is for top warning notification if there is any empty input */}
    this.setState({
      isInputFilled: true
    });
    {/* this one is for submitting this form*/}
    let isValidSubmit = true;
    {/*Iterating through the form data to search for invalid data... */}
    for (var pair of data.entries()) {
      if (pair[0] === "postTitle") {
        isValidSubmit = this.props.arrTitle.find(title => title === pair[1]) ? false : true;
        {/*this one is for top warning notification for non unique post title */}
        this.setState({
          isUniqTitle: isValidSubmit
        })
      }
      if (!pair[1] && pair[0] !== 'postTags') {
        valid[pair[0]] = false;
        isValidSubmit = false;
        this.setState({
          isInputFilled: false
        })
      }
      else {
        valid[pair[0]] = true;
      }
    }
    this.setState({
      valid
    });
    return isValidSubmit ? this.formIsValid(data) : '';
  }
  onFormSubmit(e) {
    e.preventDefault();
    let formElm = e.target;
    let formData = new FormData(formElm);
    this.validate(formData);
  }

  render() {
    const {postTitle, postMd, postAuthor, postDescription} = this.state.valid;
    return (
      <div className="row">
        {/* Admin - New Post */}
        <section className="col-sm-12">
          <h2 className="page-header">Add New Post</h2>

          { this.state.isUniqTitle ? '':
           <div className="alert alert-danger" role="alert">
           The entered <strong>Title</strong> already exists in another post.
           </div> }
          {this.state.isInputFilled ? '' :
           <div className="alert alert-danger" role="alert">
           One or more required fields have no value.
           </div> }

          <form onSubmit={this.onFormSubmit}>
            {/* Top Settings */}
            <div className="row">
              <div className="col-sm-6">
                <FormInput filled={postTitle} name='Title' divClass="required" />
                <FormInput filled={postAuthor} name='Author' divClass="required"/>
                <FormInput filled={true} name='Tags' >
                  <p className="help-block">Separate multiple tags with a comma.
                  e.g.<code>Grunt,Tools</code>
                  </p>
                </FormInput>
              </div>
              <div className="col-sm-6">
                <div className={`form-group ${postDescription ? '' : 'has-error'} required`}>
                  <label htmlFor="postDescription">Description</label>
                  <textarea className="form-control" id="postDescription" name="postDescription" rows={10}
                            placeholder="Post Description" defaultValue={""}/>
                </div>
              </div>
            </div>
            <hr />
            {/* Markdown and Live Preview */}
            <div className="row">
              <div className={`form-group ${postMd ? '' : 'has-error'} required col-sm-6`}>
                <label htmlFor="postMd">Markdown</label>
                <textarea className="form-control previewPane" id="postMd" name="postMd" rows={20}
                          placeholder="Post Markdown" defaultValue={""}
                          onChange={this.onMdChange}
                          ref="mdElem" />
              </div>
              <div className="col-sm-6">
                <label>HTML Preview (read only)</label>
                {/* Content generated by converting the Markdown to HTML */}
                <div className="form-control previewPane">
                  <HTMLPreview>{this.state.mdValue}</HTMLPreview>
                </div>
              </div>
            </div>

            <hr />
            {this.state.pending ? <div>Loading...</div> :''}
            <button type="submit" className="btn btn-primary">Save Post</button>
            { window.location.hash.indexOf('/edit') > -1 ?
              <button className="btn btn-danger pull-right">Delete Post</button> : "" }
          </form>
        </section>
      </div>


    );
  }
}

function mapStateToProps(state) {
  return {
    arrTitle: state.posts.arrTitle
  }
}
NewPost.contextTypes = {
  router: React.PropTypes.object
};

export default connect(mapStateToProps, { _fetchPostTitles ,createPost })(NewPost);
