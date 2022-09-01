import { PRODUCTS } from "../../constants/data/products";
import { productsTypes } from "../types";

const { SELECT_PRODUCT, FILTERED_PRODUCTS } = productsTypes;
const initialState = {
  products: PRODUCTS,
  filteredProducts: [],
  selected: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selected: state.products.find((product) => product.id === action.productId),
      };
    case FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter(
          (product) => product.category === action.categoryId
        ),
      };

    default:
      return state;
  }
};

export default productReducer;
