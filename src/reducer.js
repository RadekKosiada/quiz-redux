import { FETCH_QUESTIONS, SUBMIT_ANSWER } from './actions';

const initialState = {
  questions: [],
  submittedAnswer: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_QUESTIONS: 
    console.log("reducer");
    return {
      ...state,
      items: action.payload
    }
    default:
      return state;
  }
}