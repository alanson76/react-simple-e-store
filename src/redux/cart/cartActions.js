import * as actions from './cartActionTypes';

export const toggleCartHidden = () => ({
  type: actions.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
  type: actions.ADD_ITEM,
  payload: item
});

export const removeItem = (id) => ({
  type: actions.REMOVE_ITEM,
  payload: id
});
