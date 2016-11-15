import React from 'react';

class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount(){
    this.setState({
      value: this.props.val || ''
    })
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const {filled, name, val} = this.props;
    return (
      <div className="col-sm-6">
        <div className={`form-group ${filled ? '' : 'has-error'} required` }>
          <label htmlFor={`post${name}`}>{name}</label>
                  <textarea className={`form-control`}
                            id={`post${name}`}
                            name={`post${name}`}
                            rows={10}
                            placeholder={`post${name}`}
                            value={this.state.value}
                            onChange={ this.handleChange}/>

        </div>
      </div>
    )
  }

}
export default Textarea;
