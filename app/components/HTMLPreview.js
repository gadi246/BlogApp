import React from 'react';

const HTMLPreview = ({ children}) => {
  const createMarkup = () => {
    return{
      __html: children
    }
  };
  return (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
  )
};
export default HTMLPreview;
