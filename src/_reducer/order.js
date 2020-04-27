import { GET_ORDERS } from '../_store/action-types';

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const reducerOrder = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ORDERS}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_ORDERS}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data.data,
        loading: false,
      };
    case `${GET_ORDERS}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducerOrder;
