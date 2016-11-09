import React from 'react';
import marked from 'marked';

class Textarea extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      value:''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  onMdChange(e){
    this.setState({
      value: marked(e.target.value) || e.target.value
    })
  }
  render(){
    const  {filled, name, children, divClass, val , rows, onMdChange, txtareaCls} = this.props;
    return(
      <div className={`form-group ${filled ? '' : 'has-error'} required ${divClass}` }>
        <label htmlFor={`post${name}`}>{children}</label>
                  <textarea className={`form-control ${txtareaCls}`}
                            id={`post${name}`}
                            name={`post${name}`}
                            rows={rows}
                            placeholder={`post${name}`}
                            value={this.state.val || val}
                            onChange={ this.onMdChange}/>
        {/*value={isEdit ? isEdit.description : ''}*/}

      </div>
    )
  }
 
}
export default Textarea;
// rows = 10
// name =postDescription
