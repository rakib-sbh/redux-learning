import { createStore, applyMiddleware } from "redux";
import todosReducer from "../../services/reducers/todosReducer";
import { thunk } from "redux-thunk";

const todosStore = createStore(todosReducer, applyMiddleware(thunk));

export default todosStore;
