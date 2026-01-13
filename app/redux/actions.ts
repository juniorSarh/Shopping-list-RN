export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';

export interface ShoppingItem {
  id: number;
  name: string;
  quantity: string;
  purchased: boolean;
}

export interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: ShoppingItem;
}

export interface EditItemAction {
  type: typeof EDIT_ITEM;
  payload: ShoppingItem;
}

export interface DeleteItemAction {
  type: typeof DELETE_ITEM;
  payload: number;
}

export interface ToggleItemAction {
  type: typeof TOGGLE_ITEM;
  payload: number;
}

export type ShoppingActionTypes =
  | AddItemAction
  | EditItemAction
  | DeleteItemAction
  | ToggleItemAction;

export const addItem = (item: ShoppingItem): AddItemAction => ({
  type: ADD_ITEM,
  payload: item,
});

export const editItem = (item: ShoppingItem): EditItemAction => ({
  type: EDIT_ITEM,
  payload: item,
});

export const deleteItem = (id: number): DeleteItemAction => ({
  type: DELETE_ITEM,
  payload: id,
});

export const toggleItem = (id: number): ToggleItemAction => ({
  type: TOGGLE_ITEM,
  payload: id,
});