import { APPROVE_PRODUCT, CLOSE_POPUP, MARK_MISSING, OPEN_EDIT_POPUP, UPDATE_PRODUCT, PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, PRODUCT_FAILURE } from "./actionType";


const productData = require("../db.json");

export const getProducts = (paramObj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST
 });

  try {
    
    setTimeout(() => {
   
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: productData.products });
    }, 1000);
  } catch (error) {
    dispatch({ type: PRODUCT_FAILURE });
  }
};


export const approveProduct = productId => ({
  type: APPROVE_PRODUCT,
  payload: { productId },
});

export const markMissing = (productId, urgent) => ({
  type: MARK_MISSING,
  payload: { productId, urgent },
});

export const openEditPopup = productId => ({
  type: OPEN_EDIT_POPUP,
  payload: { productId },
});

export const closePopup = () => ({
  type: CLOSE_POPUP,
});

export const updateProduct = (productId, price, quantity, reason) => ({
  type: UPDATE_PRODUCT,
  payload: { productId, price, quantity, reason },
});
