import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, ShoppingActionTypes, ShoppingItem, TOGGLE_ITEM } from './actions';

export interface ShoppingState {
  shoppingList: ShoppingItem[];
}

const initialState: ShoppingState = {
  shoppingList: [],
};

export const shoppingReducer = (
  state = initialState,
  action: ShoppingActionTypes
): ShoppingState => {
  switch (action.type) {
    case ADD_ITEM:
      return { shoppingList: [...state.shoppingList, action.payload] };
    case EDIT_ITEM:
      return {
        shoppingList: state.shoppingList.map(item =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case DELETE_ITEM:
      return {
        shoppingList: state.shoppingList.filter(item => item.id !== action.payload),
      };
    case TOGGLE_ITEM:
      return {
        shoppingList: state.shoppingList.map(item =>
          item.id === action.payload
            ? { ...item, purchased: !item.purchased }
            : item
        ),
      };
    default:
      return state;
  }
};