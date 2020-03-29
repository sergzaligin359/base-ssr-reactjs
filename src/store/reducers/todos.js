import { FETCH_TODOS, FETCH_TODO } from '../types';

const initialState = {
	todos: [],
	todo: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
      	todos: action.payload
      }
    case FETCH_TODO:
      return {
      	todo: action.payload
      }
    default:
      return state;
  }
};
