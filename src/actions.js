// types of actions
export const FETCH_QUESTIONS = 'FETCH_QUESTION';
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';

export function fetchQuestions() {
  console.log("fetching")
  return function(dispatch) {
    fetch('http://jservice.io/api/random/?count=5')
      .then(response =>  response.json())
      .then(questions => dispatch({
        type: FETCH_QUESTIONS,
        payload: questions       
      }))
      .catch(err => {
        console.log(err.message)
      })
  }
}