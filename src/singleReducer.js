import { createStore, applyMiddleware } from "redux";

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

const initProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

const productReducer = (state = initProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return state;
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    default:
      return state;
  }
};

const store = createStore(productReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("oil"));
store.dispatch(getProducts());
