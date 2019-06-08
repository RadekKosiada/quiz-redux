import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchQuestions } from '../actions';
console.log(fetchQuestions);

class Questions extends React.Component {
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
  componentWillMount() {
    this.props.fetchQuestions()
  }
  render() {
    const questionItems = this.state.questions.map(question => (
      <div>
        <h3>{question.question}</h3>
        <p>{question.answer}</p>
      </div>
    ))

    return (
      <div>
        <p>{this.state.firstQuestion}</p>
        <p>{this.state.firstAnswer}</p>
        <p>questionItems</p>
      </div>
    )
  }
}

Questions.PropTypes = {
  fetchQuestions: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  questions: state.questions.items
})

export default connect(mapStateToProps, { fetchQuestions})(Questions);