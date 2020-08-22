import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import './CartDropDown.scss';

import CustomButton from '../../common/CustomButton/CustomButton';
import {toggleCartHidden} from '../../../redux/cart/cartActions';
import CartItem from '../CartItem/CartItem';
import {selectCartItems} from '../../../redux/cart/cart.selectors';

const CartDropDown = ({cartItems, history, dispatch}) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        <ul>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <span className='empty-message'>Your cart is empty</span>
          )}
        </ul>
      </div>

      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     cartItems: selectCartItems(state)
//   };
// };
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

//if there no mapDispatchToProps, connect gives dispatch function as props as default
export default withRouter(connect(mapStateToProps)(CartDropDown));
