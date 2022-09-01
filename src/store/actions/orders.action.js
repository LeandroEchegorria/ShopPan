import { URL_API } from "../../constants/firebase";
import { ordersTypes } from "../types";

const { GET_ORDERS, DELETE_ORDER } = ordersTypes;

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/orders.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      const orders = Object.keys(data)?.map((key) => {
        return {
          ...data[key],
          id: key,
        };
      });
      dispatch({
        type: GET_ORDERS,
        orders,
      });
    } catch (error) {
      console.warn(error);
    }
  };
};

export const deleteOrder = (orderId) => {
  return async (dispatch) => {
    try {
      await fetch(`${URL_API}/orders/${orderId}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch({
        type: DELETE_ORDER,
        orderId,
      });
    } catch (error) {
      console.warn(error);
    }
  };
};
