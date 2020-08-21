import React from 'react';
import {connect} from 'react-redux';

import './CartDropDown.scss';

import CustomButton from '../../common/CustomButton/CustomButton';
import {removeItem} from '../../../redux/cart/cartActions';
import CartItem from '../CartItem/CartItem';

const CartDropDown = ({cartItems, removeItem}) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        <ul>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </ul>
      </div>

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => dispatch(removeItem(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDropDown);
