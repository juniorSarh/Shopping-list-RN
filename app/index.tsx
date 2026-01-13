import React from 'react';
import { Provider } from 'react-redux';
import ShoppingListScreen from './pages/ShoppingListScreen';
import store from './redux/store';

export default function Index() {
  return (
    <Provider store={store}>
      <ShoppingListScreen />
    </Provider>
  );
}