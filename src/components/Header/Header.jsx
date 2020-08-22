import React from 'react';
import {Link} from 'react-router-dom';

//reducer
import {connect} from 'react-redux';

//selector
import {createStructuredSelector} from 'reselect';

//redux selector
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';

//css and image
import './Header.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';

//google auth
import {auth} from '../../firebase/firebase.util';

//custom components
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

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// });
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
