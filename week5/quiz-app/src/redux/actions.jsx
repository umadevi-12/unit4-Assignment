import axios from "axios";
import * as types from "./actionTypes";

// Login thunk
export const loginUser = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post("https://reqres.in/api/login", { email, password });
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, payload: error.message });
  }
};

// Fetch quiz questions thunk
export const fetchQuestions = () => async (dispatch) => {
  dispatch({ type: types.FETCH_QUESTIONS_REQUEST });
  try {
    const res = await axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz");
    dispatch({ type: types.FETCH_QUESTIONS_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.FETCH_QUESTIONS_FAILURE, payload: error.message });
  }
};

// Submit answer
export const submitAnswer = (isCorrect) => ({ type: types.SUBMIT_ANSWER, payload: isCorrect });
export const skipQuestion = () => ({ type: types.SKIP_QUESTION });
export const resetQuiz = () => ({ type: types.RESET_QUIZ });
