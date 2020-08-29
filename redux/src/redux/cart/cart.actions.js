import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
    // payload is actually an optional property on our action object. And inside of our reducer we're not actually using our payload inside of this respective case
});