import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { productsReducer, categoryReducer, cartReducer, ordersReducer } from "./reducers/index";

const rootReducer = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  cart: cartReducer,
  order: ordersReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
