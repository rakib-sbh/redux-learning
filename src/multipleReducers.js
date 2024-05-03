import { combineReducers, createStore } from "redux";

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_CARTS = "GET_CARTs";
const ADD_CART = "ADD_CART";

const initialProductState = {
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

const productReducer = (state = initialProductState, action) => {
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

const initCartState = {
  carts: ["oil", "noodles"],
  numberOfProducts: 2,
};

const getCarts = () => {
  return {
    type: GET_CARTS,
  };
};

const addCart = (cart) => {
  return {
    type: ADD_CART,
    payload: cart,
  };
};

const cartReducer = (state = initCartState, action) => {
  switch (action.type) {
    case GET_CARTS:
      return state;
    case ADD_CART:
      return {
        carts: [...state.carts, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getCarts());
store.dispatch(addCart("rice"));
store.dispatch(getCarts());

store.dispatch(getProducts());
store.dispatch(addProduct("banana"));
store.dispatch(getProducts());
