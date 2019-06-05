import React from 'react';

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winCondition: 5, 
      allQuestions: [],
      singleQuestion: ''
    }
  }
  componentWillMount() {
    fetch('http://jservice.io/api/random/?count=' + this.state.winCondition)
      .then(response =>  response.json())
      .then(data => {
        console.log(data)
        this.setState({
          allQuestions: data,
          singleQuestion: data[0].question
        })
        console.log(typeof this.state.allQuestions[0].question)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
  render() {
    return (
      <div>
        <p>{this.state.singleQuestion}</p>
      </div>
    )
  }
}