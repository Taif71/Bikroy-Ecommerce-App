// we wanna break the code up in its individual sections. All of the reducers that we'll write is going to be in this Root-Reducer file
// The userReducer is going to store the state of our currentUser

// import other reducers below:
// to combine reducers we have to import combine reducers

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({ 
     user: userReducer,
     cart: cartReducer
    
});