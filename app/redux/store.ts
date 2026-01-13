import { createStore } from 'redux';
import { shoppingReducer, ShoppingState } from './reducer';

const store = createStore(shoppingReducer);

export type RootState = ShoppingState;
export type AppDispatch = typeof store.dispatch;

export default store;