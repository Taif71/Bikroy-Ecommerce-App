import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; // connect is a Higher order component that lets us modify our component to have access to things related to redux


import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden  }) => (
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


        {
             hidden ? null : <CartDropdown /> 
        }


    
  </div>
);


// the function that allows us to access the states, with the state being our root-reducer
// mapStateToProps is convention

// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// })

// advanced way to destructure: syntax for nested values. Here, we want user,cart from the State:
const mapStateToProps = ({ user: {currentUser}, cart: {hidden} }) => ({
  // currentUser: state.user.currentUser
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);


// Higher Order Components are just functions that take components as arguments and then return you a new souped up component
// this mapStateToProps and connect() , we will use anywhere where we need properties from our reducers