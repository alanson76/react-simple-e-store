import React from 'react';
import {createStructuredSelector} from 'reselect';

import {connect} from 'react-redux';
import {toggleCartHidden} from '../../../redux/cart/cartActions';
import {selectCartItemsCount} from '../../../redux/cart/cart.selectors';

import './CartIcon.scss';
import {ReactComponent as ShoppingIcon} from '../../../assets/shopping-bag.svg';

const CartIcon = ({toggleCartHidden, itemCount}) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

//whenever any other state changes even if not related to cartItems,
//performance issue, so needs to caches in.
//library called 'reselect' helps this
// const mapStateToProps = (state) => {
//   return {
//     itemCount: selectCartItemsCount(state)
//   };
// };
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
