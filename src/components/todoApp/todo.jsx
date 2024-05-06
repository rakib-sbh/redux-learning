import "../../styles/todo.css";

const Todo = ({ todo }) => {
  return (
    <div className={"todo"}>
      <h3>{todo.title}</h3>
      {todo.completed ? <p>"Completed"</p> : "Not Completed"}
    </div>
  );
};

export default Todo;
