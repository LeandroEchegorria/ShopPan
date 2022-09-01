/* eslint-disable no-case-declarations */
import { cartTypes } from "../types";

const { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART } = cartTypes;

const initialState = {
  items: [],
  total: 0,
};

const sumTotal = (list) =>
  list.map((item) => item.quantity * item.price).reduce((a, b) => a + b, 0);

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let updatedCart = [];
      if (state.items.find((item) => item.id === action.item.id)) {
        updatedCart = state.items.map((item) => {
          if (item.id === action.item.id) item.quantity += 1;
          return item;
        });
      } else {
        const item = { ...action.item, quantity: 1 };
        updatedCart = [...state.items, item];
      }
      return {
        ...state,
        items: updatedCart,
        total: sumTotal(updatedCart),
      };
    case REMOVE_ITEM:
      const filterCart = state.items.filter((item) => item.id !== action.id);
      return {
        ...state,
        items: filterCart,
        total: sumTotal(filterCart),
      };
    default:
      return state;
  }
};

export default cartReducer;
