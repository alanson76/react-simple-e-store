import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './CheckoutPage.scss';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/Cart/CheckoutItem/CheckoutItem';

const CheckoutPage = ({cartItems, cartTotal}) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-blok'>
          <span>Product</span>
        </div>
        <div className='header-blok'>
          <span>Description</span>
        </div>
        <div className='header-blok'>
          <span>Quantity</span>
        </div>
        <div className='header-blok'>
          <span>Price</span>
        </div>
        <div className='header-blok'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} />
      ))}

      <div className='total'>
        <span>Total: ${cartTotal}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
