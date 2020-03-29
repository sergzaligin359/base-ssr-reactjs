import axios from 'axios';

import { SET_HELLO, FETCH_TODOS, FETCH_TODO } from './types';

export const setHello = payload => ({
  type: SET_HELLO,
  payload
});

export const fetchTodos = () => async dispatch => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos'
  );

  dispatch({
    type: FETCH_TODOS,
    payload: response.data
  });
};

export const fetchTodo = (id) => async dispatch => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${ id }`
  );

  dispatch({
    type: FETCH_TODO,
    payload: response.data
  });
};
