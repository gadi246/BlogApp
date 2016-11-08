import React from 'react';

const FormInput = ({filled, name, children, divClass}) => {
  return(
    <div className={`form-group ${filled ? '' : 'has-error'} ${divClass}`}>
      <label htmlFor={`post${name}`}>{name}</label>
      <input type="text" className="form-control" id={`post${name}`} name={`post${name}`} placeholder={`Post ${name}`}
             autofocus/>
      {children}
    </div>
  );
};

export default FormInput;
