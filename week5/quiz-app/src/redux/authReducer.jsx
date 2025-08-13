import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

const initialState = {
  token: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, error: action.payload, token: null };
    default:
      return state;
  }
};
