

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';

// we have to add middleware to our store, so that whenever actions get fired or dispatched we can catch them and then display them.

import logger from 'redux-logger'; // what is a logger here?? => Ans: It is a middleware. all it does is it catches the action, it console logs it out for us, then it moves along.    
// this is helpful to us for debugging our redux code


//import rootReducer from './root-reducer';

// this configuration can be viewed  on redux DOC as well
const middlewares = [logger];



// this will spread out all of the methods in this middlewares array into this function call as individual arguments
const store = createStore(rootReducer, applyMiddleware(...middlewares)); // ??? what is this line doing
// const store = createStore(rootReducer, applyMiddleware(logger));

export default store; // we will pass it into our index.js Provider
