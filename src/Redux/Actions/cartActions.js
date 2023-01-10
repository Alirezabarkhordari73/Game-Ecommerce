import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../Constant/cartConstant";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};
export const increaseQty = (product) => {
  return {
    type: INCREASE_QUANTITY,
    payload: product,
  };
};
export const decreaseQty = (product) => {
  return {
    type: DECREASE_QUANTITY,
    payload: product,
  };
};
