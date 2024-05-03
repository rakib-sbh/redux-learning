import { createStore } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";


//! state
const initalCounterState = {
  count: 0
}

//! action - Object- type, payload

const incrementCounter = () => {
  return {
    type: INCREMENT
  }
}

const decrementCounter = () => {
  return {
    type: DECREMENT
  }
}

//! create reducer for counter

const counterReducer = (state = initalCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      }
    case DECREMENT:
      return {
        count: state.count - 1
      }
    default:
      return state;
  }
}

// 1. state
// 2. action
// 3. reducer
// 4. store - getStore(), dispatch(), subscribe()


const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
})

// dispatch action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());

const App = () => {
  return <h1>Hello Rakib. You should grow fast to keep pace with the modern world.</h1>
}

export default App;