export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // if the same item exists
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    );
  } else {
    // if the same item does not exist in the cartItems
    return [...cartItems, {...cartItemToAdd, quantity: 1}];
  }
};
