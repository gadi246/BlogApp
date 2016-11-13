import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import marked from 'marked';
import {_fetchPostTitles, createPost, _fetchSinglePost, saveEditPost, deletePost} from '../../actions/action-creators';
import FormInput from './../form-input';
import Textarea from  './../form-textarea';
import MDFormInput from '../md-form-input';

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
      pending: false
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  componentWillMount() {
    this.props._fetchPostTitles();
    {/*for edit Route*/}
     this.props._fetchSinglePost(this.props.title ? this.props.title.replace(/[^0-9a-zA-Z ]/g,' ').split(' ').filter(word => word).join('-') : '');
  }
  componentWillUnmount(){
    this.props._fetchSinglePost(null);
  }
  formIsValid(data){
    var promise = new Promise((resolve, reject) => {
      setTimeout( () => {
        resolve(this.props.saveEditPost(data, this.props.title));
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
        let newArrTitles = this.props.arrTitles.filter(title => title !== this.props.title);
        isValidSubmit = newArrTitles.find(title => title === pair[1]) ? false : true;
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
    {/*<for edit Route*/}
    const isEdit = this.props.postEdit;
    if(!isEdit && this.props.title){
      console.log('empty');
      return <div>Loading...</div>;
    }
    let mdFile =  this.props.postEdit ? this.props.postEdit.mdSource || require(`raw!../../../${this.props.postEdit.mdPath}`) : '';
    {/*for edit Route>*/}
    return (
      <div className="row">
        {/* Admin - New Post */}
        <section className="col-sm-12">
          <h2 className="page-header">{this.props.title ? 'Edit Post' :'Add New Post' }</h2>

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
                <FormInput filled={postTitle} name='Title' divClass="required"  val={isEdit ? isEdit.title : ''} />
                <FormInput filled={postAuthor} name='Author' divClass="required"  val={isEdit ? isEdit.author : ''} />
                <FormInput filled={true} name='Tags' val={isEdit ? isEdit.tags.join(',') : ''}  >
                  <p className="help-block">Separate multiple tags with a comma.
                  e.g.<code>Grunt,Tools</code>
                  </p>
                </FormInput>
              </div>
              <Textarea filled={postDescription} name="Description" val={isEdit ? isEdit.description : ''}/>
            </div>
            <hr />
            {/* Markdown and Live Preview */}
            <MDFormInput filled={postMd} val={isEdit ? mdFile : ''}/>
            <hr />
            {this.state.pending ? <div>Loading...</div> :''}
            <button type="submit" className="btn btn-primary">Save Post</button>
            {/*for edit Route*>*/}
            { isEdit ?
              <button className="btn btn-danger pull-right" onClick={() => this.props.deletePost(this.props.title)}>Delete Post</button> : "" }
          </form>
        </section>
      </div>


    );
  }
}

function mapStateToProps(state,{ params }) {
  return {
    arrTitles: state.posts.arrTitles,
    title: params.title,
    postEdit: state.posts.visiblePost
  }
}
NewPost.contextTypes = {
  router: React.PropTypes.object
};

export default withRouter(connect(mapStateToProps, { _fetchPostTitles ,createPost, _fetchSinglePost, saveEditPost, deletePost})(NewPost));
