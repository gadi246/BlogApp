import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import marked from 'marked';


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

let FormMixin = (InnerComponent, submitCB, formHeading) => class extends React.Component {
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
    this.formIsValid = this.formIsValid.bind(this);
    this.validate =this.validate.bind(this);

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
        resolve( submitCB(data, this.props.title) );
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
  render(){
    return (
      <div className="row">
        {/* Admin - New Post */}
        <section className="col-sm-12">
          <h2 className="page-header">{ formHeading }</h2>

          { this.state.isUniqTitle ? '':
            <div className="alert alert-danger" role="alert">
              The entered <strong>Title</strong> already exists in another post.
            </div> }
          {this.state.isInputFilled ? '' :
            <div className="alert alert-danger" role="alert">
              One or more required fields have no value.
            </div> }
          <InnerComponent onFormSubmit={this.onFormSubmit} validate={this.validate} formIsValid={this.formIsValid} {...this.state} {...this.props}/>
        </section>
      </div>
      )
  }

};




{/*export default*/} FormMixin;

