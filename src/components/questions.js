import React from 'react';

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winCondition: 5, 
      allQuestions: [],
      firstQuestion: '',
      firstAnswer: ''
    }
  }
  // componentDidMount() {
  //   fetch('http://jservice.io/api/random/?count=' + this.state.winCondition)
  //     .then(response =>  response.json())
  //     .then(data => {
  //       console.log(data)
  //       this.setState({
  //         allQuestions: data,
  //         firstQuestion: data[0].question,
  //         firstAnswer: data[0].answer,
  //       })
  //       console.log(typeof this.state.allQuestions[0].question)
  //     })
  //     .catch(err => {
  //       console.log(err.message)
  //     })
  //   }
  render() {
    return (
      <div>
        <p>{this.state.firstQuestion}</p>
        <p>{this.state.firstAnswer}</p>
      </div>
    )
  }
}