import { useDispatch, useSelector } from "react-redux";
import {
  counterDecrement,
  counterIncrement,
  counterReset,
} from "../services/actions/counterActions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterIncrement());
  };

  const handleReset = () => {
    dispatch(counterReset());
  };

  const handleDecrement = () => {
    dispatch(counterDecrement());
  };
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
