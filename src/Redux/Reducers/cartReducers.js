import {
  REMOVE_FROM_CART,
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../Constant/cartConstant";
//get cart state from localstorage and set to initial state
const cartItemsFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const totalQuantityToLocalStorage = localStorage.getItem("totalQuantity")
  ? JSON.parse(localStorage.getItem("totalQuantity"))
  : 0;

const totalPriceToLocalSTorage = localStorage.getItem("totalPrice")
  ? JSON.parse(localStorage.getItem("totalPrice"))
  : 0;
//my initial state
const initialState = {
  cart: cartItemsFromLocalStorage,
  totalQuantity: totalQuantityToLocalStorage,
  totalPrice: totalPriceToLocalSTorage,
};

export const cartReducer = (state = initialState, action) => {
  //function to set cart states in localstorage
  const saveCart = (cartstate, totalqtystate, totalpricestate) => {
    localStorage.setItem("cart", JSON.stringify(cartstate));
    localStorage.setItem("totalQuantity", JSON.stringify(totalqtystate));
    localStorage.setItem("totalPrice", JSON.stringify(totalpricestate));
  };
  switch (action.type) {
    case ADD_TO_CART:
      let existItem = state.cart.find(
        (item) => item._id === action.payload._id
      );

      let addToCartItems = existItem
        ? state.cart.map((item) =>
            item._id === existItem._id ? { ...item, qty: item.qty + 1 } : item
          )
        : [...state.cart, { ...action.payload, qty: 1 }];

      const addToCartItemindex = addToCartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      let newTotalQuantity = state.totalQuantity + 1;
      let newTotalPrice =
        state.totalPrice + addToCartItems[addToCartItemindex].price;
      saveCart(addToCartItems, newTotalQuantity, newTotalPrice);
      return {
        ...state,
        cart: addToCartItems,
        totalQuantity: newTotalQuantity,
        totalPrice: newTotalPrice,
      };

    case REMOVE_FROM_CART:
      const itemToRemove = state.cart.find(
        (item) => item._id === action.payload._id
      );

      let removeFromCartItems = state.cart.filter(
        (item) => item._id !== action.payload._id
      );

      let newTotalQty = state.totalQuantity - itemToRemove.qty;

      let removeFromCartTotalPrice =
        state.totalPrice - itemToRemove.qty * itemToRemove.price;
      saveCart(removeFromCartItems, newTotalQty, removeFromCartTotalPrice);
      return {
        ...state,
        cart: removeFromCartItems,
        totalQuantity: newTotalQty,
        totalPrice: removeFromCartTotalPrice,
      };

    case INCREASE_QUANTITY:
      let increaseQtyItem = state.cart.map((item) =>
        item._id === action.payload._id ? { ...item, qty: item.qty + 1 } : item
      );
      const increaseQtyItemIndex = increaseQtyItem.findIndex(
        (item) => item._id === action.payload._id
      );
      let increaseTotalQtyItem = state.totalQuantity + 1;
      let increaseTotalPrice =
        state.totalPrice + increaseQtyItem[increaseQtyItemIndex].price;
      saveCart(increaseQtyItem, increaseTotalQtyItem);
      return {
        ...state,
        cart: increaseQtyItem,
        totalQuantity: increaseTotalQtyItem,
        totalPrice: increaseTotalPrice,
      };

    case DECREASE_QUANTITY:
      let itemToDecrease = state.cart.find(
        (item) => item._id === action.payload._id
      );

      let decreaseQtyCartItems =
        itemToDecrease.qty > 1
          ? state.cart.map((item) =>
              item._id === action.payload._id
                ? { ...item, qty: item.qty - 1 }
                : item
            )
          : state.cart.filter((item) => item._id !== action.payload._id);
      let decreaseTotalQtyItem = state.totalQuantity - 1;
      let decreaseTotalPrice = state.totalPrice - itemToDecrease.price;

      saveCart(decreaseQtyCartItems, decreaseTotalQtyItem, decreaseTotalPrice);
      return {
        ...state,
        cart: decreaseQtyCartItems,
        totalQuantity: decreaseTotalQtyItem,
        totalPrice: decreaseTotalPrice,
      };

    default:
      return state;
  }
};
