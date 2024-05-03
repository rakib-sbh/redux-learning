import { combineReducers, createStore } from "redux";

const WIN = "WIN";
const LOOSE = "LOOSE";
const PLAY = "PLAY";

const gameInitState = {
  score: 0,
  attemptLeft: 15,
  level: 1,
};

const win = () => {
  return {
    type: WIN,
    payload: 100,
  };
};

const loose = () => {
  return {
    type: LOOSE,
    payload: -100,
  };
};

const play = () => {
  return {
    type: PLAY,
    payload: 10,
  };
};

const gameReducer = (state = gameInitState, action) => {
  switch (action.type) {
    case WIN:
      return {
        score: state.score + action.payload,
        attemptLeft: state.attemptLeft - 1,
        level: state.level + 1,
      };
    case LOOSE:
      return {
        score: state.score + action.payload,
        attemptLeft: state.attemptLeft - 1,
        level: 1,
      };

    case PLAY:
      return {
        score: state.score + action.payload,
        attemptLeft: state.attemptLeft - 1,
        level: state.level,
      };
    default:
      return state;
  }
};

const ticInit = {
  score: 0,
  attemptLeft: 15,
  level: 1,
};

const winTic = () => {
  return {
    type: WIN,
    payload: 200,
  };
};

const looseTic = () => {
  return {
    type: LOOSE,
    payload: -200,
  };
};

const ticReducer = (state = ticInit, action) => {
  switch (action.type) {
    case WIN:
      return {
        score: state.score + action.payload,
        attemptLeft: state.attemptLeft - 1,
        level: state.level + 1,
      };
    case LOOSE:
      return {
        score: state.score + action.payload,
        attemptLeft: state.attemptLeft - 1,
        level: 0,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  game: gameReducer,
  tic: ticReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(win());
store.dispatch(looseTic());
