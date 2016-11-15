import React from 'react';

class FormInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value:''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount(){
    this.setState({
      value: this.props.val || ''
    })
  }
  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }
  render(){
    const {filled, name, children, divClass, val} = this.props;
    return(
      <div className={`form-group ${filled ? '' : 'has-error'}
         ${divClass}`}>
        <label htmlFor={`post${name}`}>{name}</label>
        <input type="text"
               className="form-control"
               id={`post${name}`}
               name={`post${name}`}
               placeholder={`Post ${name}`}
               value={this.state.value }
               onChange={this.handleChange}
               autofocus/>
        {children}
      </div>
    );
  }

}

export default FormInput;
