import { useDispatch, useSelector } from "react-redux";
import fetchAllTodos from "../../services/actions/todosActions";
import { useEffect } from "react";
import Todo from "./todo";

const Todos = () => {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);
  return (
    <div>
      <h1>Todos App</h1>
      {state.todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
