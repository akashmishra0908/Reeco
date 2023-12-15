import { APPROVE_PRODUCT, CLOSE_POPUP, MARK_MISSING, OPEN_EDIT_POPUP, UPDATE_PRODUCT, PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, PRODUCT_FAILURE } from "./actionType";
import axios from "axios"
export const getProducts = (paramObj) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST
 });

  try {
    
   const res=await axios.get("http://localhost:8080/products");
   console.log("Response:", res); 
   dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data})
  } catch (error) {
    dispatch({ type: PRODUCT_FAILURE });
  }
};


export const approveProduct = (productId) => async (dispatch) => {
  try {
    await axios.patch(`http://localhost:8080/products/${productId}`, { status: 'Approved' });
    dispatch({ type: APPROVE_PRODUCT, payload: { productId } });
  } catch (error) {
    console.error('Error approving product:', error);
  }
};

export const markMissing = (productId, urgent) => async (dispatch) => {
  try {
    const status = urgent ? 'Missing Urgent' : 'Missing';
    await axios.patch(`http://localhost:8080/products/${productId}`, { status });
    dispatch({ type: MARK_MISSING, payload: { productId, urgent } });
  } catch (error) {
    console.error('Error marking as missing:', error);
  }
};
export const openEditPopup = (productId) => ({
  type: OPEN_EDIT_POPUP,
  payload: { productId },
});

export const closePopup = () => ({
  type: CLOSE_POPUP,
});

export const updateProductSuccess = (productId, price, quantity, reason) => ({
  type: UPDATE_PRODUCT,
  payload: { productId, price, quantity, reason },
});

export const updateProduct = (productId, price, quantity, reason) => async (dispatch) => {
  try {
    
    const res = await axios.patch(`http://localhost:8080/products/${productId}`, {
      price,
      quantity,
      reason,
    });
console.log(productId)
    dispatch(updateProductSuccess(productId,res.data.price, res.data.quantity, res.data.reason));
  
  } catch (error) {
    console.error('Error updating product:', error);
  }
};
