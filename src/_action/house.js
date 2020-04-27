import { GET_HOUSES } from '../_store/action-types';
import axios from 'axios';

export const getHouses = () => {
  return {
    type: GET_HOUSES,
    payload: axios({
      method: 'GET',
      url: `http://localhost:5000/api/v1/houses`,
    }),
  };
};
