import React from 'react';
import FormInput from './../form-input';
import Textarea from  './../form-textarea';
import MDFormInput from './../md-form-input';
import FormMixin from './form-mixins';
import { createPost } from '../../actions/action-creators';

const NewForm = (props) => {
  const {postTitle, postMd, postAuthor, postDescription} = props.valid;
  return (
    <form onSubmit={props.onFormSubmit}>
      {/* Top Settings */}
      <div className="row">
        <div className="col-sm-6">
          <FormInput filled={postTitle} name='Title' divClass="required"   />
          <FormInput filled={postAuthor} name='Author' divClass="required"   />
          <FormInput filled={true} name='Tags' >
            <p className="help-block">Separate multiple tags with a comma.
              e.g.<code>Grunt,Tools</code>
            </p>
          </FormInput>
        </div>
        <Textarea filled={postDescription} name="Description" />
      </div>
      <hr />
      {/* Markdown and Live Preview */}
      <MDFormInput filled={postMd} />
      <hr />
      {props.pending ? <div>Loading...</div> :''}
      <button type="submit" className="btn btn-primary">Save Post</button>
    </form>
  );
};

let NewFormMixed = FormMixin(NewForm, createPost, 'Add New Post');

{/*export default*/} NewFormMixed
