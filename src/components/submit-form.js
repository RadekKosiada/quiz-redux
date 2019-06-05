import React from 'react';

export default class SubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) { 
    event.preventDefault();
  }
  render() {
    return (
      <div>
          <form className="" onSubmit={this.handleSubmit}>           
                Your answer:
                <input
                  type="text"
                  name="answer"
                  value={this.state.value}
                  onChange={this.handleChange}
                />            
                <input className="button" type="submit" value="Submit" />
              </form>
      </div>
    )
  }
}