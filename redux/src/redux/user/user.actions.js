// these are literally functions that return objects

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',

    // we gotta make sure that we always align the action creators type with the reducers type expectation in order to create the appropriate effects in our reducer 
    payload: user
    // what is the payload and what does it do??

});