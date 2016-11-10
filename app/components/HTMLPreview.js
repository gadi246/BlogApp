import React from 'react';

const HTMLPreview = ({ children, editTxt}) => {
  const createMarkup = () => {
    return{
      __html: children || editTxt
    }
  };
  return (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
  )
};
export default HTMLPreview;

