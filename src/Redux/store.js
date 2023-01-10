import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { cartReducer } from "./Reducers/cartReducers";

import {
  productListReducer,
  productDetailReducer,
} from "./Reducers/ProductReducers";

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
  }),
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
