import {createSelector} from 'reselect';

//input selector, output selector

//input selector: function that gets the whole state and returns the slice of it
const selectCart = (state) => state.cart;

//first arg: collections of input selectors
//send arg: callback function that
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedTotalPrice, cartItem) =>
      accumulatedTotalPrice + cartItem.quantity * cartItem.price,
    0
  )
);
