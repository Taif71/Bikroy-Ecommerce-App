import './cart.types';

const INITIAL_STATE = {
    hidden: true
    // we know hidden will be true because we wanna hide our dropdown when they first come to our website
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TOGGLE_CART_HIDDEN':  // we wanna make an action.type for this
        // the reason we use a TOGGLE vs a SET is because:
        // our cart component will be in either true or false state
            return {
                ...state,
                hidden: !state.hidden
                // ! is saying that, whatever this boolean value is, i want you to convert it to opposite
                // no need to pass payload here. We just need to know if it is of this type. 
            }
            default:
                return state;

    }
}

export default cartReducer;