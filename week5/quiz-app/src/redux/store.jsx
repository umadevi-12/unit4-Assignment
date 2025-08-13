import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Example reducers (replace with your actual reducers)
const authReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const quizReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
  quiz: quizReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
