import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  SUBMIT_ANSWER,
  SKIP_QUESTION,
  RESET_QUIZ,
} from "./actionTypes";

const initialState = {
  loading: false,
  questions: [],
  error: null,
  currentQuestionIndex: 0,
  score: 0,
};

export const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_REQUEST:
      return { ...state, loading: true };
    case FETCH_QUESTIONS_SUCCESS:
      return { ...state, loading: false, questions: action.payload };
    case FETCH_QUESTIONS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SUBMIT_ANSWER:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        score: action.payload ? state.score + 1 : state.score,
      };
    case SKIP_QUESTION:
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    case RESET_QUIZ:
      return initialState;
    default:
      return state;
  }
};
