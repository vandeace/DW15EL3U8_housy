import { GET_ORDERS } from '../_store/action-types';
import axios from 'axios';

export const getOrders = (token) => {
  return {
    type: GET_ORDERS,
    payload: axios({
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      url: `http://localhost:5000/api/v1/orders`,
    }),
  };
};
