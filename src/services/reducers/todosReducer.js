import {
  TODOS_FAILED,
  TODOS_REQUEST,
  TODOS_SUCCESS,
} from "../constants/todosConstants";

const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todosReducer;
