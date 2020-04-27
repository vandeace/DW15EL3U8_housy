import { GET_HOUSES } from '../_store/action-types';

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const reducerHouse = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_HOUSES}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_HOUSES}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data.data,
        loading: false,
      };
    case `${GET_HOUSES}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducerHouse;
