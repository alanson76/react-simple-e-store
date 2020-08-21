import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.util';

import './Header.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';

//reducer
import {connect} from 'react-redux';

import CartIcon from '../Cart/CartIcon/CartIcon';
import CartDropDown from '../Cart/CartDropDown/CartDropDown';

const Header = ({currentUser, hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}

      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
