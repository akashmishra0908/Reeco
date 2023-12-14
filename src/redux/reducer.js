
import { APPROVE_PRODUCT, MARK_MISSING, OPEN_EDIT_POPUP, CLOSE_POPUP, UPDATE_PRODUCT, GET_PRODUCT_SUCCESS, PRODUCT_REQUEST, PRODUCT_FAILURE } from '../redux/actionType';

const initialState = {
  products: [],
  selectedProductId: null,
  isEditPopupOpen: false,
  isLoading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };

    case PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case APPROVE_PRODUCT:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.productId
            ? { ...product, status: 'Approved' }
            : product
        ),
      };

    case MARK_MISSING:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.productId
            ? { ...product, status: action.payload.urgent ? 'Missing  Urgent' : 'Missing' }
            : product
        ),
      };

    case OPEN_EDIT_POPUP:
      return {
        ...state,
        selectedProductId: action.payload.productId,
        isEditPopupOpen: true,
      };

    case CLOSE_POPUP:
      return {
        ...state,
        selectedProductId: null,
        isEditPopupOpen: false,
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.productId
            ? {
                ...product,
                price: action.payload.price,
                quantity: action.payload.quantity,
                status: `Updated - ${action.payload.reason}`,
              }
            : product
        ),
        isEditPopupOpen: false,
      };

    default:
      return state;
  }
};

