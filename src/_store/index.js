import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger, promise } from './middleware';

import reducerUser from '../_reducer/user';
import reducerHouse from '../_reducer/house';
import reducerOrder from '../_reducer/order';

const rootReducer = combineReducers({
  user: reducerUser,
  house: reducerHouse,
  order: reducerOrder,
});

const store = createStore(rootReducer, applyMiddleware(logger, promise));

export default store;
