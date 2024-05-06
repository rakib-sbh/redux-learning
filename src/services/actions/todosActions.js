// synchornous actions

import axios from "axios";
import {
  TODOS_REQUEST,
  TODOS_SUCCESS,
  TODOS_FAILED,
  API_URL,
} from "../constants/todosConstants";

const todosRequest = () => {
  return {
    type: TODOS_REQUEST,
  };
};

const todosSuccess = (todos) => {
  return {
    type: TODOS_SUCCESS,
    payload: todos,
  };
};

const todosFailed = (error) => {
  return {
    type: TODOS_FAILED,
    payload: error,
  };
};

// asynchronous thunk function

const fetchAllTodos = () => {
  return async (dispatch) => {
    dispatch(todosRequest());
    try {
      const res = await axios.get(API_URL);
      dispatch(todosSuccess(res.data));
    } catch (err) {
      dispatch(todosFailed(err.message));
    }
  };
};

export default fetchAllTodos;
