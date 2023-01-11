import {
  // PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  // PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAIL_REQUEST,
  // PRODUCT_DETAIL_SUCCESS,
  // PRODUCT_DETAIL_FAIL,
} from "../Constant/ProductConstant";
// import axios from "axios";
import data from "../../data";

//product list action
export const listProduct = (products) => {
  return {
    type: PRODUCT_LIST_REQUEST,
    payload: products,
  };
};
export const ProductDetail = (id) => {
  const product = data.filter((item) => item._id === id);
  return {
    type: PRODUCT_DETAIL_REQUEST,
    payload: product,
  };
};
// export const listProduct = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: PRODUCT_LIST_REQUEST,
//     });
//     const { data } = await axios.get("/api/products");
//     dispatch({
//       type: PRODUCT_LIST_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_LIST_FAIL,
//       payload:
//         error.respons && error.respons.data.message
//           ? error.respons.data.message
//           : error.message,
//     });
//   }
// };

//product detial action
// export const ProductDetail = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: PRODUCT_DETAIL_REQUEST,
//     });
//     const { data } = await axios.get(`/api/products/${id}`);
//     dispatch({
//       type: PRODUCT_DETAIL_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_DETAIL_FAIL,
//       payload:
//         error.respons && error.respons.data.message
//           ? error.respons.data.message
//           : error.message,
//     });
//   }
// };
